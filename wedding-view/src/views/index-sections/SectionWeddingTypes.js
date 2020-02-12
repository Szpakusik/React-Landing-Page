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
        <div className="section text-center pt-4">
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
                        <CardTitle tag="h4" className='sec-colour font-weight-normal'>Cywilny</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center font-weight-normal">
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
                        <CardTitle tag="h4" className='sec-colour font-weight-normal'>Konkordatowy</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center font-weight-normal">
                     Połączenie ślubu cywilnego z kościelnym to jeden <br />z najczęściej 
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
                        <CardTitle tag="h4" className='sec-colour font-weight-normal'>Kościelny</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center font-weight-normal">
                     Jest to wyjątkowa ceremonia zarówno
                     dla Państwa Młodych jak i dla ich 
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
                                <CardTitle tag="h4" className='sec-colour font-weight-normal'>Plenerowy</CardTitle>
                            </div>
                            </a>
                            <p className="card-description text-center font-weight-normal">
                              Ślub cywilny poza Urzędem Stanu Cywilnego lub kościelny lecz poza murami kościoła? Napisz do mnie i dowiedz się, jak zorganizować malowniczy ślub w plenerze oraz sprawdź
                              <br />z jakimi kosztami się to wiąże
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
                                <CardTitle tag="h4" className='sec-colour font-weight-normal'>Humanistyczny</CardTitle>
                            </div>
                            </a>
                            <p className="card-description text-center font-weight-normal">
                              Marzysz o efektownej ceremonii stworzonej wyłącznie dla Was ? A może o przysiędze wypowiedzianej prosto z serca? Ta forma ślubu będzie idealna. Wypełnij formularz kontaktowy aby dowiedzieć się więcej.
                            </p>
                        </CardBody>
                        
                        </Card>
                </Col>
                    <Col md='2' />  
            </Row>
            <Row className="text-center w-100 mx-auto">
            <p className="h3 p-2 m-0 w-100 font-weight-normal" >Dodatki</p>
          </Row>
          <Row className='text-center p-5 w-100 mx-auto'>
              <Col md="3" className='border-right border-fix sec-colour pb-4'>
                <div className="info">
                  <div className="icon ">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-0 font-weight-normal pb-2">Formalności</h4>
                    <p className="description font-weight-normal">
                    Jak podpisać umowę z podwykonawcami? Jakich dokumentów potrzebujecie, aby zawrzeć związek małżeński? Razem dopełnimy wszelkich formalności.
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
                    <h4 className="info-title mt-0 font-weight-normal pb-2">Fotograf</h4>
                    <p className='font-weight-normal'>
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
                    <h4 className="info-title mt-0 font-weight-normal pb-2">Droga do ślubu</h4>
                    <p className='font-weight-normal'>
                    Zastanawialiście się już czym pojechać do ślubu? Coś klasycznego i eleganckiego? A może sportowe auto? Zasugeruję sprawdzone firmy, z ofertą jakiej szukacie!
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
                    <h4 className="info-title mt-0 font-weight-normal pb-2">Stylizacja ślubna</h4>
                    <p className='font-weight-normal'>
                      Dzięki mojej pomocy przy budowaniu Waszego wizerunku ślubnego poczujecie się niepowtarzalnie w tym ważnym dniu.
                    </p>
                    
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='w-100 mx-auto font-weight-normal'>
              <Col md='6'>
                <ListGroup >
                  <ListGroupItem className=''>Temat Przewodni</ListGroupItem>
                  <ListGroupItem className=''>Save the date</ListGroupItem>
                  <ListGroupItem className=''>Zaproszenia</ListGroupItem>
                  <ListGroupItem className=''>Obrączki ślubne</ListGroupItem>
                  <ListGroupItem className=''>Kamerzysta</ListGroupItem>
                </ListGroup>
              </Col>
              <Col md='6'>
                <ListGroup>
                  <ListGroupItem className=''>Zabiegi kosmetyczne</ListGroupItem>
                  <ListGroupItem className=''>Dekoracja miejsca ślubu</ListGroupItem>
                  <ListGroupItem className=''>Wiązanka ślubna</ListGroupItem>
                  <ListGroupItem className=''>Oprawa muzyczna</ListGroupItem>
                  <ListGroupItem className=''>Dodatkowe atrakcje (fotobudka itp.)</ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
        </div>
    </>
);
} export default SectionWeddingTypes;
