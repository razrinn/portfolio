import Head from "next/head";
import { initializeApollo } from "libs/apolloClient";
import { gql, useQuery, NetworkStatus } from "@apollo/client";

import { Project } from "components";

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
            responsibilities
            startTime
            endTime
            url
            stack
          }
        }
      }
    }
  }
`;
export default function ProjectPage(props) {
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
          <Project
            key={idx}
            title={project.title}
            image={project.projectDetail.image}
            startTime={project.projectDetail.startTime}
            endTime={project.projectDetail.endTime}
            description={project.projectDetail.description}
            responsibility={project.projectDetail.responsibilities}
            stack={project.projectDetail.stack}
            url={project.projectDetail.url}
          />
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
