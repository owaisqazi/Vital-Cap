import React from "react";
import { Link } from "react-router-dom";
import Banner from "../img/Banner1.png";
import F1 from "../img/icon1.png";
import F2 from "../img/icon2.png";
import F3 from "../img/icon3.png";
import F4 from "../img/icon4.png";
import Step from "../img/img/home2.svg";
import Step2 from "../img/img/03.png";
// import { BsArrowDown } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Tick from "../img/tick.PNG";
import Tick2 from "../img/tick2.PNG";
import S1 from "../img/img/1.png";
import S2 from "../img/img/2.png";
import S3 from "../img/img/3.png";
import Testimonials from "../Component/Testimonials";
import Carousel from "../Component/Carousel";
import C1 from "../img/carousel/1.png";
import C2 from "../img/carousel/2.png";
import C4 from "../img/carousel/4.png";
import C5 from "../img/carousel/5.png";
import C6 from "../img/carousel/6.png";
import C7 from "../img/carousel/7.png";
import C8 from "../img/carousel/9.png";
import C9 from "../img/carousel/10.png";
import C10 from "../img/carousel/11.png";
import C11 from "../img/carousel/12.png";
// import C8 from "../img/carousel/6.png";
import arrow from "../img/arrow.svg";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
// import { useRef } from "react";
const Home = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 3000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };

  return (
    <>
      {/* section 1 */}
      <Helmet>
        <title>VitalCap | Flexible Same-day Small Business Funding</title>
        <meta
          name="description"
          content="Provider of working capital for small to medium size businesses, with an outstanding focus on customer service ans support."
        />
      
      </Helmet>
      <section
        className="section home"
        id="home"
        style={{ backgroundColor: "#162D5A" }}
      >
        <div className="container set_width">
          <div className="row align-items-center mt-5 mt-lg-0">
            <div className="col-lg-6">
              <div className="home-heading">
                <h1
                  className="lh-sm text-white font-manrope-bold "
                  style={{ fontSize: "40px" }}
                >
                  Small business funding <br /> when most Vital.
                </h1>
              </div>
              <div>
                <br />
                <br />
              </div>
              <div className="home-btn d-grid d-sm-block gap-3 mt-5">
                <a
                  href="#features"
                  className="btn btn-outline-primary rounded-pill me-sm-3"
                  style={{ border: "none", padding: "13px 30px" }}
                  to="/"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ms-md-4">
                <img className="home-img w-100 mt-2" src={Banner} alt="img" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="client-list">
                <div className="row justify-content-around">
                  <div className="col-md-12 col-12">
                    <br />
                    <br />
                    {/* <div className="slider">
                      <div className="slide-track">
                        <div className="slide">
                          <img className="w-50" src={C1} alt="slide" />
                        </div>
                        <div className="slide">
                          <img className="w-50" src={C2} alt="slide" />
                        </div>
                        <div className="slide">
                          <img style={{ width: "70%" }} src={C7} alt="slide" />
                        </div>
                        <div className="slide">
                          <img className="w-50" src={C1} alt="slide" />
                        </div>
                        <div className="slide">
                          <img className="w-50" src={C2} alt="slide" />
                        </div>
                        <div className="slide">
                          <img style={{ width: "70%" }} src={C7} alt="slide" />
                        </div>
                        <div className="slide">
                          <img className="w-50" src={C1} alt="slide" />
                        </div>
                      </div>
                    </div> */}

                    <br />

                    <div className="slider home_slide">
                      <div className="slide-track">
                        <div className="slide">
                          <img
                            src={C1}
                            className="slideimg"
                            alt=""
                            width={"60%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C2}
                            className="slideimg"
                            alt=""
                            width={"60%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C4}
                            style={{ marginTop: "-4px" }}
                            className="slideimg"
                            alt=""
                            width={"67%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C5}
                            className="slideimg"
                            alt=""
                            width={"62%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C6}
                            style={{ marginTop: "-5px" }}
                            className="slideimg"
                            alt=""
                            width={"60%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C7}
                            className="slideimg"
                            alt=""
                            width={"70%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C8}
                            className="slideimg"
                            alt=""
                            width={"82%"}
                            style={{ marginTop: "-10px" }}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C9}
                            className="slideimg"
                            alt=""
                            width={"82%"}
                            style={{ marginTop: "-3px" }}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C10}
                            className="slideimg"
                            alt=""
                            width={"69%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C11}
                            className="slideimg"
                            alt=""
                            width={"69%"}
                            style={{ marginTop: "-2px" }}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C1}
                            className="slideimg"
                            alt=""
                            width={"60%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C2}
                            className="slideimg"
                            alt=""
                            width={"60%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C4}
                            style={{ marginTop: "-4px" }}
                            className="slideimg"
                            alt=""
                            width={"67%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C5}
                            className="slideimg"
                            alt=""
                            width={"62%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C8}
                            className="slideimg"
                            alt=""
                            width={"82%"}
                            style={{ marginTop: "-10px" }}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C9}
                            className="slideimg"
                            alt=""
                            width={"82%"}
                            style={{ marginTop: "-3px" }}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C10}
                            className="slideimg"
                            alt=""
                            width={"69%"}
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={C11}
                            className="slideimg"
                            alt=""
                            width={"69%"}
                            style={{ marginTop: "-2px" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* 
<Slider {...settings}>
          <div>
           <img src={C1} />
          </div>
          <div>
          <img src={C1} />
          </div>
          <div>
          <img src={C1} />
          </div>
          <div>
          <img src={C1} />
          </div>
          <div>
          <img src={C1} />
          </div>
          <div>
          <img src={C1} />
          </div>
        </Slider> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 1 */}

      {/* section 2 */}
      <section className="section2 features">
        <div className="container set_width py-3">
          <div className="row justify-content-center" id="features">
            <div className="col-lg-7">
              <div className="text-center mb-5">
                <h3 className="heading top_bot_mar">
                  Flexible, same-day funding, <br /> made for ISOs that know
                  merchants.
                </h3>
              </div>
            </div>
          </div>
          <div className="row mar_bot">
            <div className="col-lg-3 col-md-6">
              <div className="card features-card card-hover">
                <div className="card-body">
                  <div className="mb-4">
                    <img src={F1} alt="Features" className="w-75" />
                  </div>
                  <h5 className="color1" style={{ fontWeight: "800" }}>
                    Innovative Portal
                  </h5>
                  <p className="color1 card_font" style={{ fontSize: "14px" }}>
                    Manage deals, review offers, order <br /> contracts, get
                    notified on funded <br /> deals, track performance and{" "}
                    <br />
                    syndication — all in one place
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card features-card card-hover">
                <div className="card-body">
                  <div className="mb-4">
                    <img src={F2} alt="Features" className="w-75" />
                  </div>
                  <h5 className="color1" style={{ fontWeight: "800" }}>
                    Full Underwriting
                  </h5>
                  <p className="color1 card_font" style={{ fontSize: "14px" }}>
                    Receive solid offers with <br /> the ability to revise every
                    detail <br />
                    yourself or with a dedicated <br />
                    underwriter or an ISO manager
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card features-card card-hover">
                <div className="card-body">
                  <div className="mb-4">
                    <img src={F3} alt="Features" className="w-75" />
                  </div>
                  <h5 className="color1" style={{ fontWeight: "800" }}>
                    Swift Decisions
                  </h5>
                  <p className="color1 card_font" style={{ fontSize: "14px" }}>
                    Get offers as quickly as 30 min, <br /> revisions within
                    minutes, and <br />
                    overall, solid, same-day <br /> funding process
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card features-card card-hover">
                <div className="card-body">
                  <div className="mb-4">
                    <img src={F4} alt="Features" className="w-75" />
                  </div>
                  <h5 className="color1" style={{ fontWeight: "800" }}>
                    Real People
                  </h5>
                  <p className="color1 card_font" style={{ fontSize: "14px" }}>
                    Our team of knowledgable <br /> processors, ISO reps, and{" "}
                    <br />
                    underwriters are ready to answer <br />
                    any question at any time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="home-shape-arrow d-flex justify-content-center top_bot_mar">
              <a href="#down" className="mouse-down">
                {/* <BsArrowDown className="color2 font-25 " /> */}
                <img
                  style={{ width: "22px", marginTop: "25px" }}
                  src={arrow}
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}

      {/* section 3 */}
      <section
        className="section home"
        id="home"
        style={{
          backgroundColor: "#001337",
          paddingTop: "130px",
          paddingBottom: "120px",
        }}
      >
        <div className="container set_width" id="down">
          <div className="row align-items-center mt-5 mt-lg-0">
            <div className="col-lg-6">
              <div className="home-heading">
                <p
                  className="color2 bold"
                  id="arrow"
                  style={{ fontSize: "18px" }}
                >
                  ISO
                </p>
                <h2 className="lh-sm text-white bold">
                  Sell more deals and earn higher <br />
                  commissions
                </h2>
                <p className="text-white fs-5">
                  100% payouts on renewals, highest early payoff discounts,{" "}
                  <br />
                  and minimum industry restrictions.
                </p>
              </div>

              <div className="mt-5">
                <div className="row align-items-center mt-1">
                  <div className="col-md-1">
                    <img style={{ width: "50px" }} src={Tick} alt="tick" />
                    {/* <BsCheckSquareFill className="check_icon" /> */}
                  </div>
                  <div className="col-md-8 pad">
                    <span
                      className="text-white"
                      style={{ fontWeight: 600, fontSize: "19px" }}
                    >
                      Better Rates
                    </span>
                    <br />
                    <span
                      className="color3 font-10"
                      style={{ fontWeight: 600 }}
                    >
                      Lower buy-rates starting at 1.10
                    </span>
                  </div>
                </div>
                <div className="row align-items-center mt-1">
                  <br />
                </div>
                <div className="row align-items-center mt-1">
                  <div className="col-md-1">
                    <img style={{ width: "50px" }} src={Tick} alt="tick" />
                    {/* <BsCheckSquareFill className="check_icon" /> */}
                  </div>
                  <div className="col-md-8 pad">
                    <span
                      className="text-white "
                      style={{ fontWeight: 600, fontSize: "19px" }}
                    >
                      Longer terms
                    </span>
                    <br />
                    <span
                      className="color3 font-10"
                      style={{ fontWeight: 600 }}
                    >
                      Up to 12 months on eligible deals, daily, weekly, or
                      variable ACH
                    </span>
                  </div>
                </div>
                <div className="row align-items-center mt-1">
                  <br />
                </div>
                <div className="row align-items-center mt-1">
                  <div className="col-md-1">
                    <img style={{ width: "50px" }} src={Tick} alt="tick" />
                    {/* <BsCheckSquareFill className="check_icon" /> */}
                  </div>
                  <div className="col-md-8 pad">
                    <span
                      className="text-white "
                      style={{ fontWeight: 600, fontSize: "19px" }}
                    >
                      Aggressive commissions
                    </span>
                    <br />
                    <span
                      className="color3 font-10"
                      style={{ fontWeight: 600 }}
                    >
                      Top upsell on all deals, even on renewal
                    </span>
                  </div>
                </div>
                <div className="row align-items-center mt-1">
                  <br />
                </div>
                <div className="row align-items-center mt-1">
                  <div className="col-md-1">
                    <img style={{ width: "50px" }} src={Tick} alt="tick" />
                    {/* <BsCheckSquareFill className="check_icon" /> */}
                  </div>
                  <div className="col-md-8 pad">
                    <span
                      className="text-white "
                      style={{ fontWeight: 600, fontSize: "19px" }}
                    >
                      More perks
                    </span>
                    <br />
                    <span
                      className="color3 font-10"
                      style={{ fontWeight: 600 }}
                    >
                      Monthly bonuses, syndication, and white-label
                      opportunities for qualified ISOs
                    </span>
                  </div>
                </div>
                <div className="row align-items-center mt-1">
                  <br />
                </div>
              </div>
              <div className="row">
                <br />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ms-md-4">
                <img
                  style={{ marginBottom: "80px" }}
                  className="home-img w-100 "
                  src={Step}
                  alt="../"
                />
              <div className="home-btn d-grid d-sm-block gap-3 ">
                <Link
                  className="btn button-theme rounded-pill me-sm-3 mb-4 bolder py-3"
                  style={{ fontWeight: 700 }}
                  to="/iso-relation"
                >
                  Learn More &nbsp;
                  <AiOutlineArrowRight />
                </Link>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}

      {/* section 4 */}

      <section className="section home" id="home">
        {/* <div
          className="d-flex justify-content-center"
          style={{ marginBottom: "160px", marginTop: "80px" }}
        >
          <a href="#footer" className="mouse-down">
            <img
              style={{ width: "22px", marginTop: "25px" }}
              src={arrow}
              alt=""
            />
          </a>
        </div> */}

        <div
          className="container set_width HOMEBG"
          style={{ marginBottom: "190px", marginTop: "60px" }}
        >
          <div className="row align-items-center mt-5 mt-lg-0">
            <div className="col-lg-6">
              <div className="">
                <img
                  className="home-img w-100 Homimage2"
                  style={{ marginBottom: "170px" }}
                  src={Step2}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-heading">
                <p
                  className="bold"
                  style={{ color: "#3CCAFE", fontSize: "18px" }}
                >
                  INVESTORS
                </p>
                <h2 className="lh-sm color1 bold mt-0">
                  Flexible. Transparent. Lucrative
                </h2>
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "20px" }}
                >
                  Syndicating in Merchant Cash Advance has never been <br /> so
                  simple.
                </p>
              </div>
              <div className="row ROWDIV2">
                <div className="col-md-5 mt-3">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img style={{ width: "48px" }} src={Tick2} alt="Tick" />
                    </div>
                    <div className="col-md-10">
                      <span
                        className="color1 font-14 ps-md-4 p-0"
                        style={{ fontWeight: 700 }}
                      >
                        3-12 months term
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img style={{ width: "48px" }} src={Tick2} alt="Tick" />
                    </div>
                    <div className="col-md-10">
                      <span
                        className="color1 font-14 ps-md-4 p-0"
                        style={{ fontWeight: 700 }}
                      >
                        24/7 portal access
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mt-3">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img style={{ width: "48px" }} src={Tick2} alt="Tick" />
                    </div>
                    <div className="col-md-10">
                      <span
                        className="color1 font-14 ps-md-4 p-0"
                        style={{ fontWeight: 700 }}
                      >
                        Instant withdrawals
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img style={{ width: "48px" }} src={Tick2} alt="Tick" />
                    </div>
                    <div className="col-md-10">
                      <span
                        className="color1 font-14 ps-md-4 p-0"
                        style={{ fontWeight: 700 }}
                      >
                        Lowest management fees
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <br />
              </div>
              <div
                className="home-btn d-grid d-sm-block BTN40s"
                style={{ marginTop: "100px" }}
              >
                <Link
                  className="btn button-theme rounded-pill me-sm-3 bold py-3"
                  style={{ fontWeight: 700 }}
                  to="/investors"
                >
                  Learn More &nbsp;
                  <AiOutlineArrowRight />
                </Link>
              </div>
              <div className="row">
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 */}

      {/* section 5 */}
      <section
        className="section2 features features-bg"
        id="features"
        style={{ paddingBottom: "160px" }}
      >
        <div className="container set_width">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="text-center mb-5">
                <p
                  style={{ color: "#3CCAFE", fontSize: "18px" }}
                  className="bold"
                >
                  MERCHANTS
                </p>
                <h3 className="heading bold color1">
                  Fast. Accurate. Tailored.
                </h3>
                <p className="color1 bold" style={{ fontSize: "1.2rem" }}>
                  Minimum Requirements
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-12 mt-3 mt-md-0">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "40px",
                  margin: "0px 28px",
                }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <img src={S1} alt="Features" style={{ width: "120px" }} />
                  </div>
                  <h5
                    className="color1 fs-5 text-center mt-5"
                    style={{ fontWeight: 900 }}
                  >
                    12 Months in Business
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mt-3 mt-md-0">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "40px",
                  margin: "0px 28px",
                }}
              >
                <div className="card-body ">
                  <div className="d-flex justify-content-center">
                    <img src={S2} alt="Features" style={{ width: "150px" }} />
                  </div>
                  <h5
                    className="color1 fs-5 text-center"
                    style={{ marginTop: "15px", fontWeight: 900 }}
                  >
                    520 FICO
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mt-3 mt-md-0">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "40px",
                  margin: "0px 28px",
                }}
              >
                <div className="card-body pt-3">
                  <div className="d-flex justify-content-center">
                    <img src={S3} alt="Features" style={{ width: "120px" }} />
                  </div>
                  <h5
                    className="color1 fs-5 text-center mt-5"
                    style={{ fontWeight: 900 }}
                  >
                    120K Annual Revenue
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 */}

      {/* section 6 */}
      <Carousel />
      {/* section 6 */}

      {/* section 7 */}
      <Testimonials />
      {/* section 7 */}

      {/* section 8 */}
      <section className="bg-counter w-100" id="same">
        <div className="container set_width">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="row pb-5">
              <h6
                className="text-center"
                style={{
                  lineHeight: "32px",
                  color: "#162d5a",
                  fontSize: "24px",
                  fontWeight: 500,
                }}
              >
                VitalCap Fund is a provider of working capital for small to
                medium size businesses, with an outstanding focus <br /> on
                customer experience and support. <br /><br /> Since 2014, the company
                has been securing capital for thousands of businesses with a
                large growing <br /> family of independent sales organizations
                (ISOs). <br /><br />
                Our headquarters are located in New York.
              </h6>
            </div>

            <div className="col-lg-2 col-md-12">
              <div className="mt-5 text-center">
                <h1
                  className="fw-semibold display-6 mb-3"
                  style={{ fontWeight: "bolder" }}
                >
                  <span
                    style={{ fontSize: "35px", fontWeight: "bolder" }}
                    className="color1"
                  >
                    2014
                  </span>
                </h1>
                <p
                  className="mb-0"
                  style={{
                    color: "#A2A2B4",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Founded
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="mt-5 text-center">
                <h1
                  className="fw-semibold display-6 mb-3"
                  style={{ fontWeight: "bolder" }}
                >
                  <span
                    style={{ fontSize: "35px", fontWeight: "bolder" }}
                    className="color1"
                  >
                    3,000+
                  </span>
                </h1>
                <p
                  className="mb-0"
                  style={{
                    color: "#A2A2B4",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Businesses funded
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="mt-5 text-center">
                <h1
                  className="fw-semibold display-6 mb-3"
                  style={{ fontWeight: "bolder" }}
                >
                  <span
                    style={{ fontSize: "35px", fontWeight: "bolder" }}
                    className="color1"
                  >
                    $100MM+
                  </span>
                </h1>
                <p
                  className="mb-0"
                  style={{
                    color: "#A2A2B4",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Originated in new deals
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="mt-5 text-center">
                <h1
                  className="fw-semibold display-6 mb-3"
                  style={{ fontWeight: "bolder" }}
                >
                  <span
                    style={{ fontSize: "35px", fontWeight: "bolder" }}
                    className="color1"
                  >
                    4.8 ★
                  </span>
                </h1>
                <p
                  className="mb-0"
                  style={{
                    color: "#A2A2B4",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Google reviews
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="mt-5 text-center">
                <h1
                  className="fw-semibold display-6 mb-3"
                  style={{ fontWeight: "bolder" }}
                >
                  <span
                    style={{ fontSize: "35px", fontWeight: "bolder" }}
                    className="color1"
                  >
                    A+ Rating
                  </span>
                </h1>
                <p
                  className="mb-0"
                  style={{
                    color: "#A2A2B4",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  BBB
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* <hr style={{ color: "#A2A2B4" }} /> */}
        </div>
      </section>
      {/* section 8 */}

      {/* section 9 */}
      <section className="bg-counter w-100" id="bg-get">
        <div className="container set_width cloud_text">
          <div className="row justify-content-center">
            <img src="" alt="" />
            <h1
              className="color1 text-center"
              style={{ fontWeight: "bolder", fontSize: "38px" }}
            >
              Ready to sign up?
            </h1>
            <Link
              className="btn btn-outline-primary rounded-pill mt-5 new_btn"
              to="/contact"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
      {/* section 9 */}
    </>
  );
};
export default Home;
