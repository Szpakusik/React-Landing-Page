import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import Background from "assets/img/secbg3.jpg";

let displayShowMore;
let bundleDescription;

if (window.location.pathname !== "/oferta") {
  displayShowMore = "flex";
  bundleDescription = `Każdą parę traktuję indywidualnie. Zapytajcie o szczegóły i wybierzcie coś dla siebie!`;
} else {
  displayShowMore = "none";
  bundleDescription =
    "Każdą parę traktuję indywidualnie. Zapytajcie o szczegóły i wybierzcie coś dla siebie!";
}

const minHeight = {
  display: "flex",
  flexdirection: "column",
};

const secRowStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

let isMobile = window.innerWidth < 600;

let OfferSummary = () => {
  return (
    <>
      <div className="section-dark pt-0 border-top h-100 ">
        <div className="container-fluid">
          <Row className="text-center">
            <p
              className="h2 border-bottom border-right p-4 pr-5 pl-5 m-0 w-100 font-weight-normal"
              style={{ backgroundColor: "white" }}
            >
              Pakiety
            </p>
          </Row>
          {isMobile ? (
            <>
              <Row style={secRowStyle} className="border-bottom pt-5 pb-5">
                <Col lg="12" className="text-center" style={minHeight}>
                  <Card className="m-3 inherit2 rounded-0 mt-4">
                    <CardImg
                      className="rounded-0"
                      top
                      src={require("assets/img/wholewedd2.jpg")}
                      alt="Card image cap p-2"
                      width="200px"
                    />
                    <CardBody className="my-auto">
                      <CardTitle className="text-white h5 font-weight-bold pb-4">
                        Koordynacja
                      </CardTitle>
                      <CardText className="text-white">
                        <p>- stworzenie scenariusza dnia ślubu i wesela, </p>
                        <p>
                          - kontakt z podwykonawcami przed ślubem i weselem,{" "}
                        </p>
                        <p>
                          - koordynacja podwykonawców, obsługi i przebiegu
                          wydarzenia,{" "}
                        </p>
                        <p>
                          - kontrola rozstawienia stołów i krzeseł, bufetów,
                          innych elementów aranżacji, - dopilnowanie ustawienia
                          ustalonych elementów dekoracji,{" "}
                        </p>
                        <p>
                          - rozkładanie winietek, tablicy z usadzeniem gości,
                          menu, prezentów i innych elementów,{" "}
                        </p>
                        <p>- pomoc w sytuacjach awaryjnych,</p>
                        <p>- rozliczenie z podwykonawcami, </p>
                        <p>- udzielanie informacji gościom weselnym, </p>
                        <p>- nadzór nad transportem gości i Pary Młodej </p>
                      </CardText>
                      <CardText className="text-white my-auto font-weight-bold">
                        od 1500zł
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="12" className="text-center" style={minHeight}>
                  <Card className="m-3 inherit2 rounded-0 mt-4">
                    <CardImg
                      className="rounded-0"
                      top
                      src={require("assets/img/mixedlang3.jpg")}
                      alt="Card image cap"
                    />
                    <CardBody className="my-auto">
                      <CardTitle className="text-white h5 font-weight-bold pb-4">
                        Dobór usługodawców
                      </CardTitle>
                      <CardText className="text-white my-auto">
                        <p>
                          - przedstawienie ofert podwykonawców spełniających
                          wymagania Pary Młodej{" "}
                        </p>
                        <p>
                          - sprawdzanie pod względem prawnym oraz podpisywanie
                          umów z usługodawcami,{" "}
                        </p>
                        <p>
                          - ciągły kontakt z usługodawcami aż do dnia ślubu i
                          wesela{" "}
                        </p>
                        <p>
                          - możliwość wspólnych spotkań oraz ustalania
                          szczegółów z usługodawcami{" "}
                        </p>
                        <p>
                          - dopilnowanie umów z usługodawcami znalezionymi przez
                          Parę Młodą
                        </p>
                      </CardText>
                      <br />
                      <CardText className="text-white my-auto font-weight-bold pb-4">
                        od 8 % kosztów usług
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="12" className="text-center" style={minHeight}>
                  <Card className="m-3 inherit2 rounded-0 mt-4">
                    <CardImg
                      className="rounded-0"
                      top
                      src={require("assets/img/lateness3.jpg")}
                      alt="Card image cap"
                    />
                    <CardBody className="my-auto">
                      <CardTitle className="text-white h5 font-weight-bold">
                        Kompleksowa organizacja
                      </CardTitle>
                      <CardText className="text-white">
                        <p>- stworzenie kalendarza przygotowań,</p>
                        <p>- czuwanie nad budżetem, </p>
                        <p>- dobór usługodawców </p>
                        <p>
                          - pomoc w dopasowaniu koloru/ motywu przewodniego i
                          dopilnowanie spójności w tym aspekcie{" "}
                        </p>
                        <p>- koordynacja dnia ślubu i wesela </p>
                      </CardText>
                      <CardText className="text-white my-auto font-weight-bold">
                        od 9 % kosztów ślubu i wesela
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Row className={`w-100 text-center mx-auto`}>
                  <div
                    id="bundleDescription"
                    className="h4 font-weight-normal text-white m-5 w-100 inherit2 p-5 "
                  >
                    {bundleDescription}
                  </div>
                  <a
                    href="/oferta"
                    className={`btn thrd-colour-bg mx-auto d-${displayShowMore}`}
                  >
                    Zobacz pełną ofertę
                  </a>
                </Row>
              </Row>
            </>
          ) : (
            <>
              <Row style={secRowStyle} className="border-bottom pt-5 pb-5">
                <Col lg="12" className="text-center" style={minHeight}>
                  <Card className="m-3 inherit2 rounded-0 mt-4 flex-row">
                    <CardBody className="my-auto">
                      <CardTitle className="text-white h5 font-weight-bold">
                        Koordynacja
                      </CardTitle>
                      <CardText className="text-white">
                        <p>- stworzenie scenariusza dnia ślubu i wesela, </p>
                        <p>
                          - kontakt z podwykonawcami przed ślubem i weselem,{" "}
                        </p>
                        <p>
                          - koordynacja podwykonawców, obsługi i przebiegu
                          wydarzenia,{" "}
                        </p>
                        <p>
                          - kontrola rozstawienia stołów i krzeseł, bufetów,
                          innych elementów aranżacji, - dopilnowanie ustawienia
                          ustalonych elementów dekoracji,{" "}
                        </p>
                        <p>
                          - rozkładanie winietek, tablicy z usadzeniem gości,
                          menu, prezentów i innych elementów,{" "}
                        </p>
                        <p>- pomoc w sytuacjach awaryjnych,</p>
                        <p>- rozliczenie z podwykonawcami, </p>
                        <p>- udzielanie informacji gościom weselnym, </p>
                        <p>- nadzór nad transportem gości i Pary Młodej </p>
                      </CardText>
                      <CardText className="text-white my-auto font-weight-bold">
                        od 1500zł
                      </CardText>
                    </CardBody>
                    <CardImg
                      className="rounded-0 w-50"
                      top
                      src={require("assets/img/wholewedd2.jpg")}
                      alt="Card image cap p-2"
                      width="200px"
                    />
                  </Card>
                </Col>
                <Col lg="12" className="text-center" style={minHeight}>
                  <Card className="m-3 inherit2 rounded-0 mt-4 flex-row">
                    <CardImg
                      className="rounded-0 w-50"
                      top
                      src={require("assets/img/mixedlang3.jpg")}
                      alt="Card image cap"
                    />
                    <CardBody className="my-auto">
                      <CardTitle className="text-white h5 font-weight-bold">
                        Dobór usługodawców
                      </CardTitle>
                      <CardText className="text-white my-auto">
                        <p>
                          - przedstawienie ofert podwykonawców spełniających
                          wymagania Pary Młodej{" "}
                        </p>
                        <p>
                          - sprawdzanie pod względem prawnym oraz podpisywanie
                          umów z usługodawcami,{" "}
                        </p>
                        <p>
                          - ciągły kontakt z usługodawcami aż do dnia ślubu i
                          wesela{" "}
                        </p>
                        <p>
                          - możliwość wspólnych spotkań oraz ustalania
                          szczegółów z usługodawcami{" "}
                        </p>
                        <p>
                          - dopilnowanie umów z usługodawcami znalezionymi przez
                          Parę Młodą
                        </p>
                      </CardText>
                      <br />
                      <CardText className="text-white my-auto font-weight-bold">
                        od 8 % kosztów usług
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="12" className="text-center" style={minHeight}>
                  <Card className="m-3 inherit2 rounded-0 mt-4 flex-row">
                    <CardBody className="my-auto">
                      <CardTitle className="text-white h5 font-weight-bold">
                        Kompleksowa organizacja
                      </CardTitle>
                      <CardText className="text-white">
                        <p>- stworzenie kalendarza przygotowań,</p>
                        <p>- czuwanie nad budżetem, </p>
                        <p>- dobór usługodawców </p>
                        <p>
                          - pomoc w dopasowaniu koloru/ motywu przewodniego i
                          dopilnowanie spójności w tym aspekcie{" "}
                        </p>
                        <p>- koordynacja dnia ślubu i wesela </p>
                      </CardText>
                      <CardText className="text-white my-auto font-weight-bold">
                        od 9 % kosztów ślubu i wesela
                      </CardText>
                    </CardBody>
                    <CardImg
                      className="rounded-0 w-50"
                      top
                      src={require("assets/img/lateness3.jpg")}
                      alt="Card image cap"
                    />
                  </Card>
                </Col>
                <Row className={`w-100 text-center mx-auto`}>
                  <div
                    id="bundleDescription"
                    className="h4 font-weight-normal text-white m-5 w-100 inherit2 p-5 "
                  >
                    {bundleDescription}
                  </div>
                  <a
                    href="/oferta"
                    className={`btn thrd-colour-bg mx-auto d-${displayShowMore}`}
                  >
                    Zobacz pełną ofertę
                  </a>
                </Row>
              </Row>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OfferSummary;
