import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Widget from '../../../../components/Widget';

import s from './Google.module.scss';

class Maps extends React.Component {

  render() {
    const BasicMap = withScriptjs(withGoogleMap(() =>
      <GoogleMap
        defaultZoom={this.props.info.zoom}
        defaultCenter={{ lat: parseFloat(this.props.info.latitud), lng: parseFloat(this.props.info.longitud) }}
      >
        <Marker position={{ lat: this.props.info.latitud, lng: this.props.info.longitud }} />
      </GoogleMap>,
    ));


    return (
      <div>
        <h1 className="page-title">
          <span className="fw-semi-bold">Mapa</span>
        </h1>
        <Widget
          title={<h4>Google Maps <small className="text-muted">Default and customized</small></h4>}
          collapse
        >
          <div className={s.MapContainer}>
            <BasicMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
              loadingElement={<div style={{ height: 'inherit', width: 'inherit' }} />}
              containerElement={<div style={{ height: 'inherit' }} />}
              mapElement={<div style={{ height: 'inherit' }} />}
            />
          </div>
        </Widget>
      </div>);
  }

}

export default Maps;
