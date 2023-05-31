import React from "react";
const Join = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");

  const validateForm = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameError("Please add your name.");
      return;
    }

    window.location.href = "/employ";

    if (lastName.trim() === "") {
      setLastNameError("Please add your last name.");
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (phoneNumber.trim() === "") {
      setphoneNumberError("Please fill up this field.");
    }

    if (gender.trim() === "") {
      setGenderError("Please fill up this field.");
    }

    if (country.trim() === "") {
      setCountryError("Please fill up this field.");
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
                Personal Information
              </h1>
              <p className=" text-white text-3xl">1/3</p>
            </div>
            <p className=" text-white text-[24px] ml-[30px]">
              LET’S GET TO KNOW YOU BETTER
            </p>
          </div>
          <form
            ref={form}
            onSubmit={validateForm}
            onClick={sendEmail}
            className="join h-[100vh] px-[40px] "
          >
            <div className=" grid grid-cols-2 items-cente pt-[30px] gap-8">
              <div className="">
                <div className=" pb-6">
                  <p>* First Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {nameError && <p>{nameError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Email address</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && <p>{emailError}</p>}
                </div>
              </div>
              <div className="">
                <div className=" pb-6">
                  <p>* Last Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  {lastNameError && <p>{lastNameError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Phone Number</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_number"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    required
                  />
                  {phoneNumberError && <p>{phoneNumberError}</p>}
                </div>
              </div>
              <div className=" pb-2">
                <p>* Gender</p>
                <input
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_gender"
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                {genderError && <p>{genderError}</p>}
              </div>
              <div className=" pb-2">
                <p>* Country</p>
                <input
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
                {countryError && <p>{countryError}</p>}
              </div>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] mt-[15px]">
              <button type="submit" value="Send">
                Continue
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
          <form
            ref={form}
            onSubmit={validateForm}
            onClick={sendEmail}
            className="join pb-[20px]"
          >
            <div className=" flex flex-col mx-[15px]">
              <div className=" flex flex-col gap-[10px pt-[20px]">
                <div className=" pb-2">
                  <p>* First Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {nameError && <p>{nameError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Last Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  {lastNameError && <p>{lastNameError}</p>}
                </div>
              </div>
              <div className=" flex flex-col gap-[10px]">
                <div className=" pb-2">
                  <p>* Email address</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && <p>{emailError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Phone Number</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_number"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    required
                  />
                  {phoneNumberError && <p>{phoneNumberError}</p>}
                </div>
              </div>
              <div className=" flex flex-col gap-[10px]">
                <div className=" pb-2">
                  <p>* Gender</p>
                  <input
                    className=" h-[48px] w-[100%] text-black pl-2 flex items-center justify-end pr-[20px]"
                    name="user_gender"
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                  {genderError && <p>{genderError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Country</p>
                  <input
                    className=" h-[48px] w-[100%] text-black pl-2 flex items-center justify-end pr-[20px]"
                    name="user_country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                  {countryError && <p>{countryError}</p>}
                </div>
              </div>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[20px] mt-[15px]">
              <button type="submit" value="Send">
                Continue
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
import { useRef, useState } from "react";
import logo from "./assets/logo.png";
import "./join.css";
