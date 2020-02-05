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
import React, { useRef }  from "react";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

import HalfTone from 'assets/img/bgs/halftone.png';

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

  const myRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
      <IndexNavbar exeScroll={scrollToRef} myRefe={myRef} />
      <ProfilePageHeader />
      <div className="section profile-content w-100 pb-0">
          <div className="owner pb-5 mb-5 mb-sm-0" style={Profiletyle}>
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding border img-responsive"
                src={require("assets/img/profile.png")}
              />
            </div>
            <div className="name">
              <p className="title h2 font-weight-normal mt-1">
                Magdalena Stachurska<br />
              </p>
              <h6 className="description sec-colour">Wedding Planner</h6>
            </div>
            <Row className='w-100'>
              <Col className="ml-auto mr-auto text-center font-weight-normal" md="6" >
                <p>
                  Planowanie i aranżowanie od zawsze sprawiało mi ogromną przyjemność, dlatego postanowiłam
                  przekuć swoją pasję w zawód, podejmując studia kierunkowe, a także zdobywając certyfikat
                  Konsultanta Ślubnego. Świeże spojrzenie oraz znajomość branżowych trendów sprawi, że sprostam
                  waszym najśmielszym oczekiwaniom i nienagannie wywiążę się z powierzonych mi zadań.
                </p>
              </Col>
            </Row>
          </div>
          
          <br />
          <Row className='w-100 mx-auto my-5'>
            <Col md='7' className='my-auto text-center border-left border-top border-bottom ml-sm-5  prim-colour-bg p-4'>

                <div className="info sec-colour h4" style={{marginTop: '-110px'}}>
                  <div className="icon ">
                    <i className="nc-icon nc-favourite-28" />
                  </div>
                  <div className="description">
                    <p className="info-title sec-colour"></p>
                    
                    
                  </div>
                </div>

              <p className='h2 font-weight-normal mt-5'>Cechuje mnie solidność</p>
              <p className='font-weight-normal px-4 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis cupiditate consequuntur, fuga ipsa accusamus obcaecati, 
                maxime et, est dolorem voluptatum tempore necessitatibus commodi inventore amet 
                nobis quasi consequatur suscipit nemo!</p>
              <p className='font-weight-normal py-3 px-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis cupiditate consequuntur, fuga ipsa accusamus obcaecati, 
                maxime et, est dolorem voluptatum tempore necessitatibus commodi inventore amet 
                nobis quasi consequatur!</p>
            </Col>
            <Col md='4' className='px-0'>
              <img
                alt="Magdalena Stachursa Planowanie wesel"
                className="img-no-padding border img-responsive"
                src={require("assets/img/best.jpg")}
                style={{width: '100%'}}
              />
            </Col>
          </Row>
          {/* <Row className='w-100 mx-auto my-5'>
          
          </Row> */}
          <Row className='w-100 mx-auto px-5 text-center'>
          <p className="h2 w-100 text-center sec-colour font-weight-normal mb-5">Dlaczego warto ze mną współpracować?</p>
          <Col md={{size:'4', offset:'4'}} className=''>
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-briefcase-24" />
                  </div>
                  <div className="description">
                    <p className="info-title sec-colour">---</p>
                    
                    
                  </div>
                </div>
            </Col>
            <p className=' font-weight-normal w-100'>
              Cechuje mnie świetna organizacja pracy, oraz punktualność. Posiadam wysoko rozwinięte
              umiejętności interpersonalne, należytą kreatywność i odpowiednie kompetencje. Jestem osoba
              godną zaufania i konsekwentną. Najważniejsi dla mnie są moi klienci, których zdanie i sugestie cenię
              sobie najbardziej.
            </p>
            <p className=' font-weight-normal'> 
              Angażując mnie w przygotowania, mogę zagwarantować fachowe wsparcie w organizacji
              i koordynacji uroczystości, sprawdzonych podwykonawców, cenionych na rynku ślubnym oraz
              odciążenie w stresujących sytuacjach, nie pozwalających w pełni cieszyć się wielkim dniem.
            </p>
            <p className=' font-weight-bold w-100'> 
              Każdą parę traktuję indywidualnie i taka też jest wycena mojej usługi.
            </p>
            <p className=' font-weight-normal w-100'>
              W razie dalszych pytań zapraszam do kontaktu osobistego lub przez portale społecznościowe.
            </p>
          </Row>
          <Row className='w-100 mx-auto mt-5 overflow-hidden' style={{maxHeight:'500px'}}>
            <Col className='px-0'>
            <img
                alt="Magdalena Stachurska Planowanie wesel"
                className="img-no-padding border mx-auto px-0"
                src={require("assets/img/sharp3.jpg")}
                style={{width: '100%'}}
              />  
            </Col>
          
          </Row>
          {/* <Row className='w-100 mx-auto px-5 text-center'>
          <p className="h2 w-100 text-center sec-colour font-weight-normal my-5">Kocham to co robię</p>
            <p className=' font-weight-normal w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque, quia! Distinctio maiores quis recusandae. 
              
            </p>
            <p className=' font-weight-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque, quia! Distinctio maiores quis recusandae. 
              Quasi molestias dicta, doloremque eveniet veritatis,
               porro qui, distinctio facilis impedit explicabo alias esse obcaecati dolores!
            </p>
            <p className=' font-weight-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             
              Quasi molestias dicta, doloremque eveniet veritatis,
               porro qui, distinctio facilis impedit explicabo alias esse obcaecati dolores!
            </p>
          </Row> */}

      </div>
      <ContactSummary refProp={myRef} />
      <ContactForm />
      <DemoFooter />
    </>
  );
}

export default AboutMe;
