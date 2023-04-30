const About = () => {
  const [navClose, setNavClose] = useState(true);
  const [drop, setDrop] = useState(true);
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="nav flex px-0 gap-20 lg:gap-2 bg-black xl:flex items-center justify-around xl:gap-[81px]  sticky top-0 xl:px-4 z-10 md:gap-0"
      >
        <div className=" mr-20 lg:mr-0 xl:mr-0 flex items-center text-center h-20 pt-6 md:mr-0">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block lg:block text-white xl:flex">
          <ul className=" flex lg:gap-10 xl:gap-16 items-center text-center md:gap-2">
            <li className=" hover:underline">
              <Link to="/">HOME</Link>
            </li>
            <li className=" underline">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className=" hover:underline">
              <div className="" onClick={() => setDrop(!drop)}>
                {drop ? (
                  <div className=" flex items-center gap-2">
                    <Link to="/service">SERVICES</Link>
                    <img src={arrow} alt="arrow" />
                  </div>
                ) : (
                  <div className="close">
                    <div className="close2 flex items-center gap-2 justify-center relative top-[15px] -mt-[15px] pb-[15px]">
                      <Link>SERVICES</Link>
                      <img src={arrow} alt="arrow" />
                    </div>
                    <div className="close1 absolute left-[540px] bg-black flex flex-col items-start gap-2 text-[#03cfd6] top-[50px] p-[20px]">
                      <h1 className=" hover:underline">
                        <Link to="/business">BUSINESS ADVISORY</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/recruitement">RECRUITMENT & SELECTION</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/IT">IT SOLUTION</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/learning">LEARNING DEVELOPMENT</Link>
                      </h1>
                      <h1 className=" hover:underline">
                        <Link to="/admistration">ADMINISTRATION</Link>
                      </h1>
                    </div>
                  </div>
                )}
              </div>
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
        <div className="flex justify-end lg:hidden xl:hidden mr-6 md:hidden">
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
                <li>
                  <Link to="/">HOME</Link>
                </li>
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

      <div
        style={{ fontFamily: "Montserrat" }}
        className="back flex xl:h-72 lg:h-72 h-52 justify-center items-center text-center"
      >
        <div className="">
          <h1 className="hit font-semibold xl:text-3xl md:text-2xl lg:text-3xl lg:pb-10 text-base pb-5 xl:pb-10 ">
            WHY CHOOSE NUPAT
          </h1>
          <p className=" text-white text-xs xl:text-2xl lg:text-2xl md:text-xl">
            GET TO KNOW WHY WE STAND OUT IN WHAT WE DO
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="body pt-5 xl:pt-10 lg:pt-10"
      >
        <div className=" xl:flex flex flex-col lg:flex-row xl:flex-row xl:gap-14 justify-around lg:px-20 xl:px-14">
          <div className=" px-6 xl:px-6 lg:px-6 md:mx-4 lg:mx-0 xl:mx-0">
            <div className=" flex gap-2 xl:gap-0 lg:block xl:block lg:gap-0">
              <div className="pic1">
                <img src={pic1} alt="pic1" />
              </div>
              <div className="pic2 relative xl:-mb-60 xl:bottom-60 lg:bottom-60 lg:-mb-60 lg:left-48 xl:left-48 ">
                <img src={pic2} alt="pic2" />
              </div>
              <div className="pic3 relative xl:left-8 xl:bottom-96 lg:bottom-96 lg:-mb-96 xl:-mb-96">
                <img src={pic3} alt="pic3" />
              </div>
            </div>
            <div className=" relative xl:bottom-72 px-20 xl:px-0 bottom-8 lg:bottom-72 lg:-mb-72 lg:left-20 md:ml-20 lg:pt-3 -mb-8 xl:left-60 xl:-mb-72">
              <img src={pic4} alt="pic4" />
            </div>
          </div>
          <div className=" xl:pt-40 lg:pt-40">
            <p className=" bg-[#03CFD6] text-xl xl:text-2xl lg:text-2xl md:text-2xl md:flex lg:flex xl:flex flex text-center justify-center mx-6 mt-8 lg:mt-0 lg:mx-0 xl:mt-0 w-36 xl:mx-0 rounded-xl xl:w-52 lg:w-52 md:w-52 md:p-2 lg:p-2 xl:p-2 items-center text-black mb-4 lg:mb-4 lg:pl-5 xl:mb-4 xl:pl-5 md:ml-10">
              About Us
            </p>
            <h1 className="hidden xl:block text-base xl:text-4xl lg:text-2xl mb-8 font-semibold lg:block md:hidden">
              Starting with <span className="star">NUPAT</span> is the <br />{" "}
              best choice you’ll ever make!
            </h1>
            <h1 className=" text-base xl:hidden mb-4 xl:mb-8 font-semibold xl:px-4 px-6 lg:hidden md:block md:text-2xl md:pl-12">
              Starting with <span className="star">NUPAT</span> is the best
              choice you’ll ever make!
            </h1>
            <p className="xl:text-xl text-xs xl:block flex px-6 xl:px-0 mb-6 lg:block lg:text-base md:text-xl md:pl-12 lg:pl-0 xl:pl-0 lg:px-0 w-[603px]">
              Nupat is a Business Process Outsourcing firm whose business is to
              increase client’s productivity, operational efficiency, and in
              turn profit by taking over some of their intensive business
              processes as well as its administrative tasks based on measurable
              performance metrics. <br /> <br /> At Nupat, we analyze client
              isuues beyond conventional wisdom to create opportunities for our
              clients, prospects, colleagues, and community.
            </p>
            <button className=" bg-black text-white px-8 py-2 xl:px-2 xl:py-2 mb-6 xl:mb-0 mx-6 xl:mx-0 rounded-xl lg:mx-0 md:ml-12 xl:ml-0 lg:ml-0 w-[250px] h-[60px]">
              <Link to="/contact">Contact us Today!</Link>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" pt-8 xl:pt-16 items-center lg:pt-16 md:pt-16"
      >
        <p className="tex rounded-3xl flex justify-center items-center p-4 w-56 md:w-80 lg:w-80 xl:w-[390px] xl:h-[80px] mx-6 xl:ml-24 lg:ml-16 md:text-xl lg:text-xl text-base xl:text-2xl xl:mb-8 mb-12 md:ml-12">
          What makes us Stand out
        </p>
        <h1 className=" xl:pl-24 lg:pl-10 lg:text-3xl md:text-3xl text-base xl:text-4xl mx-6 xl:mx-0 pb-4 md:pl-6">
          At <span className="hit font-semibold">NUPAT!</span>
        </h1>
        <p className="hidden xl:block xl:text-xl lg:text-base xl:pl-[100px] lg:pl-16 lg:block md:hidden xl:w-[1232px]">
          Our desire to consistently deliver value-added services to our clients
          has helped us to evolve into a pacesetter and standard bearer in our
          industry. We have a reputation for satisfying and surpassing our
          client’s expectation. <br /> <br />
          Helping our clients achieve greater business outcomes is why NUPAT
          Outsourcing exist. We work with them to identify and close efficiency
          gaps, creating and deploying gap-specific business support solutions
          which result in verifiable positive outcomes.
        </p>
        <p className="xl:hidden text-xs px-6 lg:hidden md:block md:text-xl md:pl-12">
          Our desire to consistently deliver value-added services to our clients
          has helped us to evolve into a pacesetter and standard bearer in our
          industry. We have a reputation for satisfying and surpassing our
          client’s expectation. <br /> <br />
          Helping our clients achieve greater business outcomes is why NUPAT
          Outsourcing exist. We work with them to identify and close efficiency
          gaps, creating and deploying gap-specific business support solutions
          which result in verifiable positive outcomes.
        </p>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" pt-8 xl:pt-10 lg:pt-10 md:pt-10"
      >
        <h1 className=" text-black text-base px-6 xl:px-0 xl:text-3xl md:text-2xl lg:text-2xl md:pl-12 lg:pl-16 font-semibold xl:pl-24 pb-10 ">
          <span className=" underline underline-offset-4">OUR</span> CORE VALUES
        </h1>
        <div className="value xl:mx-20 pb-12 pt-12 lg:mx-16 md:mx-10 xl:h-[780px] xl:w-[1232px]">
          <div className="flex flex-col gap-8 xl:gap-0 lg:gap-0 md:gap-0 md:flex-row xl:flex-row lg:flex-row xl:flex justify-around text-center pb-10">
            <div>
              <div className=" flex justify-center p-4">
                <img src={group} alt="group" />
              </div>
              <h1 className=" xl:text-3xl lg:text-2xl md:text-2xl text-base font-semibold pb-2 text-blue-900">
                Committed to Excellence
              </h1>
              <p className="text-xs xl:text-base lg:text-base md:text-base xl:h-[76px ] xl:w-[363px]">
                While we care about the outcomes, service is at the heart of how
                we make it happen. Our culture is built on the highest quality
                and value
              </p>
            </div>
            <div>
              <div className=" flex justify-center p-4">
                <img src={group2} alt="group2" />
              </div>
              <h1 className="text-base lg:text-2xl md:text-2xl xl:text-3xl font-semibold pb-2 text-blue-900">
                Customer Centric
              </h1>
              <p className=" text-xs xl:text-base lg:text-base md:text-base xl:w-[363px] xl:h-[106px]">
                At NUPAT Outsourcing Agency, we demands that the customer is the
                focal point of all decisions related to delivering products,
                services and experiences to create customer satisfaction,
                loyalty and advocacy
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row md:flex-row lg:flex-row xl:flex justify-around text-center gap-8 xl:gap-0 xl:pt-10 pb-10">
            <div>
              <div className=" flex justify-center p-4">
                <img src={group3} alt="group3" />
              </div>
              <h1 className="text-base xl:text-3xl md:text-2xl lg:text-2xl font-semibold pb-2 text-blue-900">
                Growth Mindset
              </h1>
              <p className=" text-xs xl:text-base lg:text-base md:text-base xl:w-[363px] xl:h-[106px]">
                Growth is the core of our misiion which is why our processes
                were formed on strict standards, to constantly ensure the best
                possibilities
              </p>
            </div>
            <div>
              <div className=" flex justify-center p-4">
                <img src={group4} alt="group4" />
              </div>
              <h1 className="text-base xl:text-3xl lg:text-2xl md:text-2xl font-semibold pb-2 text-blue-900">
                Value Driven
              </h1>
              <p className=" text-sm xl:text-base lg:text-base md:text-base xl:w-[363px] xl:h-[56px]">
                At NUPAT Outsourcing Agency, our utmost desire is to create
                value and derive value from services rendered.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" px-6 xl:px-6 lg:px-6 md:px-6"
      >
        <h1 className=" font-semibold text-black text-xl xl:text-3xl md:text-3xl lg:text-3xl md:pl-12 lg:pl-16 md:pb-6 lg:pb-6 xl:pl-18 pb-3 xl:pb-6 pt-8 ">
          <span className=" underline underline-offset-4">OUR</span> MISSION
        </h1>
        <p className=" text-xs xl:text-2xl xl:pl-18 lg:pl-16 md:pl-12 md:text-xl lg:text-2xl">
          To connect Top Talents with Global opportunities.
        </p>

        <h1 className=" font-semibold text-black text-xl lg:text-3xl md:text-3xl xl:text-3xl md:pl-12 lg:pl-16 xl:pl-18 pb-3 md:pb-6 lg:pb-6 xl:pb-6 pt-4 ">
          <span className=" underline underline-offset-4">OUR</span> VISION
        </h1>
        <p className=" hidden xl:block h-[58px] md:text-x lg:text-2xl xl:text-2xl xl:pl-18 pl-32 lg:pl-16 md:pl-16 lg:block w-[1224px] md:hidden">
          To build a world where Global opportunities are accessible to every
          talented individual regardless of location and background
        </p>
        <p className=" hidden xl:hidden md:text-xl lg:text-2xl xl:text-2xl xl:pl-32 pl-32 lg:pl-16 md:pl-12 lg:hidden md:block">
          To build a world where Global opportunities are accessible to every
          talented individual regardless of location and background
        </p>
        <p className=" text-xs xl:hidden lg:hidden md:hidden">
          To build a world where Global opportunities are accessible to every
          talented individual regardless of location and <br /> background
        </p>

        <h1 className=" font-semibold text-black text-xl xl:text-3xl lg:text-3xl md:text-3xl lg:pl-16 md:pl-12 md:pb-6 lg:pb-6 xl:pl-18 pb-3 xl:pb-6 pt-4 ">
          <span className=" underline underline-offset-4">OUR</span> TEAM
        </h1>
        <p className=" hidden xl:block md:text-xl lg:text-2xl xl:text-2xl xl:pl-18 w-[1232px] h-[58px] lg:pl-16 md:pl-16 lg:block md:hidden">
          Our team is made up of highly competent, experienced professionals
          fully committed to provide high quality client focused service that
          can add value to your business.
        </p>
        <p className=" hidden xl:hidden md:text-xl lg:text-2xl xl:text-2xl xl:pl-32 lg:pl-16 md:pl-12 lg:hidden md:block">
          Our team is made up of highly competent, experienced professionals
          fully <br /> committed to provide high quality client focused service
          that can add value to your business.
        </p>
        <p className=" text-xs xl:hidden lg:hidden md:hidden">
          Our team is made up of highly competent, experienced <br />{" "}
          professionals fully committed to provide high quality client <br />{" "}
          focused service that can add value to your business.
        </p>

        <div>
          <button className="xl:hidden md:hidden lg:hidden items-center bg-[#03CFD6] rounded-xl mt-5 p-2">
            <Link to="/team" className=" flex items-center gap-5">
              Meet the Team
              <img src={right} alt="right" />
            </Link>
          </button>
        </div>

        <div className="team hidden font-semibold lg:flex xl:flex text-black mt-12 pt-12 flex-col gap-10 px-20 pb-16 xl:mx-[60px] lg:mx-10 md:flex md:mx-10 w-[1200px] h-[1746px]">
          <div className=" xl:flex lg:flex xl:justify-around lg:justify-around xl:gap-10 lg:gap-4 md:grid md:grid-cols-2 md:gap-24">
            <div>
              <div className=" h-72 xl:w-[300px] xl:h-[280px] lg:w-52 rounded-3xl relative xl:left-6 lg:left-4 md:left-6 -mt-[160px] top-[160px]">
                <img src={ceo} alt="" />
              </div>
              <div className="text md:w-72 flex justify-center items-center flex-col pt-40 text-xl lg:text-lg xl:h-[400px] xl:w-[350px] lg:w-64 lg:h-64 bg-white">
                <p>Nnamdi Ugwu</p>
                <p>CEO/Managing Director</p>
              </div>
            </div>
            <div>
              <div className=" h-72 xl:w-[300px] lg:w-52 rounded-3xl relative xl:left-6 lg:left-4 md:left-6 -mt-[160px] top-[160px]">
                <img src={coo} alt="" />
              </div>
              <div className="text flex md:w-72 justify-center items-center flex-col pt-40 text-xl lg:text-lg xl:w-[350px] xl:h-[400px] lg:w-64 lg:h-64 bg-white">
                <p>Olanrewaju Paul</p>
                <p>COO/Business Manager</p>
              </div>
            </div>
            <div>
              <div className=" h-72 xl:w-[300px] lg:w-52 rounded-3xl relative xl:left-6 lg:left-4 md:left-6 -mt-[160px] top-[160px]">
                <img src={cto} alt="" />
              </div>
              <div className="text flex md:w-72 justify-center items-center flex-col pt-40 text-xl lg:text-lg xl:h-[400px] xl:w-[350px] lg:w-64 lg:h-64 bg-white">
                <p>Chibuike Ugwu</p>
                <p>CEO/Managing Director</p>
              </div>
            </div>
            <div className="md:block xl:hidden lg:hidden">
              <div className=" h-72 xl:w-72 lg:w-52 rounded-3xl relative xl:left-4 lg:left-4 md:left-6 -mt-[160px] top-[160px] ">
                <img src={cbo} alt="" />
              </div>
              <div className="text flex md:w-72 justify-center items-center flex-col pt-40 text-xl lg:text-lg xl:h-80 xl:w-80 lg:w-64 lg:h-64 bg-white">
                <p>Ogunfunmilade Ibukunoluwa</p>
                <p>CBO/Brand Manager</p>
              </div>
            </div>
          </div>

          <div className=" xl:flex lg:flex lg:justify-around xl:justify-around gap-12 md:grid md:grid-cols-2 md:gap-24 xl:gap-10 lg:gap-12">
            <div className="md:hidden xl:block lg:block">
              <div className=" h-72 xl:w-[300px] lg:w-52 rounded-3xl relative left-6 -mt-[160px] top-[160px] ">
                <img src={cbo} alt="" />
              </div>
              <div className="text flex md:w-72 justify-center items-center flex-col pt-40 text-xl lg:text-lg xl:h-[400px] xl:w-[350px] lg:w-64 lg:h-64 bg-white">
                <p>Ogunfunmilade Ibukunoluwa</p>
                <p>CBO/Brand Manager</p>
              </div>
            </div>
            <div>
              <div className="imgs1 h-72 xl:w-[300px] lg:w-52 w-72 rounded-3xl relative xl:left-6 lg:left-4 md:left-6 -mt-[160px] top-[160px]">
                <img src="" alt="" />
              </div>
              <div className="text flex md:w-72 justify-center items-center flex-col pt-44 text-xl lg:text-lg xl:h-[400px] xl:w-[350px] lg:w-64 lg:h-64 bg-white">
                <p>Anuoluwapo Adedeji</p>
                <p>Senior HR Manager</p>
              </div>
            </div>
            <div>
              <div className=" h-72 xl:w-[300px] lg:w-52 rounded-3xl relative xl:left-6 lg:left-4 md:left-6 -mt-[160px] top-[160px]">
                <img src={anu} alt="" />
              </div>
              <div className="text flex md:w-72 justify-center text-xl items-center lg:text-lg flex-col pt-40 xl:h-[400px] xl:w-[350px] lg:w-64 lg:h-64 bg-white">
                <p>Anuoluwapo Bankole</p>
                <p>Talent Specialist</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <div className="imgs1 h-72 xl:w-[300px] lg:w-52 w-72 rounded-3xl relative xl:left-0 lg:left-4 md:left-6 -mt-[160px] top-[160px]">
              <img src="" alt="" />
            </div>
            <div className="text flex md:w-72 justify-center items-center flex-col pt-44 text-xl lg:text-lg xl:h-[400px] xl:w-[350px] lg:w-64 lg:h-64 bg-white">
              <p>Gbolaga Adegbola </p>
              <p>Human Capital Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="bg-[url('/src/assets/about/bg2.png')] w-[1076px] xl:h-[280px] bg-no-repeat bg-center bg-cover xl:px-0 lg:px-0 px-2 mx-6 md:mt-20 h-36 md:h-72 lg:h-72 text-white lg:pt-5 xl:pt-10 md:mx-24 lg:mx-36 lg:mt-10 xl:mx-[130px] mt-5 xl:mt-10"
      >
        <div className="flex justify-around items-center">
          <div className=" text-xs xl:text-3xl lg:text-2xl md:text-xl h-[117px] w-[519px]">
            <h1>
              Schedule a free consultaion to take your business to the next
              level.
            </h1>
          </div>
          <div className=" py-1 xl:py-0 lg:py-0 md:py-0 text-xs xl:text-xl md:text-xl w-[224px] h-[48px] flex items-center lg:text-xl text-black xl:bg-yellow-300 md:bg-yellow-300 lg:bg-yellow-300 bg-[#03CFD6] rounded-md px-1 md:p-2 lg:p-2 lg:mt-40 md:mt-40 xl:p-2 mt-20 xl:mt-40">
            <p>Get in touch with us </p>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className=" xl:flex hidden justify-around gap-[220px] items-center pt-14 lg:flex md:flex md:mx-6 xl:mx-0 lg:mx-0"
      >
        <div className=" flex flex-col pr-10 pt-5">
          <h1 className=" md:text-xl lg:text-2xl xl:text-2xl pb-2 font-semibold">
            Subscribe
          </h1>
          <p className="text-base pb-2">
            Create better experience with our business solution by subscribing{" "}
            <br /> to our newsletter.
          </p>

          <div className=" bg-black p-4 rounded-xl mr-6 ">
            <div className=" flex justify-center">
              <input
                type="text"
                placeholder="Enter your Email Address"
                className=" bg-white text-base flex justify-start pl-2 border-transparent w-96"
              />
              <button className=" bg-black text-white text-base px-20 py-2 rounded-xl relative right-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <Link to="/faq">
          <div>
            <img
              src={mess}
              alt="mess"
              className=" md:hidden xl:block lg:block"
            />
          </div>
        </Link>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="xl:hidden flex justify-center pt-8 mx-14 md:hidden lg:hidden"
      >
        <div className=" flex flex-col">
          <h1 className=" text-xl pb-2">Subscribe</h1>
          <p className=" text-xs pb-2">
            Create better experience with our business solution by subscribing{" "}
            <br /> to our newsletter.
          </p>

          <div className=" bg-black p-4 rounded-xl">
            <div className=" flex justify-center">
              <input
                type="text"
                placeholder="Enter your Email Address"
                className=" bg-white text-base flex justify-start pl-2 border-transparent xl:w-96"
              />
              <button className=" bg-black text-white text-sm px-4 rounded-xl relative">
                Subscribe
              </button>
            </div>
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
};

export default About;

import React from "react";
import "./About.css";
import { useState } from "react";
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.png";
import { Link } from "react-router-dom";
import pic1 from "./assets/about/pic1.png";
import pic2 from "./assets/about/pic2.png";
import pic3 from "./assets/about/pic3.png";
import pic4 from "./assets/about/pic4.png";
import group from "./assets/about/group.png";
import group2 from "./assets/about/group2.png";
import group3 from "./assets/about/group3.png";
import group4 from "./assets/about/group4.png";
import right from "./assets/about/right.png";
import ceo from "./assets/about/nupat.png";
import coo from "./assets/about/paulo.png";
import cto from "./assets/about/henry.png";
import cbo from "./assets/about/ibukun.png";
import anu from "./assets/about/anu.png";
import mess from "./assets/contact/circle.png";
import foot from "./assets/foot.png";
import foot1 from "./assets/foot1.png";
import foot2 from "./assets/foot2.png";
import foot3 from "./assets/foot3.png";
import foot4 from "./assets/foot4.png";
import foot5 from "./assets/foot5.png";
import foot6 from "./assets/foot6.png";
import foot7 from "./assets/foot7.png";
