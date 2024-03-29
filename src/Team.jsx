const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [navClose, setNavClose] = useState(true);
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="nav flex px-0 gap-20 bg-black lg:flex items-center justify-around lg:gap-16 sticky top-0 lg:px-14 z-10 "
      >
        <div className=" mr-20 lg:mr-0 flex items-center text-center h-20 pt-6">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden text-white lg:flex">
          <ul className=" flex gap-16 items-center text-center">
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
        <div className="flex justify-end lg:hidden mr-6">
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
            <div className=" text-white lg:hidden">
              <ul className=" flex flex-col gap-4 items-center pt-4 md:gap-6">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li className=" flex items-center gap-2">
                  <Link to="/service">SERVICES</Link>
                  <img src={arrow} alt="arrow" />
                </li>
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
        className="back flex h-[104px] justify-center items-center text-center"
      >
        <div data-aos="zoom-in" className="">
          <h1 className="hit font-semibold text-base pb-4">MANAGEMENT TEAM</h1>
          <p className=" text-white text-xs pr-28">
            YOUR BUSINESS IS IN SAFE HAND
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="team2 flex flex-col items-center gap-8 font-semibold pt-8 pb-[50px]"
      >
        <div data-aos="zoom-in">
          <div className=" h-72 w-72 rounded-3xl relative -mt-[160px] top-[160px]">
            <img src={ceo} className="image1 object-cover" alt="" />
          </div>
          <div className="text flex justify-center items-center bg-[white] flex-col pt-40 text-lg h-[260px] w-[100%]">
            <p>Nnamdi Ugwu</p>
            <p>CEO Managing Director</p>
            {/* <button className=" bg-[#1F335F] text-white mt-4 px-4 py-1 rounded-lg">
              See More
            </button> */}
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className=" h-72 w-72 rounded-3xl relative -mt-[160px] top-[160px]">
            <img src={coo} className="image1 object-cover" alt="" />
          </div>
          <div className="text flex justify-center items-center bg-[white] flex-col pt-40 text-lg h-[260px] w-[100%]">
            <p>Olanrewaju Paul</p>
            <p>COO Business Manager</p>
            {/* <button className=" bg-[#1F335F] text-white mt-4 px-4 py-1 rounded-lg">
              See More
            </button> */}
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className=" h-72 w-72 rounded-3xl relative -mt-[160px] top-[160px]">
            <img src={cto} className="image1 object-cover" alt="" />
          </div>
          <div className="text flex justify-center items-center bg-[white] flex-col pt-40 text-lg h-[260px] w-[100%]">
            <p>Chibuike Ugwu</p>
            <p>CEO Managing Director</p>
            {/* <button className=" bg-[#1F335F] text-white mt-4 px-4 py-1 rounded-lg">
              See More
            </button> */}
          </div>
        </div>
      </div>

      {/* <div className=" flex justify-end h-18 p-3">
        <Link to="/faq">
          <img src={mess} alt="mess" />
        </Link>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="lg:hidden flex justify-center mx-14"
      >
        <div className=" flex flex-col">
          <h1 className=" text-xl pb-2">Subscribe</h1>
          <p className=" text-sm pb-2">
            Create better experience with our business solution by subscribing{" "}
            <br /> to our newsletter.
          </p>

          <div className=" bg-black p-4 rounded-lg">
            <div className=" flex justify-center">
              <input
                type="text"
                placeholder="Enter your Email Address"
                className=" bg-white text-base flex justify-start pl-2 border-transparent lg:w-96"
              />
              <button className=" bg-black text-white text-sm px-4 rounded-lg relative">
                Subscribe
              </button>
            </div>
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

export default Team;

import React from "react";
import "./team.css";
// import mess from "./assets/contact/circle.png";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import arrow from "./assets/arrow.png";
import { useState } from "react";
import foot from "./assets/foot.png";
import foot1 from "./assets/foot1.png";
import foot2 from "./assets/foot2.png";
import foot3 from "./assets/foot3.png";
import foot4 from "./assets/foot4.png";
// import foot5 from "./assets/foot5.png";
import foot6 from "./assets/foot6.png";
import foot7 from "./assets/foot7.png";
import ceo from "./assets/about/nupat.png";
import coo from "./assets/about/paulo.png";
import cto from "./assets/about/henry.png";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
