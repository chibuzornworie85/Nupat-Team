const Additional = () => {
  const [hear, setHear] = useState("");
  const [referral, setRerral] = useState("");
  const [hearError, setHearError] = useState("");
  const [referralError, setRerralError] = useState("");

  const navigate = useNavigate();

  const validateForm = (event) => {
    event.preventDefault();

    if (hear.trim() === "") {
      setHearError("Please add up.");
      return;
    }
    if (referral.trim() === "") {
      setRerralError("Please add up.");
      return;
    }

    // window.location.href = "/";
    navigate("/");
  };

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_6z6j9vv",
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
      <div className="hidden lg:flex md:hidden xl:flex">
        <div className=" bg-[url(./assets/new/join.png)] bg-cover bg-no-repeat bg-center w-[20%] h-[100vh] sticky top-0">
          <div className=" flex items-center text-center h-20 pt-12">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className=" bg-[#e0e0e069] w-[80%]">
          <div className=" bg-[#000] flex sticky top-0 flex-col p-3">
            <div className=" flex justify-between px-[30px]">
              <h1 className=" text-[#03CFD6] text-[40px]">
                Additional Information
              </h1>
              <p className=" text-white text-3xl">3/3</p>
            </div>
            <p className=" text-white text-[24px] ml-[30px]">
              LET’S know who introuded you to Nupat Team
            </p>
          </div>
          <form
            ref={form}
            onSubmit={validateForm}
            onClick={sendEmail}
            className="join h-[100vh] px-[40px]"
          >
            <h1 className=" pt-[30px] font-bold text-2xl">Resume and Skills</h1>
            <div className=" flex flex-col pt-[30px] gap-8">
              <div className=" pb-2">
                <p>* Resume</p>
                <input
                  type="file"
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_resume"
                />
              </div>
              <div className=" pb-2">
                <p>How did you hear about us?</p>
                <input
                  type="text"
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_howdidyouhear"
                  value={hear}
                  onChange={(e) => setHear(e.target.value)}
                  required
                />
                {hearError && <p>{hearError}</p>}
              </div>
              <div className=" pb-2">
                <p>Name of Referral</p>
                <input
                  type="radius"
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_nameOfReferral"
                  value={referral}
                  onChange={(e) => setRerral(e.target.value)}
                  required
                />
                {referralError && <p>{referralError}</p>}
              </div>
              <p>
                By submitting to this form, you agree to Nupat Team's{" "}
                <span className=" underline text-[red]">
                  term and condition
                </span>{" "}
              </p>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] mt-[15px]">
              <button type="submit" value="Send">
                Submit form
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
          <form
            ref={form}
            onSubmit={validateForm}
            onClick={sendEmail}
            className="join pb-[20px]"
          >
            <h1 className=" pt-[10px] font-bold text-2xl pl-[18px]">
              Resume and Skills
            </h1>
            <div className=" flex flex-col pt-[30px] gap-5 mx-[15px]">
              <div className=" pb-2">
                <p>* Resume</p>
                <input
                  type="file"
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_resume"
                />
              </div>
              <div className=" pb-2">
                <p>How did you hear about us?</p>
                <input
                  type="text"
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_howdidyouhear"
                  value={hear}
                  onChange={(e) => setHear(e.target.value)}
                  required
                />
                {hearError && <p>{hearError}</p>}
              </div>
              <div className=" pb-2">
                <p>Name of Referral</p>
                <input
                  type="radius"
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_nameOfReferral"
                  value={referral}
                  onChange={(e) => setRerral(e.target.value)}
                  required
                />
                {referralError && <p>{referralError}</p>}
              </div>
              <p>
                By submitting to this form, you agree to Nupat Team's{" "}
                <span className=" underline text-[red]">
                  term and condition
                </span>{" "}
              </p>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[15px] mt-[15px]">
              <button type="submit" value="Send">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Additional;

import emailjs from "emailjs-com";
import React, { useState } from "react";
import { useRef } from "react";
import logo from "./assets/logo.png";
import "./join.css";
import { useNavigate } from "react-router-dom";
