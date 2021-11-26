import React, {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  List
} from "reactstrap";

import Widget from "../../../components/Widget";
import s from "./Help.module.scss";


function Help(props){
  const helpWidget = useRef(null);

  const data = useSelector(store => store.data.dataList[props.index]);
  const dispatch = useDispatch();

  return(
    <Widget
      ref={helpWidget}
      title={
        <h5>
          <span className="fw-semi-bold">Enviar Ayuda</span>
        </h5>
      }
      close
    >
      <Row>
        <Col lg={12}>
          <h4> Necesidades </h4>
          {data.necesidades.map((necesidad, index) => (
              <Row>
                <Col lg={12}>
                  {/* <h5>{necesidad.nombre} - {necesidad.cantidad}</h5> */}
                  <li key={necesidad.nombre}> {necesidad.nombre} - {necesidad.cantidad} </li>
                </Col>
              </Row>
          ))}
          <h4>Datos Personales</h4>
          <p> <b>Nombre de la organización: </b> {data.personal.organizacion} </p>
          <p> <b>Representante: </b> {data.personal.nombre} </p>
          <p> <b>Teléfono: </b> {data.personal.telefono} </p>
          <p> <b>Correo: </b> {data.personal.correo} </p>
          <h4>Datos de la emergencia</h4>
          <p> <b>Región: </b> {data.emergencia.region} </p>
          <p> <b>Comuna: </b> {data.emergencia.comuna} </p>
          <p> <b>Dirección: </b> {data.emergencia.direccion} </p>
          <p> <b>Emergencia: </b> {data.emergencia.emergencia} </p>
        </Col>
      </Row>
      <Form>
        <FormGroup>
          <Label for="exampleSelect" sm={12}>
            Enviar Recursos
          </Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
          >
            {data.necesidades.map((necesidad, index) => {
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

export default Help;