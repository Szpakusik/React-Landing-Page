import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import Background from 'assets/img/secbg3.jpg';

// Container.propTypes = {
//     fluid:  true
//     // applies .container-fluid class
// }
let displayShowMore;
let bundleDescription;
if(window.location.pathname !== "/oferta"){
    displayShowMore = "flex";
    bundleDescription = `Każdą parę traktuję indywidualnie. Sprawdź mój szeroki wachlarz usług i wybierz coś dla siebie!`;
}

else{
    displayShowMore = "none";
    bundleDescription = "Oczywiście możesz zmodyfikować ofertę dla siebie. Sprawdź poniżej, opcje personalizacji";
}
    

console.log(window.location.pathname);



const minHeight = {
    display: 'flex',
    flexdirection: 'column'
}

const secRowStyle = {
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
}

let OfferSummary = () => {
    return(
    <>
    <div className="section-dark pt-0 border-top h-100 ">
        <div className="container-fluid">
            <Row className="text-center">
                <p className="h2 border-bottom border-right p-4 pr-5 pl-5 m-0 w-100 font-weight-normal" 
                style={{backgroundColor: 'white'}}>Pakiety</p>
            </Row>
            <Row style={ secRowStyle } className="border-bottom pt-5 pb-5">
                <Col lg="4" className="text-center" style={ minHeight }>
                    <Card className="m-3 inherit2 rounded-0 mt-4">
                        <CardImg className="rounded-0" top src={require("assets/img/wholewedd2.jpg")} alt="Card image cap p-2" />
                        <CardBody >
                            <CardTitle className="text-white h5 font-weight-bold">Kompleksowa organizacja ślubu i wesela</CardTitle>
                            <CardText className="text-white">Zaplanuję wszystkie elementy związane z uroczystością oraz zapewnię wszystkich usługodawców</CardText>
                        </CardBody>
                    </Card>            
                </Col>
                <Col lg="4" className="text-center" style={ minHeight }>
                    <Card className="m-3 inherit2 rounded-0 mt-4">
                        <CardImg className="rounded-0" top src={require("assets/img/mixedlang3.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text-white h5 font-weight-bold">Częściowa organizacja dnia ślubu i wesela</CardTitle>
                            <CardText className="text-white my-auto">Uzupełnię waszą listę usługodawców</CardText>
                        </CardBody>
                    </Card>            
                </Col>
                <Col lg="4" className="text-center" style={ minHeight }>
                    <Card className="m-3 inherit2 rounded-0 mt-4">
                        <CardImg className="rounded-0" top src={require("assets/img/lateness3.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text-white h5 font-weight-bold">Koordynacja dnia ślubu i wesela</CardTitle>
                            <CardText className="text-white">Zadbam o każdy szczegół w tym ważnym dla was dniu. Zgram wszystkich podwykonawców i zaopiekuję sie wami.</CardText>
                        </CardBody>
                    </Card>            
                </Col>
                <Row className={`w-100 text-center mx-auto`}>
                    <div id='bundleDescription' className="h4 font-weight-normal text-white m-5 w-100 inherit2 p-5 ">{bundleDescription}</div>
                    <a href='/oferta' className={`btn mx-auto d-${displayShowMore}`}>
                        Zobacz pełną ofertę
                    </a>
                </Row>
            </Row>
           

        </div>
    </div>
    </>)
}

export default OfferSummary;