import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About | razrinn</title>
      </Head>
      <div className="aboutContainer">
        <div>
          <p>
            Hello, my name is Ray Azrin Karim. I'm an Information System student
            from Universitas Indonesia. I really like to explore things related
            to front-end web development.
          </p>
          <p>
            I have a couple of work experience in the field and also has a
            number of side projects to showcase my skills. Feel free to contact
            me if you or your team is interested to work with me. Most of the
            time I always open for such deals. :)
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .aboutContainer {
            min-height: calc(100vh - 120px);
            display: flex;
            align-items: center;
          }

          p {
            color: #ffffff;
          }
        `}
      </style>
    </div>
  );
}
