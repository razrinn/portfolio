import { useRouter } from "next/router";
import { Navbar, Footer, Transition } from "components";
import classes from "./styles.module.css";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <Transition location={router.pathname}>
        <main className={classes.container}>{children}</main>
      </Transition>
      <Footer />
    </>
  );
};
export default Layout;
