import { useRouter } from "next/router";
import { Navbar, Footer, Transition } from "components";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <Transition location={router.pathname}>
        <main className="container">{children}</main>
      </Transition>
      <Footer />
      <style jsx>{`
        .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
        }

        @media (min-width: 576px) {
          .container {
            max-width: 540px;
          }
        }

        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }
        }

        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }

        @media (min-width: 1200px) {
          .container {
            max-width: 800px;
          }
        }
      `}</style>
    </>
  );
};
export default Layout;
