/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../img/VitalFooter.png";
import facebook from "../img/social-icons/facebook.png";
import linkedin from "../img/social-icons/linkedin.png";
import twitter from "../img/social-icons/twitter.png";
const Footer = () => {
  const location = useLocation();
  const Window = () => {
    window.scroll(0, 0);
    setToggle(false);
  };
  useEffect(() => {
    Window();
  }, [location]);
  const { pathname } = location;

  const [, setToggle] = useState(false);
  // const setState1 = () => {
  //   if (toggle === true) {
  //     setToggle(false);
  //   } else {
  //     setToggle(true);
  //   }
  // };
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
      <footer className="footer-section">
        <div className="container set_width">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="/">
                      <img
                        width="50%"
                        height='100%'
                        src={Logo}
                        alt="VitalCap Fund"
                        style={{ marginTop: "16px" }}
                      />
                      
                    </Link>
                  </div>
                  <div className="footer-text">
                    {/* <p style={{fontSize: "16px", color: "#fff"}}>
                      Proudly Funding{" "}
                      <img
                        src={America}
                        alt="..."
                        className=""
                        style={{ width: "5%" }}
                      />{" "}
                      Businesses Since 2014
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Get in Touch</h3>
                  </div>
                  <ul className="row">
                    <li className="col-md-12" style={{ color: "#9097b1" }}>
                      {/* <Link to="#"> */}
                      <div className="d-flex align-items-center">
                        <div>
                          <FaMapMarkerAlt
                            className="footer-icon"
                            style={{ color: "#7e7e7e" }}
                          />
                        </div>
                        <div>
                          VitalCap Fund, 48 Wall Street, 10th fl. <br />
                          <span> New York, NY, 10005 </span>
                        </div>
                      </div>
                      {/* </Link> */}
                    </li>
                    <li className="col-md-12">
                      <br />
                    </li>
                    <li className="col-md-12" style={{ color: "#9097b1" }}>
                      {/* <Link to="#"> */}
                      <BsTelephonePlus
                        style={{ color: "#7e7e7e" }}
                        className="footer-icon"
                      />
                      212.994.6996
                      {/* </Link> */}
                    </li>
                    <li className="col-md-12">
                      <br />
                    </li>
                    <li className="col-md-12">
                      <a
                        style={{ textTransform: "none" }}
                        href="mailto:info@vitalcapfund.com"
                      >
                        <AiOutlineMail className="footer-icon" />
                        info@vitalcapfund.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Links</h3>
                  </div>
                  <ul className="row" style={{ marginTop: "-8px" }}>
                    <li className="col-md-12">
                      {pathname === "/company" ? (
                        <a
                          class="nav-link"
                          id={pathname === "/company" ? "active" : ""}
                          onClick={scroll}
                          style={{ paddingLeft: "0px", color: "#9097b1" }}
                        >
                          Company
                        </a>
                      ) : (
                        <Link
                          class="nav-link"
                          to="/company "
                          style={{ paddingLeft: "0px", color: "#9097b1" }}
                        >
                          Company
                        </Link>
                      )}
                    </li>
                    <div className="col-md-12"></div>
                    <li className="col-md-12 mt-2">
                      <Link to="/iso-relation">ISO Relations</Link>
                    </li>
                    <div className="col-md-12"></div>
                    <li className="col-md-12 mt-3">
                      <Link to="/investors">Investors</Link>
                    </li>
                    <div className="col-md-12"></div>
                    <li className="col-md-12 mt-3">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Legal</h3>
                  </div>
                  <ul className="row">
                    <li className="col-md-12">
                      <Link to="/privacypolicy">Privacy Policy</Link>
                    </li>
                    <div className="col-md-12"></div>
                    <li className="col-md-12" style={{ marginTop: "13px" }}>
                      <Link to="/termscondition">Terms & Condtions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text" style={{ float: "left" }}>
                  <p style={{ color: "#9097b1" }}>
                    Copyright © &nbsp;2023 VitalCap Fund.
                    All&nbsp;rights&nbsp;resereved.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-social-icon" style={{ float: "right" }}>
                  <a
                    href="https://www.facebook.com/vitalcapfund/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <BsFacebook className="fs-3" style={{color: "#1877f2"}} /> */}
                    <img style={{ width: "40px" }} src={facebook} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vitalcap-fund/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <BsLinkedin className="fs-3" style={{color: "#0077b5"}}  /> */}
                    <img style={{ width: "40px" }} src={linkedin} alt="" />
                  </a>
                  <a
                    href="https://twitter.com/vitalcapfund?lang=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <AiFillTwitterCircle className="fs-3" style={{color: "#55acee"}} /> */}
                    <img style={{ width: "40px" }} src={twitter} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
