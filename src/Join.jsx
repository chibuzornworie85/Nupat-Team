import React from "react";

const Join = () => {
  return (
    <>
      <div className=" bg-[url(./assets/new/join.png)] bg-cover bg-no-repeat bg-center h-[320px]">
        <div className=" flex justify-end p-5 pb-2">
          <Link to="/">
            <img src={x} alt="" />
          </Link>
        </div>
        <div className=" flex flex-col items-center p-5">
          <h1 className=" text-[#03CFD6] text-[48px] pb-4">
            PERSONAL INFORMATION
          </h1>
          <p className=" text-white text-[24px]">
            LET’S GET TO KNOW YOU BETTER
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center p-5 gap-8">
        <div className=" flex gap-32">
          <div className=" pb-2">
            <p>First Name</p>
            <input
              type="text"
              className=" h-[48px] w-[480px] text-black pl-2"
            />
          </div>
          <div className=" pb-2">
            <p>Last Name</p>
            <input
              type="text"
              className=" h-[48px] w-[480px] text-black pl-2"
            />
          </div>
        </div>
        <div className=" flex gap-32">
          <div className=" pb-2">
            <p>Email-mail</p>
            <input
              type="text"
              className=" h-[48px] w-[480px] text-black pl-2"
            />
          </div>
          <div className=" pb-2">
            <p>Phone Number</p>
            <input
              type="text"
              className=" h-[48px] w-[480px] text-black pl-2"
            />
          </div>
        </div>
        <div className=" flex gap-32">
          <div className=" pb-2">
            <p>Gender*</p>
            <input
              type="radius"
              className=" h-[48px] w-[480px] text-black pl-2"
            />
          </div>
          <div className=" pb-2">
            <p>Country*</p>
            <input
              type="text"
              className=" h-[48px] w-[480px] text-black pl-2"
            />
          </div>
        </div>
        <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px]">
            <button>Join Us</button>
        </div>
      </div>
    </>
  );
};

export default Join;

import x from "./assets/faq/x.png";
import { Link } from "react-router-dom";
