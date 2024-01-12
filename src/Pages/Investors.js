import React from "react";
import Banner from "../img/Investors/Investors.svg";
import { Helmet } from "react-helmet";
const Investor = () => {
  return (
    <>
      <Helmet>
        <title>VitalCap | Investors</title>
        <meta
          name="description"
          content="Become a significant part of the success and sign up as an active ."
        />
      
      </Helmet>
      <section
        className="section"
        style={{
          paddingTop: "110px",
          paddingBottom: "184px",
          backgroundColor: "#fff",
        }}
      >
        <div className="container set_width">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12" style={{ marginTop: "9px" }}>
              <h4
                className="seperate_investor"
                style={{
                  color: "#00CAA6",
                  fontWeight: 700,
                  fontSize: "36px",
                  margin: "10px 0px 25px 0px",
                }}
              >
                Investors
              </h4>
              <div className="col-md-12">
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  Since 2014, VitalCap has maintained an uncompromised, <br />
                  symbiotic relationship with its partners, while keeping the{" "}
                  <br />
                  door open for new players.
                </p>
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  We welcome you to become a significant part of the success
                  <br />
                  and sign up as an active syndicator.
                </p>
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  Let’s chat about the possibilities and the technology <br />
                  behind it.
                </p>
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  For more information, please email us at <br />
                  <a
                    href="mailto:partners@vitalcapfund.com"
                    style={{ textDecoration: "none", color: "#3ccafe" }}
                  >
                    partners@vitalcapfund.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="d-flex align-items-center">
                <img src={Banner} className="w-100 img-fluid" alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Investor;
