import React from "react";
import { Button, Container } from "reactstrap";

function LandingPageHeader({ exeScroll, myRefe }) {
  let pageHeader = React.createRef();
  // const handleClick = (e) => {
  //   exeScroll(myRefe);
  // };
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/candles.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div
            className="motto text-center inherit2"
            style={{ marginTop: "135px", marginBottom: "115px" }}
          >
            <img
              style={{ width: "40%", minWidth: "295px" }}
              className="img-responsive"
              alt="Magdalena Stachurska"
              src={require("assets/img/oslanding.png")}
            />
            <h4
              className="font-weight-normal"
              style={{
                color: " rgba(214, 210, 210,.85)",
              }}
            >
              Ogarnę Wasz ślub i wesele
            </h4>
            <br />
            {/* <Button
              className="btn-round mr-1 mt-3 "
              color="neutral"
              target="_blank"
              outline
              onClick={handleClick}
              style={{textTransform: "none", letterSpacing: "1px", border:'3px solid rgba(214, 210, 210,.85)', color:"rgba(214, 210, 210,.85)" }}
            >
              <i class="fa fa-chevron-circle-down"></i>W CZYM MOGĘ WAM POMÓC?
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
