import Head from "next/head";
import Link from "next/link";
import { BlogList } from "components";
import { ALL_POST_QUERY } from "queries/blog";
import { initializeApollo } from "libs/apolloClient";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | razrinn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogList />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POST_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
