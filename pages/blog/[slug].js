import { NetworkStatus, useQuery } from "@apollo/client";
import { DateString } from "components";
import { initializeApollo } from "libs/apolloClient";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ALL_POST_SLUG, SINGLE_POST_BY_SLUG } from "queries/blog";
import React from "react";

const SingleBlog = (props) => {
  const { query } = useRouter();
  const { loading, error, data, networkStatus } = useQuery(
    SINGLE_POST_BY_SLUG,
    {
      variables: {
        slug: query.slug,
      },
      notifyOnNetworkStatusChange: true,
    }
  );
  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  // Client-side data fetching
  if (error) return <p>ada error</p>;
  if (loading && !loadingMorePosts) return <div>Loading</div>;
  const postData = data.post;
  return (
    <div className="baseBlog">
      <Head>
        <title>{postData.title} | razrinn</title>
        <meta name="title" content={`${postData.title} | razrinn`} />
        <meta
          name="description"
          content={
            postData.content ||
            "Ray Azrin Karim is a student that loves to learn about technology and software engineering. He did many job and freelance project in web development. Feel free to email him if you need any help!"
          }
        />
      </Head>
      <h1>{postData.title}</h1>
      <p className="blogDate">
        <DateString dateString={postData.date} full />
      </p>
      <div
        className="blogContent"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></div>
      <Link href="/blog">
        <a className="blogLink">Back to blog list</a>
      </Link>
      <style jsx>
        {`
          .baseBlog {
            color: #ffffff;
          }

          .blogDate {
            color: #a1a1a1;
          }

          .blogLink {
            color: #a1a1a1;
            transition: 0.3s;
          }

          .blogContent {
            font-family: "Work sans";
            margin-bottom: 64px;
          }

          .blogLink:hover {
            color: #ffffff;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  // Return a list of possible value for id
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: ALL_POST_SLUG,
  });
  const posts = data.posts.edges;
  const paths = [];
  posts.forEach(({ node: post }, idx) => {
    paths.push({
      params: {
        slug: post.slug,
      },
    });
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: SINGLE_POST_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
