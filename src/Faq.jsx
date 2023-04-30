const Faq = () => {
  return (
    <>
      <div style={{fontFamily:'Montserrat'}} className="faq">
        <div className=" flex justify-end p-5 pb-2">
          <Link to='/'><img src={x} alt="" /></Link>
        </div>
        <div className=" flex flex-col justify-center md:pt-20 xl:pt-0 lg:pt-20">
          <div className=" flex justify-center pb-2">
            <img src={chat} alt="" />
          </div>
          <div className=" flex justify-center items-center">
            <img src={chat1} alt="" className=" relative right-6 -mr-6" />
            <img src={chat2} alt="" />
          </div>
          <p className=" flex justify-center text-white text-2xl xl:text-4xl">
            Chat with support
          </p>
        </div>
      </div>
      <div style={{fontFamily:'Montserrat'}} className="chat1 xl:p-12 flex items-center xl:pl-10 px-2 xl:px-0">
        <img src={chat1} alt="" />
        <p className=" bg-black mt-32 w-96 text-white">Hello! How can we help you?</p>
      </div>
    </>
  );
};

export default Faq;






import React from "react";
import "./faq.css";
import x from "./assets/faq/x.png";
import chat from "./assets/faq/chat.png";
import chat1 from "./assets/faq/chat1.png";
import chat2 from "./assets/faq/chat2.png";
import { Link } from "react-router-dom";
