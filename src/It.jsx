const It = () => {
  const [navClose, setNavClose] = useState(true);
  const [drop, setDrop] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  // const form = useRef();

  // const sendEmail = (e) => {
  //   // e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_6z6j9vv",
  //       "template_04ujg5i",
  //       form.current,
  //       "KQagYOgrTv4yC0uV6"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="nav flex px-0 gap-20 lg:gap-2 bg-black xl:flex items-center justify-around xl:gap-16 sticky top-0 xl:px-4 z-10 md:gap-[570px]"
      >
        <div className=" mr-20 lg:mr-0 xl:mr-0 flex items-center text-center h-20 pt-6 md:mr-0">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:hidden lg:block text-white xl:flex">
          <ul className=" flex lg:gap-10 xl:gap-16 items-center text-center md:gap-2">
            <li className=" hover:underline">
              <Link to="/">HOME</Link>
            </li>
            <li className=" hover:underline">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <div className="" onClick={() => setDrop(!drop)}>
                {drop ? (
                  <div className=" flex items-center gap-2 underline">
                    <Link to="/service">SERVICES</Link>
                    <img src={arrow} alt="arrow" />
                  </div>
                ) : (
                  <div className="close">
                    <div className="close2 flex items-center gap-2 justify-center relative top-[15px] -mt-[15px] pb-[15px]">
                      <Link>SERVICES</Link>
                      <img src={arrow} alt="arrow" />
                    </div>
                    <div className="close1 absolute lg:left-[400px] xl:left-[540px] bg-black flex flex-col items-start gap-2 text-[#03cfd6] top-[50px] p-[20px]">
                      <h1 className=" hover:underline">
                        <Link to="/business">BUSINESS ADVISORY</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/recruitement">RECRUITMENT & SELECTION</Link>
                      </h1>
                      <h1 className=" underline">
                        <Link to="/IT">IT SOLUTION</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/learning">LEARNING DEVELOPMENT</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/admistration">ADMINISTRATION</Link>
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </li>
            {/* <li className=" hover:underline">
              <Link to="/faq">FAQs</Link>
            </li> */}
            <li className=" hover:underline">
              <Link to="/contact">CONTACT US</Link>
            </li>
            <button className="but text-[#000]">
              <Link to="/join">Join Us</Link>
            </button>
            <button className="but1 ">
              <Link to="/hire">Hire Talent</Link>
            </button>
          </ul>
        </div>
        <div className="flex justify-end lg:hidden xl:hidden mr-6 md:block">
          <div className="" onClick={() => setNavClose(!navClose)}>
            {navClose ? (
              <div className="ham">
                <div className="line-2"></div>
                <div className="line-1"></div>
                <div className="line-3"></div>
              </div>
            ) : (
              <div className="x">
                <div className="line-2"></div>
                <div className="line-1"></div>
                <div className="line-3"></div>
              </div>
            )}
          </div>

          <div className={navClose ? "nav-close" : "nav-open"}>
            <div className=" text-white xl:hidden">
              <ul className=" flex flex-col gap-4 items-center pt-4 md:gap-6">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li className=" flex items-center gap-2">
                  <Link to="/service">SERVICES</Link>
                </li>
                {/* <li>
                  <Link to="/faq">FAQs</Link>
                </li> */}
                <li>
                  <Link to="/contact">CONTACT US</Link>
                </li>
                <button className="but text-[#000]">Join Us</button>
                <button className="but1 ">
                  <Link to="/hire">Hire Talent</Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="rec text-white py-6 lg:py-10 md:py-10 xl:py-10 md:pl-14 pl-7 text-xs md:text-xl lg:pl-[60px] xl:pl-[100px] lg:text-2xl xl:text-2xl font-semibold"
      >
        <h1 data-aos="zoom-in">
          <span>Home</span>/IT Solution
        </h1>
      </div>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="bg-[url('/src/assets/it/bg.png')] bg-no-repeat bg-center bg-cover"
      >
        <div
          data-aos="zoom-in"
          className=" xl:py-32 lg:py-32 py-12 pl-7 text-white xl:pl-[100px] lg:pl-[60px] md:pl-14"
        >
          <h1 className=" font-semibold text-[13px] xl:text-4xl md:text-2xl lg:text-4xl lg:pb-4 xl:pb-4 pb-2">
            Outsource for Success, Hire Competency...
          </h1>
          <p className=" text-[10px] lg:text-2xl md:text-xl xl:text-2xl text-[#03cfd6]">
            We help business outsource, select, engage and keep top talents
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        style={{ fontFamily: "Montserrat" }}
        className=" bg-black h-[164px] xl:h-32 lg:h-32 px-0 text-[14px] lg:text-[16px] xl:text-[16px] lg:items-center lg:flex lg:justify-center lg:px-16 xl:items-center xl:justify-center flex xl:px-16 "
      >
        <div className=" md:hidden flex flex-col lg:flex lg:flex-row lg:gap-[17px] lg:justify-around m-auto xl:flex-row xl:flex xl:text-center xl:items-center xl:justify-around gap-4 xl:gap-24 text-white">
          <p className=" flex text-center items-center gap-2 xl:gap-4">
            <img src={box} alt="box" />
            Access to Top Tech Talents in Africa
          </p>
          <p className=" flex text-center items-center gap-2 xl:gap-4">
            <img src={box} alt="box" />
            Gain Competitive Edge
          </p>
          <p className=" flex text-center items-center gap-2 xl:gap-4">
            <img src={box} alt="box" />
            Customized Solution for Your Business
          </p>
        </div>

        <div className=" xl:hidden lg:hidden hidden md:flex md:flex-col md:gap-5 md:pt-5 md:pl-[60px] text-white">
          <p className=" flex text-center items-center gap-4">
            <img src={box} alt="box" />
            Access to Top Tech Talents in Africa
          </p>
          <p className=" flex text-center items-center gap-4">
            <img src={box} alt="box" />
            Gain Competitive Edge
          </p>
          <p className=" flex text-center items-center gap-4">
            <img src={box} alt="box" />
            Customized Solution for Your Business
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        style={{ fontFamily: "Montserrat" }}
        className=" flex flex-col lg:flex-row xl:flex-row justify-around md:px-10 px-10 lg:px-[30px] xl:px-12 mt-10"
      >
        <div className="flex flex-col gap-4 text-lg xl:text-3xl lg:text-2xl md:px-10 lg:px-0 xl:px-0">
          <h2 className="bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/business">Business Advisory</Link>
          </h2>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/recruitement"> Recruitment & Selection</Link>
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full text-[#03CFD6] font-semibold">
            IT Solution
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/learning">Learning and Development</Link>
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/admistration">Administration</Link>
          </p>
        </div>
        <div className="it1 bg-[url('/src/assets/it/bg1.png')] bg-no-repeat bg-cover bg-center rounded-2xl ml-5 xl:ml-0 lg:ml-0 mt-8 lg:mt-0 xl:mt-0 lg:w-2/4 xl:w-2/4 h-52 lg:h-96 xl:h-96 flex justify-center md:mx-24 lg:mx-0 xl:mx-0">
          <div className=" text-xl xl:text-5xl text-white flex justify-center items-center font-semibold">
            <h1 className="">IT Solution</h1>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        data-aos="zoom-in"
        className="text-base xl:text-2xl md:text-2xl lg:text-2xl flex justify-around items-center pt-10 xl:flex lg:flex xl:justify-end lg:justify-end lg:px-10 xl:px-10 lg:ml-20"
      >
        <div className="what md:text-xl xl:text-[20px] lg:text-[20px] flex flex-col gap-4 px-6 xl:px-0 lg:px-0 md:px-14 lg:w-[500px] xl:w-[702px] xl:ml-[150px]">
          <h1 className=" font-semibold hidden xl:block lg:block">
            Do you need a business innovation that <br /> integrates and is
            driven by next- <br /> generation technology?
          </h1>
          <h1 className=" font-semibold text-[16px] xl:hidden lg:hidden">
            Do you need a business innovation that integrates and is driven by
            next-generation technology?
          </h1>

          <p className="">
            IT Outsourcing Solution – Every organization has different IT needs;
          </p>

          <p className=" hidden xl:block lg:block">
            This ever-evolving technology need has to be addressed in order to
            keep up the pace with competitors and deliver more value to
            customers.
          </p>
          <p className=" xl:hidden lg:hidden">
            This ever-evolving technology need has to be addressed in order to
            keep up the pace with competitors and deliver more value to
            customers.
          </p>

          <p className="hidden xl:block lg:block">
            According to reports, 90% of companies involved in outsourcing their
            IT functions are looking out for outcomes and collaborations that
            are customer-centric and hinge on cost-effective cutting-edge
            technology.
          </p>
          <p className="xl:hidden lg:hidden">
            According to reports, 90% of companies involved in outsourcing their
            IT functions are looking out for outcomes and collaborations that
            are customer-centric and hinge on cost-effective cutting-edge
            technology.
          </p>

          <p className=" hidden xl:block lg:block">
            Our IT Solution services allow business executives to retain control
            over IT strategies for more effective delivery of IT-enabled
            business processes, application services and infrastructure
            solutions for business outcomes.
          </p>
          <p className=" xl:hidden lg:hidden">
            Our IT Solution services allow business executives to retain control
            over IT strategies for more effective delivery of IT-enabled
            business processes, application services and infrastructure
            solutions for business outcomes.
          </p>
          <p className="hidden xl:block lg:block">
            NUPAT Outsourcing has been critically acclaimed for our endeavor
            towards quality, consistent support and consulting and we also
            understand how important it is for businesses to implement solutions
            that are cost-effective.
          </p>
          <p className=" xl:hidden lg:hidden">
            NUPAT Outsourcing has been critically acclaimed for our endeavor
            towards quality, consistent support and consulting and we also
            understand how important it is for businesses to implement solutions
            that are cost-effective.
          </p>
        </div>
      </div>
      {/* <Link to="/faq">
        <div className=" flex justify-end xl:hidden lg:hidden mr-10 pt-5">
          <img src={mess} alt="mess" />
        </div>
      </Link> */}
      {/* 
      <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex flex justify-center md:justify-start lg:justify-start xl:justify-start pt-8 xl:pt-16 md:pt-16 lg:pt-16 xl:pl-10 md:pb-20 lg:pb-20 xl:pb-20 mx-14 text-sm"
      >
        <div className=" flex flex-col xl:pr-10 xl:pt-5 lg:pt-5 md:pt-5">
          <h1 className=" text-xl xl:text-2xl pb-2">Subscribe</h1>
          <p className=" text-sm xl:text-base pb-2">
            Create better experience with our business solution by subscribing{" "}
            <br /> to our newsletter.
          </p>

          <div className=" bg-black p-4 rounded-xl xl:mr-6 lg:mr-6 md:mr-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" flex justify-center"
            >
              <input
                type="text"
                placeholder="Enter your Email Address"
                className=" bg-white text-base flex justify-start pl-2 border-transparent xl:w-96 lg:w-96 md:w-96"
                name="user_email"
              />
              <button
                className=" bg-black text-white text-sm xl:text-base px-4 lg:text-base md:text-base xl:px-20 xl:py-2 md:px-10 lg:px-20 md:py-2 lg:py-2 rounded-xl relative lg:right-2 xl:right-2 right-1"
                type="submit"
                value="Send"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" mt-10 xl:mt-24 md:mt-10 text-white md:text-xl xl:text-base lg:text-base text-sm p-8 xl:px-14 lg:px-16 pt-10 bg-black mx-4 lg:mx-0 xl:mx-0"
      >
        <div className=" xl:flex flex flex-col xl:flex-row lg:flex-row justify-around">
          <div className="relative bottom-6">
            <img src={logo} alt="logo" className="relative right-8" />
            <p className=" relative bottom-7 -mb-0 lg:w-[296px] xl:w-[296px]">
              NUPAT Teams is a Business Process Outsourcing firm whose business
              is to increase clients' productivity, operational efficiency, and
              in turn profit by taking over some of their intensive business
              processes.
            </p>
          </div>
          <div>
            <h1 className=" pb-4 text-base xl:text-2xl font-semibold">
              Popular Links
            </h1>
            <div className=" grid-cols-2 grid lg:grid-cols-1 xl:grid xl:grid-cols-1">
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/about">About Us</Link>
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/service">Services</Link>
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/contact">Contact Us</Link>
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/join">Join Us</Link>
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/hire">Hire Talent</Link>
              </p>
            </div>
          </div>
          <div>
            <h1 className=" pb-4 text-base xl:text-2xl font-semibold">
              BUSINESS SERVICES
            </h1>
            <div className=" grid grid-cols-2 lg:grid-cols-1 xl:grid xl:grid-cols-1">
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/recruitement">Recruitment</Link>
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/business">Business Advisory</Link>
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/it">IT Outsourcing</Link>
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/learning">Learning</Link>
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/admistration">Administration</Link>
              </p>
            </div>
          </div>
          <div>
            <h1 className=" xl:pb-2 xl:text-2xl text-base font-semibold pb-4">
              CONTACT INFORMATION
            </h1>
            <p className=" flex items-center gap-4 pb-2">
              <img src={foot1} alt="foot1" className=" h-5" />
              46, Community Street,
              <br />
              Akoka, Yaba, Lagos
            </p>
            <p className=" flex items-center gap-4 pb-2">
              <img src={foot2} alt="foot2" className=" h-6" />
              +2348031958586 <br /> +2347081475750
            </p>
            <p className=" flex items-center gap-4 pb-10 xl:pb-16 lg:pb-16">
              <img src={foot3} alt="foot3" className=" h-4" />
              info@nupat.com.ng
            </p>
            <div className="flex items-center gap-5 pb-5 xl:pb-0 h-10 xl:h-5">
              <a href="https://www.instagram.com/nupat_teams/" target="_blank">
                <img src={foot4} alt="foot4" />
              </a>
              <a
                href="https://twitter.com/NupatTeams?t=7iM3cAQTKvTV0F_wix6D5w&s=09"
                target="_blank"
              >
                <img src={foot6} alt="foot6" className=" h-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/nupatteams/"
                target="_blank"
              >
                <img src={foot7} alt="foot7" className=" h-7" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className=" lg:flex-row lg:pb-6 xl:flex flex flex-col xl:flex-row items-center xl:gap-20 pt-5 xl:pb-10 pb-5 xl:px-6">
          <p>&copy;2023 NUPAT TEAMS. ALL RIGHT RESERVED.</p>
          <div className=" flex gap-8 pt-4 lg:pt-0 xl:pt-0">
            <p>TERMS</p>
            <p>PRIVACY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default It;

import React from "react";
import "./it.css";
import { useState } from "react";
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.png";
import { Link } from "react-router-dom";
import box from "./assets/box.png";
import foot from "./assets/foot.png";
import foot1 from "./assets/foot1.png";
import foot2 from "./assets/foot2.png";
import foot3 from "./assets/foot3.png";
import foot4 from "./assets/foot4.png";
// import foot5 from "./assets/foot5.png";
import foot6 from "./assets/foot6.png";
import foot7 from "./assets/foot7.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// import emailjs from "emailjs-com";
// import { useRef } from "react";
