import React from "react";
import { Row, Col } from "reactstrap";

let AboutMeSummary = (props) => {
  return (
    <>
      <div ref={props.refProp} className="section-dark border-top">
        <div className="container-fluid">
          <Row>
            <Col lg="5" sm="12" className="px-0">
              <img
                style={{ width: "100%" }}
                className="img-responsive border-right"
                alt="Magdalena Stachurska"
                src={require("assets/img/summabout2.jpg")}
              />
            </Col>
            <Col lg="7" sm="12" className="my-auto px-5">
              <p className="h2 text-center pb-4 text-light">
                <bold>W czym mogę Wam pomóc?</bold>
              </p>
              <p className="description pb-3 text-center">
                Ceremonia zaślubin jest jednym z najważniejszych wydarzeń w
                życiu. Chcę, aby ten dzień był perfekcyjny pod każdym względem,
                co wymaga dużo czasu i energii poświęconych organizacji. By
                uniknąć stresu związanego z nadmiarem obowiązków, warto
                skorzystać z moich usług. Będę doglądać i koordynować każdy etap
                związany z przygotowaniem uroczystości w stałym kontakcie z Parą
                Młodą. Moja wiedza, a także rozeznanie w branży ślubnych
                usługodawców, sprawi, że wizje Młodej Pary staną się
                rzeczywistością.
              </p>
              <p className="description pb-3 text-center"></p>
              <Row className="text-center ">
                <a
                  href="/o-mnie"
                  className="btn thrd-colour-bg btn-round ml-auto mr-auto mb-5"
                >
                  <i className="fa fa-heart mr-1" />
                  Poznaj mnie
                </a>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AboutMeSummary;
