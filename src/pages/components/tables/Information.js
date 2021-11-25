import React from "react";
import {
  Row,
  Col,
  Table,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

import Widget from "../../../components/Widget";
import s from "./Information.module.scss";

class Information extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1,
          imagen: require("../../../assets/tables/1.png"), // eslint-disable-line global-require
          tipo: "Terremoto",
          ubicacion: "Región de Valparaíso, Placilla, Población YY",
          necesidades: [
            ("Agua", 100),
            ("Comida", 100),
            ("Ropa", 100),
            ("Refugio", 100),
          ],
          estado: "Crítico"
        },
        {
          id: 2,
          imagen: require("../../../assets/tables/2.png"), // eslint-disable-line global-require
          tipo: "Derrumbe",
          ubicacion: "Región Metropolitana, La Cisterna, Población XX",
          necesidades: [
            ("Agua", 100),
            ("Comida", 100),
            ("Ropa", 100),
            ("Refugio", 100),
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
              <th>Imagen</th>
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
                    <img
                      className="img-rounded"
                      src={row.imagen}
                      alt=""
                      height="50"
                    />
                  </td>
                  <td>
                    {row.tipo}
                  </td>
                  <td>
                    {row.ubicacion}
                  </td>
                  <td>
                    {row.necesidades.map((necesidad) => (
                      <span key={necesidad}>
                        {necesidad}
                      </span>
                    ))}
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