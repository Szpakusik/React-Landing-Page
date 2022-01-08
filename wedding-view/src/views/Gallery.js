import React, { useRef, useState, useCallback } from "react";
import { Row, Col } from "reactstrap";
import HalfTone from 'assets/img/bgs/halftone.png'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ContactSummary from "components/Summaries/ContactSummary";
import ContactForm from "components/Summaries/ContactForm";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

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



function GalleryView() {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const myRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const images=[
    { src: require('../assets/img/om1.jpg'), width: 3, height: 2},
    { src: require('../assets/img/om2.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om3.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om4.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om5.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om6.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om7.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om8.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om9.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om10.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om11.jpg'), width: 3, height: 2 },
    { src: require('../assets/img/om12.jpg'), width: 3, height: 2 }
  ];
  
  return (
    <>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <IndexNavbar exeScroll={scrollToRef} myRefe={myRef} />
      <ProfilePageHeader />
      <div className="section profile-content sec-colour text-center pb-0">

            <Row className="section pt-0 mt-0 pb-0 mx-auto"  style={galleryStyle}>

              <p className="title font-weight-normal py-4 w-75 mx-auto h2" style={h2Style}>Portfolio</p>
              <Col lg="7" sm="12" className="mx-auto text-center thrd-colour" style={{paddingBottom:'30px'}} > 
                <p className="h3 font-weight-bold text-dark"> Wesele Oli i Mateusza </p>
              </Col>
              <Row className="px-5">
                <Gallery photos={images} onClick={openLightbox}/>
              </Row>
              <Col className="ml-auto text-right" md="8" >
                <p className="font-weight-bold text-dark">
                	Fot. Piotr Gardyła
                </p>
              </Col>

            </Row>
    
      </div>

      <ContactSummary refProp={myRef}/>
      <ContactForm />
      <DemoFooter />
    </>
  );
}

export default GalleryView;
