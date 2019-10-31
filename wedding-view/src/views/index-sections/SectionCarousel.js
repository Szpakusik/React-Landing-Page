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
import React, {useEffect} from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  ListGroup,
  ListGroupItem
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/castle2.jpg"),
    altText: "Zameczek Wesele",
    caption: "w Zameczku"
  },
  {
    src: require("assets/img/plener.jpg"),
    altText: "Plener Wedding",
    caption: "w Plenerze"
  },
  {
    src: require("assets/img/restaurantwedd.jpg"),
    altText: "Wesele w restauracji",
    caption: "w Restauracji"
  },
  {
    src: require("assets/img/weddinghall.jpg"),
    altText: "Sala weselna",
    caption: "w Sali Weselnej"
  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let carouselCaptions = document.querySelectorAll(".font-weight-bold p");
    carouselCaptions.forEach( (item)=>{
      item.classList.add('h2');
      item.classList.add('font-weight-bold');
    } )
    console.log(carouselCaptions);
  });


  return (
    <>
      <div className="section pt-0" id="carousel">
        <Container>
          <Row className="text-center">
            <p className="h2 p-5 m-0 w-100 font-weight-normal" 
            style={{backgroundColor: 'white'}}>Wybór miejsca wesela</p>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                          className='font-weight-bold'
                          style={{fontWeight: '700', color: 'black'}}
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
          <Row className="text-center">
            <p className="h3 p-2 m-0 w-100 font-weight-normal" 
            style={{backgroundColor: 'white'}}>Dodatki</p>
          </Row>
          <Row className='text-center p-5'>
              <Col md="3">
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-palette" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Dekoracja wesela</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-tile-56" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Menu dań</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-note-03" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Dj/zespół muzyczny</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-satisfied" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Animacja dla dzieci</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="font-weight-normal text-center">
              <Col md='6'>
                <ListGroup className="">
                  <ListGroupItem>Winietki, plan i numeracja stołów</ListGroupItem>
                  <ListGroupItem>Alkohol</ListGroupItem>
                  <ListGroupItem>Tort</ListGroupItem>
                  <ListGroupItem>Stół tematyczny</ListGroupItem>
                  <ListGroupItem>Wodzirej</ListGroupItem>
                </ListGroup>
              </Col>
              <Col md='6'>
                <ListGroup>
                  <ListGroupItem>Pierwszy taniec</ListGroupItem>
                  <ListGroupItem>Upominki dla gości weselnych</ListGroupItem>
                  <ListGroupItem>Podziękowania dla rodziców</ListGroupItem>
                  <ListGroupItem>Noclegi dla gości weselnych</ListGroupItem>
                  <ListGroupItem>Dodatkowe atrakcje (fotobudka itp.)</ListGroupItem>
                </ListGroup>
              </Col>

            </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
