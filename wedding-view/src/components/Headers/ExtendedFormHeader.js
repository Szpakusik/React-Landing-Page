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
import ExtendedFormComponent from 'components/ExtendedFormComponent.js';


import {
  Container,
} from "reactstrap";




//import "assets/js/jquery.validate.min.js";
// core components

function LandingPageHeader() {

  let pageHeader = React.createRef();

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/candles.jpg") + ")",
          maxHeight:'none',
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center inherit2 p-1" style={{marginTop:"135px", marginBottom:"115px", minHeight:'920px'}}>
            <ExtendedFormComponent />
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
