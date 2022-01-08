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
import { Row, Col } from "reactstrap";

import HalfTone from "assets/img/bgs/halftone.png";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ContactSummary from "components/Summaries/ContactSummary";
import ContactForm from "components/Summaries/ContactForm";

function AboutMe() {
  var Profiletyle = {
    backgroundImage: "url(" + HalfTone + ")",
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const myRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
      <IndexNavbar exeScroll={scrollToRef} myRefe={myRef} />
      <ProfilePageHeader />
      <div className="section profile-content w-100 pb-0">
        <div className="owner pb-5 mb-5 mb-sm-0" style={Profiletyle}>
          <div className="avatar pb-1">
            <img
              alt="..."
              className="img-circle img-no-padding border img-responsive"
              src={require("assets/img/profile.png")}
            />
          </div>
          <div className="name">
            <p className="title h2 font-weight-normal mt-0 mb-0">
              Magdalena Stachurska
              <br />
            </p>
            <h6 className="description sec-colour">Konsultantka Ślubna</h6>
          </div>
        </div>

        <br />
        <Row className="w-100 mx-auto my-5">
          <Col
            md="7"
            className="my-auto text-center border-left border-top border-bottom ml-sm-5  prim-colour-bg p-4"
          >
            <div className="info sec-colour h4" style={{ marginTop: "-110px" }}>
              <div className="icon ">
                <i className="nc-icon nc-favourite-28" />
              </div>
              <div className="description">
                <p className="info-title sec-colour"></p>
              </div>
            </div>

            <p className="h2 font-weight-normal mt-5">
              Dlaczego zostałam konsultantką?
            </p>
            <p className="font-weight-normal px-4 pt-3">
              Planowanie i aranżowanie od zawsze sprawiało mi ogromną
              przyjemność, dlatego postanowiłam przekuć swoją pasję w zawód
              podejmując studia kierunkowe, a także zdobywając certyfikat
              Konsultanta Ślubnego.
            </p>
            <p className="font-weight-normal py-3 px-4 ">
              Wciąż się rozwijam więc bądźcie pewni, że do Waszej ceremonii
              podejdę z pasją dziecka i rozwagą profesjonalisty.
            </p>
          </Col>
          <Col md="4" className="px-0">
            <img
              alt="Magdalena Stachursa Planowanie wesel"
              className="img-no-padding border img-responsive"
              src={require("assets/img/best.jpg")}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row className="w-100 mx-auto px-5 text-center">
          <p className="h2 w-100 text-center sec-colour font-weight-normal mb-5">
            TO BE CHANGED - MAP gdzie działam?
          </p>
        </Row>
        <Row
          className="w-100 mx-auto mt-5 overflow-hidden"
          style={{ maxHeight: "500px" }}
        >
          <Col className="px-0">
            <img
              alt="Magdalena Stachurska Planowanie wesel"
              className="img-no-padding border mx-auto px-0"
              src={require("assets/img/sharp3.jpg")}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </div>
      <ContactSummary refProp={myRef} />
      <ContactForm />
      <DemoFooter />
    </>
  );
}

export default AboutMe;
