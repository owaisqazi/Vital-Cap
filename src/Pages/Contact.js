import React from "react";
import Arrow from "../img/Contact/Arrow.svg";
import C1 from "../img/Contact/Icon1.png";
import C2 from "../img/Contact/Icon2.png";
import C3 from "../img/Contact/Icon3.png";
import "react-phone-number-input/style.css";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import loadergif from "../img/loader.gif";
// import PhoneInput from "react-phone-number-input";
const Contact = () => {
  const [phonenumber, setphonenumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [comment, setcomment] = useState("");
  const [lname, setlname] = useState("");
  const [error, seterror] = useState(false);
  const [loader, setLoader] = useState(false);
  // const handleChange = (setState) => (e) => {};
  const onSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    if (name !== "" && email !== "" && company !== "" && phonenumber !== "") {
      seterror(false);
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("phone", phonenumber);
      formdata.append("company", company);
      formdata.append("comment", comment);
      formdata.append("lname", lname);
      const response = axios
        .post(`https://contactapi.dev-sh.xyz/api/vitalcap`, formdata)
        .then((e) => {
          if (e.data.status === true) {
            setLoader(false);
            Swal.fire({
              text: "Thank you for contacting VitalCap. A specialist will get in touch with you shortly.",
              icon: "success",
            });
            document.getElementById("Myform").reset();
            setphonenumber("");
            setName("");
            setEmail("");
            setCompany("");
          }
        });
      console.log(response);
    } else {
      seterror(true);
      setLoader(false);
      Swal.fire({
        text: "Validation Error",
        icon: "error",
      });
    }
  };
  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Helmet>
        <title>VitalCap | Contact Us</title>
        <meta
          name="description"
          content="Our team is ready to answer your questions. Give us a call or email 24/7."
        />
      </Helmet>
      <br />
      <section className="section" id="contact">
        <div className="container set_width">
          <br />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
              <h4
                className="font_set2"
                style={{
                  color: "#00CAA6",
                  fontWeight: "600",
                  marginTop: "0px",
                }}
              >
                ISO? Investor? Merchant?
              </h4>
              <h2 className="color1 lovehear" style={{ fontWeight: "700" }}>
                We'd love to hear <br />
                from you.
              </h2>
              <div className="contact-details mb-4 mb-lg-0 mt-2">
                <div className="row p-bottom align-items-center">
                  <div className="col-lg-2">
                    <img src={C1} alt="watch" style={{ width: "70px" }} />
                  </div>
                  <div className="col-lg-9 ms-2">
                    <span
                      className="color4"
                      style={{ fontSize: "14px", fontWeight: 800 }}
                    >
                      We're available
                    </span>
                    <br />
                    <span className="color1 font-14 bold">
                      Mon-Fri, 9 am-6 pm EST.
                    </span>
                  </div>
                </div>
                <div className="row mt-2 p-bottom align-items-center">
                  <div className="col-lg-2">
                    <img src={C2} alt="watch" style={{ width: "70px" }} />
                  </div>
                  <div className="col-lg-9 ms-2">
                    <span
                      className="color4"
                      style={{ fontSize: "14px", fontWeight: 800 }}
                    >
                      Headquarters
                    </span>
                    <br />
                    <span className="color1 font-14 bold">
                      48 Wall st., 10th floor <br />
                      New York, NY 10005
                    </span>
                  </div>
                </div>
                <div className="row mt-2 align-items-center">
                  <div className="col-lg-2">
                    <img src={C3} alt="watch" style={{ width: "70px" }} />
                  </div>
                  <div className="col-lg-9 ms-2">
                    <span
                      className="color4"
                      style={{ fontSize: "14px", fontWeight: 800 }}
                    >
                      Phone
                    </span>
                    <br />
                    <span className="color1 font-14 bold">212.994.6996</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-xl-2 col-md-12 none-fly"
              style={{ marginTop: "115px" }}
              id="laptop-carousel"
            >
              <img src={Arrow} className="w-75" alt="Arrow" />
            </div>
            <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
              <div
                className="card"
                style={{ borderRadius: "12px", height: "100%" }}
              >
                <div
                  className="card-body form_main"
                  style={{ padding: "2rem" }}
                >
                  <p className="color1" id="font" style={{ fontWeight: 700 }}>
                    Please fill out the form below and a member of our team{" "}
                    <br /> we'll get back to you as soon as possible.
                  </p>
                  <form className="contact-form" id="Myform">
                    <div className="row margin-b">
                      <div className="col-lg-6">
                        <label className="color4 font-14">Name*</label>
                        <div className="position-relative mb-1">
                          <input
                            type="text"
                            id={`${
                              error && name === "" ? `border-danger` : ""
                            }`}
                            className={`form-control contact_input placeholder_text `}
                            placeholder="Your First Name*"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label className="color4 font-14">Last Name</label>
                        <div className="position-relative mb-1">
                          <input
                            type="text"
                            className="form-control placeholder_text contact_input"
                            placeholder="Your Last Name*"
                            onChange={(e) => setlname(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row margin-b">
                      <div className="col-lg-12">
                        <label className="color4 font-14">Email Address*</label>
                        <div className="position-relative mb-1">
                          <input
                            value={email}
                            id={`${
                              error && email === "" ? `border-danger` : ""
                            }`}
                            type="email"
                            className="form-control placeholder_text contact_input"
                            placeholder="Your Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row margin-b">
                      <div className="col-lg-12">
                        <label className="color4 font-14">
                          Contact Number*
                        </label>
                        <div className="position-relative mb-1">
                          <input
                            value={phonenumber}
                            id={`${
                              error && phonenumber === "" ? `border-danger` : ""
                            }`}
                            type="number"
                            className="form-control placeholder_text contact_input"
                            placeholder="Contact Number"
                            onChange={(e) => setphonenumber(e.target.value)}
                          />
                          {/* <PhoneInput
                          countryCallingCodeEditable={false}
                            defaultCountry="US"
                            international
                            className="contact_input"
                            placeholder="Enter phone number"
                            onChange={setphonenumber}
                          /> */}
                        </div>
                      </div>
                    </div>
                    <div className="row margin-b">
                      <div className="col-lg-12">
                        <label className="color4 font-14">Company*</label>
                        <div className="position-relative mb-1">
                          <input
                            value={company}
                            id={`${
                              error && company === "" ? `border-danger` : ""
                            }`}
                            type="text"
                            className="form-control placeholder_text contact_input"
                            placeholder="Company Name"
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row margin-b">
                      <div className="col-lg-12">
                        <label className="color4 font-14">Tell Us More</label>
                        <div className="position-relative mb-1">
                          <textarea
                            type="number"
                            className="form-control placeholder_text contact_textarea"
                            placeholder="Type your message"
                            onChange={(e) => setcomment(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-3">
                      <button
                        onClick={onSubmit}
                        type="button"
                        class="btn btn-outline-primary rounded-pill w-100"
                        style={{
                          height: "50px",
                          fontSize: "13px",
                          fontWeight: 500,
                          boxShadow:'none'
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`button.swal2-confirm.swal2-styled {
    background-color: #18e9c4;
}.loader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url(${loadergif}) 50% 50% no-repeat
    rgba(225, 225, 225, 0.5);
  opacity: 1;
}`}
      </style>
    </>
  );
};
export default Contact;
