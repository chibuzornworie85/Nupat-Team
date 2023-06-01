import React from "react";

const Employ = () => {
  const [salary, setSalary] = useState("");
  const [current, setCurrent] = useState("");
  const [employment, setEmployment] = useState("");
  const [role, setRole] = useState("");
  const [year, setYear] = useState("");
  const [notice, setNotice] = useState("");
  const [language, setLanguage] = useState("");
  const [skills, setSkill] = useState("");
  const [linkendin, setLinkendin] = useState("");
  const [github, setGithub] = useState("");

  const [salaryError, setSalaryError] = useState("");
  const [currentError, setCurrentError] = useState("");
  const [employmentError, setEmploymentError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [yearError, setYearError] = useState("");
  const [noticeError, setNoticeError] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [skillsError, setSkillError] = useState("");
  const [linkendinError, setLinkendinError] = useState("");
  const [githubError, setGithubError] = useState("");

  const validateForm = (event) => {
    event.preventDefault();

    if (salary.trim() === "") {
      setSalaryError("Please fill up this field.");
      return;
    }
    if (current.trim() === "") {
      setCurrentError("Please fill up this field.");
      return;
    }
    if (employment.trim() === "") {
      setEmploymentError("Please fill up this field.");
      return;
    }
    if (role.trim() === "") {
      setRoleError("Please fill up this field.");
      return;
    }
    if (year.trim() === "") {
      setYearError("Please fill up this field.");
      return;
    }
    if (notice.trim() === "") {
      setNoticeError("Please fill up this field.");
      return;
    }
    if (language.trim() === "") {
      setLanguageError("Please fill up this field.");
      return;
    }
    if (skills.trim() === "") {
      setSkillError("Please fill up this field.");
      return;
    }
    if (linkendin.trim() === "") {
      setLinkendinError("Please fill up this field.");
      return;
    }
    if (github.trim() === "") {
      setGithubError("Please fill up this field.");
      return;
    }

    window.location.href = "/additional";
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
                Employment Information
              </h1>
              <p className=" text-white text-3xl">2/3</p>
            </div>
            <p className=" text-white text-[24px] ml-[30px]">
              Tell us about your skills and professional history
            </p>
          </div>
          <form
            ref={form}
            onSubmit={validateForm}
            onClick={sendEmail}
            className="join px-[40px]  pb-[20px]"
          >
            <div className=" flex flex-col gap-8 pt-[30px] pb-[20px]">
              <div className=" grid grid-cols-2 gap-[20px]">
                <div className=" pb-2 ">
                  <p>* Salary expectation (annually in USD)</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  />
                  {salaryError && <p>{salaryError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Current organization</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_organisation"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                    required
                  />
                  {currentError && <p>{currentError}</p>}
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-[20px] justify-center">
                <div className=" pb-2">
                  <p>* Employment status</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_status"
                    value={employment}
                    onChange={(e) => setEmployment(e.target.value)}
                    required
                  />
                  {employmentError && <p>{employmentError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Role/Job title</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  />
                  {roleError && <p>{roleError}</p>}
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-[20px] justify-center">
                <div className=" pb-2">
                  <p>* Total years of professional experence</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_experience"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                  {yearError && <p>{yearError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Notice period (in week)</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_period"
                    value={notice}
                    onChange={(e) => setNotice(e.target.value)}
                    required
                  />
                  {noticeError && <p>{noticeError}</p>}
                </div>
              </div>
              <div className=" grid grid-cols-1">
                <div className=" pb-2">
                  <p>
                    * Most proficient programming language/framework/tool
                    (maximum of 3)
                  </p>
                  <textarea
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_programmingLanguage"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  ></textarea>
                  {languageError && <p>{languageError}</p>}
                </div>
              </div>
              <div className=" grid grid-cols-1">
                <div className=" pb-2">
                  <p>* Other technical skills</p>
                  <textarea
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_technicalSkill"
                    value={skills}
                    onChange={(e) => setSkill(e.target.value)}
                    required
                  ></textarea>
                  {skillsError && <p>{skillsError}</p>}
                </div>
              </div>
              <div className=" flex justify-start text-2xl">
                <h1>Important Links</h1>
              </div>
              <div className=" grid grid-cols-2 gap-[20px] justify-center">
                <div className=" pb-2">
                  <p>* Linkedin profile</p>
                  <input
                    placeholder="https://linkendin.com/in/myusername"
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_linkedin"
                    value={linkendin}
                    onChange={(e) => setLinkendin(e.target.value)}
                    required
                  />
                  {linkendinError && <p>{linkendinError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Github URL</p>
                  <input
                    placeholder="https://github.com/myusername"
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    required
                  />
                  {githubError && <p>{githubError}</p>}
                </div>
              </div>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px]">
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
            <div className=" flex flex-col mx-[15px] gap-8 pt-[20px] pb-[20px]">
              <div className=" flex flex-col gap-[10px] justify-center">
                <div className=" pb-2 ">
                  <p>* Salary expectation (annually in USD)</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  />
                  {salaryError && <p>{salaryError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Current organization</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_organisation"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                    required
                  />
                  {currentError && <p>{currentError}</p>}
                </div>
              </div>
              <div className=" flex flex-col gap-[10px] justify-center">
                <div className=" pb-2">
                  <p>* Employment status</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_status"
                    value={employment}
                    onChange={(e) => setEmployment(e.target.value)}
                    required
                  />
                  {employmentError && <p>{employmentError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Role/Job title</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  />
                  {roleError && <p>{roleError}</p>}
                </div>
              </div>
              <div className=" flex flex-col gap-[10px] justify-center">
                <div className=" pb-2">
                  <p>* Total years of professional experence</p>
                  <input
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_experience"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                  {yearError && <p>{yearError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Notice period (in week)</p>
                  <input
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_period"
                    value={notice}
                    onChange={(e) => setNotice(e.target.value)}
                    required
                  />
                  {noticeError && <p>{noticeError}</p>}
                </div>
              </div>
              <div className=" flex justify-center">
                <div className=" pb-2 flex flex-col items-center">
                  <p>
                    * Most proficient programming language/framework/tool
                    (maximum of 3)
                  </p>
                  <textarea
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_programmingLanguage"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  ></textarea>
                  {languageError && <p>{languageError}</p>}
                </div>
              </div>
              <div className=" pb-2">
                <p>* Other technical skills</p>
                <textarea
                  className=" h-[48px] w-[100%] text-black pl-2"
                  name="user_technicalSkill"
                  value={skills}
                  onChange={(e) => setSkill(e.target.value)}
                  required
                ></textarea>
                {skillsError && <p>{skillsError}</p>}
              </div>
              <div className=" flex justify-start text-2xl">
                <h1>Important Links</h1>
              </div>
              <div className=" flex flex-col gap-[20px] justify-center">
                <div className=" pb-2">
                  <p>* Linkedin profile</p>
                  <input
                    placeholder="https://linkendin.com/in/myusername"
                    type="radius"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_linkedin"
                    value={linkendin}
                    onChange={(e) => setLinkendin(e.target.value)}
                    required
                  />
                  {linkendinError && <p>{linkendinError}</p>}
                </div>
                <div className=" pb-2">
                  <p>* Github URL</p>
                  <input
                    placeholder="https://github.com/myusername"
                    type="text"
                    className=" h-[48px] w-[100%] text-black pl-2"
                    name="user_github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    required
                  />
                  {githubError && <p>{githubError}</p>}
                </div>
              </div>
            </div>
            <div className=" text-white flex items-center justify-center text-[20px] bg-black w-[150px] h-[54px] rounded-[16px] ml-[15px]">
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

export default Employ;

import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import logo from "./assets/logo.png";
// import "./join.css";
