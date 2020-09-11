import "styles/normalize.css";
import "styles/globals.css";
import { Layout } from "components";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;
