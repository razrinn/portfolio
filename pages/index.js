import Head from "next/head";
import classes from "styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ray Azrin Karim | razrinn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>Ray Azrin Karim</h1>
          <h2 className={classes.subtitle}>Software Engineer</h2>
          <div className={classes.socialContainer}>
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
    </div>
  );
}
