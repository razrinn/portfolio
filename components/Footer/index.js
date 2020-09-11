const Footer = () => {
  return (
    <footer className="baseFooter">
      <p className="footerText">{"Made with <3 · 2020"}</p>
      <style jsx>{`
        .baseFooter {
          background-color: #1c1c1c;
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 50px;
        }

        .footerText {
          color: white;
          text-align: center;
          padding-bottom: 20px;
          font-weight: bold;
          font-size: 12px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
