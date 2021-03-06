import React, {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Table
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

  const [satisfiedNeeds, setSatisfiedNeeds] = useState(["Agua", "Comida", "Ropa","Refugio"]);
  const [satisfiedNeed, setSatisfiedNeed] = useState({nombre:"",cantidad:0});

  // const [inputList, setInputList] = useState([
  //   {necesidad: leftNecesidades[0].nombre, cantidad: leftNecesidades[0].cantidad},
  // ]);
  const [inputList, setInputList] = useState([]);


  const removeField = (index) => {
    //console.log(index);
    const input = inputList[index];
    //console.log(input);
    
    const newInputList = [...inputList];
    newInputList.splice(index, 1);
    const newleftNecesidades = [...leftNecesidades,input]
    // console.log(leftNecesidades)
    // console.log(newleftNecesidades)
    setInputList(newInputList);
    setLeftNecesidades(newleftNecesidades);
  }

  const addField = () => {
    if(satisfiedNeed.nombre != ""){
      setInputList([...inputList, satisfiedNeed]);
    //remover el objecto
    // console.log(satisfiedNeed);
    // console.log(leftNecesidades);
    let filteredArray = leftNecesidades.filter(item => item.nombre !== satisfiedNeed.nombre);
    // console.log(filteredArray);
    setLeftNecesidades(filteredArray);
    }
    setSatisfiedNeed({nombre:"",cantidad:0});
  }

  const handleSatisfiedNeeds = (e) => {

    const name = e.target.value;
    let newState = {...satisfiedNeeds};
    newState[name] = !newState[name];
    setSatisfiedNeeds(newState);
  }

  const handleSatisfiedNeed = (e) => {

    const name = e.target.value;
    setSatisfiedNeed({nombre: e.target.value,cantidad:0});
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
    // Revisar que no haya campos vacios
    if (inputList.length === 0) {
      alert("No puede dejar campos vacios");
    }
    else {
      // Revisar que un campoo no sea 0
      let flag = false;
      inputList.forEach(input => {
        if(input.cantidad <= 0){
          flag = true;
        }});
      if(flag){
        alert("Los recursos a env??ar deben ser mayores a 0");
      }
      else{
        alert("Formulario enviado. ??Gracias por tu ayuda!");
        window.location.reload();
      }
    }
  }

  const changeNumber = (e, index) => {
    const newInputList = [...inputList];
    newInputList[index].cantidad = e.target.value;
    setInputList(newInputList);
  }

  const tableStyle={
    padding: "0px",
    fontSize: "20px",
    color: "white", 
  }

  return(
    <Widget
      ref={helpWidget}
      title={
        <h5>
          {data.estado === "Cr??tico" ? (<span className="fw-semi-bold">Enviar Ayuda</span>) : (<span className="fw-semi-bold">Detalles</span>)}
        </h5>
      }
    >
      <Row>
        <Col lg={12}>
          <Table Col={5} borderless responsive>
            <thead>
              <tr>
                <th style={tableStyle}>Necesidad</th>
                <th style={tableStyle}>Personas afectadas</th>
              </tr>
            </thead>
            <tbody>
              {data.necesidades.map((necesidad, index) => (
                <tr key={index}>
                  <td style={tableStyle}>
                    {necesidad.nombre}
                  </td>
                  <td style={tableStyle}>
                    {necesidad.cantidad}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h4>Datos Personales</h4>
          <p> <b>Nombre de la organizaci??n: </b> {data.personal.organizacion} </p>
          <p> <b>Representante: </b> {data.personal.nombre} </p>
          <p> <b>Tel??fono: </b> {data.personal.telefono} </p>
          <p> <b>Correo: </b> {data.personal.correo} </p>
          <h4>Datos de la emergencia</h4>
          <p> <b>Regi??n: </b> {data.emergencia.region} </p>
          <p> <b>Comuna: </b> {data.emergencia.comuna} </p>
          <p> <b>Direcci??n: </b> {data.emergencia.direccion} </p>
          <p> <b>Emergencia: </b> {data.emergencia.emergencia} </p>
        </Col>
      </Row>
      {data.estado === "Cr??tico" && (
      <Form>
        <h3>Enviar Recursos</h3>
        <Row key={1} id={"input"}>
        <Col sm={8}>
        <Input type="select" name="select" id="select" value={satisfiedNeed.nombre} onChange={handleSatisfiedNeed}>
          <option key={-1} value={null}></option>
          {leftNecesidades.map((necesidad, j) => (
            <option key={j} value={necesidad.nombre}>{necesidad.nombre}</option>
          ))}
        </Input>
        </Col>
        <Col sm={1}>
              <Button color="#ff5c5c" onClick={addField}>
                <img src={Plus} alt="Plus" height="30px" width="30px" />
              </Button>
        </Col>
        
        </Row>
        {inputList.map((input, index) => (
          <Row key={index} id={"input"+ index}>
            <Col sm={2}>
                <p>{input.nombre}</p>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Input type="number" name="number" id="exampleNumber" placeholder="Cantidad" defaultValue={input.cantidad} onChange={(e) => changeNumber(e,index)} />
              </FormGroup>
            </Col>
            <Col sm={1}>
              <Button color="#ff5c5c" onClick={() => removeField(index)}>
                <img src={Minus} alt="Minus" height="30px" width="30px" />
              </Button>
            </Col>
            {/* <Col sm={1}>
              <Button color="#ff5c5c" onClick={addField}>
                <img src={Plus} alt="Plus" height="30px" width="30px" />
              </Button>
            </Col> */}
          </Row>
        ))}
      </Form>
        )}
        <Row>
          <Col sm={2}>
            <Button color="danger" onClick={props.informationHandler}>Volver</Button>
          </Col>
          {data.estado === "Cr??tico" && (
          <Col sm={2}>
            <Button color="success" onClick={submitForm}>Enviar</Button>
          </Col>)}
        </Row>
    </Widget>
  );
}

export default Help;