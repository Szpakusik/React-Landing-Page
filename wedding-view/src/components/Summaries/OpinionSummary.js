import React from 'react';
import { Row, Col } from 'reactstrap';
import OpinionsBG from 'assets/img/opinions.jpg';

let displayShowMore;
let bundleDescription;
displayShowMore = "flex";
bundleDescription = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra lacinia nisi quis ultrices. 
Vestibulum blandit, libero sit amet consequat dictum, lectus velit ullamcorper turpis, at convallis mauris velit sed nibh. 
Cras auctor lacus sed dui ultricies, quis molestie ex molestie. Integer sit amet arcu purus. Integer sapien tellus, tristique ut porta non, 
aliquet ut nisi."`;

const minHeight = {
    display: 'flex',
    flexdirection: 'column'
}

const secRowStyle = {
      backgroundImage: `url(${OpinionsBG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
}

let OpinionSummary = () => {
    return(
    <>
    <div className="section-dark pt-0 border-top h-100">
        <div className="container-fluid">
            <Row style={ secRowStyle } className="border-bottom py-5">
                <Row className={`w-100 text-center mx-auto`}>
                    <Row id='bundleDescription' className="inherit border font-weight-normal w-100 inherit3  mx-auto">
                        <Col xs="12" md="6">
                            <img style={{maxHeight: "400px"}} src={require("assets/img/excouple.jpg")} alt="" className="img-rounded img-responsive"/>
                        </Col>
                        <Col xs="12" md="6" className="my-auto">
                            <div className="m-3">
                                <p className="h4 mt-0">{bundleDescription}</p>
                                <p className="h5 text-right thrd-colour font-weight-normal">~Joanna i Paweł</p>
                                <a href='/oferta' className={`btn bg-white text-dark mx-auto mt-3 w-50 text-center d-${displayShowMore}`}>
                                    <p className="mx-auto mb-0 font-weight-bold">Galeria</p>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    
                </Row>
            </Row>
        </div>
    </div>
    </>)
}

export default OpinionSummary;