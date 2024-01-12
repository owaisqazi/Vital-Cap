import { React, useRef } from "react";
import Google from "../img/google.PNG";
import { AiFillStar } from "react-icons/ai";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Prev from "../img/iconright.svg";
import Next from "../img/iconleft.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = () => {
  const swiperRef = useRef();

  return (
    <>
      <section
        className="section w-100"
        id="laptop-carousel"
        style={{ backgroundColor: "#FBFCFE" }}
      >
        <div className="container set_width my-5">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-md-12 text-center">
              <p
                className="bold"
                style={{ fontSize: "18px", color: "#6fd0f1" }}
              >
                TESTIMONIALS
              </p>
              <h3
                class="color1 bold"
                style={{ fontWeight: "bolder", fontSize: "40px" }}
              >
                <strong>What our clients say</strong>
              </h3>
            </div>
            <div className="CONTENT12">
              <div className="col-md-1 prev-div">
                <span
                  onClick={() => swiperRef.current?.slidePrev()}
                  style={{
                    border: "none",
                    backgroundColor: "FBFCFE",
                    cursor: "pointer",
                  }}
                >
                  <img src={Next} alt="Next" />
                </span>
              </div>
              <div className="col-md-10 blockTble">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  slidesPerGroup={2}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  modules={[Navigation]}
                  className="mySwiper col-md-12"
                >
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Isaiah Clark</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            As we've continued to work with VitalCap, they've
                            continued to prove time and time again they have
                            sensible underwriting, efficient processing and
                            timely funding for our clients. Any one in small
                            business financing or client relations would be
                            mistaken not have have them as apart of there
                            options.
                            <br />
                            If your a business owner looking for funding or a
                            working professional looking for a source to take
                            care of your clients, Vital Cap should be on the top
                            of the list.
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Dan Kalis</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold"
                            style={{ fontSize: "16px" }}
                          >
                            Just originated my first funding for a client
                            through VitalCap and the experience was top notch!
                            Jeff is a consummate professional as the head of
                            broker relations, the managing partner Ron made a
                            great impression by personally calling me on this
                            first funding to say hello, and the processing team
                            was highly efficient as well!
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      className="card"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="">
                          <div className="col-md-12">
                            <AiFillStar className="yellow fs-5" />
                            <AiFillStar className="yellow fs-5" />
                            <AiFillStar className="yellow fs-5" />
                            <AiFillStar className="yellow fs-5" />
                            <AiFillStar className="yellow fs-5" />
                          </div>
                          <div className="col-md-12 mt-3">
                            <h2
                              className="color112"
                              style={{ fontSize: "21px", fontWeight: "bolder" }}
                            >
                              <strong>Jeffrey Heyn</strong>
                            </h2>
                            <span
                              className="mt-3 color112 bold "
                              style={{ fontSize: "16px" }}
                            >
                              VitalCap was great to work with! They responded
                              quickly and moved with certainty to get the deal
                              closed for my client that had a tight deadline.
                            </span>
                            <br />
                          </div>
                          <div className="col-md-12 mt-5"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Matt Serra</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            Jeff, Lawrence and Dan are an absolute pleasure to
                            work with. Standup guys! Would highly recommend
                            funding with them or working with them as an ISO
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Stellar Business Funding</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            11 years and counting as a broker in this space..
                            and can honestly say these guys are one of the best.
                            Communication is the name of the game.. this
                            business is super competitive and can be tough.. but
                            VitalCap makes it so much easier.. Thanks to the
                            entire VitalCap Team.. Jeff, Ron, Dan, Lawrence &
                            Liz!
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Scott Villavicencio</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            I am an ISO with Vital. Honestly the easiest funding
                            process I've ever worked with. Craig literally took
                            the tasks into his hands and made sure any obstacles
                            we encountered were easily navigated. I am more than
                            happy to continue to send files to them.
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Vadim Shtivelman</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            VitalCap is a great lending partner. Helped our
                            company arrange funding for a merchant in less than
                            24 hrs. @ Ron and Dan, thank you for the quick
                            turnaround. Our team looks forward to doing a lot
                            more business together.
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Shane</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            First time personally funding with these guys, All I
                            can say is they are the real deal. They made the
                            entire process as quick and accommodating as
                            possible. From start to finish my experience was
                            outstanding with them, more importantly they got my
                            client an excellent deal at a great rate and term on
                            a 2nd position. Ron is the best I have worked with
                            in the industry- cant say enough. This is the first
                            of many. Vital is highly recommended.
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Chris Lusterino</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            Great experience from the entire VitalCap team,
                            thanks to Ron and Larry for getting the job done. If
                            you need a quick turn around and no BS this is the
                            only place you need. <br /> It's a pleasure working
                            with VitalCap. They understand the industry I am in
                            and know how to streamline the process. Very
                            professional, easy to work with along with excellent
                            communication. Looking forward to partnering up with
                            VitalCap again on future endeavors. Thank You!
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Barry Jin</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            VitalCap is one of the best lending companies out
                            here in our opinion, honest people and will do
                            everything it takes to provide the best available
                            strategies for the business owners with their
                            financial needs!! Bravo, well done guys! :)
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Archan Patel</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            Had an amazing experience working with VitalCap
                            Fund, especially Jeff. Not only are deals processed
                            in a fast and efficient manner, but you are
                            constantly given updates on where the deal stands.
                            Jeff, not only understand each situation thoroughly,
                            but also does whatever it takes to get the deal
                            done. I will be working with them for a very
                            longtime. Thanks and looking forward to working with
                            you in the future.
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Sebastian Velandia</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            Working with Vital Capital and Ron H. has always
                            been our pleasure. This company will go above and
                            beyond to make sure that your expectations are met.
                            Thank you Vital Capital!
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Alvaro Berrios</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            Ron and Vital Capital completely blew the
                            competition out of the waters and funded our client
                            with favorable terms. <br /> Thank you Vital
                            Capital!
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong>Isaiah Clark</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                            As we've continued to work with VitalCap, they've
                            continued to prove time and time again they have
                            sensible underwriting, efficient processing and
                            timely funding for our clients. Any one in small
                            business financing or client relations would be
                            mistaken not have have them as apart of there
                            options.
                            <br />
                            If your a business owner looking for funding or a
                            working professional looking for a source to take
                            care of your clients, Vital Cap should be on the top
                            of the list.
                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5"></div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* <SwiperSlide>
                    <div
                      className="card ms-auto"
                      style={{
                        border: "none",
                        borderRadius: "20px",
                        width: "95%",
                      }}
                    >
                      <div>
                        <img
                          className="ml-auto mt-2 p-2"
                          src={Google}
                          width="50px"
                          alt="Google"
                          style={{ float: "right" }}
                        />
                      </div>
                      <div
                        className="card-body CardDIV1"
                        style={{
                          padding: "0px 42px",
                          marginTop: "17px",
                          marginBottom: "60px",
                          marginLeft: "15px",
                          marginRight: "30px",
                        }}
                      >
                        <div className="col-md-12">
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                          <AiFillStar className="yellow fs-5" />
                        </div>
                        <div className="col-md-12 mt-3">
                          <h2
                            className="color112"
                            style={{ fontSize: "21px", fontWeight: "bolder" }}
                          >
                            <strong >Dan Kalis</strong>
                          </h2>
                          <span
                            className="mt-3 color112 bold "
                            style={{ fontSize: "16px" }}
                          >
                           Just originated my first funding for a client through VitalCap and the experience was top notch! Jeff is a consummate professional as the head of broker relations, the managing partner Ron made a great impression by personally calling me on this first funding to say hello, and the processing team was highly efficient as well!

                          </span>
                          <br />
                        </div>
                        <div className="col-md-12 mt-5">
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
              {/* <div className="col-md-1"></div> */}
              <div className="col-md-1 ml-2 next-div">
                <div className="ms-auto">
                  <span
                    onClick={() => swiperRef.current?.slideNext()}
                    style={{
                      border: "none",
                      backgroundColor: "FBFCFE",
                      cursor: "pointer",
                    }}
                  >
                    <img src={Prev} alt="Prev" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
      <section
        className="section w-100"
        id="mobile-carousel"
        style={{ backgroundColor: "#FBFCFE" }}
      >
        
        <div className="container-fluid" id="OverDiv21">
          <div className="col-md-12 text-center">
            <p className="bold" style={{ fontSize: "12px", color: "#3ccafe" }}>
              TESTIMONIALS
            </p>
            <h3 class="lh-sm color112" style={{ fontWeight: "bolder" }}>
              What our clients
            </h3>
          </div>
          {/* <div className="row d-flex justify-content-center mt-5"></div>
          <div className="row d-flex justify-content-center mt-5"></div> */}
          <div className="container d-flex justify-content-center">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper col-md-12"
            >
              {/* <SwiperSlide>
                {" "}
                <div
                  className="card"
                  style={{ border: "none", borderRadius: "20px" }}
                >
                  <div className="ca CardDIV1rd-body" style={{ marginBottom: "20px" }}>
                    <img
                      src={Google}
                      width="50px"
                      alt="Google"
                      style={{ float: "right" }}
                    />
                    <div className="col-md-12 mt-4">
                      <AiFillStar className="yellow fs-5" />
                      <AiFillStar className="yellow fs-5" />
                      <AiFillStar className="yellow fs-5" />
                      <AiFillStar className="yellow fs-5" />
                      <AiFillStar className="yellow fs-5" />
                    </div>
                    <div className="col-md-12 mt-3">
                      <h2
                        className="color112"
                        style={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Jeffrey Heyn
                      </h2>
                      <span
                        className="mt-3 color112 bold"
                        style={{ fontSize: "20px" }}
                      >
                        VitalCap was great to work with! They responded quickly
                        and moved with certainty to get the deal closed for my
                        client that had a tight deadline
                      </span>
                      <br />
                    </div>
                    <div className="col-md-12 mt-5">
                      <span
                        className=""
                        style={{ color: "#A2A2B4", fontSize: "16px" }}
                      >
                        Mar 19, 2018
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <div
                  className="card"
                  style={{ border: "none", borderRadius: "20px" }}
                >
                  <div className="ca CardDIV1rd-body">
                    <img
                      src={Google}
                      width="50px"
                      alt="Google"
                      style={{ float: "right" }}
                    />
                    <div className="col-md-12 mt-4">
                      <AiFillStar className="yellow fs-4" />
                      <AiFillStar className="yellow fs-4" />
                      <AiFillStar className="yellow fs-4" />
                      <AiFillStar className="yellow fs-4" />
                      <AiFillStar className="yellow fs-4" />
                    </div>
                    <div className="col-md-12 mt-3">
                      <h2
                        className="color112"
                        style={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Matt Serra
                      </h2>
                      <span
                        className="mt-3 color112 bold"
                        style={{ fontSize: "19px" }}
                      >
                        Jeff, Lawrence and Dan are an absolute pleasure to work
                        with. Standup guys! Would highly recommend funding with
                        them or working with them as an ISO
                      </span>
                      <br />
                    </div>
                    <div className="col-md-12 mt-5">
                      <span
                        className=""
                        style={{ color: "#A2A2B4", fontSize: "16px" }}
                      >
                        Jun 16, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5"></div>
      </section>
    </>
  );
};

export default Testimonials;
