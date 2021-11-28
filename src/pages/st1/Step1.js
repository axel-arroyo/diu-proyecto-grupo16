import React, {useState,useEffects} from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom'
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup} from 'reactstrap';
import { Input } from 'reactstrap';
import Maps from "../../pages/components/maps/google";
import '../../styles/forms.scss';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Plus from "../components/help/plus.png";
import Minus from "../components/help/minus.png";

export default function Step1() {

    // this.state = {
    //     graph: null,
    //     checkedArr: [false, false, false],
    //     mapInfo: {
    //       latitud: -33.448891,
    //       longitud: -70.669266,
    //       zoom: 12,
    //     },
    // };

    const [page, setPage] = useState(0);

    //Page 1
    const [nombre, setNombre] = useState("");
    const [representante, setRepresentante] = useState("");
    const [telefono,setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    

    const handleNombre = (e)=>{
        setNombre(e.target.value);
    }
    const handleRepresentante = (e)=>{
        setRepresentante(e.target.value);
    }

    const handleTelefono = (e)=>{
        setTelefono(e.target.value);
    }

    const handleCorreo = (e)=>{
        setCorreo(e.target.value);
    }


    //Page 2

    
    const [regionDropdownName, setRegionDropdownName] = useState("Region");
    const [regionDropdownValue, setRegionDropdownValue] = useState("");
    const [regionDropdown, setRegionDropdown] = useState(false);

    const [comunaDropdownName, setComunaDropdownName] = useState("Comuna");
    const [comunaDropdownValue, setComunaDropdownValue] = useState("");
    const [comunaDropdown, setComunaDropdown] = useState(false);

    const [emergenciaDropdownName, setEmergenciaDropdownName] = useState("Emergencia");
    const [emergenciaDropdownValue, setEmergenciaDropdownValue] = useState("");
    const [emergenciaDropdown, setEmergenciaDropdown] = useState(false);

    const [inputList, setInputList] = useState([{nombre:"Agua",cantidad:0},{nombre:"Comida",cantidad:0},{nombre:"Ropa",cantidad:0},{nombre:"Refugio",cantidad:0}]);
    const [selectedNeed, setSelectedNeed] = useState({nombre:"",cantidad:0});
    const [selectedNeeds, setSelectedNeeds] = useState([]);


    const [direccion, setDireccion] = useState("");

    const handleRegionDropdown = ()=>{
        setRegionDropdown(!regionDropdown);
    }

    const handleRegionDropdownValue = (e)=>{
        setRegionDropdownValue(e.currentTarget.textContent);
        setRegionDropdownName(e.currentTarget.textContent);
    }

    const handleComunaDropdown = ()=>{
        setComunaDropdown(!comunaDropdown);
    }

    const handleComunaDropdownValue = (e)=>{
        setComunaDropdownValue(e.currentTarget.textContent);
        setComunaDropdownName(e.currentTarget.textContent);
    }

    const handleEmergenciaDropdown = ()=>{
        setEmergenciaDropdown(!emergenciaDropdown);
    }

    const handleEmergenciaDropdownValue = (e)=>{
        setEmergenciaDropdownValue(e.currentTarget.textContent);
        setEmergenciaDropdownName(e.currentTarget.textContent);
    }

    const handleDireccion = (e)=>{
        setDireccion(e.target.value);
    }

    const addField = () => {
        if(selectedNeed.nombre != ""){
            setSelectedNeeds([...selectedNeeds, selectedNeed]);
            let filteredArray = inputList.filter(item => item.nombre !== selectedNeed.nombre);
            // console.log(filteredArray);
            setInputList(filteredArray);
        }
        setSelectedNeed({nombre:"",cantidad:0});
    }
    const handleSelectedNeed = (e) => {
        
        setSelectedNeed({nombre: e.target.value,cantidad:0});
    }

    const removeField = (index) => {
        const input = selectedNeeds[index];
        setInputList([...inputList,input]);
        const newselectedNeeds = [...selectedNeeds];
        newselectedNeeds.splice(index, 1);
        // console.log(leftNecesidades)
        // console.log(newleftNecesidades)
        setSelectedNeeds(newselectedNeeds);
      }

    //Page Handle
    const handleNextPage = ()=>{
        setPage(page+1)
    }

    const handlePreviousPage = (e)=>{
        setPage(page-1)
    }



    if(page === 0){
        return (
            
            <div className='form-container'>
            <h2 className='form-title'>Organización</h2>
                <Input
                    value={nombre}
                    placeholder="Nombre"
                    onChange={handleNombre} />

                <Input className='mt-4'
                    value={representante}
                    placeholder="Representante"
                    onChange={handleRepresentante} />

                <Input className='mt-4'
                    value={telefono}
                    placeholder="Telefono"
                    onChange={handleTelefono} />

                <Input className='mt-4'
                    value={correo}
                    placeholder="Correo"
                    onChange={handleCorreo} />
                <div className='center'>
                <Button className='mt-4' color='primary'
                    onClick={handleNextPage}
                >
                    Siguiente
                </Button>
                </div>
            </div>
    
        );

    }
    else if (page === 1){
        
        return (
            <div className='form-container'>
            <h2 className='form-title'>Informacion de la emergencia</h2>
        <Dropdown className='mt-3' size='lg' isOpen={regionDropdown} toggle={handleRegionDropdown} value={regionDropdownValue}>
            <DropdownToggle caret>
            {regionDropdownName}
            </DropdownToggle>
            <DropdownMenu
            >

            <DropdownItem onClick={handleRegionDropdownValue}>
                Metropolitana
            </DropdownItem>
            <DropdownItem onClick={handleRegionDropdownValue}>
                Arica y Parinacota
            </DropdownItem>
            <DropdownItem onClick={handleRegionDropdownValue}>
                Tarapacá
            </DropdownItem >
            <DropdownItem onClick={handleRegionDropdownValue}>
                Antofagasta
            </DropdownItem>
            <DropdownItem onClick={handleRegionDropdownValue}>
                Atacama
            </DropdownItem>
            <DropdownItem onClick={handleRegionDropdownValue}>
                Coquimbo
            </DropdownItem>
            <DropdownItem onClick={handleRegionDropdownValue}>
                Valparaíso
            </DropdownItem>
            <DropdownItem onClick={handleRegionDropdownValue}>
                O’Higgins
            </DropdownItem>

            </DropdownMenu>
        </Dropdown>

        <Dropdown className='mt-3' size='lg' isOpen={comunaDropdown} toggle={handleComunaDropdown} value={comunaDropdownValue}>
            <DropdownToggle caret>
            {comunaDropdownName}
            </DropdownToggle>
            <DropdownMenu
            >

            <DropdownItem onClick={handleComunaDropdownValue}>
                Cerrillos
            </DropdownItem>
            <DropdownItem onClick={handleComunaDropdownValue}>
                Cerro Navia
            </DropdownItem>
            <DropdownItem onClick={handleComunaDropdownValue}>
                Conchalí
            </DropdownItem >
            <DropdownItem onClick={handleComunaDropdownValue}>
                El Bosque
            </DropdownItem>
            <DropdownItem onClick={handleComunaDropdownValue}>
                Estación Central
            </DropdownItem>
            <DropdownItem onClick={handleComunaDropdownValue}>
                Huechuraba
            </DropdownItem>
            <DropdownItem onClick={handleComunaDropdownValue}>
                La Cisterna
            </DropdownItem>

            </DropdownMenu>
        </Dropdown>

        <Dropdown className='mt-3' size='lg' isOpen={emergenciaDropdown} toggle={handleEmergenciaDropdown} value={emergenciaDropdownValue}>
            <DropdownToggle caret>
            {emergenciaDropdownName}
            </DropdownToggle>
            <DropdownMenu
            >

            <DropdownItem onClick={handleEmergenciaDropdownValue}>
            Derrumbe
            </DropdownItem>
            <DropdownItem onClick={handleEmergenciaDropdownValue}>
            Incendio
            </DropdownItem>
            <DropdownItem onClick={handleEmergenciaDropdownValue}>
            Inundación
            </DropdownItem >
            <DropdownItem onClick={handleEmergenciaDropdownValue}>
            Terremoto
            </DropdownItem>
            <DropdownItem onClick={handleEmergenciaDropdownValue}>
            Tsunami
            </DropdownItem>
            <DropdownItem onClick={handleEmergenciaDropdownValue}>
            Sequía
            </DropdownItem>

            </DropdownMenu>
        </Dropdown>

        <Input className='mt-3'
                value={direccion}
                placeholder="Direccion"
                onChange={handleDireccion}
            />

        <p>Necesidades: </p>
                <Row key={1} id={"input"}>
                <Col sm={8}>
                <Input type="select" name="select" id="select" value={selectedNeed.nombre} onChange={handleSelectedNeed}>
                <option key={-1} value={null}></option>
                {inputList.map((necesidad, j) => (
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
                {selectedNeeds.map((input, index) => (
                <Row key={index} id={"input"+ index}>
                    <Col sm={4}>
                    <FormGroup>
                    </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <p>{input.nombre}</p>
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
                    {/* <Col sm={1}>
                    <Button color="#ff5c5c" onClick={addField}>
                        <img src={Plus} alt="Plus" height="30px" width="30px" />
                    </Button>
                    </Col> */}
                </Row>
                ))}
        <div className='center'>
        <Button className='mr-3'
            color="primary"
            onClick={handlePreviousPage}
            >
            Anterior
            </Button>
        
            <Button className='ml-3'
            color="primary"
            onClick={handleNextPage}
            >
            Siguiente
            </Button>
            
            </div>
            
            </div>

        );

    }

    else {
        return (
            <Row>
                <Col className='ml-3 mt-3'>

                <Maps info={{latitud: -33.448891, longitud: -70.669266, zoom: 12,}}/>

                </Col>
                <Col>
                <div className='resume'>
                <h2 className='resume-title'>Resumen</h2> 
                <h3>Datos Personales</h3> 
                <p>Organización: {nombre}</p> 
                <p>Representante: {representante}</p> 
                <p>Telefono: {telefono}</p> 
                <p>Correo: {correo}</p> 
                <h3>Datos de la Emergencia</h3> 
                <p>Region: {regionDropdownValue}</p>  
                <p>Comuna: {comunaDropdownValue}</p>  
                <p>Emergencia: {emergenciaDropdownValue}</p> 
                <p>Direccion: {direccion}</p>
                
                

                <Button
                color="primary"
                onClick={handlePreviousPage}
                >
                Anterior
                </Button>
                </div>
                </Col>
            </Row>
            
            
            

            

        );
     
    }
    
}



//export default withRouter(Step1);

