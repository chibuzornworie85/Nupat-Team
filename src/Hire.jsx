import React from "react";

const Hire = () => {
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
            <div className=" flex items-center px-[60px]">
              <h1 className=" text-[#03CFD6] text-[40px]">
                Tap into Nupat Team
              </h1>
            </div>
            <p className=" text-white text-[24px] ml-[60px]">
              Let Get To Know Your Desire
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="join pb-[20px]">
            <div className=" flex flex-col items-center pt-[150px] gap-8">
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* First Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Last Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* Your work email address</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* No of Employees</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* Project hiring for</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Level of commitment</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* Role hiring for</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Skill requirements</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* Proposed start date</p>
                  <input
                    placeholder="DD/MM/YY"
                    type="radius"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Work Model</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* Team Contribution level</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Company's Website</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-[20px]">
                <div className=" pb-2">
                  <p>* Company's Name</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
                <div className=" pb-2">
                  <p>* Client / Contact Phone number</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[450px] text-black pl-2"
                  />
                </div>
              </div>
            </div>
            <div className=" flex pb-[30px] pt-[30px] ml-[60px]">
              <div className=" pb-2">
                <p>* Designation of Client (HR, CEO, etc)</p>
                <input
                  type="radius"
                  className=" h-[48px] w-[450px] text-black pl-2"
                />
              </div>
            </div>
            <p className=" ml-[70px]">
              By submitting to this form, you agree to Nupat Team's{" "}
              <span className=" underline">term and condition.</span>{" "}
            </p>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[75px] mt-[15px]">
              <button type="submit" value="Send">
                <Link to="/">Submit form</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hire;

import emailjs from "emailjs-com";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./join.css";
