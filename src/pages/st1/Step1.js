import React, {useState,useEffects} from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom'
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Input } from 'reactstrap';
import Step2 from '../st2'


export default function Step1() {

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


    //Page Handle
    const handleNextPage = ()=>{
        setPage(page+1)
    }

    const handlePreviousPage = (e)=>{
        setPage(page-1)
    }



    if(page === 0){
        return (
            <div>
            <Input
                value={nombre}
                placeholder="Nombre"
                onChange={handleNombre}
            />
    
            <Input
                value={representante}
                placeholder="Representante"
                onChange={handleRepresentante}
                
            />
    
            <Input
                value={telefono}
                placeholder="Telefono"
                onChange={handleTelefono}
            />
    
            <Input
                value={correo}
                placeholder="Correo"
                onChange={handleCorreo}
            />
    
            <Button
            color="primary"
            onClick={handleNextPage}
            >
            Siguiente
            </Button>
            </div>
    
        );

    }
    else if (page === 1){
        
        return (
            <div>

        <Dropdown isOpen={regionDropdown} toggle={handleRegionDropdown} value={regionDropdownValue}>
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

        <Dropdown isOpen={comunaDropdown} toggle={handleComunaDropdown} value={comunaDropdownValue}>
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

        <Dropdown isOpen={emergenciaDropdown} toggle={handleEmergenciaDropdown} value={emergenciaDropdownValue}>
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

        <Input
                value={direccion}
                placeholder="direccion"
                onChange={handleDireccion}
            />

        <Button
            color="primary"
            onClick={handlePreviousPage}
            >
            Anterior
            </Button>
        
            <Button
            color="primary"
            onClick={handleNextPage}
            >
            Siguiente
            </Button>
            
            </div>

        );

    }

    else {
        return (

            <div>
                <p>Resumen</p> 
                <p>{nombre}</p> 
                <p>{representante}</p> 
                <p>{telefono}</p> 
                <p>{correo}</p> 
                <p>Datos de la Emergencia</p> 
                <p>{regionDropdownValue}</p>  
                <p>{comunaDropdownValue}</p>  
                <p>{emergenciaDropdownValue}</p> 

            <Button
            color="primary"
            onClick={handlePreviousPage}
            >
            Anterior
            </Button>
            </div>

        );
     
    }
    
}



//export default withRouter(Step1);

