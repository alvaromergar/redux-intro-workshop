import React from "react";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "../../components/Slider";
import CheckboxHome from "../../components/CheckboxHome";
import CheckboxFilter from "../../components/CheckboxFilter";
import CheckboxCondition from "../../components/CheckboxCondition";
import SelectionEquipment from "../../components/SelectionEquipment";
import PublicationDate from "../../components/PublicationDate";
import ButtonBedrooms from "../../components/ButtonBedrooms";
import ButtonBathrooms from "../../components/ButtonBathrooms";

function Main() {
  return(
    <div>
      <Container className="fondo">
          <Row className="gridForm">
            <Col className="cell">
              <CheckboxHome />
            </Col>
            <Col className="cell">
              <ButtonBedrooms />
            </Col>
            <Col className="cell">
              <ButtonBathrooms />
            </Col>
            <Col className="cell">
              <SelectionEquipment />
            </Col>
          </Row>
          <Row  className="gridForm">
            <Col  className="cell">
              <CheckboxCondition />
            </Col>
            <Col className="cell">
              <Slider />
            </Col>
            <Col className="cell">
              <PublicationDate />
            </Col>
            <Col className="cell">
              <CheckboxFilter />
            </Col>
          </Row>
      </Container>
      <Container className="fondo">
          <Row className="gridForm">
            <Col className="cell">
              <CheckboxHome />
            </Col>
            <Col className="cell">
              <ButtonBedrooms />
            </Col>
            <Col className="cell">
              <ButtonBathrooms />
            </Col>
            <Col className="cell">
              <SelectionEquipment />
            </Col>
          </Row>
      </Container>
    </div>  
  );
}

export default Main;