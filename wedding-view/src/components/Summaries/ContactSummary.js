import React from 'react';
import { Row, Col } from 'reactstrap';
// Container.propTypes = {
//     fluid:  true
//     // applies .container-fluid class
// }
// const secRowStyle = {
//       backgroundImage: `url(${Background})`,
//       backgroundPosition: 'center',
//       backgroundSize: 'cover'
// }

let ContactSummary = (props) => {
    return(
    <>
    <div ref={props.refProp} className="section pt-0 pb-0 border-top h-100">
        <div className="container-fluid">
            <Row className="text-center">
                    <p className="h2 p-4 pr-5 pl-5 m-0 w-100 sec-colour font-weight-normal" 
                    style={{backgroundColor: 'white'}}>Kontakt</p>
            </Row>

            <Row>
                <Col lg="6" className="my-auto p-5 text-center ">
                    <img style={{maxHeight: "200px"}} src={require("assets/img/profile2.png")} alt="" className="img-circle img-responsive"/>
                    <p className="h3">Magdalena Stachurska</p>
                    <p className="sec-colour font-weight-normal">Organizator Wesel</p>
                </Col>
                <Col lg="6" className="my-auto text-center border-left">
                    
                    <Row className="text-left p-5">
                        <p className="h3 p-4 m-0 w-100 sec-colour font-weight-normal">Telefonicznie:</p>
                        <p className="h4 p-4 m-0 w-100">570546987</p>
                        <p className="h3 p-4 m-0 w-100 sec-colour font-weight-normal">Przez E-Mail:</p>
                        <p className="h4 p-4 m-0 w-100">Maddziula@gmail.com</p>
                    </Row>
                    <Row>
                    </Row>
                </Col>
            </Row>

        </div>
    </div>
    </>)
}

export default ContactSummary;