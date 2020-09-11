import Head from "next/head";
import { initializeApollo } from "libs/apolloClient";
import { gql, useQuery, NetworkStatus } from "@apollo/client";

export const ALL_PROJECT_QUERY = gql`
  {
    projects {
      edges {
        node {
          title
          projectDetail {
            description
            image {
              altText
              sourceUrl
            }
            isOngoing
            isPrivate
            responsibilites
            startTime
            endTime
            url
          }
        }
      }
    }
  }
`;
export default function Project(props) {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_PROJECT_QUERY,
    {
      notifyOnNetworkStatusChange: true,
    }
  );
  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  if (error) return <p>ada error</p>;
  if (loading && !loadingMorePosts) return <div>Loading</div>;
  const projects = data.projects.edges;
  return (
    <div>
      <Head>
        <title>Project | razrinn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ minHeight: "150vh" }}>
        {projects.map(({ node: project }, idx) => (
          <div key={idx}>
            <h1 style={{ color: "#ffffff" }}>{project.title}</h1>
            <img
              src={project.projectDetail.image.sourceUrl}
              alt={project.projectDetail.image.altText}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_PROJECT_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
