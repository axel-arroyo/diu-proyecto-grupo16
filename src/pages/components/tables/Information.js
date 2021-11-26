import React from "react";
import {
  Row,
  Col,
  Table
} from "reactstrap";

import Widget from "../../../components/Widget";
import s from "./Information.module.scss";
import Help from "../help/Help"
import Agua from "./icons/agua.png";
import Comida from "./icons/comida.png";
import Ropa from "./icons/ropa.png";
import Refugio from "./icons/refugio.png";

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


class Information extends React.Component {
  constructor(props) {
    super(props);

    this._widget = React.createRef();

    this.state = {
      tableStyles: [
        {
          id: 0,
          tipo: "Terremoto",
          ubicacion: "Región de Valparaíso, Placilla, Población Las Hayas",
          necesidades: [
            {nombre: "Agua", cantidad: 100},
            {nombre: "Comida", cantidad: 100},
            {nombre: "Ropa", cantidad: 100},
            {nombre: "Refugio", cantidad: 100},
          ],
          estado: "Crítico",
          latitud: -33.120088, 
          longitud: -71.577629,
          personal: {
            nombre: "Juan",
            organizacion: "Organización 1",
            telefono: "123456789",
            correo: "juan@organizacion.com"
          },
          emergencia:{
            region: "Región de Valparaíso",
            comuna: "Placilla",
            emergencia: "Terremoto",
            direccion: "Las Hayas 123",
          }
        },
        {
          id: 1,
          tipo: "Terremoto",
          ubicacion: "Región Metropolitana, La Cisterna, Población Asturias",
          necesidades: [
            {nombre: "Agua", cantidad: 50},
            {nombre: "Comida", cantidad: 50},
            
          ],
          estado: "Crítico",
          latitud: -33.528578, 
          longitud: -70.669660,
          personal: {
            nombre: "Pedro",
            organizacion: "Organización 2",
            telefono: "111111111",
            correo: "pedro@organizacion.cl"
          },
          emergencia:{
            region: "Región Metropolitana",
            comuna: "La Cisterna",
            emergencia: "Terremoto",
            direccion: "Asturias 123",
          }
        },
      ],
      renderHelp: false,
      indexClicked: 0
    };
  }

  trclick(id) {
    let test = document.getElementById("widget");
    this._widget.current.handleCollapse();
    this.setState({...this.state, renderHelp: true, indexClicked: id});
  };

  render() {

    return(
      <div>
      <Row>
        <Col lg={12}>
      <Widget 
        id="widget"
        ref={this._widget}
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
            {this.state.tableStyles.map((row) => (
                <tr key={row.id} onClick={() => this.trclick(row.id)}>
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
        {this.state.renderHelp && <Help data={this.state.tableStyles[this.state.indexClicked]} />}
      </Row>
      </div>
    );
  }
}

export default Information;