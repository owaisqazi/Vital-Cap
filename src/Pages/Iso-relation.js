import React from "react";
import Banner from "../img/ISO/newff.png";
import { Helmet } from "react-helmet";
const IsoRelation = () => {
  return (
    <>
      <Helmet>
        <title>VitalCap | ISO Relations</title>
        <meta
          name="description"
          content="Higher commission, better rates, monthly bonuses. Sign up today!"
        />
      </Helmet>
      <section
        className="section"
        id="contact"
        style={{ paddingTop: "58px", backgroundColor: "#fff" }}
      >
        <div className="container set_width">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 mt-5 ">
              <h4
                style={{ color: "#00CAA6", fontWeight: 700, fontSize: "36px" }}
              >
                ISO Relations
              </h4>
              <div className="col-md-12">
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  Our vast industry experience with thousands of funded <br />
                  merchants is something we take great pride in.
                </p>
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  Vital’s newest ISO portal allows you to upload, get notified,
                  <br />
                  revise, fund, and track your deals or commissions <br />{" "}
                  effortlessly.
                </p>
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  Our team of underwriters and account managers is ready to{" "}
                  <br />
                  deliver fast and accurate answers by utilizing the most
                  <br />
                  innovative technology available. Not only do we underwrite
                  <br />
                  within hours, but we typically provide same-day funding <br />
                  regardless of deal size.
                </p>
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  Curious about our guidelines, commission structure, and <br />
                  monthly bonuses?
                </p>
                <p
                  className="color1"
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  Get in touch with an ISO manager today or email us at <br />
                  <a
                    href="mailto:info@vitalcapfund.com"
                    style={{ textDecoration: "none", color: "#3ccafe" }}
                  >
                    info@vitalcapfund.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                style={{ paddingTop: "160px" }}
                src={Banner}
                className="w-100"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};
export default IsoRelation;
