import React, {Component} from 'react';
import MapContainer from './MapContainer'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {

  render() {
    return (
      <Map google={this.props.google} zoom={14} style={style}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>

            </div>
        </InfoWindow>
      </Map>
    );
  }
}
const style = {
  width: '300px',
  height: '300px'
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAonaroBzSkxjR6jJ3O5JR07XDRWOUBbdA')
})(GoogleMap)
