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
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import { detectMob } from 'assets/js/main.js'


let logoWidth = window.innerWidth < 960 ? '270px' : '335px'; 


function IndexNavbar({exeScroll,myRefe}) {
  let handleClick;
  if( window.location.pathname=="/formularz"){
    handleClick = (e)=>{
      window.location.pathname="/"
    }
  } 
  else
    handleClick = (e)=>{ exeScroll(myRefe) }

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 49 ||
        document.body.scrollTop > 49
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
      <a href="/">
           <div className="logo-container">
                <div className="logo border-0 rounded-0" style={{width:logoWidth, paddingBottom:'5px'}}>
                    <img src={require("assets/img/LOGO2.png")} alt="Magda Stachurska Logo" style={{width:logoWidth}} />
                </div>

            </div>
      </a>
        <div className="navbar-translate" style={{ width: '19%' }}>
          <NavbarBrand
            data-placement="bottom"
            href="/"
            target="_blank"
            title="Coded by Creative Tim"
          >
          {/* <img src={require("assets/img/LOGO1.png")} alt="" className="img-responsive navbar-logo"/> */}
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/o-mnie"
                target="_self"
                title="Poznajmy się!"
              >
                <i className="fa fa-user-circle"></i>
                <p className="">O mnie</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/oferta"
                target="_self"
                title="Tak będzie wyglądała współpraca"
              >
                <i className="fa fa-heart"></i>
                <p className="">Oferta</p>
              </NavLink>
            </NavItem>
            <NavItem onClick={handleClick}>
              <NavLink
                data-placement="bottom"
                href="#kontakt"
                target="_self"
                title="Porozmawiajmy!"
              >
                <i className="fa fa-comments"></i>
                <p className="">Kontakt</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <Button
                className="btn-round valuation sec-colour-bg"
                href="formularz"
              >
                Darmowa wycena
              </Button>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/ms.weddingplanner/?hl=pl"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
