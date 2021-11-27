import React, {useState, useRef, useEffect} from "react";
import {
  Row,
  Col,
  Table,
  Form,
  Input,
  Label
} from "reactstrap";
import { useSelector} from "react-redux";

import Widget from "../../../components/Widget";
import s from "./Information.module.scss";
import Help from "../help/Help"
import Agua from "./icons/agua.png";
import Comida from "./icons/comida.png";
import Ropa from "./icons/ropa.png";
import Refugio from "./icons/refugio.png";
import FormGroup from "reactstrap/lib/FormGroup";

function getImage(image) {
  switch (image){
    case "Agua":
      return Agua;
    case "Comida":
      return Comida;
    case "Ropa":
      return Ropa;
    case "Refugio":
      return Refugio;
    default:
      return "https://via.placeholder.com/150x150"
  }
}

function Information(props) {

  const data = useSelector(store => store.data.dataList);

  const [renderHelp, setRenderHelp] = useState(false);
  const [indexClicked, setIndexClicked] = useState(0);
  const widgetRef = useRef(null);

  const [filteredData, setFilteredData] = useState(data);
  const [availableComunas, setAvailableComunas] = useState([]);
  const availableRegions = [...new Set(data.map(item => item.emergencia.region))];
  // Filtros
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");
  const [necesidad, setNecesidad] = useState("");
  const [onlyCritical, setOnlyCritical] = useState(true);

  const handleRegionChange = (event) => {
    setComuna("");
    setRegion(event.target.value);
  };
  
  useEffect(() => {
    // Filtrar data
    const filteredData = data.filter(item => {
      if (region !== "" && item.emergencia.region !== region) {
        return false;
      }
      if (comuna !== "" && item.emergencia.comuna !== comuna) {
        return false;
      }
      if (necesidad !== "" && item.necesidades.find(need => need.nombre === necesidad) === undefined) {
        return false;
      }
      if (onlyCritical && item.estado !== "Crítico") {
        return false;
      }
      return true;
    });
    const comunas = [...new Set(data.filter(item => item.emergencia.region === region).map(item => item.emergencia.comuna))];
    setAvailableComunas(comunas);
    setFilteredData(filteredData);
  }, [region, comuna, necesidad, onlyCritical])

  const trclick = (id) => {
    widgetRef.current.handleCollapse();
    setRenderHelp(true);
    setIndexClicked(id);
    const mapInfo = {
      latitud: data[id].latitud,
      longitud: data[id].longitud,
      zoom: 16
    }
    props.handler(mapInfo);
  };

  return(
    <div>
    <Row>
      <Col lg={12}>
    <Widget 
      id="widget"
      ref={widgetRef}
      title={
        <h5>
          <span className="fw-semi-bold">Zonas</span>
        </h5>
      }
      settings
      collapse
      refresh
      bodyClass={s.mainTableWidget}
    >
    <div key="filtros" className={s.tableWrapper}>
      <Form>
        <Row>
        <Col sm={4}>
        <FormGroup>
        <Label for="regionSelect">
            Region
          </Label>
        <Input id="regionSelect" type="select" onChange={(e) => handleRegionChange(e)}>
          <option value="">Todas</option>
          {availableRegions.map((region, index) => (
            <option key={index} value={region}>{region}</option>
          ))}
        </Input>
        </FormGroup>
        </Col>
          {region !== "" ? (
            <Col sm={4}>
            <FormGroup>
            <Label for="comunaSelect">
                Comuna
              </Label>
            <Input id="comunaSelect" type="select" onChange={(e) => setComuna(e.target.value)}>
              <option value="">Todas</option>
              { availableComunas.map((comuna, index) => (
                <option key={index} value={comuna}>{comuna}</option>
              ))}
            </Input>
            </FormGroup>
            </Col>
           ) : null}
        <Col sm={4}>
        <FormGroup>
        <Label for="necesidadSelect">
            Necesidad
          </Label>
        <Input id="necesidadSelect" type="select" onChange={(e) => setNecesidad(e.target.value)}>
          <option value="">Todos</option>
          <option value="Agua">Agua</option>
          <option value="Comida">Comida</option>
          <option value="Ropa">Ropa</option>
          <option value="Refugio">Refugio</option>
        </Input>
        </FormGroup>
        </Col>
        </Row>
      </Form>
    </div>
    <div id="table-div" className={s.overFlow}>
      <Table lg={12} md={12} sm={12} hover striped>
        <thead>
          <tr className="fs-sm">
            <th>Tipo de catástrofe</th>
            <th className="hidden-sm-down">Ubicación</th>
            <th className="hidden-sm-down">Necesidades</th>
            <th className="hidden-sm-down">Estado</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
              <tr key={row.id} onClick={() => trclick(row.id)}>
                <td>
                  {row.tipo}
                </td>
                <td>
                  {row.ubicacion}
                </td>
                <td>
                  <ul>
                  {row.necesidades.map((necesidad) => (
                    <li key={necesidad.nombre}>
                      <img src={getImage(necesidad.nombre)} alt={necesidad.nombre} height="20px" />
                    </li>
                  ))}
                  </ul>
                </td>
                <td>
                  {row.estado}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
    </Widget>
    </Col>
    </Row>
    <Row>
      <Col lg={12}>
      {renderHelp && <Help index={indexClicked} />}
      </Col>
    </Row>
    </div>
  );
}

export default Information;