import React from "react";
import {
  Row,
  Col,
  Table
} from "reactstrap";

import Widget from "../../../components/Widget";
import s from "./Information.module.scss";

function getImage(image) {
  if (!image) return "https://via.placeholder.com/150x150"
  let filename = image.toLowerCase()
  return require(`./icons/${filename}.png`);
}

class Information extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1,
          tipo: "Terremoto",
          ubicacion: "Región de Valparaíso, Placilla, Población YY",
          necesidades: [
            {"Agua": 100},
            {"Comida": 100},
            {"Ropa": 100},
            {"Refugio": 100},
          ],
          estado: "Crítico"
        },
        {
          id: 2,
          tipo: "Derrumbe",
          ubicacion: "Región Metropolitana, La Cisterna, Población XX",
          necesidades: [
            {"Agua": 50},
            {"Comida": 50},
            {"Ropa": 50},
          ],
          estado: "Crítico"
        },
      ]
    };
  }
  render() {
    return(
      <Widget
        title={
          <h5>
            <span className="fw-semi-bold">Zonas</span>
          </h5>
        }
        settings
        collapse
        bodyClass={s.mainTableWidget}
      >
      <div className={s.overFlow}>
        <Table lg={12} md={12} sm={12} striped>
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
                <tr key={row.id}>
                  <td>
                    {row.tipo}
                  </td>
                  <td>
                    {row.ubicacion}
                  </td>
                  <td>
                    <ul>
                    {row.necesidades.map((necesidad) => (
                      <li key={necesidad}>
                        {console.log(Object.keys(necesidad)[0])}
                        <img src={getImage(Object.keys(necesidad)[0])} alt={Object.keys(necesidad)[0]} width="10px" />
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
    );
  }
}

export default Information;