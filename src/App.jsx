function App() {
  const [navClose, setNavClose] = useState(true);
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
      <div
        style={{ fontFamily: "Montserrat" }}
        className="nav flex px-0 gap-20 lg:gap-2 bg-black xl:flex items-center justify-around xl:gap-[81px] sticky top-0 xl:px-4 z-10 md:gap-[450px] text-[16px]"
      >
        <div className=" mr-20 lg:mr-0 xl:mr-0 md:mr-20 flex items-center text-center h-20 pt-6">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:hidden lg:block text-white xl:flex">
          <ul className=" flex lg:gap-10 xl:gap-16 items-center text-center">
            <li className=" underline">HOME</li>
            <li className=" hover:underline">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className=" flex items-center gap-2 hover:underline">
              <Link to="/service">SERVICES</Link>
            </li>
            <li className=" hover:underline">
              <Link to="/faq">FAQs</Link>
            </li>
            <li className=" hover:underline">
              <Link to="/contact">CONTACT US</Link>
            </li>
            <button className="but text-[#000]">
              <Link to="/join">Join Us</Link>
            </button>
            <button className="but1 ">Hire Talent</button>
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
              <ul className=" flex flex-col gap-4 items-center pt-4">
                <li>HOME</li>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li className=" flex items-center gap-2">
                  <Link to="/service">SERVICES</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT US</Link>
                </li>
                <button className="but text-[#000]">Join Us</button>
                <button className="but1 ">Hire Talent</button>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sec h-[104px] lg:h-72 md:h-[190px] lg:pt-20 xl:h-72 text-center pt-10 xl:pt-20">
        <h1
          style={{ fontFamily: "Montserrat" }}
          className=" items-center h-0 font-semibold text-xs md:text-[27px] md:h-7 lg:h-12 lg:text-4xl xl:h-12 xl:text-[47px] flex justify-center"
        >
          THE RIGHT TALENT MAKES ALL THE DIFFERENCE
        </h1>
        <p
          style={{ fontFamily: "Montserrat" }}
          className=" h-0 pt-5 xl:h-7 md:h-4 text-[#1F335F] text-[10px] md:text-xl xl:text-[32px] lg:text-2xl xl:pt-12 flex justify-center"
        >
          DREAM JOBS, AFRICAN TOP TALENTS; All IN ONE PLACE
        </p>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-black h-[164px] xl:h-32 lg:h-32 px-0 text-[14px] lg:text-[16px] xl:text-[16px] lg:items-center lg:flex lg:justify-center lg:px-16 xl:items-center xl:justify-center flex xl:px-16 "
      >
        <div className=" flex flex-col lg:flex-row lg:gap-5 lg:justify-around m-auto xl:flex-row xl:flex xl:text-center xl:items-center xl:justify-around gap-5 xl:gap-24 text-white">
          <p className=" flex text-center items-center gap-4">
            <img src={box} alt="box" />
            Accomplish greater business infiltration
          </p>
          <p className=" flex text-center items-center gap-4">
            <img src={box} alt="box" />
            Achieving greater outcomes
          </p>
          <p className=" flex text-center items-center gap-4">
            <img src={box} alt="box" />
            Make expository market decisions
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" flex flex-col md:flex-row lg:flex-row md:flex lg:flex md:justify-around lg:justify-around xl:flex-row xl:flex xl:justify-around pt-5 xl:px-7 md:mx-0 lg:mx-10"
      >
        <div className=" flex flex-col md:flex-row lg:flex-row md:gap-1 lg:gap-1 xl:flex-row xl:flex gap-0 xl:gap-1">
          <div className=" flex justify-center px-6 md:block lg:hidden xl:hidden">
            <img src={meet} alt="meet" />
          </div>
          <div className=" flex pt-10 xl:pt-0 xl:pl-2 lg:pl-10 md:pl-10 pl-6">
            <div className=" xl:w-[10px]">
              <img
                src={line}
                alt="line"
                className=" h-16 md:h-24 lg:h-32 xl:h-32"
              />
            </div>
            <div>
              <p className=" xl:font-light pb-4 pl-2">WHY CHOOSE NUPAT?</p>
              <h1 className=" h-28 xl:text-4xl md:text-xl pl-2 hidden lg:block xl:block md:hidden xl:w-[822px]">
                We are A Full-Service Outsourcing <br />
                Agency
              </h1>
              <h1 className=" h-10 xl:h-14 text-base pl-2 xl:hidden lg:hidden md:block">
                We are A Full-Service Outsourcing Agency
              </h1>
              <p className=" text-xl hidden xl:block lg:block md:block xl:w-[842px]">
                <span className="text-2xl font-semibold">Nupat Teams</span>{" "}
                specializes in providing outsourced turnkey manpower solutions
                in information technology related roles and providing wide range
                of outsourcing. We help companies improve their bottom line when
                they leverage outsourcing.
              </p>
              <p className=" text-sm xl:hidden lg:hidden md:hidden">
                <span className=" text-base font-semibold">Nupat Teams</span>{" "}
                specializes in providing outsourced turnkey manpower solutions
                in information technology related roles and providing wide range
                of outsourcing. We help companies improve their bottom line when
                they leverage outsourcing.
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden xl:block lg:block md:hidden md:pt-8 xl:pt-0 lg:pt-0">
          <img src={image} alt="an image" />
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex xl:justify-around pt-10 xl:px-[20px] lg:flex md:flex-col lg:flex-row xl:flex-row md:justify-around md:px-4 lg:justify-around lg:px-8"
      >
        <div className=" bg-[url('/src/assets/cover1.png')] h-[350px] xl:h-[470px] lg:h-[470px] bg-no-repeat bg-center bg-cover mx-6 xl:mx-10 md:mx-10 lg:mx-10 text-white">
          <div className=" pl-3 lg:pl-6 md:pl-6 xl:pl-6 pt-10">
            <h1 className=" text-xl font-semibold xl:text-3xl lg:text-3xl md:text-2xl">
              Encouraging you to <span className="hit">Achieve</span> <br />{" "}
              More...
            </h1>
            <p className=" xl:text-xl pt-4 hidden xl:block xl:w-[731px] lg:text-base lg:block md:hidden">
              <span className=" text-xl font-semibold">Nupat Teams</span>
              accelerate growth by simplifying and personalizing interactions
              that build deep and friendly relationship and environment between
              people and organisations. Our services includes HR Services, IT
              Solution & support, Business intellligence, Developer’s operation
              and hiring Talents.
            </p>
            <p className=" text-xl pt-4 hidden xl:hidden xl:w-[731px] lg:text-base lg:hidden md:block">
              <span className=" text-xl font-semibold">Nupat Teams</span>
              accelerate growth by simplifying and personalizing interactions
              that build deep and friendly relationship and environment between
              people and organisations. Our services includes HR Services, IT
              Solution & support, Business intellligence, Developer’s operation
              and hiring Talents.
            </p>
            <p className="text-sm pt-4 xl:hidden lg:hidden md:hidden">
              <span className=" text-xl font-semibold">Nupat Teams</span>{" "}
              accelerate growth by simplifying and personalizing interactions
              that build deep and friendly relationship and environment between
              people and organisations. Our services includes HR Services, IT
              Solution & support, Business intellligence, Developer’s operation
              and hiring Talents.
            </p>
            <p className=" pl-8 pt-3 text-yellow-400">Read More</p>
          </div>
          <div className=" xl:flex flex justify-center relative -mt-20 xl:top-20 lg:top-40 md:top-40 md:pt-8 lg:pt-8 md:-mt-40 lg:-mt-40 px-10 mb-32 xl:mb-0 gap-2 top-14 xl:px-12 lg:px-12">
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
          </div>
        </div>

        <div className="fifth flex flex-col items-center lg:mt-0 lg:mx-0 mt-32 xl:mt-0 xl:p-5 mx-6 xl:mx-0">
          <div>
            <img src={chat} alt="chat" />
          </div>
          <img src={line1} alt="line" className=" pt-6 pb-4" />
          <p className=" text-center text-xl pb-8 xl:w-[377.77px] md:text-xl lg:text-base hidden xl:block md:block lg:block">
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
          <p className=" w-[340px] text-center text-sm pb-2 xl:hidden lg:hidden md:hidden p-[15px]">
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
          <p className=" text-[#1F335F] flex items-center text-xl gap-6 font-light pb-6 xl:pb-0">
            Search for Jobs
            <img src={right} alt="arrow" />
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
            OUR OUTSOURCING SERVICES AND <br /> DISTINGUISHED BUSINESS ASSIST{" "}
            <br /> SOLUTIONS.
          </h1>
        </div>
        <div className="text-center items-center pt-4 px-6 xl:px-28 flex flex-col gap-8 xl:gap-[10px] lg:gap-0 lg:w-[1160px] xl:w-[1160px] xl:mx-[50px]">
          <div className=" xl:flex md:gap-2 lg:gap-2 md:flex lg:flex xl:gap-[30px] flex flex-col md:flex-row lg:flex-row gap-6">
            <div className=" xl:h-[262px] w-[320px] h-[270px] xl:w-[374px] bg-[#000] rounded-xl pt-4 xl:pt-8 flex flex-col">
              <h1 className=" text-[#03cfd6] font-semibold  pb-2 xl:pb-4">
                RECRUITMENT
              </h1>
              <p className=" pb-4 text-sm px-5 text-white hidden xl:block lg:block md:hidden">
                We source and screen for the right people whowill deliver the
                right result for your organisation; professional and
                unprofessional positions thatsolve cpmpliance scalability, cost,
                quality orother recruiting challenge.
              </p>
              <p className=" pb-4 text-sm px-5 text-white xl:hidden lg:hidden md:block">
                We source and screen for the right people who will deliver the
                right result for your organisation; professional and
                unprofessional positions that solve cpmpliance scalability,
                cost, quality or other recruiting challenge.
              </p>
              <button className=" bg-[#03cfd6] rounded-xl mx-20 h-10 text-base font-normal xl:mb-4">
                <Link to="/recruitement">Learn More</Link>
              </button>
            </div>
            <div className="xl:h-[262px] xl:w-[374px] w-[320px] h-[270px] bg-[#03CFD6] rounded-xl pt-8 md:pt-5 flex flex-col">
              <h1 className=" pb-2 xl:pb-4 font-semibold text-black xl:pt-4">
                IT OUTSOURCING
              </h1>
              <p className=" text-sm pb-6 px-5 text-black hidden xl:block lg:block md:hidden">
                We’ve increased business productivity and efficiency in many
                organisations using technology, Let’s help your business scale
                with bespoke IT Solutions.
              </p>
              <p className=" text-sm pb-6 md:pb-4 px-5 text-black xl:hidden lg:hidden md:block">
                We’ve increased business productivity and efficiency in many
                organisations using technology, Let’s help your business scale
                with bespoke IT Solutions.
              </p>
              <button className="bg-[#000] rounded-xl mx-20 md:mx-10 h-10 text-base font-normal xl:mb-4 text-white">
                <Link to="/it">Learn More</Link>
              </button>
            </div>
            <div className="w-[320px] h-[270px] xl:h-[262px] xl:w-[374px] text-[#03cfd6] font-semibold bg-[#000] rounded-xl md:pt-5 pt-8 flex flex-col">
              <h1 className=" pb-2 xl:pb-4">BUSINESS ADVISORY</h1>
              <p className=" pb-6 text-sm px-5 text-white hidden xl:block lg:block md:hidden">
                This service focuses on non-permanent employee hiring. Our
                clients delegate the endless functions involved with contingent
                worker hiring and management.
              </p>
              <p className=" pb-3 xl:pb-6 text-sm px-5 text-white xl:hidden lg:hidden md:block">
                This service focuses on non-permanent employee hiring. Our
                clients delegate the endless functions involved with contingent
                worker hiring and management.
              </p>
              <button className="bg-[#03cfd6] rounded-xl md:mx-10 mx-20 h-10 text-base font-normal text-black">
                <Link to="/business">Learn More</Link>
              </button>
            </div>
          </div>

          <div className=" flex justify-center">
            <div className=" xl:flex flex flex-col md:flex-row xl:flex-row lg:flex-row lg:pt-8 xl:gap-8 lg:gap-2 gap-5 xl:pt-8 items-center">
              <div className="xl:h-[262px] xl:w-[374px] w-[320px] h-[270px] text-[#03cfd6] font-semibold bg-[#000] rounded-xl pt-4 flex flex-col">
                <h1 className="pb-2 xl:pb-4">TALENT HIRING</h1>
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
                <button className="bg-[#03cfd6] rounded-xl mx-20 h-10 text-base font-normal text-black xl:mb-2">
                  Learn More
                </button>
              </div>
              <div className="xl:h-[262px] xl:w-[374px] w-[320px] h-[270px] text-[#03cfd6] font-semibold bg-[#000] rounded-xl pt-4 flex flex-col">
                <h1 className="pl-5 pb-4">LEARNING AND DEVELOPMENT</h1>
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
                <button className="bg-[#03cfd6] rounded-xl mx-20 h-10 text-base font-normal text-black xl:mb-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#000] w-[320px] h-[400px] xl:h-[316px] xl:w-[1160px] rounded-xl xl:mt-10 lg:mt-10 pt-14 xl:px-28 flex flex-col items-center lg:px-20">
            <h2 className=" lg:text-2xl text-xl xl:text-3xl text-white pb-4">
              Reduce Costs through Outsourcing
            </h2>
            <p className=" text-base text-white pb-4 hidden xl:block lg:block md:hidden">
              Our esteemed clients attain admirable business outcome working
              with our professional and competent personnel <br /> toidentify
              and close efficiency gaps. Our company’s objective is to innovate
              and set gap-specific business support <br /> solutions which
              results in verifable positive business results.
            </p>
            <p className=" text-sm text-white pb-4 xl:hidden px-2 lg:hidden md:block">
              Our esteemed clients attain admirable business outcome working
              with our professional and competent personnel toidentify and close
              efficiency gaps. Our company’s objective is to innovate and set
              gap-specific business support solutions which results in verifable
              positive business results.
            </p>
            <button className="btn2 font-normal text-sm xl:text-base h-10 bg-[#03cfd6] rounded-xl lg:-mx-20 xl:mx-20 mb-5 px-4">
              SCHEDULE OUR FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>

      <div className="pt-10">
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
        <div className=" xl:h-48 xl:border-2 xl:border-black flex justify-around xl:gap-44 xl:p-4 items-center w-[1160px] mt-4 xl:mx-28">
          <marquee>
            <div className=" hidden xl:flex gap-44 lg:block md:block">
              <img src={client} alt="group" />
              <img src={client} alt="group" />
              <img src={client} alt="group" />
            </div>
          </marquee>
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
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:w-[1160px] xl:h-[456px] bg-[url('/src/assets/cover2.png')] bg-cover bg-center bg-no-repeat mt-10 pt-10 md:mx-32 lg:mx-[110px] xl:mx-[110px] mb-10 mx-6"
      >
        <div className=" flex flex-col items-center">
          <h1 className=" xl:pb-5 text-base pb-2 xl:text-3xl lg:text-3xl md:text-2xl">
            DON’T JUST TAKE OUR WORDS FOR IT
          </h1>
          <p className=" font-semibold text-black text-sm xl:text-2xl lg:text-2xl md:text-xl">
            Read what our clients are saying
          </p>
        </div>
        <div className=" xl:flex flex flex-col md:flex-row lg:flex-row md:pt-8 lg:pt-8 md:px-2 lg:px-2 xl:flex-row justify-around pt-7 xl:pt-12 px-6 xl:px-0">
          <div className=" text-black">
            <p className=" text-xl hidden xl:block lg:hidden md:hidden px-5">
              NUPAT Outsourcing is a network of hand selected and rigorously
              vetted employees. Join teams who have hired competent talents from
              NUPAT Outsourcing from few months to present time.
            </p>
            <p className=" text-sm xl:hidden pb-4 lg:block md:block">
              NUPAT Outsourcing is a network of hand selected and rigorously
              vetted employees. Join teams who have hired competent talents from
              NUPAT Outsourcing from few months to present time.
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
            <p className=" text-xl hidden xl:block lg:hidden md:hidden px-5">
              NUPAT Outsourcing is a network of hand selected and rigorously
              vetted employees. Join teams who have hired competent talents from
              NUPAT Outsourcing from few months to present time.
            </p>
            <p className=" text-sm xl:hidden pb-4 lg:block md:block">
              NUPAT Outsourcing is a network of hand selected and rigorously
              vetted employees. Join teams who have hired competent talents from
              NUPAT Outsourcing from few months to present time.
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
          <p className=" xl:text-2xl lg:text-xl md:text-lg text-base px-[100px] hidden xl:block">
            We have various and specific potential benefits as to why you should
            work with us for the progress of your business.
          </p>
          <p className="px-6 xl:hidden block text-sm">
            We have various and specific potential benefits as to why you should
            work with us for the progress of your business.
          </p>
        </div>
        <div className=" flex flex-col xl:flex-row lg:flex-row md:flex-row justify-around mx-6 xl:mx-[200px] gap-4">
          <div className="jet h-[300px] xl:h-[393px] xl:w-[520px]">
            <div className=" text-[#03CFD6] flex flex-col items-center p-3 xl:p-6 text-xl font-semibold">
              <img src={cost} alt="image" />
              <h1 className=" pt-4">Cost Effective</h1>
            </div>
            <p className=" text-xl px-8 hidden xl:block">
              Outsourcing with Nupat Teams is cost efficient and a
              cost-effective solution compared to hiring in- house staff to
              perform the same tasks. Nupat Teams takes advantage of economies
              of scale, lower labor costs in other regions, and specialized
              expertise to offer lower prices.
            </p>
            <p className=" px-4 block xl:hidden text-sm">
              Outsourcing with Nupat Teams is cost efficient and a
              cost-effective solution compared to hiring in- house staff to
              perform the same tasks. Nupat Teams takes advantage of economies
              of scale, lower labor costs in other regions, and specialized
              expertise to offer lower prices.
            </p>
          </div>
          <div className="jet h-[300px] xl:h-[393px] xl:w-[520px]">
            <div className=" text-[#03CFD6] flex flex-col items-center p-3 xl:p-6 text-xl font-semibold">
              <img src={access} alt="image" />
              <h1 className=" pt-4">ACCESS TO EXPERTISE</h1>
            </div>
            <p className=" text-xl px-8 hidden xl:block">
              Outsourcing with Nupat Teams can provide access to specialized
              skills and expertise that may not be available in-house, such as
              language translation, web design, or IT services.
            </p>
            <p className=" px-4 block xl:hidden text-sm">
              Outsourcing with Nupat Teams can provide access to specialized
              skills and expertise that may not be available in-house, such as
              language translation, web design, or IT services.
            </p>
          </div>
        </div>
        <div className=" flex flex-col xl:flex-row lg:flex-row md:flex-row justify-around mx-6 xl:mx-[200px] gap-4">
          <div className="jet h-[300px] xl:h-[393px] xl:w-[520px]">
            <div className=" text-[#03CFD6] flex flex-col items-center xl:p-6 p-4 text-xl font-semibold">
              <img src={team} alt="image" />
              <h1 className=" pt-4">Improved efficiency</h1>
            </div>
            <p className=" text-xl px-8 hidden xl:block">
              We allow businesses to focus on its core competencies and reduce
              the time and resources required to perform non-core functions.
              This can lead to increased productivity and efficiency.
            </p>
            <p className=" text-sm px-8 block xl:hidden">
              We allow businesses to focus on its core competencies and reduce
              the time and resources required to perform non-core functions.
              This can lead to increased productivity and efficiency.
            </p>
          </div>
          <div className="jet h-[300px] xl:h-[393px] xl:w-[520px]">
            <div className=" text-[#03CFD6] flex flex-col items-center p-4 xl:p-6 text-xl font-semibold">
              <img src={cli} alt="image" />
              <h1 className=" pt-4">Risk Reduction</h1>
            </div>
            <p className=" text-xl px-8 hidden xl:block">
              We help mitigate risk by shifting responsibility to the
              outsourcing company for certain functions, such as data security,
              compliance, or legal issues.
            </p>
            <p className=" text-sm px-8 block xl:hidden">
              We help mitigate risk by shifting responsibility to the
              outsourcing company for certain functions, such as data security,
              compliance, or legal issues.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-black xl:mt-12 md:mt-12 lg:mt-12 md:mx-32 lg:mx-32 xl:mx-[70px] mx-6 font-semibold text-white"
      >
        <div className=" text-white text-[24px] xl:text-5xl md:text-2xl lg:text-4xl flex justify-center pt-5">
          <h1 className=" hidden xl:block lg:block md:block">
            Want your business to stand out?
          </h1>
          <h1 className=" xl:hidden text-center lg:hidden md:hidden">
            Want your business <br /> to stand out?
          </h1>
        </div>
        <div className=" xl:flex text-[20px] xl:text-[32px] lg:flex md:flex hidden justify-around pt-8 items-center text-center pb-10">
          <div className=" items-center flex flex-col">
            <img src={group} alt="group" className=" pb-4" />
            <p>
              Schedule your <br /> consultation
            </p>
          </div>
          <div className=" items-center flex flex-col">
            <img src={customer} alt="customer" className=" pb-4" />
            <p>We contact you</p>
          </div>
          <div className=" items-center flex flex-col">
            <img src={business} alt="business" className=" pb-4" />
            <p>
              Watch us offer you <br /> the best talents
            </p>
          </div>
        </div>
        <div className=" xl:hidden md:hidden lg:hidden pt-8 items-center text-center pb-10">
          <div className=" flex justify-around items-center text-center">
            <div className=" text-[20px] xl:text-[36px] items-center flex flex-col">
              <img src={group} alt="group" className=" pb-4" />
              <p>
                Schedule your <br /> consultation
              </p>
            </div>
            <div className=" items-center flex flex-col">
              <img src={customer} alt="customer" className=" pb-4" />
              <p>We contact you</p>
            </div>
          </div>
          <div className=" flex justify-center pt-4">
            <div className=" items-center flex flex-col">
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
        className=" rounded-xl bg-black text-white mt-10 md:mt-20 lg:mt-20 md:px-4 lg:px-4 md:mx-32 lg:mx-32 xl:mt-20 xl:px-4 xl:mx-[70px]"
      >
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row xl:flex items-center justify-around md:pt-0 lg:pt-0 xl:px-12 pt-6 xl:pt-0 ">
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

          <div className=" text-[16px] pt-5 xl:pt-10 lg:pt-10">
            <h3>Name*</h3>
            <div className=" flex gap-5">
              <div className=" pb-2">
                <input
                  type="text"
                  className=" h-8 w-36 xl:w-56 lg:w-56 text-black"
                />
                <p>First</p>
              </div>
              <div className=" pb-2">
                <input
                  type="text"
                  className=" h-8 w-36 xl:w-56 lg:w-56 text-black"
                />
                <p>Last</p>
              </div>
            </div>

            <div className="pb-12">
              <div className=" pb-2">
                <p>Email</p>
                <input type="text" className=" h-8 w-full text-black" />
              </div>
              <div className=" pb-2">
                <p>Phone number</p>
                <input type="text" className=" h-8 w-full text-black" />
              </div>
              <div className=" pb-2">
                <p>Company Name</p>
                <input type="text" className=" h-8 w-full text-black" />
              </div>
              <div className=" pb-2">
                <p>Company Website</p>
                <input type="text" className=" h-8 w-full text-black" />
              </div>
              <div className=" pb-2">
                <p>Comment or Message*</p>
                <textarea className="area h-20 w-full  text-black"></textarea>
              </div>
              <div className=" pb-2">
                <p>How did you hear about us?</p>
                <input type="text" className=" h-8 w-full text-black" />
              </div>
              <div className=" pt-2">
                <button className="but1 h-10 xl:mb-8 w-28">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex flex justify-center md:justify-end lg:justify-end xl:justify-end pt-8 xl:pt-16 mx-14"
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
                className=" bg-white text-base flex justify-start pl-2 border-transparent xl:w-96 lg:w-96"
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
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" bg-white pt-20 px-4 xl:px-0"
      >
        <div className=" flex flex-col xl:ml-18 md:ml-20 lg:ml-20 md:w-1/2 lg:w-1/2 xl:w-1/2 gap-5 xl:pl-0">
          <div className=" xl:text-3xl text-sm md:text-xl">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className=" bg-black p-4 flex justify-between items-center text-white">
            <p className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl">
              <img src={vector} alt="vector" />
              What is Nupat Teams all about?
            </p>
            <img src={dot} alt="dot" />
          </div>
          <div className=" bg-black p-4 flex justify-between items-center text-white">
            <p className=" flex items-center gap-4 text-xs xl:text-sm md:text-xl">
              <img src={vector1} alt="vector1" />
              Outsourcing services offered by NUPAT Outsourcing Agency?
            </p>
            <img src={dot} alt="dot" />
          </div>
          <div className=" bg-black p-4 flex justify-between items-center text-white">
            <p className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl">
              <img src={vector5} alt="vector5" />
              Does NUPAT Outsourcing Agency offer affordable service?
            </p>
            <img src={dot} alt="dot" />
          </div>
          <div className=" bg-black p-4 flex justify-between items-center text-white">
            <p className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl">
              <img src={vector2} alt="vector2" />
              Are clients information kept confidential?
            </p>
            <img src={dot} alt="dot" />
          </div>
          <div className=" bg-black p-4 flex justify-between items-center text-white">
            <p className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl">
              <img src={vector3} alt="vector3" />
              Does NUPAT Outsourcing Agency have adequate infrastructure to
              support businesses?
            </p>
            <img src={dot} alt="dot" />
          </div>
          <div className=" bg-black p-4 flex justify-between items-center text-white">
            <p className=" flex items-center gap-4 xl:text-sm text-xs md:text-xl">
              <img src={vector4} alt="vector4" />I want to outsource to NUPAT
              Outsourcing. What do i do?
            </p>
            <img src={dot} alt="dot" />
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" mt-10 xl:mt-24 md:mt-10 text-white md:text-xl xl:text-base lg:text-base text-sm p-8 xl:px-14 lg:px-16 pt-10 bg-black mx-4 lg:mx-0 xl:mx-0"
      >
        <div className=" xl:flex flex flex-col xl:flex-row lg:flex-row justify-around">
          <div className="relative bottom-6">
            <img src={logo} alt="logo" className="relative right-8" />
            <p className=" relative bottom-7 -mb-0 w-[296px]">
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
                About Us
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                Jobs
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                Contact Us
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                FAQs
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                Find other services
              </p>
              <p className=" flex items-center gap-4 pb-5">
                <img src={foot} alt="foot" />
                Talent Acquisition
              </p>
            </div>
          </div>
          <div>
            <h1 className=" pb-4 text-base xl:text-2xl font-semibold">
              BUSINESS SUPPORT SERVICES
            </h1>
            <div className=" grid grid-cols-2 lg:grid-cols-1 xl:grid xl:grid-cols-1">
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Recruitment
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Background Checks
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                IT Outsourcing
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Digital Marketing
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Learning Solution
              </p>
              <p className=" flex items-center xl:pl-16 gap-4 pb-5">
                <img src={foot} alt="foot" />
                Sales Outsourcing
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
            <div className="flex gap-5 pb-5 xl:pb-0 h-10 xl:h-8">
              <img src={foot4} alt="foot4" />
              <img src={foot5} alt="foot5" />
              <img src={foot6} alt="foot6" />
              <img src={foot7} alt="foot7" />
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
import circle from "./assets/new.png";
import box from "./assets/box.png";
import image from "./assets/image.png";
import meet from "./assets/meet.png";
import line from "./assets/Line.png";
import line1 from "./assets/Line1.png";
import overLay from "./assets/over-lay.png";
import chat from "./assets/chat.png";
import right from "./assets/right.png";
import mess from "./assets/contact/circle.png";
import client from "./assets/clients.png";
import pic from "./assets/pic.png";
import pic2 from "./assets/pic2.png";
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
import dot from "./assets/dot.png";

import foot from "./assets/foot.png";
import foot1 from "./assets/foot1.png";
import foot2 from "./assets/foot2.png";
import foot3 from "./assets/foot3.png";
import foot4 from "./assets/foot4.png";
import foot5 from "./assets/foot5.png";
import foot6 from "./assets/foot6.png";
import foot7 from "./assets/foot7.png";
import { Link } from "react-router-dom";

import emailjs from "emailjs-com";
import { useRef } from "react";
