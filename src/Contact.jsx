const Contact = () => {
  const [navClose, setNavClose] = useState(true);
  const [drop, setDrop] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_so4bkjk",
        "template_l14i0u8",
        form.current,
        "KQagYOgrTv4yC0uV6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="nav flex px-0 gap-20 lg:gap-2 bg-black xl:flex items-center justify-around xl:gap-[81px] sticky top-0 xl:px-4 z-10 md:gap-[560px]"
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
                  <div className=" flex items-center gap-2 hover:underline">
                    <Link to="/service">SERVICES</Link>
                    <img src={arrow} alt="arrow" />
                  </div>
                ) : (
                  <div className="close">
                    <div className="close2 flex items-center gap-2 justify-center relative top-[15px] -mt-[15px] pb-[15px]">
                      <Link>SERVICES</Link>
                      <img src={arrow} alt="arrow" />
                    </div>
                    <div className="close1 absolute left-[540px] bg-black flex flex-col items-start gap-2 text-[#03cfd6] top-[50px] p-[20px]">
                      <h1 className=" hover:underline">
                        <Link to="/business">BUSINESS ADVISORY</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/recruitement">RECRUITMENT & SELECTION</Link>
                      </h1>
                      <h1 className=" hover:underline">
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
            <li className=" hover:underline">
              <Link to="/faq">FAQs</Link>
            </li>
            <li className=" underline">
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
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
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
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="sec1 h-[104px] lg:h-72 md:h-[200px] xl:h-72 flex justify-center text-center items-center "
      >
        <div className="">
          <h1 className=" hit text-base md:text-2xl md:pb-5 lg:text-3xl xl:text-3xl lg:pb-8 xl:pb-10 font-semibold ">
            CONTACT US
          </h1>
          <p className=" text-white text-xs xl:text-2xl md:text-xl lg:text-2xl">
            Get in touch with us today
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-black text-white lg:h-52 md:mx-10 lg:mx-28 lg:p-0 lg:mt-3 xl:h-[247px] xl:w-[120  0px] xl:mx-[90px] mt-3 xl:mt-6 p-6 xl:p-0"
      >
        <div className=" flex flex-col xl:items-center lg:items-center md:items-center xl:pt-10">
          <h1 className="hidden lg:block xl:block text-4xl pt-6 md:block">
            HOW CAN WE BE OF SERVICE TO YOU?
          </h1>
          <h1 className=" text-sm xl:hidden lg:hidden md:hidden">
            HOW CAN WE BE OF SERVICE <br /> TO YOU?
          </h1>
          <p className="hidden xl:block text-xl xl:pt-6 md:pt-6 lg:pt-6 lg:block md:hidden">
            Thank you for your interest in Nupat Teams Outsourcing services. For
            us to help you better, <br /> please take a moment to complete this
            form and we will get in touch with you soon.
          </p>
          <p className="hidden xl:hidden text-xl xl:pt-6 md:pt-6 lg:pt-6 lg:hidden md:block">
            Thank you for your interest in Nupat Teams Outsourcing services. For
            us to help you better, please take a moment to complete this form
            and we will get in touch with you soon.
          </p>
          <p className=" text-xs pt-4 xl:hidden lg:hidden md:hidden">
            Thank you for your interest in Nupat Teams Outsourcing services. For
            us to help you better, please take a moment to complete this form
            and we will get in touch with you soon.
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-white pt-5 md:pt-14 lg:pt-14 md:px-10 lg:px-12 xl:pt-14 xl:px-12 px-4"
      >
        <div className=" xl:flex justify-around lg:flex md:flex md:flex-row flex lg:flex-row flex-col xl:flex-row md:gap-5 lg:gap-0 xl:gap-0">
          <div>
            <h1 className="hit text-3xl hidden xl:block lg:block md:hidden">
              Schedule a free consultation <br /> to take your business to the{" "}
              <br /> next level.
            </h1>
            <h1 className="hit text-3xl hidden xl:hidden lg:hidden md:block">
              Schedule a free consultation <br /> to take your business to the
              next level.
            </h1>
            <h1 className="hit text-base xl:hidden lg:hidden md:hidden flex justify-center text-center">
              Schedule a free consultation to take <br /> your business to the
              next level.
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="pt-5 text-[16px] xl:pt-10 lg:pt-10 md:pt-10"
            >
              <h3>Name*</h3>
              <div className=" flex gap-6">
                <div className=" pb-2">
                  <input
                    type="text"
                    className=" h-8 w-40 xl:w-56 lg:w-56 md:w-48 text-black"
                    name="user_first"
                  />
                  <p>First</p>
                </div>
                <div className=" pb-2">
                  <input
                    type="text"
                    className=" h-8 w-40 xl:w-56 lg:w-56 md:w-48 text-black"
                    name="user_last"
                  />
                  <p>Last</p>
                </div>
              </div>

              <div className="pb-12">
                <div className=" pb-2">
                  <p>Email</p>
                  <input
                    type="text"
                    className=" h-8 w-full text-black"
                    name="user_email"
                  />
                </div>
                <div className=" pb-2">
                  <p>Phone number</p>
                  <input
                    type="text"
                    className=" h-8 w-full text-black"
                    name="user_number"
                  />
                </div>
                <div className=" pb-2">
                  <p>Company Name</p>
                  <input
                    type="text"
                    className=" h-8 w-full text-black"
                    name="user_companyname"
                  />
                </div>
                <div className=" pb-2">
                  <p>Company Website</p>
                  <input
                    type="text"
                    className=" h-8 w-full text-black"
                    name="user_companywebsite"
                  />
                </div>
                <div className=" pb-2">
                  <p>Comment or Message*</p>
                  <textarea
                    className="area h-20 w-full  text-black"
                    name="user_comment"
                  ></textarea>
                </div>
                <div className=" pb-2">
                  <p>How did you hear about us?</p>
                  <input
                    type="text"
                    className=" h-8 w-full text-black"
                    name="user_howdidyouhear"
                  />
                </div>
                <div className=" pt-2">
                  <button
                    className="but1 h-10 xl:mb-8 lg:mb-8 w-28"
                    type="submit"
                    value="Send"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="free h-1/5 bg-black p-4 mt-8 xl:mt-0 lg:mt-0 md:mt-0 xl:w-[600px]">
            <div className="">
              <h1 className=" text-white text-2xl lg:text-4xl xl:text-4xl pb-4 lg:pb-8 xl:pb-8">
                Get in touch with us.
              </h1>
              <p className=" text-white text-base xl:text-xl lg:text-xl pb-8">
                We are here to answer any question you may have. Feel free to
                reach us via contact form.
              </p>
              <p className=" mb-4 p-4 text-xs lg:text-2xl xl:text-2xl flex items-center gap-2 bg-white">
                <img src={video} alt="video" /> 46, Community street, Akoka,
                Yaba, Lagos
              </p>
              <p className=" mb-4 p-4 text-xs xl:text-2xl lg:text-2xl flex items-center gap-2 bg-white">
                <img src={call} alt="call" />
                info@nupat.com.ng
              </p>
              <p className=" mb-4 p-4 text-xs xl:text-2xl lg:text-2xl flex items-center gap-2 bg-white">
                <img src={mess} alt="mess" />
                +2348031958586, +2347081475750
              </p>
              <div className=" flex justify-center items-center bg-white p-4 gap-4 h-14 lg:h-16 xl:h-16 mb-4 xl:mb-20">
                <img src={foot4} alt="" />
                <img src={foot5} alt="" />
                <img src={foot6} alt="" />
                <img src={foot7} alt="" />
              </div>
            </div>
            <div className=" xl:flex md:flex justify-end relative md:top-28 lg:top-28 xl:top-28 md:-mt-28 lg:-mt-28 xl:-mt-28 hidden">
              <Link to="/faq">
                <img src={mess1} alt="mess" className=" p-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" mt-10 xl:mt-24 md:mt-10 text-white md:text-xl xl:text-base lg:text-base text-sm p-8 xl:px-14 lg:px-16 pt-10 bg-black mx-4 lg:mx-0 xl:mx-0"
      >
        <div className=" xl:flex flex flex-col xl:flex-row lg:flex-row justify-around">
          <div className="relative bottom-6">
            <img src={logo} alt="logo" className="relative right-8" />
            <p className=" relative bottom-7 -mb-0 w-[296px]">
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
                About Us
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                Jobs
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                Contact Us
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                FAQs
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                Find other services
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                Talent Acquisition
              </p>
            </div>
          </div>
          <div>
            <h1 className=" pb-4 text-base xl:text-2xl font-semibold">
              BUSINESS SUPPORT SERVICES
            </h1>
            <div className=" grid grid-cols-2 lg:grid-cols-1 xl:grid xl:grid-cols-1">
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Recruitment
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Background Checks
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                IT Outsourcing
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Digital Marketing
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Learning Solution
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Sales Outsourcing
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
            <div className="flex items-center gap-5 pb-5 xl:pb-0 h-10 xl:h-8">
              <img src={foot4} alt="foot4" />
              <img src={foot5} alt="foot5" className=" h-8" />
              <img src={foot6} alt="foot6" className=" h-7" />
              <img src={foot7} alt="foot7" className=" h-7" />
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

export default Contact;

import React from "react";
import "./Contact.css";
import { useState } from "react";
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.png";
import foot from "./assets/foot.png";
import foot1 from "./assets/foot1.png";
import foot2 from "./assets/foot2.png";
import foot3 from "./assets/foot3.png";
import foot4 from "./assets/foot4.png";
import foot5 from "./assets/foot5.png";
import foot6 from "./assets/foot6.png";
import foot7 from "./assets/foot7.png";
import video from "./assets/contact/video.png";
import call from "./assets/contact/call.png";
import mess from "./assets/contact/mess.png";
import mess1 from "./assets/contact/circle.png";
import { Link } from "react-router-dom";

import emailjs from "emailjs-com";
import { useRef } from "react";
