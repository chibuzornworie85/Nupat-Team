import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Contact from "../Contact";
import About from "../About";
import Service from "../Service";
import Faq from "../Faq";
import Recruitement from "../Recruitement";
import Admission from "../Admistration";
import IT from "../It";
import Business from "../Business";
import Learning from "../Learning";
import Team from "../Team";
import ScrollToTop from "../scrollToTop";
import Join from "../Join";
import Additional from "../Additional";
import Employ from "../Employ";
import Hire from "../Hire"

const Route1 = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/recruitement" element={<Recruitement />} />
        <Route path="/admistration" element={<Admission />} />
        <Route path="/it" element={<IT />} />
        <Route path="/business" element={<Business />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join" element={<Join />} />
        <Route path="/additional" element={<Additional />} />
        <Route path="/employ" element={<Employ />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </div>
  );
};

export default Route1;
