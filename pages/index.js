import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ray Azrin Karim | razrinn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div>
          <h1 className="title">Ray Azrin Karim</h1>
          <h2 className="subtitle">Software Engineer</h2>
          <div className="socialContainer">
            <a
              href="mailto:rayazrin19@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icon/mail.svg" alt="mail" />
            </a>
            <a
              href="https://twitter.com/razrinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icon/twitter.svg" alt="twitter" />
            </a>
            <a
              href="https://gitlab.com/razrinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icon/gitlab.svg" alt="gitlab" />
            </a>
            <a
              href="https://github.com/razrinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icon/github.svg" alt="github" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: calc(100vh - 100px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-weight: bold;
          font-size: 72px;
          color: #ffffff;
          text-align: center;
          margin: 0;
        }

        .subtitle {
          font-size: 36px;
          color: #a2a2a2;
          text-align: center;
        }

        .socialContainer {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .socialContainer a:not(:last-child) {
          margin-right: 24px;
        }

        .socialContainer a:hover {
          opacity: 0.5;
          transition: 0.3s;
        }

        @media only screen and (max-width: 768px) {
          .title {
            font-size: 48px;
          }

          .subtitle {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
