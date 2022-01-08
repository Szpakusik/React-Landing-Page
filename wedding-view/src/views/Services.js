import React, { useRef } from "react";
import { Row, Col } from "reactstrap";

import HalfTone from "assets/img/bgs/halftone.png";
import GrayJean from "assets/img/bgs/gray_jean.png";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import OfferSummary from "components/Summaries/OfferSummary";
import SectionCarousel from "views/index-sections/SectionCarousel";
import SectionWeddingTypes from "views/index-sections/SectionWeddingTypes";
import ContactSummary from "components/Summaries/ContactSummary";
import ContactForm from "components/Summaries/ContactForm";

var h2Style = {
  backgroundImage: "url(" + HalfTone + ")",
  marginTop: "-98px",
  zIndex: "2",
  border: "1px solid black",
};
var HowWorkStyle = {
  backgroundImage: "url(" + GrayJean + ")",
  maxWidth: "100vw",
};

function Services() {
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
      <div className="section profile-content sec-colour text-center pb-0">
        <Row className="section pt-0 mt-0 pb-0 mx-auto" style={HowWorkStyle}>
          <p
            className="title font-weight-normal py-4 w-75 mx-auto h2"
            style={h2Style}
          >
            Oferta
          </p>
          <Col md="5" className="text-left px-0">
            <img
              style={{
                width: "100%",
                left: "0",
                marginTop: "-24px",
                border: "2px solid #e3bab3",
                borderLeft: "0",
                borderTop: "0",
              }}
              className="img-responsive"
              alt="Magdalena Stachurska"
              src={require("assets/img/eyeC4.jpg")}
            />
          </Col>

          <Col
            lg="7"
            sm="12"
            className="my-auto px-5 text-center"
            style={{ paddingBottom: "30px" }}
          >
            <p className="h2 text-center pb-4 pt-5 pt-sm-0 text-dark mt-0">
              <bold>Jak rozpoczyna się nasza współpraca?</bold>
            </p>
            <p className="description pb-3 font-weight-bold h4 sec-colour">
              1 - Wstępne ustalenia
            </p>
            <p className="description pb-3 font-weight-normal border-bottom">
              Wypełnijcie bezpłatną ankietę, a ja przygotuję dla Was ofertę
            </p>
            <p className="description pb-3 font-weight-bold  pt-3 h4 sec-colour mt-0">
              2 - Spotkanie
            </p>
            <p className="description pb-3 font-weight-normal border-bottom">
              Spotkajmy się przy kawie, bądź omówimy szczegóły
              telefonicznie/online
            </p>
            <p className="description pb-3 font-weight-bold  pt-3 h4 sec-colour mt-0">
              3 - Współpraca{" "}
            </p>
            <p className="description pb-3 font-weight-normal border-bottom">
              Zdecydujcie czy chcecie ze mną współpracować i podpiszcie umowę
            </p>
            <p className="description pb-3 font-weight-bold  pt-3 h4 sec-colour mt-0">
              4 - Relaks
            </p>
            <p className="description pb-3 font-weight-normal">
              Resztą zajmę się ja
            </p>
          </Col>
        </Row>
      </div>
      <OfferSummary />
      <SectionWeddingTypes />
      <SectionCarousel />
      <ContactSummary refProp={myRef} />
      <ContactForm />
      <DemoFooter />
    </>
  );
}

export default Services;
