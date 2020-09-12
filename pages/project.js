import Head from "next/head";
import { initializeApollo } from "libs/apolloClient";
import { ProjectList } from "components";
import { ALL_PROJECT_QUERY } from "queries/project";

export default function ProjectPage(props) {
  return (
    <div>
      <Head>
        <title>Project | razrinn</title>
      </Head>
      <div>
        <ProjectList />
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
