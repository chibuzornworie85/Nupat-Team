import React from "react";

const Hire = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [employee, setEmployee] = useState("");
  const [projectHiring, setProjectHiring] = useState("");
  const [commitment, setCommitment] = useState("");
  const [roleHiring, setRoleHiring] = useState("");
  const [skill, setSkill] = useState("");
  const [proposed, setProposed] = useState("");
  const [model, setModel] = useState("");
  const [team, setTeam] = useState("");
  const [comWeb, setComWeb] = useState("");
  const [comName, setComName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [client, setClient] = useState("");

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [employeeError, setEmployeeError] = useState("");
  const [projectHiringError, setProjectHiringError] = useState("");
  const [commitmentError, setCommitmentError] = useState("");
  const [roleHiringError, setRoleHiringError] = useState("");
  const [skillError, setSkillError] = useState("");
  const [proposedError, setProposedError] = useState("");
  const [modelError, setModelError] = useState("");
  const [teamError, setTeamError] = useState("");
  const [comWebError, setComWebError] = useState("");
  const [comNameError, setComNameError] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("");
  const [clientError, setClientError] = useState("");

  const validateForm = (event) => {
    event.preventDefault();

    if (!validateName(name)) {
      setNameError("Please add your name.");
    }

    if (!validateLastName(lastName)) {
      setLastNameError("Please add your last name.");
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!validateEployee(employee)) {
      setEmployeeError("Please fill up this field.");
    }

    if (!validateProjectHiring(projectHiring)) {
      setProjectHiringError("Please fill up this field.");
    }

    if (!validateCommitment(commitment)) {
      setCommitmentError("Please fill up this field.");
    }

    if (!validateRoleHiring(roleHiring)) {
      setRoleHiringError("Please fill up this field.");
    }

    if (!validateSkill(skill)) {
      setSkillError("Please fill up this field.");
    }

    if (!validateComWeb(comWeb)) {
      setComWebError("Please fill up this field.");
    }

    if (!validateComName(comName)) {
      setComNameError("Please fill up this field.");
    }

    if (!validateTeam(team)) {
      setTeamError("Please fill up this field.");
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setphoneNumberError("Please fill up this field.");
    }

    if (!validateClient(client)) {
      setClientError("Please fill up this field.");
    }

    if (!validateProposed(proposed)) {
      setProposedError("Please fill up this field.");
    }

    if (!validateModel(model)) {
      setModelError("Please fill up this field.");
    }

    alert("Form submitted successfully!");
    setName("");
    setLastName("");
    setEmail("");
    setModel("");
    setProposed("");
    setClient("");
    setComName("");
    setComWeb("");
    setCommitment("");
    setProjectHiring("");
    setEmployee("");
    setphoneNumber("");
    setTeam("");
    setSkill("");
    setRoleHiring("");
  };

  const validateName = (name) => {
    return name.length >= 0;
  };

  const validateLastName = (lastName) => {
    return lastName.length >= 0;
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateModel = (model) => {
    return model.length >= 0;
  };

  const validateProposed = (proposed) => {
    return proposed.length >= 0;
  };

  const validateClient = (client) => {
    return client.length >= 0;
  };

  const validateComName = (comName) => {
    return comName.length >= 0;
  };

  const validateSkill = (skill) => {
    return skill.length >= 0;
  };

  const validateRoleHiring = (roleHiring) => {
    return roleHiring.length >= 0;
  };

  const validateProjectHiring = (projectHiring) => {
    return projectHiring.length >= 0;
  };

  const validateEployee = (employee) => {
    return employee.length >= 0;
  };

  const validateTeam = (team) => {
    return team.length >= 0;
  };

  const validateCommitment = (commitment) => {
    return commitment.length >= 0;
  };

  const validateComWeb = (comWeb) => {
    return comWeb.length >= 0;
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.length >= 11;
  };

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
      <div className="hidden lg:flex md:hidden xl:flex">
        <div className=" bg-[url(./assets/new/join.png)] bg-cover bg-no-repeat bg-center w-[20%] h-[100vh] sticky top-0">
          <div className=" flex items-center text-center h-20 pt-12">
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className=" bg-[#e0e0e069] w-[80%]">
          <div className=" bg-[#000] flex sticky top-0 flex-col p-3">
            <div className=" px-[30px]">
              <h1 className=" text-[#03CFD6] text-[40px]">
                Tap into Nupat Team
              </h1>
            </div>
            <p className=" text-white text-[24px] ml-[30px]">
              Let Get To Know Your Desire
            </p>
          </div>
          <form
            ref={form}
            onSubmit={validateForm}
            onClick={sendEmail}
            className="join px-[40px] pb-[20px]"
          >
            <div className=" flex flex-col pt-[30px] gap-8">
              <div className=" grid grid-cols-2 gap-[20px]">
                <div className=" pb-2">
                  <p>* First Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_firstName"
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
                    name="user_lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  {lastNameError && <p>{lastNameError}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <div className=" pb-2">
                  <p>* Your work email address</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_workEmailAddress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && <p>{emailError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* No of Employees</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_noOfEmployees"
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                    required
                  />
                  {employeeError && <p>{employeeError}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <div className=" pb-2">
                  <p>* Project hiring for</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_projectHiringFor"
                    value={projectHiring}
                    onChange={(e) => setProjectHiring(e.target.value)}
                    required
                  />
                  {projectHiringError && <p>{projectHiringError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Level of commitment</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_levelOfCommitment"
                    value={commitment}
                    onChange={(e) => setCommitment(e.target.value)}
                    required
                  />
                  {commitmentError && <p>{commitmentError}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <div className=" pb-2">
                  <p>* Role hiring for</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_roleHiringFor"
                    value={roleHiring}
                    onChange={(e) => setRoleHiring(e.target.value)}
                    required
                  />
                  {roleHiringError && <p>{roleHiringError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Skill requirements</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_skillRequirement"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    required
                  />
                  {skillError && <p>{skillError}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <div className=" pb-2">
                  <p>* Proposed start date</p>
                  <input
                    placeholder="DD/MM/YY"
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_proposedStartDate"
                    value={proposed}
                    onChange={(e) => setProposed(e.target.value)}
                    required
                  />
                  {proposedError && <p>{proposedError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Work Model</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_workModel"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                  />
                  {modelError && <p>{modelError}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <div className=" pb-2">
                  <p>* Team Contribution level</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_teamContributionLevel"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    required
                  />
                  {teamError && <p>{teamError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Company's Website</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_companyWebsite"
                    value={comWeb}
                    onChange={(e) => setComWeb(e.target.value)}
                    required
                  />
                  {comWebError && <p>{comWebError}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <div className=" pb-2">
                  <p>* Company's Name</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_companyName"
                    value={comName}
                    onChange={(e) => setComName(e.target.value)}
                    required
                  />
                  {comNameError && <p>{comNameError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Client / Contact Phone number</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_contactInfo"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    required
                  />
                  {phoneNumberError && <p>{phoneNumberError}</p>}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 pb-[30px] pt-[30px]]">
              <div className=" pb-2">
                <p>* Designation of Client (HR, CEO, etc)</p>
                <input
                  type="radius"
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_designationClient"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  required
                />
                {clientError && <p>{clientError}</p>}
              </div>
            </div>
            <p>
              By submitting to this form, you agree to Nupat Team's{" "}
              <span className=" underline text-[red]">term and condition.</span>{" "}
            </p>
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
            Tap into Nupat Team
          </h1>
          <p className=" px-4 text-[13px]">Let Get To Know Your Desire</p>
        </div>
        <div>
          <form
            ref={form}
            onSubmit={validateForm}
            onClick={sendEmail}
            className="join px-[15px] pb-[20px]"
          >
            <div className="  flex flex-col pt-[10px] gap-8">
              <div className=" flex flex-col gap-[20px]">
                <div className=" pb-2">
                  <p>* First Name</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_firstName"
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
                    name="user_lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  {lastNameError && <p>{lastNameError}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className=" pb-2">
                  <p>* Your work email address</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_workEmailAddress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && <p>{emailError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* No of Employees</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_noOfEmployees"
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                    required
                  />
                  {employeeError && <p>{employeeError}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className=" pb-2">
                  <p>* Project hiring for</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_projectHiringFor"
                    value={projectHiring}
                    onChange={(e) => setProjectHiring(e.target.value)}
                    required
                  />
                  {projectHiringError && <p>{projectHiringError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Level of commitment</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_levelOfCommitment"
                    value={commitment}
                    onChange={(e) => setCommitment(e.target.value)}
                    required
                  />
                  {commitmentError && <p>{commitmentError}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className=" pb-2">
                  <p>* Role hiring for</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_roleHiringFor"
                    value={roleHiring}
                    onChange={(e) => setRoleHiring(e.target.value)}
                    required
                  />
                  {roleHiringError && <p>{roleHiringError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Skill requirements</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_skillRequirement"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    required
                  />
                  {skillError && <p>{skillError}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className=" pb-2">
                  <p>* Proposed start date</p>
                  <input
                    placeholder="DD/MM/YY"
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_proposedStartDate"
                    value={proposed}
                    onChange={(e) => setProposed(e.target.value)}
                    required
                  />
                  {proposedError && <p>{proposedError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Work Model</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_workModel"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                  />
                  {modelError && <p>{modelError}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className=" pb-2">
                  <p>* Team Contribution level</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_teamContributionLevel"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    required
                  />
                  {teamError && <p>{teamError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Company's Website</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_companyWebsite"
                    value={comWeb}
                    onChange={(e) => setComWeb(e.target.value)}
                    required
                  />
                  {comWebError && <p>{comWebError}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className=" pb-2">
                  <p>* Company's Name</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_companyName"
                    value={comName}
                    onChange={(e) => setComName(e.target.value)}
                    required
                  />
                  {comNameError && <p>{comNameError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Client / Contact Phone number</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_contactInfo"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    required
                  />
                  {phoneNumberError && <p>{phoneNumberError}</p>}
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-[30px] pt-[30px]]">
              <div className=" pb-2">
                <p>* Designation of Client (HR, CEO, etc)</p>
                <input
                  type="radius"
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_designationClient"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  required
                />
                {clientError && <p>{clientError}</p>}
              </div>
            </div>
            <p>
              By submitting to this form, you agree to Nupat Team's{" "}
              <span className=" underline text-[red]">term and condition.</span>{" "}
            </p>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] mt-[15px]">
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

export default Hire;

import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./join.css";
