const Service = () => {
  const [navClose, setNavClose] = useState(true);
  const [drop, setDrop] = useState(true);
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
        className="nav flex px-0 gap-20 lg:gap-2 bg-black xl:flex items-center justify-around xl:gap-[81px] sticky top-0 xl:px-4 z-10 md:gap-[600px]"
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
            <li className=" underline">
              <div className="" onClick={() => setDrop(!drop)}>
                {drop ? (
                  <div className=" flex items-center gap-2">
                    SERVICES
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
                <li className=" flex items-center gap-2">SERVICES</li>
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
        className="serv h-[104px] lg:h-72 md:h-[200px] xl:h-72 flex justify-center items-center text-center"
      >
        <div className="">
          <h1 className="hit text-base md:text-3xl lg:text-4xl xl:text-4xl pb-5 xl:pb-10 lg:pb-8 font-semibold ">
            OUR SERVICE
          </h1>
          <p className=" text-white text-xs lg:text-2xl md:text-xl xl:text-2xl">
            WHAT WE OFFER
          </p>
        </div>
      </div>

      <div style={{ fontFamily: "Montserrat" }} className="most">
        <h1 className=" justify-center lg:text-3xl xl:text-4xl text-black lg:py-5 md:py-5 xl:py-8 font-semibold xl:flex hidden lg:flex md:flex md:text-2xl">
          THE MOST OUTSTANDING SERVICES FOR YOUR BUSINESS
        </h1>
        <h1 className=" flex justify-center text-[15px] text-center text-black py-4 font-semibold xl:hidden lg:hidden md:hidden">
          THE MOST OUTSTANDING SERVICES FOR <br /> YOUR BUSINESS
        </h1>
        <p className=" hidden xl:flex justify-center text-base lg:flex md:hidden">
          NUPAT provides a wide range of business outsourcing services to
          increase client’s productivity, operational efficiency, and in turn
          profit
        </p>
        <p className=" flex justify-center text-xs text-center xl:hidden lg:hidden md:block md:text-xl">
          NUPAT provides a wide range of business outsourcing <br /> services to
          increase client’s productivity, operational <br /> efficiency, and in
          turn profit
        </p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-4 lg:pt-10 xl:pt-10 lg:px-24 xl:px-[90px] gap-4 lg:gap-20 xl:gap-0">
          <p className=" bg-black text-[16px] flex justify-center font-semibold rounded-xl py-3 w-52 text-[#03CFD6] ml-6 xl:hidden lg:hidden md:py-4 md:ml-12">
            BUSINESS ADVISORY
          </p>
          <div className=" px-8 xl:px-0 lg:px-0 md:ml-5 xl:ml-0 lg:ml-0">
            <img src={pic} alt="" />
          </div>
          <div>
            <p className=" text-[#03CFD6] lg:text-2xl xl:text-4xl lg:flex w-[416px] xl:flex bg-black hidden font-semibold justify-center mb-4 rounded-xl m-auto py-2">
              BUSINESS ADVISORY
            </p>
            <p className=" hidden xl:block text-lg w-[670px] h-[216px]">
              Business Advisory is more than helping clients understand the
              figures of business. We not only advise, aid and assist companies
              inidentifying their potentials and overcoming obstacles in
              specific area. <br /> <br />
              Growth of businesses in terms of customers, business opportunities{" "}
              and advancement,
              <span className="text-4xl font-semibold">NUPAT Teams</span> help
              in strategising <br /> plans at every level, help start ups to
              achieve maximum profit from their businesses.
            </p>
            <p className=" xl:hidden lg:block lg:text-lg text-xs pb-4 px-5 md:py-4 md:px-12 lg:px-0 md:text-xl">
              Business Advisory is more than helping clients understand the
              figures of business. We not only advise, aid and assist companies
              inidentifying their potentials and overcoming obstacles in
              specific area. <br /> <br />
              Growth of businesses in terms of customers, business opportunities
              and advancement, NUPAT Teams help in strategisingplans at every
              level, help start ups to achieve maximum profit fromtheir
              businesses.
            </p>
            <button className=" xl:ml-0 xl:mt-10 ml-5 md:ml-12 lg:ml-0 w-[120px] xl:w-[160px] h-[48px]">
              <Link to="/business">Read More</Link>
            </button>
          </div>
          <div className=" xl:pt-[40px]">
            <p className=" text-[#03CFD6] lg:text-2xl xl:text-4xl text-[16px] w-[280px] lg:w-full xl:w-[556px] lg:ml-0 xl:m-auto ml-6 font-semibold bg-black flex justify-center mb-4 rounded-xl md:py-4 py-3 lg:py-2 xl:py-2 md:ml-12">
              RECRUITMENT & SELECTION
            </p>
            <div className=" px-8 xl:hidden lg:hidden md:ml-5">
              <img src={pic2} alt="" />
            </div>
            <p className="hidden xl:block w-[670px] h-[168px] lg:hidden text-lg pt-4">
              Every department in an organization is entrusted with various
              roles which are critical to the development and growth of that
              entity. We designed to maximize employee strength in order to meet
              the employer's strategic goals and objectives. <br /> <br />
              <p>
                At{" "}
                <span className=" text-xl lg:font-medium md:font-medium xl:font-medium">
                  NUPAT
                </span>
                , the goal is to connect prospective selected candidates
                competent to fill up particular roles seamless without hassles.
              </p>
            </p>
            <p className=" xl:hidden lg:block lg:text-lg lg:pt-0 text-xs pb-4 px-5 pt-4 md:text-xl md:px-12">
              Every department in an organization is entrusted with various
              roles which are critical to the development and growth of that
              entity. We designed to maximize employee strength in order to meet
              the employer's strategic goals and objectives. <br /> <br />
              <p>
                At NUPAT , the goal is to connect prospective selected
                candidates competent to fill up particular roles seamless
                without hassles.
              </p>
            </p>
            <button className=" xl:ml-0 xl:mt-16 lg:ml-0 ml-5 w-[120px] xl:w-[160px] h-[48px] md:ml-12">
              <Link to="/recruitement">Read More</Link>
            </button>
          </div>
          <div className=" xl:block hidden lg:block ml-[100px] xl:mt-[40px]">
            <img src={pic2} alt="" />
          </div>
          <div className=" xl:mt-[40px]">
            <img src={pic5} alt="" className=" hidden xl:block lg:block" />
          </div>
          <div className=" xl:pt-[40px]">
            <p className=" text-[#03CFD6] hidden lg:flex xl:flex lg:text-2xl xl:text-4xl bg-black justify-center mb-4 rounded-xl lg:mx-20 xl:mx-36 py-2">
              IT SOLUTION
            </p>
            <p className=" text-[#03CFD6] w-56 lg:hidden xl:hidden text-base bg-black flex justify-center mb-4 rounded-xl py-3 ml-6 md:py-4 md:ml-12">
              IT SOLUTION
            </p>
            <div>
              <img
                src={pic5}
                alt=""
                className=" px-8 xl:px-0 xl:hidden lg:hidden pb-4 md:ml-4"
              />
            </div>
            <p className=" hidden w-[670px] h-[341px] xl:block lg:hidden text-lg pb-4">
              Every organisation has different IT needs. The ever-evolving
              technology needs has to be addressed in order to keep up the pace
              with competitors and deliver more value to cutomers. <br /> <br />
              Our IT Outsourcing services allow business executives to retain
              and control IT strategies for more efective delivery of IT-enabled
              business processes, application services and infrastructure
              solutions for business outcomes. <br /> <br />
              <span className=" font-semibold">
                NUPAT Outsourcing Agency
              </span>{" "}
              has been acclaimed for our endeavor toward quality, consistent
              support and consulting and we also understand how important it is
              for businesses to implement solutions that are cost effective and
              reliable for businesses relating to IT Solutions.
            </p>
            <p className=" xl:hidden lg:block lg:text-lg text-xs lg:px-0 px-5 pb-4 md:px-12 md:text-xl">
              Every organisation has different IT needs. The ever-evolving
              technology needs has to be addressed in order to keep up the pace
              with competitors and deliver more value to cutomers. <br /> <br />
              Our IT Outsourcing services allow business executives to retain
              and control IT strategies for more eefective delivery of
              IT-enabled business processes, application services and
              infrastructure solutions for business outcomes. <br /> <br />
              NUPAT Outsourcing Agency has been acclaimed for our endeavor
              toward quality, consistent support and consulting and we also
              understand how important it is for businesses to implement
              solutions that are cost effective and reliable for businesses
              relating to IT Solutions.
            </p>
            <button className=" lg:ml-0 xl:ml-0 ml-5 w-[120px] xl:w-[160px] h-[48px] md:ml-12 xl:mt-14">
              <Link to="/it">Read More</Link>
            </button>
          </div>
          <div className=" xl:pt-[40px]">
            <p className=" text-[#03CFD6] hidden w-[552px] h-[61px] m-auto lg:flex xl:flex lg:text-2xl xl:text-4xl bg-black justify-center mb-4 rounded-xl py-2">
              LEARNING & DEVELOPMENT
            </p>
            <p className=" text-[#03CFD6] w-[280px] text-[16px] lg:hidden xl:hidden text-base bg-black flex justify-center mb-4 rounded-xl py-3 ml-6 md:py-4 md:ml-10">
              LEARNING & DEVELOPMENT
            </p>
            <div className="xl:hidden lg:hidden px-8 pb-4 md:ml-4">
              <img src={pic3} alt="" />
            </div>
            <p className=" hidden xl:block w-[670px] h-[325px] lg:hidden text-lg pb-4">
              In an environment where the only continuous thing is change,
              learning has become completely vital to every organisation’s
              competitiveness. Our learning and development services simplify
              workforce advancement and increase employee performance by
              providing clear and helpful training. <br /> <br />
              Learning and development is very esssential for the training of
              employee of an organisation. Employee needs to relearn and
              unlearn, so they can develop in their chosen career within the
              organisation. <br />
              <br />
              In
              <span className=" font-semibold"> NUPAT Outsourcing Agency,</span>
              we help individuals transform themselves, their teams and their
              organisations so they have more impact.
            </p>
            <p className=" xl:hidden lg:block lg:text-lg text-xs pb-4 px-5 md:px-12 lg:px-0 md:text-xl">
              In an environment where the only continuous thing is change,
              learning has become completely vital to every organisation’s
              competitiveness. Our learning and development services simplify
              workforce advancement and increase employee performance by
              providing clear and helpful training. <br /> <br />
              Learning and development is very esssential for the training of
              employee of an organisation. Employee needs to relearn and
              unlearn, so they can develop in their chosen career within the
              organisation. <br /> <br />
              In NUPAT Outsourcing Agency, we help individuals transform
              themselves, their teams and their organisations so they have more
              impact.
            </p>
            <button className=" xl:ml-0 ml-5 w-[120px] xl:w-[160px] h-[48px] lg:ml-0 md:ml-12 xl:mt-14">
              <Link to="/learning">Read More</Link>
            </button>
          </div>
          <div className=" hidden xl:block lg:block mt-[40px ml-[100px]">
            <img src={pic3} alt="" />
          </div>
          <div className=" xl:pt-[40px]">
            <img src={pic4} alt="" className="hidden xl:block lg:block" />
          </div>
          <div className=" xl:pt-[40px]">
            <p className=" text-[#03CFD6] lg:text-2xl xl:text-4xl bg-black justify-center mb-4 rounded-xl xl:mx-28 lg:mx-20 py-2 xl:flex lg:flex hidden">
              ADMINISTRATION
            </p>
            <p className=" text-[#03CFD6] w-56 text-base bg-black flex justify-center mb-4 rounded-xl py-3 ml-6 xl:hidden lg:hidden md:py-4 md:ml-12">
              ADMINISTRATION
            </p>
            <div>
              <img
                src={pic4}
                alt=""
                className=" xl:hidden lg:hidden px-8 pb-4 md:ml-4"
              />
            </div>
            <p className=" hidden w-[670px] h-[168px] xl:block lg:block text-lg pb-4">
              Every department in a business is entrusted with various roles
              which are critical to the development and growth of that entity,
              with all the activities that businesses engage in, it is essential
              to keep adequate records of everything. <br /> <br />
              At NUPAT, our key responsibility is to provide professional
              outsourced administrative services to our clients.
            </p>
            <p className=" xl:hidden lg:hidden text-xs px-5 pb-4 md:px-12 md:text-xl">
              Every department in a business is entrusted with various roles
              which are critical to the development and growth of that entity,
              with all the activities that businesses engage in, it is essential
              to keep adequate records of everything.
              <br /> <br />
              At NUPAT, our key responsibility is to provide professional
              outsourced administrative services to our clients.
            </p>
            <button className=" lg:ml-0 xl:ml-0 ml-5 w-[120px] xl:w-[160px] h-[48px] md:ml-12 xl:mt-14">
              <Link to="/admistration">Read More</Link>
            </button>
            <Link to="/faq">
              <div className=" flex justify-end lg:pt-14 xl:pt-14 pb-10 pr-8 lg:pr-0 xl:pr-0">
                <img src={mess} alt="mess" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex justify-center">
        <div
          style={{ fontFamily: "Montserrat" }}
          className="bg-[url('/src/assets/about/bg2.png')] xl:w-[1076px] xl:h-[280px] bg-no-repeat bg-center bg-cover xl:px-0 lg:px-0 px-2 mx-6 md:mt-20 h-36 md:h-72 lg:h-72 text-white lg:pt-5 xl:pt-10 md:mx-24 lg:mx-36 lg:mt-10 xl:mx-[130px] mt-5 xl:mt-10"
        >
          <div className="flex justify-around items-center">
            <div className=" text-[10px] xl:text-3xl lg:text-2xl md:text-xl xl:h-[117px] w-[183.29px] md:w-[519px] xl:w-[519px]">
              <h1>
                Schedule a free consultaion to take your business to the next
                level.
              </h1>
            </div>
            <div className=" py-1 xl:py-0 lg:py-0 md:py-0 text-[10px] xl:text-xl md:text-xl xl:w-[224px] lg:w-[224px] md:w-[220px] xl:h-[48px] md:h-[48px] lg:h-[48px] flex items-center lg:text-xl text-black xl:bg-yellow-300 md:bg-yellow-300 lg:bg-yellow-300 bg-[#03CFD6] rounded-md px-1 md:p-2 lg:p-2 lg:mt-40 md:mt-40 xl:p-2 mt-20 xl:mt-40">
              <p>Get in touch with us </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex hidden justify-around xl:gap-[220px] items-center pt-14 lg:flex md:flex md:mx-0 xl:mx-0 lg:mx-0"
      >
        <div className=" flex flex-col pr-10 pt-5">
          <h1 className=" md:text-xl lg:text-2xl xl:text-2xl pb-2 font-semibold">
            Subscribe
          </h1>
          <p className="text-base pb-2">
            Create better experience with our business solution by subscribing{" "}
            <br /> to our newsletter.
          </p>

          <div className=" bg-black p-4 rounded-xl mr-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" flex justify-center"
            >
              <input
                type="text"
                placeholder="Enter your Email Address"
                className=" bg-white text-base flex justify-start pl-2 border-transparent w-96 md:w-[300px]"
                name="user_email"
              />
              <button
                className=" bg-black text-white text-base px-20 py-2 rounded-xl relative right-2"
                type="submit"
                value="Send"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <Link to="/faq">
          <div>
            <img
              src={mess}
              alt="mess"
              className=" md:hidden xl:block lg:block"
            />
          </div>
        </Link>
      </div> */}

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

export default Service;

import React from "react";
import "./service.css";
import logo from "./assets/logo.png";
import { useState } from "react";
import arrow from "./assets/arrow.png";
import { Link } from "react-router-dom";
import mess from "./assets/contact/circle.png";
import pic from "./assets/service/pic.png";
import pic2 from "./assets/service/pic2.png";
import pic3 from "./assets/service/pic3.png";
import pic4 from "./assets/service/pic4.png";
import pic5 from "./assets/service/pic5.png";
import foot from "./assets/foot.png";
import foot1 from "./assets/foot1.png";
import foot2 from "./assets/foot2.png";
import foot3 from "./assets/foot3.png";
import foot4 from "./assets/foot4.png";
import foot5 from "./assets/foot5.png";
import foot6 from "./assets/foot6.png";
import foot7 from "./assets/foot7.png";

// import emailjs from "emailjs-com";
// import { useRef } from "react";
