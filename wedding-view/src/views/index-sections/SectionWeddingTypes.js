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

const imgStyle = {
  maxHeight: "200px",
  maxWidth: "200px",
};

function SectionWeddingTypes() {
  return (
    <>
      <div className="section text-center pt-4">
        <h2 className="title">Realizowane typy ślubów</h2>
        <Row className="w-100 mx-auto">
          <Col md="4">
            <Card className="card-profile card-plain">
              <div className="card-avatar" style={imgStyle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img alt="..." src={require("assets/img/cywilny3.jpg")} />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle
                      tag="h4"
                      className="sec-colour font-weight-normal"
                    >
                      Cywilny
                    </CardTitle>
                  </div>
                </a>
                <p className="card-description text-center font-weight-normal">
                  Ślub zawarty w Urzędzie Stanu Cywilnego też może wyglądać
                  atrakcyjnie. Napisz do mnie i przekonaj się co zrobić, aby
                  Wasza uroczystość została zapamiętana na długo.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-profile card-plain">
              <div className="card-avatar" style={imgStyle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img alt="..." src={require("assets/img/konkoradowy2.jpg")} />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle
                      tag="h4"
                      className="sec-colour font-weight-normal"
                    >
                      Konkordatowy
                    </CardTitle>
                  </div>
                </a>
                <p className="card-description text-center font-weight-normal">
                  Połączenie ślubu cywilnego z kościelnym to jeden <br />z
                  najczęściej wybieranych ślubów w Polsce. Skontaktuj się ze
                  mną, aby dowiedzieć się jakich formalności należy dopełnić.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-profile card-plain">
              <div className="card-avatar" style={imgStyle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img alt="..." src={require("assets/img/wyznaniowy3.jpg")} />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle
                      tag="h4"
                      className="sec-colour font-weight-normal"
                    >
                      Kościelny
                    </CardTitle>
                  </div>
                </a>
                <p className="card-description text-center font-weight-normal">
                  Jest to wyjątkowa ceremonia zarówno dla Państwa Młodych jak i
                  dla ich rodziny. Jednak sam ślub kościelny nie jest ważny
                  prawnie. Jakich dokumentów potrzebujesz żeby przyjąć sakrament
                  małżeństwa? Skontaktuj się ze mną.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="w-100 mx-auto">
          <Col md="2" />
          <Col md="4">
            <Card className="card-profile card-plain">
              <div className="card-avatar" style={imgStyle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img alt="..." src={require("assets/img/plener2.jpg")} />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle
                      tag="h4"
                      className="sec-colour font-weight-normal"
                    >
                      Plenerowy
                    </CardTitle>
                  </div>
                </a>
                <p className="card-description text-center font-weight-normal">
                  Ślub cywilny poza Urzędem Stanu Cywilnego lub kościelny lecz
                  poza murami kościoła? Napisz do mnie i dowiedz się, jak
                  zorganizować malowniczy ślub w plenerze oraz sprawdź
                  <br />z jakimi kosztami się to wiąże
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-profile card-plain">
              <div className="card-avatar" style={imgStyle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("assets/img/humanistyczny.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle
                      tag="h4"
                      className="sec-colour font-weight-normal"
                    >
                      Humanistyczny
                    </CardTitle>
                  </div>
                </a>
                <p className="card-description text-center font-weight-normal">
                  Marzysz o efektownej ceremonii stworzonej wyłącznie dla Was ?
                  A może o przysiędze wypowiedzianej prosto z serca? Ta forma
                  ślubu będzie idealna. Wypełnij formularz kontaktowy aby
                  dowiedzieć się więcej.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="2" />
        </Row>
        <Row className="text-center w-100 mx-auto"></Row>
      </div>
    </>
  );
}
export default SectionWeddingTypes;
