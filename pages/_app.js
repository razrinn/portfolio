import "styles/normalize.css";
import "styles/globals.css";
import { Navbar, Footer } from "components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
