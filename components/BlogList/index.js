import { NetworkStatus, useQuery } from "@apollo/client";
import { DateString, Project } from "components";
import Link from "next/link";
import { ALL_POST_QUERY } from "queries/blog";

const BlogList = () => {
  const { loading, error, data, networkStatus } = useQuery(ALL_POST_QUERY, {
    notifyOnNetworkStatusChange: true,
  });
  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  // Client-side data fetching
  if (error) return <p>ada error</p>;
  if (loading && !loadingMorePosts) return <div>Loading</div>;
  const posts = data.posts.edges;
  return (
    <div className="baseContainer">
      {posts.length == 0 && <p className="blogEmpty">No post yet</p>}
      {posts.map(({ node: blog }, idx) => (
        <div key={idx} className="baseSingleBlog">
          <Link href={`/blog/${blog.slug}`}>
            <a>
              <h2 className="blogTitle">{blog.title}</h2>
            </a>
          </Link>
          <p className="blogDate">
            <DateString dateString={blog.date} full />
          </p>
        </div>
      ))}
      <style jsx>{`
        .baseContainer {
          color: #ffffff;
        }

        .baseSingleBlog:not(:last-child) {
          margin-bottom: 36px;
        }

        .blogEmpy {
          text-align: center;
        }

        .blogDate {
          color: #a1a1a1;
        }

        .blogTitle {
          margin-block-end: 0;
        }
      `}</style>
    </div>
  );
};

export default BlogList;
