import React, {useState, useRef} from "react";
import {
  Row,
  Col,
  Table
} from "reactstrap";
import { useDispatch, useSelector} from "react-redux";

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

function Information(props) {

  const data = useSelector(store => store.data.dataList);
  const dispatch = useDispatch();

  const [renderHelp, setRenderHelp] = useState(false);
  const [indexClicked, setIndexClicked] = useState(0);
  const widgetRef = useRef(null);

  const trclick = (id) => {
    widgetRef.current.handleCollapse();
    setRenderHelp(true);
    setIndexClicked(id);
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
          {data.map((row) => (
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
      {renderHelp && <Help ref={widgetRef} index={indexClicked} />}
      </Col>
    </Row>
    </div>
  );
}

export default Information;