/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../img/VitalTop.png";
import { GoThreeBars } from "react-icons/go";
import { useEffect } from "react";
const Header = () => {
  const location = useLocation();
  const Window = () => {
    window.scroll(0, 0);
    setToggle(false);
  };
  useEffect(() => {
    Window();
  }, [location]);
  const { pathname } = location;

  const [toggle, setToggle] = useState(false);
  const setState1 = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  const scroll = () => {
    const section = document.querySelector("#same");
    console.log(section);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToGetStarted = () => {
    const section = document.querySelector("#features");
    console.log(section);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    console.log(pathname);
    if (pathname === "/company") {
      scroll();
    } else if (pathname === "/getstarted") {
      scrollToGetStarted();
    }
  }, [pathname]);
  return (
    <>
      <nav
        class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky"
        id="navbar"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
      >
        <div class="container">
          <Link class="navbar-brand text-uppercase" to="/">
            <img src={Logo} alt="Vital Cap Funds" width="40%" />
          </Link>

          <button class="navbar-toggler" onClick={() => setState1()}>
            <GoThreeBars />
          </button>

          <div
            class="navbar-collapse"
            id={toggle === false ? "collapse" : null}
          >
            <ul class="navbar-nav mx-auto" id="navbar-navlist">
              <li class="nav-item">
                <Link
                  class="nav-link"
                  id={pathname === "/iso-relation" ? "active" : ""}
                  to="/iso-relation"
                >
                  ISO Relations
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/investors"
                  id={pathname === "/investors" ? "active" : ""}
                >
                  Investors
                </Link>
              </li>
              <li class="nav-item">
                {pathname === "/company" ? (
                  <a
                    class="nav-link"
                    id={pathname === "/company" ? "active" : ""}
                    onClick={scroll}
                  >
                    Company
                  </a>
                ) : (
                  <Link class="nav-link" to="/company ">
                    Company
                  </Link>
                )}
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/contact"
                  id={pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://vitalcapfund.lendtech.io/partner/login"
                >
                  Login
                </a>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <div class="me-5 flex-shrink-0">
                <li class="nav-item" style={{ listStyle: "none" }}>
                  {pathname === "/getstarted" ? (
                    <a
                      //  href="#features"
                      class="btn btn-primary nav-btn py-2"
                      //  id={pathname === "/company" ? "active" : ""}
                      onClick={scrollToGetStarted}
                      style={{ fontWeight: 800 }}
                    >
                      Get Started
                    </a>
                  ) : (
                    <Link class="btn btn-primary nav-btn py-2" to="/getstarted">
                      Get Started
                    </Link>
                  )}
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
