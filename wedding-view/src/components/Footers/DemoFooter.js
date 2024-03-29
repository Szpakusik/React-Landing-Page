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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-white bg-dark">
      <Container>
        <Row>
          <nav className="footer-nav">
            {/* <ul>
              <li>
                <a
                  href="#"
                >
                  O mnie
                </a>
              </li>
              <li>
                <a
                  href="#"
                >
                Oferta
                </a>
              </li>
              <li>
                <a
                  href="#"
                >
                  Kontakt
                </a>
              </li>
            </ul> */}
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart sec-colour" /> by Norbert Szpakowski
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
