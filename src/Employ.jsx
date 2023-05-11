import React from "react";

const Employ = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_1oikrgp",
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
      <div>
        <div className=" bg-[url(./assets/new/join.png)] bg-cover bg-no-repeat bg-center w-[300px] h-[100%] fixed">
          <div className=" flex items-center text-center h-20 pt-12">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className=" bg-[#e0e0e069] ml-[300px]">
          <div className=" bg-[#000] flex flex-col fixed w-[100%] p-3">
            <div className=" flex items-center gap-[400px] px-[60px]">
              <h1 className=" text-[#03CFD6] text-[40px]">
                Employment Information
              </h1>
              <p className=" text-white text-4xl">2/3</p>
            </div>
            <p className=" text-white text-[24px] ml-[60px]">
              Tell us about your skills and professional history
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="join pb-[20px]">
            <div className=" flex flex-col gap-8 pt-[150px] pb-[20px]">
              <div className=" flex gap-[20px] justify-center">
                <div className=" pb-2 ">
                  <p>* Salary expectation (annually in USD)</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Current organization</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px] justify-center">
                <div className=" pb-2">
                  <p>* Employment status</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Role/Job title</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px] justify-center">
                <div className=" pb-2">
                  <p>* Total years of professional experence</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Notice period (in week)</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex justify-center">
                <div className=" pb-2">
                <p>* Most proficient programming language/framework/tool (maximum of 3)</p>
                  <textarea className=" h-[48px] w-[920px] text-black pl-2"></textarea>
                </div>
              </div>
              <div className=" flex justify-center">
                <div className=" pb-2">
                  <p>* Other technical skills</p>
                  <textarea className=" h-[48px] w-[920px] text-black pl-2"></textarea>
                </div>
              </div>
              <div className=" flex justify-start pl-[70px] text-2xl">
                <h1>Important Links</h1>
              </div>
              <div className=" flex gap-[20px] justify-center">
                <div className=" pb-2">
                  <p>* Linkedin profile</p>
                  <input
                    placeholder="https://linkendin.com/in/myusername"
                    type="radius"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Github URL</p>
                  <input
                    placeholder="https://github.com/myusername"
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[70px]">
              <button type="submit" value="Send">
                <Link to="/additional">Continue</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Employ;

import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useRef } from "react";
import logo from "./assets/logo.png";
import './join.css'
