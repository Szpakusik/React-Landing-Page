import React from 'react';
import { Row, Col } from 'reactstrap';
import OpinionsBG from 'assets/img/opinions.jpg';

let displayShowMore;
let bundleDescription,bundleDescription2;
displayShowMore = "flex";
bundleDescription = `"Tym razem wyjątkowo muszę się zgodzić ze swoim mężem 😃 wszystko wyszło dokładnie tak, jak sobie wymarzyliśmy, Madzia była dla nas olbrzymim wsparciem organizacyjnym i psychicznym w tych ciężkich dla Par Młodych czasach "`;
bundleDescription2 = `"Początkowo zastanawiałem się nad potrzebą zatrudniania Magdy jako planerki mojego wesela, jednak już po kilku dniach nie miałem wątpliwości że była to słuszna decyzja. Ogromne wsparcie i pomoc w szerokim zakresie okazały się nieocenione. Od szukania dekoracji, wysyłania zaproszeń, doradzaniu przy zakupie garnituru, po dekorowanie sali, transport i przede wszystkim czuwanie nad wszelkimi terminami i rozwiązywanie problemów (jak np awaria w dostawie prądu na sali weselnej) - Magda od razu zajęła się tymi i jeszcze wieloma innymi aspektami. Jestem bardzo zadowolony z jej zaangażowania i profesjonalizmu, oraz życzliwego podejścia. Serdecznie polecam, wszystkim Młodym Parom, które myślą o organizacji własnego ślubu i wesela 🙂"`;

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
                        <Col xs="12" md="4">
                            <img style={{maxHeight: "400px"}} src={require("assets/img/frscouple.jpg")} alt="" className="img-rounded img-responsive"/>
                        </Col>
                        <Col xs="12" md="8" className="my-auto">
                            <div className="m-3">
                                <p className="mt-0 font-weight-normal">{bundleDescription}</p>
                                <p className="mt-0 font-weight-normal">{bundleDescription2}</p>
                                <p className="h5 text-right thrd-colour font-weight-normal">~Ola i Mateusz</p>
                                <a href='/gallery' className={`btn bg-white text-dark mx-auto mt-3 w-50 text-center d-${displayShowMore}`}>
                                    <p className="mx-auto mb-0 font-weight-bold">Portfolio</p>
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