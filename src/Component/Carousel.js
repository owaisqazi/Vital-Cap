import { React, useRef } from "react";
import Img11 from "../img/img/t1.svg";
import Img22 from "../img/img/t2.svg";
// import Img33 from "../img/img/t3.svg";
import Img44 from "../img/img/t4.svg";
import Img55 from "../img/img/t5.svg";
import Img66 from "../img/img/t6.svg";
import Img77 from "../img/img/t7.svg";
import Img88 from "../img/img/t8.svg";
import Img99 from "../img/img/t9.svg";
import Img1 from "../img/img/Comments/tt1.svg";
import Img2 from "../img/img/Comments/tt2.svg";
// import Img3 from "../img/img/Comments/tt3.svg";
import Img4 from "../img/img/Comments/tt4.svg";
import Img5 from "../img/img/Comments/tt5.svg";
import Img6 from "../img/img/Comments/tt6.svg";
import Img7 from "../img/img/Comments/tt7.svg";
import Img8 from "../img/img/Comments/tt8.svg";
import Img9 from "../img/img/Comments/tt9.svg";
import Prev from "../img/iconright.svg";
import Next from "../img/iconleft.svg";
import Linkedin from "../img/linkedin.PNG";
import Img10 from "../img/img/Comments/t10.png";
import Img1010 from "../img/img/Comments/tt10.png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import tyles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const swiperRef = useRef();
  const Content = [
    {
      img: Img4,
      imag: Img44,
      title: "Co-Founder & CFO",
      name: "Dan Eisen",
      description: "",
      link: "https://www.linkedin.com/in/dan-eisen-7649ba3/",
    },
    {
      img: Img5,
      imag: Img55,
      title: "Co-Founder & Head of Underwriting",
      name: "Liz Kelleher",
      description: "",
      link: `https://www.linkedin.com/in/elizabeth-kelleher-5428696/`,
    },
    {
      img: Img6,
      imag: Img66,
      title: "Co-Founder & CRO",
      name: "Ron Hizkiyahu",
      description: "",
      link: "https://www.linkedin.com/in/ron-hizkiyahu/",
    },
    {
      img: Img1,
      imag: Img11,
      title: "Co-Founder & Invertor Relations",
      name: "Lawrence Khatskelevich",
      description: "",
      link: "https://www.linkedin.com/in/lawrence-khatskelevich-0850a420/",
    },
    {
      img: Img9,
      imag: Img99,
      title: "VP of Sales",
      name: "Jeff Pecori",
      description: "",
      link: "https://www.linkedin.com/in/jeff-pecori-659a02171/",
    },
    {
      img: Img2,
      imag: Img22,
      title: "SR. Underwriter",
      name: "Lee Sieradzky",
      description: "",
      link: "https://www.linkedin.com/in/leesieradzky/",
    },
    {
      img: Img7,
      imag: Img77,
      title: "Head of Operations",
      name: "Alexander Lanovich",
      description: "",
      link: "#",
    },
    {
      // img: Img3,
      // imag: Img33,
      img: Img10,
      imag: Img1010,
      title: "Chief of Staff",
      name: "Guy Stein",
      description: "",
      link: "#",
    },

    {
      img: Img8,
      imag: Img88,
      title: "Head of Information Technology",
      name: "Morty Eisen",
      description: "",
      link: "#",
    },
  ];

  console.log(Content);
  return (
    <>
      <section
        className="section w-100"
        id="laptop-carousel123"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          className="container-fluid mt-5 py-4"
          style={{ marginBottom: "170px" }}
        >
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-md-12 text-center">
              <p
                className=" bold"
                style={{ fontSize: "15px", color: "#3CCAFE" }}
              >
                MEET THE TEAM
              </p>
              <h3
                class="color1 bold"
                style={{ fontWeight: "bolder", fontSize: "40px" }}
              >
                <strong>
                  {" "}
                  Reputation is the name
                  <br />
                  of the game.
                </strong>
              </h3>
            </div>
          </div>
          {/* <div className="row d-flex justify-content-center mt-5"></div>
          <div className="row d-flex justify-content-center mt-5"></div> */}
          <div
            className="d-flex justify-content-center"
            style={{ display: "flex" }}
          >
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
            <div className="" style={{ width: "5.333333" }}></div>
            <div className="col-md-8">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                className="mySwiper col-md-12"
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  996: { slidesPerView: 3 },
                  1260: {
                    slidesPerView: 4,
                  },
                }}
              >
                {/* {Content.map((e) => (
                  <SwiperSlide>
                    {" "}
                    <div
                      className="card"
                      style={{ borderRadius: "19px", width: "92%" }}
                    >
                      <br />
                      <div className="card-body" style={{ padding: "0px" }}>
                        <div className="col-md-12 d-flex justify-content-center">
                          <img
                          className="imges"
                            src={e.img}
                            alt="team"
                            style={{ width: "65%", height: "100%", }}
                          />
                        </div>

                        <div className="col-md-12 d-flex justify-content-center">
                          <span
                            className="card-p text-center color1"
                            style={{
                              color: "#A2A2B4",
                              fontWeight: "bold",
                              fontSize: " 13px",
                            }}
                          >
                            {e.title}
                          </span>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center mt-1">
                          <span
                            className="bold color1 textcenter text_text"
                            style={{ fontWeight: 900 }}
                          >
                            {e.name}
                          </span>
                        </div>
                        <div
                          className="card-footer mt-2"
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="col-md-12 d-flex justify-content-center mt-3">
                            <span
                              className="small_font color1"
                              style={{
                                fontWeight: "700",
                                fontSize: "14px",
                              }}
                            >
                              {e.description}
                            </span>
                          </div>
                          <div className="col-md-12 d-flex justify-content-center mt-3">
                            <img
                              src={Linkedin}
                              alt="Linkedin"
                              className="w-25"
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                    </div>
                  </SwiperSlide>
                ))} */}

                <SwiperSlide>
                  {" "}
                  <div
                    className="card card4"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer">
                        <img alt="Dan Eisen" src={Img4} />
                        <img alt="Dan Eisen" className="top-img4" src={Img44} />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 13px",
                          }}
                        >
                          Co-Founder & CFO
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 textcenter text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Dan Eisen
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <a
                            href="https://www.linkedin.com/in/dan-eisen-7649ba3/
                            "
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={Linkedin}
                              alt="Linkedin"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="card card5"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer5">
                        <img alt="Liz Kelleher" src={Img5} />
                        <img
                          alt="Liz Kelleher"
                          className="top-img5"
                          src={Img55}
                        />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 12.5px",
                          }}
                        >
                          Co-Founder & Head of Underwriting
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 textcenter text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Liz Kelleher
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <a
                            href="https://www.linkedin.com/in/elizabeth-kelleher-5428696/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={Linkedin}
                              alt="Linkedin"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="card card6"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer6">
                        <img alt="Ron Hizkiyahu" src={Img6} />
                        <img
                          alt="Ron Hizkiyahu"
                          className="top-img6"
                          src={Img66}
                        />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 13px",
                          }}
                        >
                          Co-Founder & CRO
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 textcenter text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Ron Hizkiyahu
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <a
                            href="https://www.linkedin.com/in/ron-hizkiyahu/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={Linkedin}
                              alt="Linkedin"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="card card1"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer1">
                        <img alt="Lawrence Khatskelevich" src={Img1} />
                        <img
                          alt="Lawrence Khatskelevich"
                          className="top-img1"
                          src={Img11}
                        />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 13px",
                          }}
                        >
                          Co-Founder & Investor Relations
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 text-center text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Lawrence Khatskelev
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <a
                            href="https://www.linkedin.com/in/lawrence-khatskelevich-0850a420/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={Linkedin}
                              alt="Linkedin"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="card card9"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer9">
                        <img alt="Jeff Pecori" src={Img9} />
                        <img
                          alt="Jeff Pecori"
                          className="top-img9"
                          src={Img99}
                        />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 13px",
                          }}
                        >
                          VP of Sales
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 textcenter text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Jeff Pecori
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <a
                            href="https://www.linkedin.com/in/jeff-pecori-659a02171/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={Linkedin}
                              alt="Linkedin"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="card card2"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer2">
                        <img alt="Lee Sieradzky" src={Img2} />
                        <img
                          alt="Lee Sieradzky"
                          className="top-img2"
                          src={Img22}
                        />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 13px",
                          }}
                        >
                          Sr. Underwriter
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 textcenter text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Lee Sieradzky
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <a
                            href="https://www.linkedin.com/in/leesieradzky/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={Linkedin}
                              alt="Linkedin"
                              className="w-100"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="card card7"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer7">
                        <img alt="Alexander Lanovich" src={Img7} />
                        <img
                          alt="Alexander Lanovich"
                          className="top-img7"
                          src={Img77}
                        />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 13px",
                          }}
                        >
                          Head of Operations
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 textcenter text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Alexander Lanovich
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <img src={Linkedin} alt="Linkedin" className="w-25" />
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="card card3"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer3">
                        <img alt="Guy Stein" src={Img10} />
                        <img
                          alt="Guy Stein"
                          className="top-img3"
                          src={Img1010}
                        />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 13px",
                          }}
                        >
                          Chief of Staff
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 textcenter text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Guy Stein
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <img src={Linkedin} alt="Linkedin" className="w-25" />
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div
                    className="card card8"
                    style={{ borderRadius: "19px", width: "92%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 text-center justify-content-center cardimgcontainer8">
                        <img alt="Morty Eisen" src={Img8} />
                        <img
                          alt="Morty Eisen"
                          className="top-img8"
                          src={Img88}
                        />
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="card-p text-center color1 mt-3"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "bold",
                            fontSize: " 13px",
                          }}
                        >
                          Head of Information Technology
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1 textcenter text_text"
                          style={{ fontWeight: 900 }}
                        >
                          Morty Eisen
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3"></div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <img src={Linkedin} alt="Linkedin" className="w-25" />
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <div className="" style={{ width: "5.333333" }}></div> */}
            <div className="col-md-1 next-div">
              <span
                onClick={() => swiperRef.current?.slideNext()}
                slideNext
                style={{
                  border: "none",
                  backgroundColor: "FBFCFE",
                  cursor: "pointer",
                }}
              >
                <img className="ms-auto d-block" src={Prev} alt="Prev" />
              </span>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5"></div>
      </section>

      <section
        className="section w-100"
        id="mobile-carousel"
        style={{ backgroundColor: "#FBFCFE" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-md-12 text-center">
              <p className="color2 bold" style={{ fontSize: "12px" }}>
                MEET THE TEAM
              </p>
              <h3
                className="color1"
                style={{ fontWeight: "bolder", fontSize: "30px" }}
              >
                Reputation is the name <br />
                of the game.
              </h3>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5"></div>
          <div className="row d-flex justify-content-center mt-5"></div>
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
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper col-md-12"
            >
              {Content.map((e) => (
                <SwiperSlide>
                  {" "}
                  <div
                    className="card"
                    style={{ borderRadius: "10px", width: "100%" }}
                  >
                    <br />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="col-md-12 d-flex justify-content-center">
                        <img src={e.img} alt="team" className="w-50 disply" />
                        {/* <img src={e.img} alt="team" className="w-50" /> */}
                      </div>
                      <div className="col-md-12 d-flex justify-content-center">
                        <span
                          className="text-center"
                          style={{
                            color: "#A2A2B4",
                            fontWeight: "500",
                            fontSize: " 10px",
                            textAlign: "center",
                          }}
                        >
                          {e.title}
                        </span>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-1">
                        <span
                          className="bold color1"
                          style={{
                            fontSize: "13px",
                            textAlign: "center",
                          }}
                        >
                          {e.name}
                        </span>
                      </div>
                      <div
                        className="card-footer mt-2"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <span
                            className="font-14"
                            style={{
                              color: "#A2A2B4",
                              fontWeight: "700",
                              fontSize: "14px",
                            }}
                          >
                            {e.description}
                          </span>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                          <a
                            href={e.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={Linkedin}
                              alt="Linkedin"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5"></div>
      </section>
    </>
  );
};

export default Carousel;
