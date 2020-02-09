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
                     Ślub zawarty w Urzędzie Stanu Cywilnego też może 
                     wyglądać atrakcyjnie. Napisz do mnie i przekonaj się co zrobić,
                     aby Wasza uroczystość została zapamiętana na długo.
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
                     Połączenie ślubu cywilnego z kościelnym to jeden z najczęściej 
                     wybieranych ślubów w Polsce. Skontaktuj się ze mną, aby dowiedzieć
                     się jakich formalności należy dopełnić.
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
                     Jest to wyjątkowa ceremonia zarówno
                     dla Państwa młodych jak i dla ich 
                     rodziny. Jednak sam ślub kościelny nie 
                     jest ważny prawnie. Jakich dokumentów 
                     potrzebujesz żeby przyjąć sakrament 
                     małżeństwa? Skontaktuj się ze mną.
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
                              Ślub cywilny poza Urzędem Stanu Cywilnego lub kościelny lecz poza murami
                              kościoła? Napisz do mnie i dowiedz się, jak zorganizować malowniczy ślub w plenerze 
                              oraz sprawdź z jakimi kosztami się to wiąże.
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
                             Marzysz o efektownej ceremonii stworzonej wyłącznie 
                             dla Was ? A może o przysiędze wypowiedzianej prosto 
                             z serca? Ta forma ślubu jest dla Was.
                             Wypełnij formularz kontaktowy aby dowiedzieć się więcej.

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
                    <h4 className="info-title mt-0">Formalności</h4>
                    <p className="description">
                    Jak podpisać umowę z podwykonawcami ? Jakich dokumentów potrzebujecie, aby zawrzeć związek małżeński? Razem dopełnimy wszelkich formalności.
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
                      Jakiego fotografa wybrać, aby nie żałować decyzji? Moje rekomendacje będą niezbędne!
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
                    <h4 className="info-title mt-0">Droga do ślubu</h4>
                    <p>
                    Zastanawialiście się już czym pojechać do ślubu? Coś klasycznego i eleganckiego? A może sportowe auto? Zasugeruje sprawdzone firmy, z ofertą jakiej szukacie!
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
                    <h4 className="info-title mt-0">Stylizacja ślubna</h4>
                    <p>
                      Dzięki mojej pomocy przy budowaniu Waszego wizerunku ślubnego poczujecie się niepowtarzalnie w tym ważnym dniu.
                    </p>
                    
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='w-100 mx-auto'>
              <Col md='6'>
                <ListGroup >
                  <ListGroupItem className='bg-dark text-white'>Temat Przewodni</ListGroupItem>
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
