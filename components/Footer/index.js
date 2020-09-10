import classes from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={classes.baseFooter}>
      <p className={classes.footerText}>{"Made with <3 · 2020"}</p>
    </footer>
  );
};

export default Footer;
