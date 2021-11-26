import React from "react";

import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import Widget from "../../../components/Widget";
import s from "./Help.module.scss";

class Help extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <Widget
          title={
            <h5>
              <span className="fw-semi-bold">Enviar Ayuda</span>
            </h5>
          }
          close
        >
          <Row>
            <Col lg={12}>
              <h5> Necesidades </h5>
              {this.props.data.necesidades.map((necesidad, index) => (
                <div key={index}>
                  <Row>
                    <Col lg={12}>
                      <h6>{necesidad.nombre} - {necesidad.cantidad}</h6>
                    </Col>
                  </Row>
                </div>
              ))}
              <h5>Datos Personales</h5>
              <p> <b>Nombre de la organización: </b> {this.props.data.personal.organizacion} </p>
              <p> <b>Representante: </b> {this.props.data.personal.nombre} </p>
              <p> <b>Teléfono: </b> {this.props.data.personal.telefono} </p>
              <p> <b>Correo: </b> {this.props.data.personal.correo} </p>
              <h5>Datos de la emergencia</h5>
              <p> <b>Región: </b> {this.props.data.emergencia.region} </p>
              <p> <b>Comuna: </b> {this.props.data.emergencia.comuna} </p>
              <p> <b>Dirección: </b> {this.props.data.emergencia.direccion} </p>
              <p> <b>Emergencia: </b> {this.props.data.emergencia.emergencia} </p>
            </Col>
          </Row>
          <Form>
            <FormGroup>
              <Label for="exampleSelect" sm={2}>
                Select
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
              >
                {this.props.data.necesidades.map((necesidad, index) => {
                  return (
                    <option key={index}>
                      {necesidad.nombre}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Form>   
        </Widget>
    );
  }
}

export default Help;