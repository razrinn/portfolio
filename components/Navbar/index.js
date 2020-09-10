import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

import classes from "./styles.module.css";
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
  return (
    <div className={classes.baseHeader}>
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
                ref={router.pathname == link.to ? currentRef : null}
                className={cn({
                  [classes.navLink]: true,
                  [classes.active]: router.pathname == link.to,
                })}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
