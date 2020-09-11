import { ApolloProvider } from "@apollo/client";

import "styles/normalize.css";
import "styles/globals.css";
import { Layout } from "components";
import { useApollo } from "libs/apolloClient";

function MyApp({ Component, pageProps, router }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
