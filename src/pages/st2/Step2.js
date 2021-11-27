import React, {useState,useEffects} from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter, Redirect, Link } from 'react-router-dom';
import Step3 from '../st3'

function Step2(props) {

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

    console.log('Pagina2')
    console.log(props);

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

    //Page Handle

    const handleNextPage = (e)=>{
        console.log("boton apretado");
        return(
            <Step3 name="Sara2" />
        );
        
    }

    return (
        <div>

    <Dropdown isOpen={regionDropdown} toggle={handleRegionDropdown}>
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

    <Dropdown isOpen={comunaDropdown} toggle={handleComunaDropdown}>
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

    <Dropdown isOpen={emergenciaDropdown} toggle={handleEmergenciaDropdown}>
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

        
    <Button
    color="primary"
    onClick={handleNextPage}
    >
    Siguiente
    </Button>

    </div>

    );
}



export default withRouter(Step2);

