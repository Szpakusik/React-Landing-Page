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
                    <p className="h3 mt-0">Magdalena Stachurska</p>
                    <p className="sec-colour font-weight-normal">Konsultant Ślubny</p>
                    <div className='mx-auto d-inline-block'>
                        <a href='https://www.instagram.com/ms.weddingplanner/?hl=pl' target='_blank'>
                            <img
                                alt="Magdalena Stachursa Planowanie wesel"
                                className="img-no-padding img-responsive float-left pr-1 pt-1"
                                src={require("assets/img/ig.png")}
                                style={{width: '30px'}}
                            />
                            <p className="font-weight-bold float-left pt-2 text-dark h6">@ms.weddingplanner</p>
                        </a>
                    </div>
                    
                </Col>
                <Col lg="6" className="my-auto text-center border-left">
                    
                    <Row className="text-left p-5">
                        <p className="h3 p-4 m-0 w-100 sec-colour font-weight-normal">Telefon:</p>
                        <p className="h4 p-4 m-0 w-100">(+48) 786 236 868</p>
                        <p className="h3 p-4 m-0 w-100 sec-colour font-weight-normal">E-Mail:</p>
                        <p className="h4 p-4 m-0 w-100">info@msweddingplanner.pl</p>
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