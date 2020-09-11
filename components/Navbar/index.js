import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const currentRef = useRef();
  const [offset, setOffset] = useState({
    left: 0,
    width: 0,
  });
  const NAV_LINK = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/blog", name: "Blog" },
    { to: "/project", name: "Project" },
  ];
  useEffect(() => {
    if (currentRef.current) {
      setOffset({
        left: currentRef.current.offsetLeft,
        width: currentRef.current.offsetWidth,
      });
    }
  }, []);
  const routeStartsWith = (path) => {
    if (path == "/") {
      return router.pathname == path;
    } else {
      return router.pathname.startsWith(path);
    }
  };
  return (
    <header className="baseHeader">
      <div className="fixedTop">
        <nav className="baseNav">
          <div className="markerParent">
            <div
              className="marker"
              style={{ left: offset.left, width: offset.width }}
            ></div>
            {NAV_LINK.map((link, idx) => (
              <Link key={idx} href={link.to}>
                <a
                  onClick={(e) =>
                    setOffset({
                      left: e.currentTarget.offsetLeft,
                      width: e.currentTarget.offsetWidth,
                    })
                  }
                  ref={routeStartsWith(link.to) ? currentRef : null}
                  className={cn({
                    navLink: true,
                    active: routeStartsWith(link.to),
                  })}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <style jsx>{`
        .baseHeader {
          height: 50px;
        }
        .fixedTop {
          background-color: #1c1c1c;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1;
          padding-bottom: 24px;
        }

        .baseNav {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .markerParent {
          padding-top: 24px;
          position: relative;
        }

        .marker {
          position: absolute;
          height: 4px;
          width: 100%;
          background-color: #ffffff;
          top: 0px;
          left: 0;
          transition: 0.3s ease-out;
        }

        .navLink {
          color: #a1a1a1;
          transition: 0.3s;
        }

        .navLink:hover {
          color: #ffffff;
          font-weight: bold;
        }

        .navLink:not(:last-child) {
          margin-right: 32px;
        }

        .active {
          color: #ffffff;
          font-weight: bold;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
