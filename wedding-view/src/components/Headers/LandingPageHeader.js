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
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader({exeScroll,myRefe}) {
  let pageHeader = React.createRef();
  const handleClick = (e)=>{ exeScroll(myRefe) }
 

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
          <div className="motto text-center inherit2" style={{marginTop:"135px", marginBottom:"115px",}}>

            <h2>Ogarniacze Ślubów Magdalena Stachurska</h2>
            <h3>Ogarnę Wasz ślub i wesele</h3>
            <br />
            <Button
              className="btn-round mr-1 mt-3 "
              color="neutral"
              target="_blank"
              outline
              onClick={handleClick}
              style={{textTransform: 'none', letterSpacing: '2px'}}
            >
              <i class="fa fa-chevron-circle-down"></i>
              W czym mogę Wam pomóc?
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
