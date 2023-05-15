import React from "react";

const Join = () => {
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
      <div className=" hidden lg:block xl:block">
        <div className=" bg-[url(./assets/new/join.png)] bg-cover bg-no-repeat bg-center w-[300px] h-[100%] fixed">
          <div className=" flex items-center text-center h-20 pt-12">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className=" bg-[#e0e0e069] ml-[300px]">
          <div className=" bg-[#000] flex flex-col fixed w-[100%] p-3">
            <div className=" flex items-center gap-[480px] px-[60px]">
              <h1 className=" text-[#03CFD6] text-[40px]">
                Personal Information
              </h1>
              <p className=" text-white text-4xl">1/3</p>
            </div>
            <p className=" text-white text-[24px] ml-[60px]">
              LET’S GET TO KNOW YOU BETTER
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="join h-[100vh]">
            <div className=" flex flex-col items-center pt-[200px] gap-8">
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* First Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                    name="user_firstName"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Last Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                    name="user_lastName"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* Email address</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                    name="user_email"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Phone Number</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                    name="user_phoneNo"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* Gender</p>
                  <input
                    className=" h-[48px] w-[450px] text-black pl-2 flex items-center justify-end pr-[20px]"
                    name="user_gender"
                    type="text"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Country</p>
                  <input
                    className=" h-[48px] w-[450px] text-black pl-2 flex items-center justify-end pr-[20px]"
                    name="user_country"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[75px] mt-[15px]">
              <button type="submit" value="Send">
                <Link to="/employ">Continue</Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" block lg:hidden xl:hidden bg-[#e0e0e069]">
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
            <div className=" flex flex-col items-center">
              <div className=" flex flex-col gap-[10px pt-[20px]">
                <div className=" pb-2">
                  <p>* First Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[340px] text-black pl-2"
                    name="user_firstName"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Last Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[340px] text-black pl-2"
                    name="user_lastName"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-[10px]">
                <div className=" pb-2">
                  <p>* Email address</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[340px] text-black pl-2"
                    name="user_email"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Phone Number</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[340px] text-black pl-2"
                    name="user_phoneNo"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-[10px]">
                <div className=" pb-2">
                  <p>* Gender</p>
                  <input
                    className=" h-[48px] w-[340px] text-black pl-2 flex items-center justify-end pr-[20px]"
                    name="user_gender"
                    type="text"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Country</p>
                  <input
                    className=" h-[48px] w-[340px] text-black pl-2 flex items-center justify-end pr-[20px]"
                    name="user_country"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[20px] mt-[15px]">
              <button type="submit" value="Send">
                <Link to="/employ">Continue</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;

import emailjs from "emailjs-com";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./join.css";
