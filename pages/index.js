import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ray Azrin Karim | razrinn</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Ray Azrin Karim | razrinn" />
        <meta
          name="description"
          content="Ray Azrin Karim is a student that loves to learn about technology and software engineering. He did many job and freelance project in web development. Feel free to email him if you need any help!"
        />
      </Head>
      <div className="container">
        <div>
          <h1 className="title">Ray Azrin Karim</h1>
          <h2 className="subtitle">print("Hello, World!")</h2>
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
          position: relative;
          font-weight: bold;
          font-size: 72px;
          color: #ffffff;
          text-align: center;
          margin: 0;
        }

        .title:before,
        .title:after {
          position: absolute;
          content: "Ray Azrin Karim";
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: #1c1c1c;
          color: #fff;
          overflow: hidden;
        }

        .title:before {
          left: 3px;
          text-shadow: -2px 0 red;
          animation: glitch-1 2s 0s linear reverse infinite;
        }

        .title:after {
          left: -3px;
          text-shadow: -2px 0 blue;
          animation: glitch-2 2s 0s linear reverse infinite;
        }
        @keyframes glitch-1 {
          0% {
            clip: rect(132px, auto, 101px, auto);
          }
          5% {
            clip: rect(17px, auto, 94px, auto);
          }
          10% {
            clip: rect(40px, auto, 66px, auto);
          }
          15% {
            clip: rect(87px, auto, 82px, auto);
          }
          20% {
            clip: rect(137px, auto, 61px, auto);
          }
          25% {
            clip: rect(34px, auto, 14px, auto);
          }
          30% {
            clip: rect(133px, auto, 74px, auto);
          }
          35% {
            clip: rect(76px, auto, 107px, auto);
          }
          40% {
            clip: rect(59px, auto, 130px, auto);
          }
          45% {
            clip: rect(29px, auto, 84px, auto);
          }
          50% {
            clip: rect(22px, auto, 67px, auto);
          }
          55% {
            clip: rect(67px, auto, 62px, auto);
          }
          60% {
            clip: rect(10px, auto, 105px, auto);
          }
          65% {
            clip: rect(78px, auto, 115px, auto);
          }
          70% {
            clip: rect(105px, auto, 13px, auto);
          }
          75% {
            clip: rect(15px, auto, 75px, auto);
          }
          80% {
            clip: rect(66px, auto, 39px, auto);
          }
          85% {
            clip: rect(133px, auto, 73px, auto);
          }
          90% {
            clip: rect(36px, auto, 128px, auto);
          }
          95% {
            clip: rect(68px, auto, 103px, auto);
          }
          100% {
            clip: rect(14px, auto, 100px, auto);
          }
        }
        @keyframes glitch-2 {
          0% {
            clip: rect(129px, auto, 36px, auto);
          }
          5% {
            clip: rect(36px, auto, 4px, auto);
          }
          10% {
            clip: rect(85px, auto, 66px, auto);
          }
          15% {
            clip: rect(91px, auto, 91px, auto);
          }
          20% {
            clip: rect(148px, auto, 138px, auto);
          }
          25% {
            clip: rect(38px, auto, 122px, auto);
          }
          30% {
            clip: rect(69px, auto, 54px, auto);
          }
          35% {
            clip: rect(98px, auto, 71px, auto);
          }
          40% {
            clip: rect(146px, auto, 34px, auto);
          }
          45% {
            clip: rect(134px, auto, 43px, auto);
          }
          50% {
            clip: rect(102px, auto, 80px, auto);
          }
          55% {
            clip: rect(119px, auto, 44px, auto);
          }
          60% {
            clip: rect(106px, auto, 99px, auto);
          }
          65% {
            clip: rect(141px, auto, 74px, auto);
          }
          70% {
            clip: rect(20px, auto, 78px, auto);
          }
          75% {
            clip: rect(133px, auto, 79px, auto);
          }
          80% {
            clip: rect(78px, auto, 52px, auto);
          }
          85% {
            clip: rect(35px, auto, 39px, auto);
          }
          90% {
            clip: rect(67px, auto, 70px, auto);
          }
          95% {
            clip: rect(71px, auto, 103px, auto);
          }
          100% {
            clip: rect(83px, auto, 40px, auto);
          }
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
