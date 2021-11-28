import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom'
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Table} from 'reactstrap';
import { Input } from 'reactstrap';
import Maps from "../../pages/components/maps/google";
import '../../styles/forms.scss';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Plus from "../components/help/plus.png";
import Minus from "../components/help/minus.png";

import './Step1.css';

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

    const dataRegiones = [
    {
        "region": "Arica y Parinacota",
        "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
        "region": "Tarapacá",
        "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
        "region": "Antofagasta",
        "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
        "region": "Atacama",
        "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
        "region": "Coquimbo",
        "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
        "region": "Valparaíso",
        "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
    {
        "region": "Región del Libertador Gral. Bernardo O’Higgins",
        "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
    {
        "region": "Región del Maule",
        "comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
    {
        "region": "Región de Ñuble",
        "comunas": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
    },
    {
        "region": "Región del Biobío",
        "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
    },
    {
        "region": "Región de la Araucanía",
        "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
    },
    {
        "region": "Región de Los Ríos",
        "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
    {
        "region": "Región de Los Lagos",
        "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
    {
        "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
        "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
    {
        "region": "Región de Magallanes y de la Antártica Chilena",
        "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
    },
    {
        "region": "Región Metropolitana de Santiago",
        "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }]
    const [availableComunas,setAvailableComunas] = useState([]);

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

    
    const [region, setRegion] = useState("");
    const [comuna, setComuna] = useState("");
    const [emergencia, setEmergencia] = useState("");
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

    const handleRegion = (e)=>{
        setRegion(e.target.value);
        if (e.target.value === "") {
            setComuna("");
            setAvailableComunas([]);
            return;
        }
        const comunas = dataRegiones.find(reg => reg.region === e.target.value).comunas;
        setAvailableComunas(comunas);
    }

    const handleComuna = (e)=>{
        setComuna(e.target.value);
    }

    const handleEmergencia = (e)=>{
        setEmergencia(e.target.value);
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
        const newselectedNeeds = [...selectedNeeds];
        newselectedNeeds.splice(index, 1);
        console.log(newselectedNeeds)
        
        setSelectedNeeds(newselectedNeeds);
        setInputList([...inputList,input]);
        //console.log(selectedNeeds)
    }

    const changeNumber = (e,index) => {
        // console.log(e.target.value);
        // console.log(index);

        const value = selectedNeeds[index];
        const newlist = selectedNeeds;
        value.cantidad = e.target.value;
        newlist[index] = value;
        // console.log(newlist);
        console.log(selectedNeeds);
        setSelectedNeeds(newlist);

    }

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Page Handle
    const handleNextPage = ()=>{
        // Revisar que todos los campos esten llenos
        if(page == 0){
            // Revisar nombre, representante, telefono, correo
            if(nombre == "" || representante == "" || telefono == "" || correo == ""){
                alert("Por favor llene todos los campos");
            }
            else{
                // Revisar que el correo y números sea valido
                if(!validateEmail(correo)){
                    alert("Por favor ingrese un correo valido");
                }
                else if(isNaN(telefono)){
                    alert("Por favor ingrese un número valido");
                }
                else{
                    setPage(page+1);
                }
            }
        }
        else if(page == 1){
            // Revisar region, comuna, emergencia, direccion y necesidades
            if(region == "" || comuna == "" || emergencia == "" || direccion == "" || selectedNeeds.length == 0){
                alert("Por favor llene todos los campos");
            }
            else{
                // Revisar que una necesidad no sea 0
                let flag = false;
                selectedNeeds.forEach(item => {
                    if(item.cantidad <= 0){
                        flag = true;
                    }
                });
                if(flag){
                    alert("La cantidad de personas afectadas debe ser mayor a 0");
                }
                else{
                    setPage(page+1);
                }
            }
        }
        // setPage(page+1)
    }

    const handlePreviousPage = (e)=>{
        setPage(page-1)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Solicitud enviada. ¡Estaremos atentos!");
        window.location.href="/";
    }

    const tableStyle={
        padding: "0px",
        fontSize: "20px",
        color: "white", 
      }

    if(page === 0){
        return (
            
            <>
            <header className="logo">
            <a style={{color: "#C1C3CF", fontFamily: "Open Sans"}} href="/"><b>Home </b></a>
            </header>
            <div className='form-container'>
            <h2 className='form-title'>Organización</h2>
                <Input
                    value={nombre}
                    placeholder="Nombre"
                    onChange={handleNombre}/>

                <Input className='mt-4'
                    value={representante}
                    placeholder="Representante"
                    onChange={handleRepresentante} />

                <Input className='mt-4'
                    value={telefono}
                    placeholder="Telefono"
                    onChange={handleTelefono} />

                <Input className='mt-4'
                    type="email"
                    value={correo}
                    placeholder="Correo"
                    onChange={handleCorreo} />
                <div style={{textAlign: "center"}}>
                <Button className='mt-4' color='primary'
                    onClick={handleNextPage}
                >
                    Siguiente
                </Button>
                </div>
            </div>
    
        </>
        );
    }
    else if (page === 1){
        
        return (
            <>
            <header className="logo">
            <a style={{color: "#C1C3CF", fontFamily: "Open Sans"}} href="/"><b>Home </b></a>
            </header>
            <div className='form-container'>
            <h2 className='form-title'>Informacion de la emergencia</h2>
            <Input className='mt-3' type='select' onChange={handleRegion}>
                <option value="">Región</option>    
                {dataRegiones.map((region,index)=>{
                    return <option key={index} value={region.region}>{region.region}</option>
                })}
            </Input>
        {/* <Dropdown className='mt-3' size='lg' isOpen={regionDropdown} toggle={handleRegionDropdown} value={regionDropdownValue}>
            <DropdownToggle color="primary" caret outline>
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
        </Dropdown> */}
        
        <Input className='mt-3' type='select' onChange={handleComuna}>
            <option value="">Comuna</option>
            {availableComunas.map((comuna,index)=>{
                return <option key={index} value={comuna}>{comuna}</option>
            })}
        </Input>
        {/* <Dropdown className='mt-3' size='lg' isOpen={comunaDropdown} toggle={handleComunaDropdown} value={comunaDropdownValue}>
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
        </Dropdown> */}

        <Input className='mt-3' type='select' onChange={handleEmergencia}>
            <option value="">Emergencia</option>
            <option value="Derrumbe">Derrumbe</option>
            <option value="Incendio">Incendio</option>
            <option value="Inundación">Inundación</option>
            <option value="Terremoto">Terremoto</option>
            <option value="Tsunami">Tsunami</option>
            <option value="Sequía">Sequía</option>
        </Input>

        {/* <Dropdown className='mt-3' size='lg' isOpen={emergenciaDropdown} toggle={handleEmergenciaDropdown} value={emergenciaDropdownValue}>
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
        </Dropdown> */}

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
                    <Col sm={2}>
                        <p>{input.nombre}</p>
                    </Col>
                    <Col sm={4}>
                    <FormGroup>
                        <Input type="number" name="number" id="exampleNumber" placeholder="Cantidad" defaultValue={input.cantidad} onChange={(e) => changeNumber(e,index)}/>
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
        <div style={{textAlign:'center'}}>
        <Button className='mr-3 mt-3'
            color="primary"
            onClick={handlePreviousPage}
            >
            Anterior
            </Button>
        
            <Button className='ml-3 mt-3'
            color="primary"
            onClick={handleNextPage}
            >
            Siguiente
            </Button>
            
            </div>
            
            </div>
            </>
        );

    }

    else {
        return (
            <>
            <header className="logo">
            <a style={{color: "#C1C3CF", fontFamily: "Open Sans"}} href="/"><b>Home </b></a>
            </header>
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
                <p>Region: {region}</p>  
                <p>Comuna: {comuna}</p>  
                <p>Emergencia: {emergencia}</p> 
                <p>Direccion: {direccion}</p>
                
                <Table Col={5} borderless responsive>
                    <thead>
                    <tr>
                        <th style={tableStyle}>Necesidad</th>
                        <th style={tableStyle}>Personas afectadas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {selectedNeeds.map((necesidad, index) => (
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
                
                <Row>
                <Col md={1}></Col>
                <Col md={3}>
                <Button
                color="danger"
                onClick={handlePreviousPage}
                    >
                Anterior
                </Button>
                </Col>
                <Col md={3}>
                <Button
                color="success"
                onClick={handleSubmit}
                >
                Confirmar
                </Button>
                </Col>
                <Col md={3}></Col>
                </Row>
                </div>
                </Col>
            </Row>
            
            
            
            </>
        );
     
    }
    
}



//export default withRouter(Step1);

