import React, {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import Widget from "../../../components/Widget";
import "./Help.module.scss";
import Plus from "./plus.png";
import Minus from "./minus.png";

import { UPDATE_DATA } from "../../../actions/data";

function Help(props){
  const helpWidget = useRef(null);

  const data = useSelector(store => store.data.dataList[props.index]);
  const dispatch = useDispatch();
  
  const [leftNecesidades, setLeftNecesidades] = useState(data.necesidades);

  const [satisfiedNeeds, setSatisfiedNeeds] = useState({
    "Agua": false,
    "Comida": false,
    "Ropa": false,
    "Refugio": false,
  });

  const [inputList, setInputList] = useState([
    {necesidad: leftNecesidades[0].nombre, cantidad: leftNecesidades[0].cantidad},
  ]);

  const removeField = (index) => {
    console.log(index);
    const input = document.getElementById("select"+index);
    console.log(input);
    const newInputList = [...inputList];
    newInputList.splice(index, 1);
    setInputList(newInputList);
  }

  const addField = () => {
    setInputList([...inputList, {necesidad: leftNecesidades[0].nombre, cantidad: leftNecesidades[0].cantidad}]);
  }

  const handleSatisfiedNeeds = (e) => {

    const name = e.target.value;
    let newState = {...satisfiedNeeds};
    newState[name] = !newState[name];
    setSatisfiedNeeds(newState);
  }

  const handleLeftNecesidades = (event) => {
    const newList = leftNecesidades.filter(necesidad => {
      if(necesidad.nombre !== event.target.value){
        return necesidad;
      }
    });
    setLeftNecesidades(newList);
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitForm");
    // dispatch(UPDATE_DATA());
  }


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
        <h3>Enviar Recursos</h3>
        {inputList.map((input, index) => (
          <Row key={index} id={"input"+ index}>
            <Col sm={4}>
              <FormGroup>
                <Input type="select" id={"select"+index} name="select" id="select" onChange={handleSatisfiedNeeds}>
                  <option key={-1} value={null}></option>
                  {data.necesidades.map((necesidad, j) => (
                    satisfiedNeeds[necesidad.nombre] ? null :
                    <option key={j} value={necesidad.nombre}>{necesidad.nombre}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Input type="number" name="number" id="exampleNumber" placeholder="Cantidad" />
              </FormGroup>
              </Col>
            <Col sm={1}>
              <Button color="#ff5c5c" onClick={() => removeField(index)}>
                <img src={Minus} alt="Minus" height="30px" width="30px" />
              </Button>
            </Col>
            <Col sm={1}>
              <Button color="#ff5c5c" onClick={addField}>
                <img src={Plus} alt="Plus" height="30px" width="30px" />
              </Button>
            </Col>
          </Row>
        ))}
        <Button color="success" onClick={submitForm}>Enviar</Button>
      </Form>
        {/* <Row>
          <Col>
            <FormGroup>
            <Input
              name="selection"
              type="select"
            >
              {data.necesidades.map((necesidad, index) => {
                return (
                  <option key={index} name={index}>
                    {necesidad.nombre}
                  </option>
                );
              })}
            </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input id="field1quantity" type="number" placeholder="Cantidad" />
            </FormGroup>
          </Col>
          <Col>
            <Button size="sm" color="#ff5c5c">
              <img src={Plus} onClick={addField} alt="Agregar recurso" width="30px"/>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <Button size="lg" color="primary" onClick={submitForm}>
            Enviar
          </Button>
          </Col>
        </Row> 
      </Form>   */}
    </Widget>
  );
}

export default Help;