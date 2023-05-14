import React from "react";

const Additional = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_6z6j9vv",
        "template_04ujg5i",
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
      <div className=" hidden lg:hidden xl:block">
        <div className=" bg-[url(./assets/new/join.png)] bg-cover bg-no-repeat bg-center w-[300px] h-[100%] fixed">
          <div className=" flex items-center text-center h-20 pt-12">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className=" bg-[#e0e0e069] ml-[300px]">
          <div className=" bg-[#000] flex flex-col fixed w-[100%] p-3">
            <div className=" flex items-center gap-[380px] px-[60px]">
              <h1 className=" text-[#03CFD6] text-[40px]">
                Additional Information
              </h1>
              <p className=" text-white text-4xl">3/3</p>
            </div>
            <p className=" text-white text-[24px] ml-[60px]">
              LET’S know who introuded you to Nupat Team
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="join h-[100vh]">
            <h1 className=" pt-[150px] font-bold text-2xl ml-[70px]">
              Resume and Skills
            </h1>
            <div className=" flex flex-col pt-[30px] gap-8 ml-[70px]">
              <div className=" pb-2">
                <p>* Resume</p>
                <input
                  type="file"
                  className=" h-[48px] w-[450px] text-black pl-2"
                  name="user_resume"
                />
              </div>
              <div className=" pb-2">
                <p>How did you hear about us?</p>
                <input
                  type="text"
                  className=" h-[48px] w-[450px] text-black pl-2"
                  name="user_howDoYouHearAboutUs"
                />
              </div>
              <div className=" pb-2">
                <p>Name of Referral</p>
                <input
                  type="radius"
                  className=" h-[48px] w-[800px] text-black pl-2"
                  name="user_referral"
                />
              </div>
              <p>
                By submitting to this form, you agree to Nupat Team's{" "}
                <span className=" underline">term and condition</span>{" "}
              </p>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[75px] mt-[15px]">
              <button type="submit" value="Send">
                <Link to="/">Submit</Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" block xl:hidden lg:hidden bg-[#e0e0e069]">
        <div className=" bg-[#000] sticky top-0 h-[100px]">
          <img src={logo} alt="logo" />
        </div>
        <div className=" flex flex-col h-[80px] t-[10px]">
          <h1 className=" text-[#000] text-[25px] px-4 pt-[20px]">
            Personal Information
          </h1>
          <p className=" px-4 text-[13px]">LET’S GET TO KNOW YOU BETTER</p>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="join pb-[20px]">
            <h1 className=" pt-[10px] font-bold text-2xl pl-[18px]">
              Resume and Skills
            </h1>
            <div className=" flex flex-col pt-[30px] gap-5 items-center">
              <div className=" pb-2">
                <p>* Resume</p>
                <input
                  type="file"
                  className=" h-[48px] w-[340px] text-black pl-2"
                  name="user_resume"
                />
              </div>
              <div className=" pb-2">
                <p>How did you hear about us?</p>
                <input
                  type="text"
                  className=" h-[48px] w-[340px] text-black pl-2"
                  name="user_howDoYouHearAboutUs"
                />
              </div>
              <div className=" pb-2">
                <p>Name of Referral</p>
                <input
                  type="radius"
                  className=" h-[48px] w-[340px] text-black pl-2"
                  name="user_referral"
                />
              </div>
              <p className=" pl-[20px]">
                By submitting to this form, you agree to Nupat Team's{" "}
                <span className=" underline">term and condition</span>{" "}
              </p>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[15px] mt-[15px]">
              <button type="submit" value="Send">
                <Link to="/">Submit</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Additional;

import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useRef } from "react";
import logo from "./assets/logo.png";
import "./join.css";
