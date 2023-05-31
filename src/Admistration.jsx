const Admistration = () => {
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
        className="nav flex px-0 gap-20 lg:gap-2 bg-black xl:flex items-center justify-around xl:gap-16 sticky top-0 xl:px-4 z-10 md:gap-[560px]"
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
                      <h1 className=" hover:underline">
                        <Link to="/IT">IT SOLUTION</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/learning">LEARNING DEVELOPMENT</Link>
                      </h1>
                      <h1 className=" underline">
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
        className="rec text-white py-6 md:py-10 lg:py-10 xl:py-10 pl-10 text-xs md:pl-14 lg:pl-[60px] xl:pl-[100px] md:text-xl lg:text-2xl xl:text-2xl font-semibold"
      >
        <h1 data-aos="zoom-in">
          <span>Home</span>/Administration
        </h1>
      </div>
      <div
        data-aos="zoom-in"
        className="bg-black bg-no-repeat bg-center bg-cover"
      >
        <div className=" xl:py-32 md:py-14 lg:py-32 lg:pl-[60px] md:pl-14 py-12 pl-7 text-white xl:pl-[100px]">
          <h1 className=" font-semibold text-[15px] md:text-xl lg:text-4xl lg:pb-4 md:pb-4 xl:text-4xl xl:pb-4 pb-2">
            Outsource for Success, Hire Competency...
          </h1>
          <p className=" text-xs lg:text-2xl md:text-xl xl:text-2xl text-[#03cfd6]">
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

        <div className=" xl:hidden lg:hidden hidden md:flex md:flex-col md:gap-5 md:pt-5 md:pl-[59px] text-white">
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
        className=" flex flex-col lg:flex-row xl:flex-row justify-around md:px-10 px-10 lg:px-[20px] xl:px-12 mt-10"
      >
        <div className="flex flex-col gap-4 text-lg xl:text-3xl lg:text-2xl md:px-10 lg:px-0 xl:px-0">
          <h2 className="bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/business">Business Advisory</Link>
          </h2>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/recruitement"> Recruitment & Selection</Link>
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full ">
            <Link to="/it">IT Solution</Link>
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/learning">Learning and Development</Link>
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full text-[#03CFD6] font-semibold">
            <Link to="/admistration">Administration</Link>
          </p>
        </div>
        <div className="it1 bg-[url('/src/assets/admi/stage.png')] bg-no-repeat bg-cover bg-center rounded-2xl ml-5 xl:ml-0 lg:ml-0 mt-8 lg:mt-0 xl:mt-0 lg:w-2/4 xl:w-2/4 h-52 lg:h-96 xl:h-96 flex justify-center md:mx-24 lg:mx-0 xl:mx-0">
          <div className=" text-xl xl:text-5xl text-white flex justify-center items-center font-semibold">
            <h1 className="">Administration</h1>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        style={{ fontFamily: "Montserrat" }}
        className="text-base lg:text-2xl md:text-2xl xl:text-2xl flex justify-around items-center pt-10 lg:gap-72 xl:gap-72 xl:px-16"
      >
        <Link to="/faq">
          <div className=" xl:flex lg:flex pt-14 items-center hidden xl:ml-[50px]">
            <img src={mess} alt="mess" />
          </div>
        </Link>

        <div className=" what flex flex-col gap-4 px-6 xl:px-0 lg:px-0 md:px-14 xl:w-[702px] lg:w-[500px] xl:ml-[160px] md:text-xl xl:text-[20px] lg:text-[20px]">
          <p className=" hidden xl:block">
            Every department in a business is entrusted with various roles which
            are critical to the development and growth of that entity, with all
            the activities that businesses engage in, it is essential to keep
            adequate records of everything.
          </p>
          <p className="xl:hidden lg:hidden">
            Every department in a business is entrusted with various roles which
            are critical to the development and growth of that entity, with all
            the activities that businesses engage in, it is essential to keep
            adequate records of everything.
          </p>

          <p className=" hidden xl:block lg:block">
            At NUPAT Outsourcing Agency, our key responsibily is to provide
            professional outsourced administrative services to our clients.
          </p>
          <p className=" xl:hidden lg:hidden">
            At NUPAT Outsourcing Agency, our key responsibily is to provide
            professional outsourced administrative services to our clients.
          </p>

          <p className=" hidden xl:block lg:block">
            Outsourcing administrative services to NUPAT will give you access to
            confidential and quick assistance with the services listed below.
          </p>
          <p className="xl:hidden lg:hidden">
            Outsourcing administrative services to NUPAT will give you access to
            confidential and quick assistance with the services listed below.
          </p>

          <h1 className=" font-semibold md:text-xl lg:text-2xl xl:text-2xl">
            Why this service is important for your business?
          </h1>

          <ul className=" list-disc pl-12">
            <li>Transcription</li>
            <li>Data Processing</li>
            <li>Data Entry</li>
            <li>Data Mining</li>
            <li>Document Preparation</li>
            <li>Proofreading</li>
            <li>Content Development</li>
            <li>Web Research</li>
            <li>Presentations</li>
          </ul>
        </div>
      </div>
      {/* <Link to="/faq">
        <div className=" flex justify-end xl:hidden mr-10 lg:hidden">
          <img src={mess} alt="mess" />
        </div>
      </Link> */}

      {/* <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex flex justify-center lg:justify-start md:justify-start xl:justify-start pt-8 xl:pt-16 xl:pl-12 lg:pb-20 lg:pt-16 xl:pb-20 mx-14"
      >
        <div className=" flex flex-col xl:pr-10 xl:pt-5 lg:pt-5 md:pt-5">
          <h1 className=" text-xl xl:text-2xl pb-2">Subscribe</h1>
          <p className="text-sm xl:text-base pb-2">
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
                className=" bg-black text-white text-sm xl:text-base px-4 md:text-base lg:text-base xl:px-20 xl:py-2 lg:px-20 md:px-10 md:py-2 lg:py-2 rounded-xl relative lg:right-2 xl:right-2 md:right-1"
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
            <a href="https://www.instagram.com/nupat_teams/" target="_blank">
                <img src={foot4} alt="foot4" />
              </a>
              <img src={foot5} alt="foot5" className=" h-8" />
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

export default Admistration;

import React from "react";
import { useState } from "react";
import "./admistration.css";
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.png";
import { Link } from "react-router-dom";
import box from "./assets/box.png";
import mess from "./assets/contact/circle.png";
import foot from "./assets/foot.png";
import foot1 from "./assets/foot1.png";
import foot2 from "./assets/foot2.png";
import foot3 from "./assets/foot3.png";
import foot4 from "./assets/foot4.png";
import foot5 from "./assets/foot5.png";
import foot6 from "./assets/foot6.png";
import foot7 from "./assets/foot7.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// import emailjs from "emailjs-com";
// import { useRef } from "react";
