import React from "react";

// reactstrap components
import {
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  CardBody,
  CardTitle,
} from "reactstrap";

const imgStyle={
    maxHeight:'200px',
    maxWidth:'200px',
}

function SectionWeddingTypes() {
return(
    <>
        <div className="section section-dark text-center pt-4">
            <h2 className="title">Realizowane typy ślubów</h2>
            <Row className='w-100 mx-auto'>
              
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar" style={imgStyle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/cywilny2.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Cywilny</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar" style={imgStyle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/konkoradowy.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Konkoradowy</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar" style={imgStyle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/wyznaniowy2.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" className='sec-colour'>Wyznaniowy</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  
                </Card>
              </Col>
            </Row>
            <Row className='w-100 mx-auto'>
                    <Col md='2' />  
                    <Col md="4">
                        <Card className="card-profile card-plain">
                        <div className="card-avatar" style={imgStyle}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                src={require("assets/img/plenerk.png")}
                            />
                            </a>
                        </div>
                        <CardBody>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                                <CardTitle tag="h4">Plenerowy</CardTitle>
                            </div>
                            </a>
                            <p className="card-description text-center">
                            Teamwork is so important that it is virtually impossible
                            for you to reach the heights of your capabilities or make
                            the money that you want without becoming very good at it.
                            </p>
                        </CardBody>
                        
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-profile card-plain">
                        <div className="card-avatar" style={imgStyle}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                src={require("assets/img/humanistyczny.png")}
                            />
                            </a>
                        </div>
                        <CardBody>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                                <CardTitle tag="h4">Humanistyczny</CardTitle>
                            </div>
                            </a>
                            <p className="card-description text-center">
                            A group becomes a team when each member is sure enough of
                            himself and his contribution to praise the skill of the
                            others. No one can whistle a symphony. It takes an
                            orchestra to play it.
                            </p>
                        </CardBody>
                        
                        </Card>
                </Col>
                <Col md='2' />  
            </Row>
            <Row className="text-center w-100 mx-auto">
            <p className="h3 p-2 m-0 w-100 font-weight-normal text-white" >Dodatki</p>
          </Row>
          <Row className='text-center p-5 w-100 mx-auto'>
              <Col md="3" className='border-right border-fix sec-colour pb-4'>
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-0">Temat Przewodni</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3" className='border-right border-fix sec-colour pb-4'>
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-camera-compact" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-0">Fotograf</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3" className='border-right border-fix sec-colour pb-4'>
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-bus-front-12" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-0">Pojazd do ślubu</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className='sec-colour pb-4'>
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-diamond" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-0">Stylizacja</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='w-100 mx-auto'>
              <Col md='6'>
                <ListGroup >
                  <ListGroupItem className='bg-dark text-white'>Formalności związane ze ślubem</ListGroupItem>
                  <ListGroupItem className='bg-dark text-white'>Save the date</ListGroupItem>
                  <ListGroupItem className='bg-dark text-white'>Zaproszenia</ListGroupItem>
                  <ListGroupItem className='bg-dark text-white'>Obrączki ślubne</ListGroupItem>
                  <ListGroupItem className='bg-dark text-white'>Kamerzysta</ListGroupItem>
                </ListGroup>
              </Col>
              <Col md='6'>
                <ListGroup>
                  <ListGroupItem className='bg-dark text-white'>Zabiegi kosmetyczne</ListGroupItem>
                  <ListGroupItem className='bg-dark text-white'>Dekoracja miejsca ślubu</ListGroupItem>
                  <ListGroupItem className='bg-dark text-white'>Wiązanka ślubna</ListGroupItem>
                  <ListGroupItem className='bg-dark text-white'>Oprawa muzyczna</ListGroupItem>
                  <ListGroupItem className='bg-dark text-white'>Dodatkowe atrakcje (fotobudka itp.)</ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
        </div>
    </>
);
} export default SectionWeddingTypes;
