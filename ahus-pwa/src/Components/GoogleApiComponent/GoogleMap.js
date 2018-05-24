import React, {Component} from 'react';
import MapContainer from './MapContainer'
import LocationHandler from './LocationHandler';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geolocation from "react-geolocation";

export class GoogleMap extends Component {
    state = {
        latitude: '',
        longitude: ''
    };
    onSuccess(position) {
        this.setState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        })
    }

  render() {
    return (
        <div style={div}>
        <Geolocation
          onSuccess={this.onSuccess.bind(this)}
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) =>
            <div>
              <button onClick={getCurrentPosition}>Get Position</button>
              {error &&
                <div>
                  {error.message}
                </div>}
              <pre>
                latitude: {latitude}
                longitude: {longitude}
              </pre>
            </div>}
        />
      <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 57.70531760000001,
            lng: 11.936188699999999
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>

            </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

const style = {
  width: '100px',
  height: '100px',
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD0hvqVchtGW0wYAayUyGsZo95z1L6rMxc')
})(GoogleMap)
