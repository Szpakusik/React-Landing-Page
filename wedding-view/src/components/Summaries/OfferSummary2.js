import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
// import { url } from 'inspector';
import Background from 'assets/img/secbg2.png';

// Container.propTypes = {
//     fluid:  true
//     // applies .container-fluid class
// }
const secRowStyle = {
     backgroundImage: `url(${Background})`,
}

let OfferSummary = () => {
    return(
    <>
    <div className="section-dark pt-0 border-top">
        <div className="container-fluid">
            <Row className="text-center">
                <p className="h2 border-bottom border-right p-4 pr-5 pl-5 m-0 w-100" style={{backgroundColor: 'white'}}>Oferta</p>
            </Row>
            <Row style={ secRowStyle }>
                <Col lg="4" className="  border-bottom border-top">
                    
                        <CardImg top src={require("assets/img/autophoto1.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                                  
                </Col>
                <Col lg="4" className="  border-bottom border-left border-right border-top">
                    
                        <CardImg top src={require("assets/img/autophoto1.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                                  
                </Col>
                <Col lg="4" className="  border-bottom border-top">
                    
                        <CardImg top src={require("assets/img/autophoto1.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                                  
                </Col>
                <Col lg="4" className="  ">
                    
                        <CardImg top src={require("assets/img/autophoto1.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                                  
                </Col>
                <Col lg="4" className="  border-left border-right">
                    
                        <CardImg top src={require("assets/img/autophoto1.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                                  
                </Col>
                <Col lg="4" className="  ">
                    
                        <CardImg top src={require("assets/img/autophoto1.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                                  
                </Col>
                

            </Row>

        </div>
    </div>
    </>)
}

export default OfferSummary;