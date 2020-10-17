import React, { useRef } from "react";
import { Row, Col } from "reactstrap";
import HalfTone from 'assets/img/bgs/halftone.png'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ContactSummary from "components/Summaries/ContactSummary";
import ContactForm from "components/Summaries/ContactForm";
import ResponsiveGallery from 'react-responsive-gallery';

var h2Style = {
  backgroundImage: "url(" + HalfTone + ")",
  marginTop: "-98px",
  zIndex:'2',
  border: '1px solid black'

};
var galleryStyle = {
  backgroundImage: "url(" + HalfTone + ")",
  maxWidth: '100vw'
};

const lightBoxProps = {
  enableZoom: false,
  reactModalStyle:{
    content:{
      top: "85px"
    }
  }
}

function Services() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const myRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const images=[
    {
      src: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg'
    }
  ];
  return (
    <>
      <IndexNavbar exeScroll={scrollToRef} myRefe={myRef} />
      <ProfilePageHeader />
      <div className="section profile-content sec-colour text-center pb-0">

            <Row className="section pt-0 mt-0 pb-0 mx-auto"  style={galleryStyle}>

              <p className="title font-weight-normal py-4 w-75 mx-auto h2" style={h2Style}>Galeria</p>
              <Col lg="7" sm="12" className="mx-auto text-center thrd-colour" style={{paddingBottom:'30px'}} > 
                <p className="h3 font-weight-bold"> Wesele Pauliny i Tomka </p>
              </Col>
              <ResponsiveGallery images={images} useLightBox={true} lightBoxAdditionalProps={lightBoxProps}/>
              <Col className="ml-auto text-right" md="8" >
                <p className="font-weight-bold text-dark">
                	Fot. Andrzej Piast
                </p>
              </Col>

              <Col lg="7" sm="12" className="mx-auto text-center thrd-colour" style={{paddingBottom:'30px'}} > 
                <p className="h3 font-weight-bold"> Wesele Pauliny i Tomka </p>
              </Col>
              <ResponsiveGallery images={images} useLightBox={true} lightBoxAdditionalProps={lightBoxProps}/>

            </Row>
    
      </div>

      <ContactSummary refProp={myRef}/>
      <ContactForm />
      <DemoFooter />
    </>
  );
}

export default Services;
