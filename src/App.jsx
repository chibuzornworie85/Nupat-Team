function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [navClose, setNavClose] = useState(true);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [comName, setComName] = useState("");
  const [comWeb, setComWeb] = useState("");
  const [comment, setComment] = useState("");
  const [hear, setHear] = useState("");

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("");
  const [comNameError, setComNameError] = useState("");
  const [comWebError, setComWebError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [hearError, setHearError] = useState("");

  const navigate = useNavigate();

  const validateForm = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameError("Please add your name.");
      return;
    }

    if (lastName.trim() === "") {
      setLastNameError("Please add your last name.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (phoneNumber.trim() === "") {
      setphoneNumberError(
        "Please enter a phoneNumber with at least 11 characters."
      );
      return;
    }

    if (comName.trim() === "") {
      setComNameError("Please enter your company name.");
      return;
    }

    if (comWeb.trim() === "") {
      setComWebError("Please enter website name.");
      return;
    }

    if (comment.trim() === "") {
      setCommentError("Please enter a comment.");
      return;
    }

    if (hear.trim() === "") {
      setHearError("Please enter any social media.");
      return;
    }

    // window.location.href = "/";
    navigate("/");
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
      <div
        style={{ fontFamily: "Montserrat" }}
        className="nav flex px-0 gap-[150px] bg-black xl:flex items-center justify-around xl:gap-[100px] lg:gap-[81px] sticky top-0 xl:px-4 z-10 md:gap-[500px] text-[16px]"
      >
        <div className=" flex items-center text-center h-20 pt-6">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:hidden lg:block text-white xl:flex">
          <ul className=" flex lg:gap-10 xl:gap-[60px] items-center text-center">
            <li className=" underline">HOME</li>
            <li className=" hover:underline">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className=" flex items-center gap-2 hover:underline">
              <Link to="/service">SERVICES</Link>
            </li>
            {/* <li className=" hover:underline">
              <Link to="/faq">FAQs</Link>
            </li> */}
            <li className=" hover:underline">
              <Link to="/contact">CONTACT US</Link>
            </li>
            <button className="but text-[#000]">
              <Link to="/join">Join Us</Link>
            </button>
            <button className="but1 ">
              <Link to="/hire">Hire Talent</Link>
            </button>
          </ul>
        </div>
        <div className="flex justify-end lg:hidden xl:hidden mr-10 md:block">
          <div className="" onClick={() => setNavClose(!navClose)}>
            {navClose ? (
              <div className="ham">
                <div className="line-2"></div>
                <div className="line-1"></div>
                <div className="line-3"></div>
              </div>
            ) : (
              <div className="x">
                <div className="line-2"></div>
                <div className="line-1"></div>
                <div className="line-3"></div>
              </div>
            )}
          </div>

          <div className={navClose ? "nav-close" : "nav-open"}>
            <div className=" text-white xl:hidden">
              <ul className=" flex flex-col gap-4 md:gap-6 items-center pt-4">
                <li>HOME</li>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li className=" flex items-center gap-2">
                  <Link to="/service">SERVICES</Link>
                </li>
                {/* <li>
                  <Link to="/faq">FAQs</Link>
                </li> */}
                <li>
                  <Link to="/contact">CONTACT US</Link>
                </li>
                <button className="but text-[#000]">
                  <Link to="/join">Join Us</Link>
                </button>
                <button className="but1 ">
                  <Link to="/hire">Hire Talent</Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sec h-[140px] lg:h-[70vh] md:h-[200px] lg:pt-20 xl:h-[90vh] text-center pt-10 xl:pt-28">
        <h1
          data-aos="zoom-in"
          style={{ fontFamily: "Montserrat" }}
          className=" items-center h-0 font-semibold text-[11px] md:text-[25px] md:h-7 lg:h-12 lg:text-[34px] xl:h-12 xl:text-[42px] flex justify-center text-white"
        >
          FIND THE RIGHT TECH TALENT FOR YOUR BUSINESS
        </h1>
        <p
          style={{ fontFamily: "Montserrat" }}
          data-aos="zoom-in"
          className=" h-0 pt-5 xl:h-7 md:h-4 text-[#aeb1b6] text-[10px] md:text-xl xl:text-[32px] lg:text-2xl xl:pt-12"
        >
          DREAM JOBS, AFRICAN TOP TALENTS;{" "}
          <span className=" text-[#03CFD6]">All IN ONE PLACE</span>
        </p>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-black h-[164px] xl:h-32 lg:h-32 px-0 text-[13px] md:text-[16px]  lg:text-[16px] xl:text-[16px] lg:items-center lg:flex lg:justify-center lg:px-16 xl:items-center xl:justify-center flex xl:px-16 "
      >
        <div className=" md:hidden flex flex-col lg:flex lg:flex-row lg:gap-[17px] lg:justify-around m-auto xl:flex-row xl:flex xl:text-center xl:items-center xl:justify-around gap-4 xl:gap-24 text-white">
          <p
            data-aos="zoom-in"
            className=" flex text-center items-center gap-2 xl:gap-4"
          >
            <img src={box} alt="box" />
            Access to Top Tech Talents in Africa
          </p>
          <p
            data-aos="zoom-in"
            className=" flex text-center items-center gap-2 xl:gap-4"
          >
            <img src={box} alt="box" />
            Gain Competitive Edge
          </p>
          <p
            data-aos="zoom-in"
            className=" flex text-center items-center gap-2 xl:gap-4"
          >
            <img src={box} alt="box" />
            Customized Solution for Your Business
          </p>
        </div>
        <div className=" xl:hidden lg:hidden hidden md:flex md:flex-col md:gap-5 md:pt-5 md:pl-[50px] text-white">
          <p
            data-aos="zoom-in"
            className=" flex text-center items-center gap-4"
          >
            <img src={box} alt="box" />
            Access to Top Tech Talents in Africa
          </p>
          <p
            data-aos="zoom-in"
            className=" flex text-center items-center gap-4"
          >
            <img src={box} alt="box" />
            Gain Competitive Edge
          </p>
          <p
            data-aos="zoom-in"
            className=" flex text-center items-center gap-4"
          >
            <img src={box} alt="box" />
            Customized Solution for Your Business
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" flex flex-col md:flex-col lg:flex-row md:flex lg:flex md:justify-around lg:justify-around xl:flex-row xl:flex xl:justify-start pt-5 xl:px-7 md:mx-0 lg:mx-10"
      >
        <div className=" flex flex-col md:flex-col lg:flex-row md:gap-0 lg:gap-1 xl:flex-row xl:flex gap-0 xl:gap-1">
          <div className=" flex justify-center px-6 md:block lg:hidden xl:hidden md:pl-[50px]">
            <img src={meet} alt="meet" />
          </div>
          <div className=" flex pt-10 xl:pt-0 xl:pl-8 lg:pl-3 md:pl-[50px] pl-6">
            <div className=" xl:w-[10px]">
              <img
                src={line}
                alt="line"
                className=" h-16 md:h-16 lg:h-[80px] xl:h-[110px]"
              />
            </div>
            <div data-aos="zoom-in">
              <p className=" xl:font-semibold xl:pb-4 pl-2">
                WHY CHOOSE NUPAT?
              </p>
              <h1 className="h-[70px] xl:h-28 xl:text-4xl lg:text-2xl md:text-xl pl-2 hidden lg:block xl:block md:hidden xl:w-[822px]">
                We have a pool of highly skilled and <br />
                vetted tech talents
              </h1>
              <h1 className=" h-10 xl:h-14 text-base pl-2 xl:hidden lg:hidden md:block pb-[55px]">
                We have a pool of highly skilled and vetted tech talents
              </h1>
              <p className=" text-xl hidden xl:block lg:block md:block xl:w-[842px]">
                <span className="text-2xl font-semibold">At Nupat Teams,</span>{" "}
                we pride ourselves in providing tech talents with a proven track
                record. Our pool consits of experts in Software Software
                Development and related IT roles. We help companies improve
                their bottom line when they leverage on outsourcing.
              </p>
              <p className=" text-sm xl:hidden lg:hidden md:hidden">
                <span className=" text-base font-semibold">
                  At Nupat Teams,
                </span>{" "}
                we pride ourselves in providing tech talents with a proven track
                record. Our pool consits of experts in Software Software
                Development and related IT roles. We help companies improve
                their bottom line when they leverage on outsourcing.
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" hidden xl:block lg:block md:hidden md:pt-8 xl:pt-0 lg:pt-0">
          <img src={image} alt="an image" />
        </div> */}
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex xl:justify-around pt-10 xl:px-[60px] lg:flex md:flex-col lg:flex-row xl:flex-row md:justify-around md:px-4 lg:justify-around lg:px-[20px]"
      >
        <div className=" bg-[url('/src/assets/cover1.png')] h-[600px] xl:h-[430px] bg-no-repeat bg-center bg-cover mx-6 xl:mx-10 md:mx-10 lg:mx-10 text-white">
          <div className=" pl-3 lg:pl-6 md:pl-6 xl:pl-6 pt-10">
            <h1 className=" text-[14px] font-semibold xl:text-3xl lg:text-3xl md:text-2xl">
              Access our pool of Tech <span className="hit">Talents</span> To
              Meet Your Business Needs...
            </h1>
            <div className=" xl:flex gap-[30px] p-2 xl:p-0 pt-[10px] xl:pt-[50px]">
              <ul className=" flex flex-col gap-2 pt-3 pb-3 xl:pb-0">
                <li>Frontend Developer</li>
                <li>Backend developer (C#, Java, NodeJS)</li>
                <li>Mobile Developer (ReactNative, Flutter)</li>
                <li>Fullstack Developer</li>
              </ul>
              <ul className=" flex flex-col gap-2 pt-3 pb-3 xl:pb-0">
                <li>Data/Business Analyst</li>
                <li>Data Scientist</li>
                <li>Product Designer</li>
                <li>Product Manager</li>
              </ul>
              <ul className=" flex flex-col gap-2 pt-3">
                <li>Software Tester</li>
                <li>DevOps Engineer</li>
                <li>Digital Marketer</li>
                <li>Project Manager</li>
              </ul>
            </div>
          </div>
          {/* <div className=" xl:flex flex justify-center relative -mt-20 xl:top-20 lg:top-40 md:top-40 md:pt-8 lg:pt-8 md:-mt-40 lg:-mt-40 px-10 mb-32 xl:mb-0 gap-2 top-14 xl:px-12 lg:px-12">
            <img
              src={overLay}
              alt="overlay img"
              className=" relative left-4 xl:left-0 xl:top-12 md:top-0 -ml-0 top-6 lg:left-0 md:left-0"
            />
            <Link to="/faq">
              <img
                src={mess}
                alt="mess"
                className="  xl:hidden lg:hidden md:hidden relative top-32"
              />
            </Link>
          </div> */}
        </div>

        <div className="fifth flex flex-col items-center lg:mt-0 lg:mx-0 mt-10 xl:mt-0 xl:p-5 mx-6 xl:mx-0">
          <div>
            <img src={chat} alt="chat" />
          </div>
          <img src={line1} alt="line" className=" pt-6 pb-4" />
          <p className=" text-center text-xl pb-8 lg:w-[377.77px] xl:w-[377.77px] md:text-xl lg:text-[20px] xl:text-base hidden xl:block md:block md:px-[40px] lg:px-0 xl:px-0 lg:block">
            Our purpose and passion at{" "}
            <span className=" font-semibold">
              Nupat <br /> Teams
            </span>{" "}
            is to significantly impact employee’s lives and the organizations
            they partner with by discovering mutually beneficial opportunities
            as well as promote diversity in the workplace. We also help
            businesses build top-tier talents by hiring, vetting, and managing
            talents.
          </p>
          <p className=" text-center text-sm pb-2 xl:hidden lg:hidden md:hidden p-[15px]">
            Our purpose and passion at
            <span className=" font-semibold">
              Nupat <br /> Teams
            </span>{" "}
            is to significantly impact employee’s lives and the organizations
            they partner with by discovering mutually beneficial opportunities
            as well as promote diversity in the workplace. We also help
            businesses build top-tier talents by hiring, vetting, and managing
            talents.
          </p>
          <p className=" text-[#1F335F]">
            <Link
              to="/join"
              className="flex items-center text-xl gap-6 font-light pb-6 xl:pb-0"
            >
              {" "}
              Search for Jobs
              <img src={right} alt="arrow" />
            </Link>
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="xl:px-10 pt-10 xl:pt-36"
      >
        <div className=" flex justify-center text-center text-3xl lg:text-2xl md:text-xl">
          <h1 className=" hidden xl:block font-semibold lg:block md:block">
            OUR OUTSOURCING SERVICES AND DISTINGUISHED BUSINESS ASSIST <br />{" "}
            SOLUTIONS.
          </h1>
          <h1 className=" xl:hidden text-base font-semibold lg:hidden md:hidden">
            OUR OUTSOURCING SERVICES AND DISTINGUISHED BUSINESS ASSIST{" "}
            SOLUTIONS.
          </h1>
        </div>
        <div className="text-center items-center mt-10 flex flex-col gap-10 xl:gap-0">
          <div className=" flex justify-center mx-[25px]">
            <div
              data-aos="zoom-in"
              className=" xl:flex md:gap-5 lg:gap-[30px] md:flex lg:flex xl:gap-[15px] flex flex-col md:flex-row lg:flex-row gap-6 justify-center"
            >
              <div className=" xl:h-[262px] lg:h-[262px] lg:w-[374px] pb-6 xl:pb-0 lg:pb-0 xl:w-[374px] bg-[#000] rounded-xl pt-4 xl:pt-8 flex flex-col">
                <h1 className=" text-[#03cfd6] font-semibold  pb-2 xl:pb-4 flex justify-center">
                  RECRUITMENT
                </h1>
                <p className=" text-sm px-5 text-white hidden xl:block lg:block md:hidden">
                  We source and screen for the right people whowill deliver the
                  right result for your organisation; professional and
                  unprofessional positions thatsolve cpmpliance scalability,
                  cost, quality orother recruiting challenge.
                </p>
                <p className=" pb-4 text-sm px-5 text-white xl:hidden lg:hidden md:block">
                  We source and screen for the right people who will deliver the
                  right result for your organisation; professional and
                  unprofessional positions that solve cpmpliance scalability,
                  cost, quality or other recruiting challenge.
                </p>
                <button className="bg-[#03cfd6] rounded-xl p-[10px] xl:p-0 lg:p-0 lg:mx-[100px] xl:mx-20 h-10 text-base font-normal text-black m-auto">
                  <Link to="/recruitement">Learn More</Link>
                </button>
              </div>
              <div className="xl:h-[262px] lg:h-[262px] lg:w-[374px] pb-6 xl:pb-0 lg:pb-0 xl:w-[374px] bg-[#03CFD6] rounded-xl pt-8 md:pt-5 flex flex-col">
                <h1 className=" pb-2 xl:pb-4 font-semibold text-black xl:pt-4 flex justify-center">
                  IT OUTSOURCING
                </h1>
                <p className=" text-sm pb-3 px-5 text-black hidden xl:block lg:block md:hidden">
                  We’ve increased business productivity and efficiency in many
                  organisations using technology, Let’s help your business scale
                  with bespoke IT Solutions.
                </p>
                <p className=" text-sm pb-6 md:pb-4 px-5 text-black xl:hidden lg:hidden md:block">
                  We’ve increased business productivity and efficiency in many
                  organisations using technology, Let’s help your business scale
                  with bespoke IT Solutions.
                </p>
                <button className="bg-[#000] rounded-xl p-[10px] xl:p-0 lg:mx-[100px] lg:p-0 xl:mx-20 h-10 text-base text-white font-normal m-auto">
                  <Link to="/it">Learn More</Link>
                </button>
              </div>
              <div className=" xl:h-[262px] xl:w-[374px] lg:h-[262px] lg:hidden lg:w-[374px] text-[#03cfd6] pb-6 xl:pb-0 lg:pb-0 font-semibold bg-[#000] rounded-xl md:pt-5 pt-8 flex flex-col md:hidden xl:flex">
                <h1 className=" pb-2 xl:pb-4 flex justify-center">
                  BUSINESS ADVISORY
                </h1>
                <p className=" text-sm px-5 text-white hidden xl:block lg:block md:hidden">
                  This service focuses on non-permanent employee hiring. Our
                  clients delegate the endless functions involved with
                  contingent worker hiring and management.
                </p>
                <p className=" pb-3 xl:pb-6 text-sm px-5 text-white xl:hidden lg:hidden md:block">
                  This service focuses on non-permanent employee hiring. Our
                  clients delegate the endless functions involved with
                  contingent worker hiring and management.
                </p>
                <button className="bg-[#03cfd6] lg:mx-[100px] rounded-xl p-[10px] xl:p-0 lg:p-0 xl:mx-20 h-10 text-base font-normal text-black m-auto">
                  <Link to="/business">Learn More</Link>
                </button>
              </div>
            </div>
          </div>

          <div className=" flex justify-center mx-[25px]">
            <div
              data-aos="zoom-in"
              className=" xl:flex flex flex-col md:flex-row xl:flex-row lg:flex-row lg:pt-8 xl:gap-[15px] lg:gap-[30px] gap-5 xl:pt-8 items-center"
            >
              <div className="xl:h-[262px] xl:w-[374px] lg:h-[262px] lg:w-[374px] text-[#03cfd6] pb-6 xl:pb-0 lg:pb-0 font-semibold bg-[#000] rounded-xl pt-4 flex flex-col">
                <h1 className="pb-2 xl:pb-4 flex justify-center">
                  TALENT HIRING
                </h1>
                <p className=" text-sm pb-2 px-5 text-white hidden xl:block lg:block md:hidden">
                  To excel, your organisation needs the right talent. Our expert
                  recruiters source, screen and process candidates, using our
                  talent spotlight to connect you with the perfect employee
                  faster and more effectively than traditional recruitment
                  methods.
                </p>
                <p className=" text-sm pb-4 px-5 text-white xl:hidden lg:hidden md:block">
                  To excel, your organisation needs the right talent. Our expert
                  recruiters source, screen and process candidates, using our
                  talent spotlight to connect you with the perfect employee
                  faster and more effectively than traditional recruitment
                  methods.
                </p>
                <button className="bg-[#03cfd6] rounded-xl lg:mx-[100px] p-[10px] xl:p-0 lg:p-0 xl:mx-20 h-10 text-base font-normal text-black m-auto">
                  <Link to="/recruitement">Learn More</Link>
                </button>
              </div>
              <div className="xl:h-[262px] xl:w-[374px] lg:h-[262px] lg:w-[374px] text-[#03cfd6] font-semibold bg-[#000] pb-6 rounded-xl pt-4 flex flex-col">
                <h1 className="pl-5 pb-4 flex justify-center">
                  LEARNING AND DEVELOPMENT
                </h1>
                <p className=" pb-4 text-sm px-5 text-white hidden xl:block lg:block md:hidden">
                  Learning and development is very esssential for the training
                  of employee of an organisation. Employee needs to relearn and
                  unlearn, so they can develop in their chosen career within the
                  organisation. effectively.
                </p>
                <p className=" pb-4 text-sm px-5 text-white xl:hidden lg:hidden md:block">
                  Learning and development is very esssential for the training
                  of employee of an organisation. Employee needs to relearn and
                  unlearn, so they can develop in their chosen career within the
                  organisation.
                </p>
                <button className="bg-[#03cfd6] lg:mx-[100px] rounded-xl p-[10px] xl:p-0 lg:p-0 xl:mx-20 h-10 text-base font-normal text-black m-auto">
                  <Link to="/learning">Learn More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <div
              data-aos="zoom-in"
              className="bg-[#000] mx-[20px] xl:mx-[60px] lg:mx-[60px] h-[350px] md:h-[316px] lg:h-[316px] md:mx-12 md:px-8 xl:h-[316px] rounded-xl xl:mt-10 lg:mt-10 pt-[20px] xl:pt-14 xl:px-28 flex flex-col items-center lg:px-20"
            >
              <h2 className=" lg:text-2xl text-xl xl:text-3xl text-white pb-4">
                Reduce Costs through Outsourcing
              </h2>
              <p className=" text-base text-white pb-4 hidden xl:block lg:block md:block">
                Our esteemed clients attain admirable business outcome working
                with our professional and competent personnel toidentify and
                close efficiency gaps. Our company’s objective is to innovate
                and set gap-specific business support solutions which results in
                verifable positive business results.
              </p>
              <p className=" text-sm text-white pb-4 xl:hidden px-2 lg:hidden md:hidden">
                Our esteemed clients attain admirable business outcome working
                with our professional and competent personnel toidentify and
                close efficiency gaps. Our company’s objective is to innovate
                and set gap-specific business support solutions which results in
                verifable positive business results.
              </p>
              <button className="font-normal text-sm xl:text-base h-10 bg-[#03cfd6] rounded-xl lg:mx-20 xl:mx-20 px-4 m-auto">
                <Link to="/hire">SCHEDULE OUR FREE CONSULTATION</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-10">
        <div className=" flex justify-around xl:pr-[250px] items-center lg:pr-[250px] pr-[50px] md:pr-24">
          <Link to="/faq">
            <img
              src={mess}
              alt="mess"
              className=" hidden xl:block lg:block md:block"
            />
          </Link>
          <h1 className=" text-xl xl:text-5xl font-semibold md:text-3xl lg:text-4xl">
            CLIENTS THAT TRUST US
          </h1>
        </div>
        <div className=" flex justify-center">
          <div className=" xl:h-48 xl:border-2 xl:border-black flex justify-around xl:gap-44 xl:p-4 items-center w-[1160px] mt-4 xl:mx-28">
            <marquee>
              <div className=" hidden xl:flex gap-44 lg:block md:block">
                <img src={client} alt="group" />
                <img src={client} alt="group" />
                <img src={client} alt="group" />
              </div>
            </marquee>
          </div>
        </div>
        <div className="border-2 h-24 border-black mx-7 xl:hidden lg:hidden md:hidden flex justify-around items-center">
          <marquee>
            <div className=" flex gap-8 xl:hidden lg:hidden md:hidden">
              <div className=" w-20 xl:hidden lg:hidden md:hidden">
                <img src={client} alt="group" />
              </div>
              <div className=" w-20 xl:hidden lg:hidden md:hidden">
                <img src={client} alt="group" />
              </div>
              <div className=" w-20 xl:hidden lg:hidden md:hidden">
                <img src={client} alt="group" />
              </div>
            </div>
          </marquee>
        </div>
      </div> */}

      <div className=" flex justify-center">
        <div
          data-aos="zoom-in"
          style={{ fontFamily: "Montserrat" }}
          className=" xl:w-[1160px] xl:h-[456px] bg-[url('/src/assets/cover2.png')] bg-cover bg-center bg-no-repeat mt-10 pt-10 mb-10 mx-6 md:mx-12 xl:mx-0 lg:mx-[100px]"
        >
          <div className=" flex flex-col items-center px-6 lg:px-0 xl:px-0">
            <h1 className=" xl:pb-5 text-[16px] pb-2 xl:text-3xl lg:text-3xl md:text-2xl">
              DON’T JUST TAKE OUR WORDS FOR IT
            </h1>
            <p className=" font-semibold text-black text-sm xl:text-2xl lg:text-2xl md:text-xl">
              Read what our clients are saying
            </p>
          </div>
          <div className=" xl:flex flex flex-col md:flex-row lg:flex-row md:pt-8 lg:pt-8 md:px-2 lg:px-2 xl:flex-row justify-around pt-7 xl:pt-12 px-6 xl:px-0">
            <div className=" text-black">
              <p className=" text-xl hidden xl:block lg:block md:block px-5">
                NUPAT Outsourcing is a network of hand selected and rigorously
                vetted employees. Join teams who have hired competent talents
                from NUPAT Outsourcing from few months to present time.
              </p>
              <p className=" text-sm xl:hidden pb-4 lg:hidden md:hidden">
                NUPAT Outsourcing is a network of hand selected and rigorously
                vetted employees. Join teams who have hired competent talents
                from NUPAT Outsourcing from few months to present time.
              </p>
              <div className=" flex items-center gap-4 pt-2 pb-6 xl:pb-0 xl:pt-8 px-5">
                <div className=" rounded-full bg-white h-10 w-10"></div>
                <div className=" flex flex-col">
                  <p>
                    <span className="hit">hkjkkkllllll</span>
                  </p>
                  <p>Appzone</p>
                </div>
              </div>
            </div>

            <div className=" text-black">
              <p className=" text-xl hidden xl:block lg:block md:block px-5">
                NUPAT Outsourcing is a network of hand selected and rigorously
                vetted employees. Join teams who have hired competent talents
                from NUPAT Outsourcing from few months to present time.
              </p>
              <p className=" text-sm xl:hidden pb-4 lg:hidden md:hidden">
                NUPAT Outsourcing is a network of hand selected and rigorously
                vetted employees. Join teams who have hired competent talents
                from NUPAT Outsourcing from few months to present time.
              </p>
              <div className=" flex items-center gap-4 pt-2 pb-6 xl:pb-0 xl:pt-8 px-5">
                <div className=" rounded-full bg-white h-10 w-10"></div>
                <div className=" flex flex-col">
                  <p>
                    <span className="hit">hkjkkkllllll</span>
                  </p>
                  <p>Appzone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-black h-fit">
        <div className=" xl:flex flex text-center justify-center text-xl md:text-2xl lg:text-3xl xl:text-3xl pt-8 text-[#03cfd6] font-semibold">
          <h1 className=" hidden lg:block xl:block md:block pb-8">
            BUILDING AFRICA’S LARGEST OUTSOURCING FIRM
          </h1>
          <h1 className=" xl:hidden lg:hidden md:hidden">
            BUILDING AFRICA’S LARGEST <br /> OUTSOURCING FIRM
          </h1>
        </div>
        <div className=" flex xl:flex-row md:flex-row lg:flex-row md:px-40 lg:px-40 md:gap-10 lg:gap-10 px-6 gap-6 pb-10 xl:pb-8 flex-col-reverse xl:flex justify-around pt-4 xl:px-40 xl:gap-10">
          <div>
            <img src={pic} alt="pic" className=" " />
          </div>
          <div>
            <img src={pic2} alt="pic2" className=" " />
          </div>
        </div>
      </div> */}

      {/* <div className="pt-28 xl:px-20 lg:px-20 md:px-20 pb-0 lg:pb-20 xl:pb-20 font-semibold xl:pl-36">
        <div className="xl:flex flex flex-col lg:flex-row md:flex-row xl:flex-row justify-around items-center xl:h-96 xl:gap-26">
          <div className=" xl:text-3xl text-xl text-center pb-5 lg:text-2xl">
            <h1>
              WE MAKE HIRING TALENT <br /> SEAMLESS IN 3 SIMPLE STEPS.
            </h1>
          </div>
          <div className="xl:py-44 xl:px-20 lg:px-20 md:py-28 lg:py-44 lg:text-3xl px-10 py-24 xl:text-4xl text-xl ">
            <img src={circle} alt="an image" />
          </div>
        </div>
      </div> */}

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" flex flex-col gap-4 pb-10"
      >
        <div className=" flex flex-col items-center text-center lg:p-6 xl:p-6">
          <h1 className=" font-semibold text-base lg:text-3xl md:text-2xl xl:text-4xl py-4">
            Benefits of working with NUPAT TEAMS
          </h1>
          <p className=" xl:text-2xl lg:text-xl md:text-lg text-base px-[100px] hidden xl:block md:block lg:block">
            We have various and specific potential benefits as to why you should
            work with us for the progress of your business.
          </p>
          <p className="px-6 xl:hidden block text-sm md:hidden lg:hidden">
            We have various and specific potential benefits as to why you should
            work with us for the progress of your business.
          </p>
        </div>
        <div
          data-aos="flip-right"
          className=" flex flex-col xl:flex-row lg:flex-row md:flex-col justify-around mx-6 md:mx-12 lg:mx-[60px] xl:mx-[200px] gap-4"
        >
          <div className="jet pb-[20px] xl:h-[393px] lg:w-[520px] lg:h-[393px] xl:w-[520px]">
            <div className=" text-[#03CFD6] flex flex-col items-center p-3 xl:p-6 text-xl font-semibold">
              <img src={cost} alt="image" />
              <h1 className=" pt-4">Cost Effective</h1>
            </div>
            <p className=" text-xl px-8 hidden xl:block md:block lg:block">
              Outsourcing with Nupat Teams is cost efficient and a
              cost-effective solution compared to hiring in- house staff to
              perform the same tasks. Nupat Teams takes advantage of economies
              of scale, lower labor costs in other regions, and specialized
              expertise to offer lower prices.
            </p>
            <p className=" px-4 block xl:hidden text-sm md:hidden lg:hidden">
              Outsourcing with Nupat Teams is cost efficient and a
              cost-effective solution compared to hiring in- house staff to
              perform the same tasks. Nupat Teams takes advantage of economies
              of scale, lower labor costs in other regions, and specialized
              expertise to offer lower prices.
            </p>
          </div>
          <div className="jet pb-[20px] xl:h-[393px] lg:w-[520px] lg:h-[393px] xl:w-[520px]">
            <div className=" text-[#03CFD6] flex flex-col items-center p-3 xl:p-6 text-xl font-semibold">
              <img src={access} alt="image" />
              <h1 className=" pt-4">ACCESS TO EXPERTISE</h1>
            </div>
            <p className=" text-xl px-8 hidden xl:block md:block lg:block">
              Outsourcing with Nupat Teams can provide access to specialized
              skills and expertise that may not be available in-house, such as
              language translation, web design, or IT services.
            </p>
            <p className=" px-4 block xl:hidden text-sm md:hidden lg:hidden">
              Outsourcing with Nupat Teams can provide access to specialized
              skills and expertise that may not be available in-house, such as
              language translation, web design, or IT services.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className=" flex flex-col xl:flex-row md:flex-col lg:flex-row justify-around mx-6 md:mx-12 lg:mx-[60px] xl:mx-[200px] gap-4"
        >
          <div className="jet pb-[20px] xl:h-[393px] lg:w-[520px] xl:w-[520px]">
            <div className=" text-[#03CFD6] flex flex-col items-center xl:p-6 p-4 text-xl font-semibold">
              <img src={team} alt="image" />
              <h1 className=" pt-4">Improved efficiency</h1>
            </div>
            <p className=" text-xl px-8 hidden xl:block lg:block md:block">
              We allow businesses to focus on its core competencies and reduce
              the time and resources required to perform non-core functions.
              This can lead to increased productivity and efficiency.
            </p>
            <p className=" text-sm px-8 block xl:hidden lg:hidden md:hidden">
              We allow businesses to focus on its core competencies and reduce
              the time and resources required to perform non-core functions.
              This can lead to increased productivity and efficiency.
            </p>
          </div>
          <div className="jet pb-[20px] xl:h-[393px] lg:h-[393px] lg:w-[520px] xl:w-[520px]">
            <div className=" text-[#03CFD6] flex flex-col items-center p-4 xl:p-6 text-xl font-semibold">
              <img src={cli} alt="image" />
              <h1 className=" pt-4">Risk Reduction</h1>
            </div>
            <p className=" text-xl px-8 hidden xl:block md:block lg:block">
              We help mitigate risk by shifting responsibility to the
              outsourcing company for certain functions, such as data security,
              compliance, or legal issues.
            </p>
            <p className=" text-sm px-8 block xl:hidden md:hidden lg:hidden">
              We help mitigate risk by shifting responsibility to the
              outsourcing company for certain functions, such as data security,
              compliance, or legal issues.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-black xl:mt-12 md:mt-12 lg:mt-12 md:mx-10 lg:mx-[60px] xl:mx-[100px] mx-6 font-semibold text-white"
      >
        <div className=" text-white text-[24px] xl:text-5xl text-lg md:text-2xl lg:text-4xl flex justify-center pt-5">
          <h1 data-aos="zoom-in" className=" hidden xl:block lg:block md:block">
            Want your business to stand out?
          </h1>
          <h1
            data-aos="zoom-in"
            className=" xl:hidden text-center lg:hidden md:hidden"
          >
            Want your business <br /> to stand out?
          </h1>
        </div>
        <div className=" xl:flex text-[20px] xl:text-[32px] lg:flex md:flex hidden justify-around pt-8 items-center text-center pb-10">
          <div data-aos="zoom-in" className=" items-center flex flex-col">
            <img src={group} alt="group" className=" pb-4" />
            <p>
              Schedule your <br /> consultation
            </p>
          </div>
          <div data-aos="zoom-in" className=" items-center flex flex-col">
            <img src={customer} alt="customer" className=" pb-4" />
            <p>We contact you</p>
          </div>
          <div data-aos="zoom-in" className=" items-center flex flex-col">
            <img src={business} alt="business" className=" pb-4" />
            <p>
              Watch us offer you <br /> the best talents
            </p>
          </div>
        </div>
        <div className=" xl:hidden md:hidden lg:hidden pt-8 items-center text-center pb-10">
          <div className=" flex justify-around items-center text-center">
            <div
              data-aos="zoom-in"
              className=" text-[15px] xl:text-[36px] items-center flex flex-col"
            >
              <img src={group} alt="group" className=" pb-4" />
              <p>
                Schedule your <br /> consultation
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className=" text-[15px] items-center flex flex-col"
            >
              <img src={customer} alt="customer" className=" pb-4" />
              <p>We contact you</p>
            </div>
          </div>
          <div className=" flex justify-center pt-4">
            <div
              data-aos="zoom-in"
              className=" text-[15px] items-center flex flex-col"
            >
              <img src={business} alt="business" className=" pb-4" />
              <p>
                Watch us offer you <br /> the best talents
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" rounded-xl bg-black text-white mt-10 md:mt-20 lg:mt-20 md:px-4 lg:px-4 md:mx-10 lg:mx-[60px] xl:mt-20 xl:px-4 xl:mx-[100px]"
      >
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row xl:flex items-center justify-around md:pt-0 lg:pt-0 xl:px-12 pt-6 xl:pt-0 px-[30px]">
          <div className=" xl:text-4xl text-xl lg:text-2xl md:text-xl">
            <h1 className=" hidden xl:block lg:block md:block">
              <span className="hit">
                Schedule a free consultation <br /> to take your business to the
                next level.
              </span>
            </h1>
            <h1 className="xl:hidden flex text-center lg:hidden md:hidden">
              <span className="hit">
                Schedule a free consultation to take your business to the next
                level.
              </span>
            </h1>
          </div>

          <form
            ref={form}
            onSubmit={validateForm}
            onClick={sendEmail}
            className="pt-5 text-[16px] xl:pt-10 lg:pt-10 md:pt-10"
          >
            <h3>Name*</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className=" pb-2">
                <input
                  type="text"
                  className=" h-8 w-[100%] text-black"
                  name="user_first"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {nameError && <p>{nameError}</p>}
                <p>First</p>
              </div>
              <div className=" pb-2">
                <input
                  type="lastname"
                  className=" h-8 w-[100%] text-black"
                  name="user_last"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {lastNameError && <p>{lastNameError}</p>}
                <p>Last</p>
              </div>
            </div>

            <div className="pb-12">
              <div className=" pb-2">
                <p>Email</p>
                <input
                  type="email"
                  className=" h-8 w-full text-black"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && <p>{emailError}</p>}
              </div>
              <div className=" pb-2">
                <p>Phone number</p>
                <input
                  type="text"
                  className=" h-8 w-full text-black"
                  name="user_number"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                  required
                />
                {phoneNumberError && <p>{phoneNumberError}</p>}
              </div>
              <div className=" pb-2">
                <p>Company Name</p>
                <input
                  type="text"
                  className=" h-8 w-full text-black"
                  name="user_companyname"
                  value={comName}
                  onChange={(e) => setComName(e.target.value)}
                  required
                />
                {comNameError && <p>{comNameError}</p>}
              </div>
              <div className=" pb-2">
                <p>Company Website</p>
                <input
                  type="text"
                  className=" h-8 w-full text-black"
                  name="user_companywebsite"
                  value={comWeb}
                  onChange={(e) => setComWeb(e.target.value)}
                  required
                />
                {comWebError && <p>{comWebError}</p>}
              </div>
              <div className=" pb-2">
                <p>Comment or Message*</p>
                <textarea
                  className="area h-20 w-full  text-black"
                  name="user_comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>
                {commentError && <p>{commentError}</p>}
              </div>
              <div className=" pb-2">
                <p>How did you hear about us?</p>
                <input
                  type="text"
                  className=" h-8 w-full text-black"
                  name="user_howdidyouhear"
                  value={hear}
                  onChange={(e) => setHear(e.target.value)}
                  required
                />
                {hearError && <p>{emailError}</p>}
              </div>
              <div className=" pt-2">
                <button
                  className="but1 h-10 xl:mb-8 lg:mb-8 w-28"
                  type="submit"
                  value="Send"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex flex justify-center md:justify-end lg:justify-end xl:justify-end pt-8 xl:pt-16 md:mx-12 lg:mx-20 xl:mx-20"
      >
        <div className=" flex flex-col xl:pt-5 lg:pt-5 md:pt-5">
          <h1 className="text-xl xl:text-2xl pb-2">Subscribe</h1>
          <p className="text-sm xl:text-base md:text-base pb-2">
            Create better experience with our business solution by subscribing{" "}
            <br /> to our newsletter.
          </p>

          <div className=" bg-black p-4 rounded-xl xl:mr-0 lg:mr-6 md:mr-0">
            <form
              className=" flex justify-center"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                placeholder="Enter your Email Address"
                className=" bg-white text-base flex justify-start pl-2 border-transparent xl:w-96 lg:w-96 md:w-[300px]"
                name="user_email"
              />
              <button
                type="submit"
                value="Send"
                className=" bg-black text-white text-sm xl:text-base px-4 md:text-base lg:text-base xl:px-20 xl:py-2 lg:px-20 md:px-20 md:py-2 lg:py-2 rounded-xl relative lg:right-2 md:right-1 xl:right-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-white pt-20 px-4 xl:px-0"
        id="faq"
      >
        <div className="flex flex-col xl:ml-[130px] md:ml-5 lg:ml-20 md:w-[80%] lg:w-1/2 xl:w-1/2 gap-5 xl:pl-0">
          <div className=" xl:text-3xl text-sm md:text-xl">
            <h1>Frequently Asked Questions</h1>
          </div>

          <Accordion>
            <div className=" bg-black text-white p-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div
                    style={{ fontFamily: "Montserrat" }}
                    className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl"
                  >
                    <img src={vector} alt="vector" /> What is Nupat Teams?
                  </div>
                </Typography>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Nupat Tearms is a global tech talent outsourcing company. We
                specialize in providing business with highly skilled
                professionals in various tech roles, including developers,
                engineers, designer, and product managers, among others.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <div className=" bg-black p-2 text-white">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <Typography>
                    <div
                      style={{ fontFamily: "Montserrat" }}
                      className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl"
                    >
                      <img src={vector4} alt="vector4" />
                      Can Nupat Teams scale its service as our business grows?
                    </div>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Absolutely. We understand that business needs change over time.
                Whether you require a single tech or an entire team, we have the
                scalability to meet your evolving demands. Our vast network of
                professionals allows us to quickly adapt and scale our service
                accordingly.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <div className=" bg-black p-2 text-white">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <Typography>
                    <div
                      style={{ fontFamily: "Montserrat" }}
                      className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl"
                    >
                      <img src={vector1} alt="vector1" />
                      How does Nupat Teams differ from traditional staffing
                      agencies?
                    </div>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Unlike traditional staffing agencies, Nupat Teams goes beyond
                simply providing developers and engineers. We offer a
                comprehensive range of tech talents, including product managers
                and designers, to meet diverse business needs. Our expertise
                lies in sourcing and matching top-qulity professionals to our
                clients' specific requirement.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <div className=" bg-black p-2 text-white">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <Typography>
                    <div
                      style={{ fontFamily: "Montserrat" }}
                      className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl"
                    >
                      <img src={vector5} alt="vector5" />
                      What is the pricing structure for Nupat Teams' services?
                    </div>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                We offer two pricing options: a one-time placement fee for
                permanent recruitement and commission-based monthly fee for
                outsourcing placements. Our flexible pricing models ensures that
                you can choose the option that aligns with your hiring needs
                budget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <div className=" bg-black p-2 text-white">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <Typography>
                    <div
                      style={{ fontFamily: "Montserrat" }}
                      className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl"
                    >
                      <img src={vector2} alt="vector2" />
                      What is the process for hiring tech talent through Nupat
                      Teams?
                    </div>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                The process is simple. first, we understand your specific talent
                requirements and project scope. Than, we leverage our extensive
                network and industry expertise to identify the most suitable
                candidates. Once we find the right match, we handle all the
                necessary paperwork and facilitate a smooth onboarding process.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <div className=" bg-black p-2 text-white">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <Typography>
                    <div
                      style={{ fontFamily: "Montserrat" }}
                      className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl"
                    >
                      <img src={vector4} alt="vector4" />
                      How can I get started with Nupat Teams?
                    </div>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Getting started is easy. Simply reach out to us through our
                contact form or give us a call. Our team will be happy to
                discuss your talent requirements and guide you through the
                process of partnering with Nupat Teams.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <div className=" bg-black p-2 text-white">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <Typography>
                    <div
                      style={{ fontFamily: "Montserrat" }}
                      className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl"
                    >
                      <img src={vector3} alt="vector3" />
                      What industries does Nupat Teams serve?
                    </div>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                We carter to a wide range of industries, including but not
                limited to technology, e-commerce, financial, healthcare, and
                startups. Our talent pool is highly adaptale, allowing us to
                serve business across various sectors.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <div className=" bg-black p-2 text-white">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <Typography>
                    <div
                      style={{ fontFamily: "Montserrat" }}
                      className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl"
                    >
                      <img src={vector4} alt="vector4" />
                      How does Nupat Teams ensure the quality of its tech
                      talents
                    </div>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                At Nupat, we have a rigorous screeing and vetting process. We
                evaluate candidates based on their technical skills, experience,
                and cultural fit. we also conduct thoroughly background checks
                and reference verification to ensure that our clients receive
                top-tiers professionals.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" mt-10 xl:mt-24 md:mt-10 text-white md:text-xl xl:text-base lg:text-base text-sm p-8 xl:px-14 lg:px-16 pt-10 bg-black mx-4 lg:mx-0 xl:mx-0"
      >
        <div className=" xl:flex flex flex-col xl:flex-row lg:flex-row justify-around">
          <div className="relative bottom-6">
            <img src={logo} alt="logo" className="relative right-8" />
            <p className=" relative bottom-7 -mb-0 lg:w-[296px] xl:w-[296px]">
              NUPAT Teams is a Business Process Outsourcing firm whose business
              is to increase clients' productivity, operational efficiency, and
              in turn profit by taking over some of their intensive business
              processes.
            </p>
          </div>
          <div>
            <h1 className=" pb-4 text-base xl:text-2xl font-semibold">
              Popular Links
            </h1>
            <div className=" grid-cols-2 grid lg:grid-cols-1 xl:grid xl:grid-cols-1">
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/about">About Us</Link>
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/service">Services</Link>
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/contact">Contact Us</Link>
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                {faq.map((link) => {
                  return (
                    <a href={link.url} key={link.id}>
                      {link.text}
                    </a>
                  );
                })}
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/join">Join Us</Link>
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/hire">Hire Talent</Link>
              </p>
            </div>
          </div>
          <div>
            <h1 className=" pb-4 text-base xl:text-2xl font-semibold">
              BUSINESS SERVICES
            </h1>
            <div className=" grid grid-cols-2 lg:grid-cols-1 xl:grid xl:grid-cols-1">
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/recruitement">Recruitment</Link>
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/business">Business Advisory</Link>
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="/it">IT Outsourcing</Link>
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="learning">Learning</Link>
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                <Link to="admistration">Administration</Link>
              </p>
            </div>
          </div>
          <div>
            <h1 className=" xl:pb-2 xl:text-2xl text-base font-semibold pb-4">
              CONTACT INFORMATION
            </h1>
            <p className=" flex items-center gap-4 pb-2">
              <img src={foot1} alt="foot1" className=" h-5" />
              46, Community Street,
              <br />
              Akoka, Yaba, Lagos
            </p>
            <p className=" flex items-center gap-4 pb-2">
              <img src={foot2} alt="foot2" className=" h-6" />
              +2348031958586 <br /> +2347081475750
            </p>
            <p className=" flex items-center gap-4 pb-10 xl:pb-16 lg:pb-16">
              <img src={foot3} alt="foot3" className=" h-4" />
              info@nupat.com.ng
            </p>
            <div className="flex items-center gap-5 pb-5 xl:pb-0 h-10 xl:h-5">
              <a href="https://www.instagram.com/nupat_teams/" target="_blank">
                <img src={foot4} alt="foot4" />
              </a>
              <a
                href="https://twitter.com/NupatTeams?t=7iM3cAQTKvTV0F_wix6D5w&s=09"
                target="_blank"
              >
                <img src={foot6} alt="foot6" className=" h-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/nupatteams/"
                target="_blank"
              >
                <img src={foot7} alt="foot7" className=" h-7" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className=" lg:flex-row lg:pb-6 xl:flex flex flex-col xl:flex-row items-center xl:gap-20 pt-5 xl:pb-10 pb-5 xl:px-6">
          <p>&copy;2023 NUPAT TEAMS. ALL RIGHT RESERVED.</p>
          <div className=" flex gap-8 pt-4 lg:pt-0 xl:pt-0">
            <p>TERMS</p>
            <p>PRIVACY</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

import "./App.css";
import { useState } from "react";
import logo from "./assets/logo.png";
// import arrow from "./assets/arrow.png";
// import circle from "./assets/new.png";
import box from "./assets/box.png";
// import image from "./assets/image.png";
import meet from "./assets/meet.png";
import line from "./assets/Line.png";
import line1 from "./assets/Line1.png";
// import overLay from "./assets/over-lay.png";
import chat from "./assets/chat.png";
import right from "./assets/right.png";
// import mess from "./assets/contact/circle.png";
// import client from "./assets/clients.png";
// import pic from "./assets/pic.png";
// import pic2 from "./assets/pic2.png";
import group from "./assets/Group.png";
import customer from "./assets/customer.png";
import business from "./assets/business.png";
import cost from "./assets/new/cost.png";
import access from "./assets/new/access.png";
import team from "./assets/new/team.png";
import cli from "./assets/new/cli.png";

import vector from "./assets/Vector.png";
import vector1 from "./assets/Vector1.png";
import vector5 from "./assets/Vector5.png";
import vector2 from "./assets/Vector2.png";
import vector3 from "./assets/Vector3.png";
import vector4 from "./assets/Vector4.png";
// import dot from "./assets/dot.png";

import foot from "./assets/foot.png";
import foot1 from "./assets/foot1.png";
import foot2 from "./assets/foot2.png";
import foot3 from "./assets/foot3.png";
import foot4 from "./assets/foot4.png";
// import foot5 from "./assets/foot5.png";
import foot6 from "./assets/foot6.png";
import foot7 from "./assets/foot7.png";
import { Link } from "react-router-dom";

import emailjs from "emailjs-com";
import { useRef, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useNavigate } from "react-router-dom";
import { faq } from "./Data";
