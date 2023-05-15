const Recruitement = () => {
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
        className="nav flex px-0 gap-20 lg:gap-2 bg-black xl:flex items-center justify-around xl:gap-16 sticky top-0 xl:px-4 z-10 md:gap-[550px]"
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
                    <div className="close1 absolute left-[540px] bg-black flex flex-col items-start gap-2 text-[#03cfd6] top-[50px] p-[20px]">
                      <h1 className=" hover:underline">
                        <Link to="/business">BUSINESS ADVISORY</Link>
                      </h1>
                      <h1 className=" underline">
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
        className="rec text-white py-6 md:py-10 lg:py-10 xl:py-10 pl-8 md:pl-14 text-xs lg:pl-20 xl:pl-[80px] md:text-xl lg:text-2xl xl:text-2xl font-semibold"
      >
        <h1>
          <span>Home</span>/Recruitment & Selection
        </h1>
      </div>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="bg-[url('/src/assets/rec/bg.png')] bg-no-repeat bg-center bg-cover"
      >
        <div className=" xl:py-32 lg:py-32 md:py-16 py-12 pl-7 text-white xl:pl-[80px] md:pl-14 lg:pl-20">
          <h1 className=" font-semibold text-[13px] md:text-2xl lg:text-3xl xl:text-4xl xl:pb-4 lg:pb-4 pb-2">
            Outsource for Success, Hire Competency...
          </h1>
          <p className=" text-[10px] md:text-xl lg:text-2xl xl:text-2xl text-[#03cfd6]">
            We help business outsource, select, engage and keep top talents
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-black h-[164px] xl:h-32 lg:h-32 px-0 text-[14px] lg:text-[16px] xl:text-[16px] lg:items-center lg:flex lg:justify-center lg:px-16 xl:items-center xl:justify-center flex xl:px-16 "
      >
        <div className=" flex flex-col lg:flex-row md:hidden lg:gap-5 lg:justify-around m-auto xl:flex-row xl:flex xl:text-center xl:items-center xl:justify-around gap-5 xl:gap-24 text-white">
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

        <div className=" xl:hidden lg:hidden hidden md:flex md:flex-col md:gap-5 md:pt-5 md:pl-[50px] text-white">
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
        style={{ fontFamily: "Montserrat" }}
        className=" flex flex-col lg:flex-row xl:flex-row justify-around md:px-10 px-10 lg:px-1 xl:px-12 mt-10"
      >
        <div className="flex flex-col gap-4 text-[16px] xl:text-3xl lg:text-2xl md:px-10 lg:px-0 xl:px-0">
          <h2 className="bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/business">Business Advisory</Link>
          </h2>
          <p className=" text-[#03CFD6] font-semibold bg-[#e6e6e6] h-16 p-4 w-full">
            Recruitment & Selection
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/it">IT Solution</Link>
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/learning">Learning and Development</Link>
          </p>
          <p className=" bg-[#e6e6e6] h-16 p-4 w-full">
            <Link to="/admistration">Administration</Link>
          </p>
        </div>
        <div className="it1 bg-[url('/src/assets/rec/bg1.png')] bg-no-repeat bg-cover bg-center rounded-2xl ml-5 xl:ml-0 lg:ml-0 mt-8 lg:mt-0 xl:mt-0 lg:w-2/4 xl:w-2/4 h-52 lg:h-96 xl:h-96 flex justify-center md:mx-24 lg:mx-0 xl:mx-0">
          <div className=" text-xl xl:text-5xl text-white flex justify-center items-center font-semibold">
            <h1 className="">Recruitment & Selection</h1>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" text-base md:text-xl lg:text-2xl xl:text-2xl flex justify-around items-center pt-10 lg:gap-72 xl:gap-72 xl:px-12"
      >
        <Link to="/faq">
          <div className=" pt-14 items-center hidden xl:flex xl:ml-[50px]">
            <img src={mess} alt="mess" />
          </div>
        </Link>
        <div className="what md:text-xl xl:text-[20px] lg:text-[20px] flex flex-col gap-4 px-6 xl:px-0 lg:px-0 md:px-14 xl:w-[702px] xl:ml-[180px]">
          <h1 className=" font-semibold">What We Offer at NUPAT</h1>
          <p className=" hidden xl:block lg:block">
            NUPAT Outsourcing offers Human Resource Outsourcing which includes
            employee management, performance management, and payroll processing.
            Our esteemed clientele base cuts across different industries like
            Banking, Telecoms, Tech Start-ups, Fin-techs and Information
            Technology.
          </p>
          <p className=" xl:hidden lg:hidden">
            NUPAT Outsourcing offers Human Resource Outsourcing which includes
            employee management, performance management, and payroll processing.
            Our esteemed clientele base cuts across different industries like
            Banking, Telecoms, Tech Start-ups, Fin-techs and Information
            Technology.
          </p>
          <p className=" hidden xl:block lg:block">
            No matter how complex your finances or personal situation, we have
            the expertise and market-leading tools at our disposal to provide
            you with sophisticated and forward-thinking advice, tailored
            precisely to your needs.
          </p>
          <p className=" xl:hidden lg:hidden">
            No matter how complex your finances or personal situation, we have
            the expertise and market-leading tools at our disposal to provide
            you with sophisticated and forward-thinking advice, tailored
            precisely to your needs.
          </p>
          <p className=" hidden xl:block lg:block">
            Your personal wealth adviser will consider your finances as a whole
            to ensure your plans, savings and investments are working hard, and
            harmoniously together, to achieve your objectives both now and in
            the future.
          </p>
          <p className=" xl:hidden lg:hidden">
            Your personal wealth adviser will consider your finances as a whole
            to ensure your plans, savings and investments are working hard, and
            harmoniously together, to achieve your objectives both now and in
            the future.
          </p>
          <h1 className=" font-semibold">
            Why this service is important for your business?
          </h1>
          <p className=" hidden xl:block lg:block">
            <span>Recruitment & Selection:</span> Because the quality of
            personnel is a critical success factor for your business, you can
            count on us to manage and optimize your recruitment and selection
            needs.
          </p>
          <p className="xl:hidden lg:hidden">
            <span>Recruitment & Selection:</span> Because the quality of
            personnel is a critical success factor for your business, you can
            count on us to manage and optimize your recruitment and selection
            needs.
          </p>
          <p className=" xl:block hidden lg:block">
            <span>Personnel Recruitment Services:</span> The employment of
            trained and tested employees goes a long way in achieving your
            organization’s corporate goals. We recruit the best hands to meet
            your unique employee needs. Our services include:
          </p>
          <p className="xl:hidden lg:hidden">
            <span>Personnel Recruitment Services:</span> The employment of
            trained and tested employees goes a long way in achieving your
            organization’s corporate goals. We recruit the best hands to meet
            your unique employee needs. Our services include:
          </p>
          <ul className=" list-disc pl-12">
            <li>
              Recruitment of professionals for specific positions as advised by
              our clients.
            </li>
          </ul>
          <ul className=" list-disc pl-12">
            <li>
              Head hunting of experienced hands to fill vacant management
              positions.
            </li>
          </ul>
          <ul className=" list-disc pl-12">
            <li> Recruitment of various categories of support staff.</li>
          </ul>
          <p className=" hidden xl:block lg:block">
            <span>Recruitment Process Review:</span> We review and refine our
            recruitment processes continuously in line with international best
            practices. We achieve this by:
          </p>
          <p className=" xl:hidden">
            <span>Recruitment Process Review:</span> We review and refine our
            recruitment processes continuously in line with international best
            practices. We achieve this by:
          </p>
          <ul className=" list-disc pl-12">
            <li className=" hidden xl:block lg:block">
              Developing strategic recruitment initiatives based on the current
              demographics of our client's workforce.
            </li>
            <li className=" xl:hidden lg:hidden">
              Developing strategic recruitment initiatives based on the current
              demographics of our client's workforce.
            </li>
          </ul>
          <ul className=" list-disc pl-12">
            <li>
              Adopting more efficient and professional recruitment processes.
            </li>
          </ul>
          <ul className=" list-disc pl-12">
            <li className=" hidden xl:block lg:block">
              Reviewing and recommending the best selection techniques based on
              the client's unique needs.
            </li>
            <li className=" xl:hidden lg:hidden">
              Reviewing and recommending the best selection techniques based on
              the client's unique needs.
            </li>
          </ul>
          <ul className=" list-disc pl-12">
            <li>Developing work assessments in line with job requirements.</li>
          </ul>
        </div>
      </div>
      {/* <Link to="/faq">
        <div className=" flex justify-end xl:hidden mr-10 pt-10">
          <img src={mess} alt="mess" />
        </div>
      </Link> */}

      {/* <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex flex justify-center lg:justify-start md:justify-start xl:justify-start pt-8 xl:pt-16 lg:pl-14 xl:pl-16 md:pb-20 lg:pb-20 xl:pb-20 mx-14"
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
                className=" bg-black text-white xl:text-base px-4 lg:text-base md:text-base xl:px-20 xl:py-2 md:px-10 lg:px-20 md:py-2 lg:py-2 rounded-xl relative lg:right-2 xl:right-2 md:right-1"
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
            <div className="flex gap-5 items-center pb-5 xl:pb-0 h-10 xl:h-8">
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

export default Recruitement;

import React from "react";
import "./recruitement.css";
import { useState } from "react";
import logo from "./assets/logo.png";
import mess from "./assets/contact/circle.png";
import arrow from "./assets/arrow.png";
import { Link } from "react-router-dom";
import box from "./assets/box.png";
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
