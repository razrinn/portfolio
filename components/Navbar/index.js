import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

import classes from "./styles.module.css";
import { useState, useRef, useEffect } from "react";
import { route } from "next/dist/next-server/server/router";

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
    <header className={classes.baseHeader}>
      <div className={classes.fixedTop}>
        <nav className={classes.baseNav}>
          <div className={classes.markerParent}>
            <div
              className={classes.marker}
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
                    [classes.navLink]: true,
                    [classes.active]: routeStartsWith(link.to),
                  })}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
