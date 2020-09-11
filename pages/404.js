import Head from "next/head";
import Link from "next/link";

export default function Project() {
  return (
    <div>
      <Head>
        <title>404 Page not found | razrinn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="notFoundContainer">
        <h1>Nothing to see here</h1>
        <p>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </p>
      </div>
      <style jsx>{`
        .notFoundContainer {
          color: #ffffff;
        }

        .notFoundContainer > * {
          text-align: center;
        }

        .notFoundContainer a {
          color: #a1a1a1;
          transition: 0.3s;
        }

        .notFoundContainer a:hover {
          color: #ffffff;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
