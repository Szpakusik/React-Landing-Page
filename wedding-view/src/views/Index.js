/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useRef } from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AboutMeSummary from "components/Summaries/AboutMeSummary";
import OfferSummary from "components/Summaries/OfferSummary";
import ContactSummary from "components/Summaries/ContactSummary";
import OpinionSummary from "components/Summaries/OpinionSummary";
import ContactForm from "components/Summaries/ContactForm";

function Index() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  
  const contactRef = useRef(null)
  const aboutRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-80);

  return (
    <>
      <IndexNavbar exeScroll={scrollToRef} myRefe={contactRef}/>
      <IndexHeader exeScroll={scrollToRef} myRefe={aboutRef}/>
      <div className="main"> 
      
        <AboutMeSummary refProp={aboutRef}/>
        <OfferSummary />
        <OpinionSummary />
        <ContactSummary refProp={contactRef} />
        <ContactForm />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
