/* global google */
import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { InfoBoxCustom, Pointy, InfoBoxWrapper } from './styles';
import InfoBoxInner from './InfoBoxInner';
import axios from 'axios';


const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const markers = {
      1: {
        lat: 57.689470,
        lng: 11.978107
      },
      2: {
        lat: 57.688833,
        lng: 11.979287
      },
      3: {
        lat: 57.689085,
        lng: 11.976540
      },
}

class MapContainer extends Component {
    constructor(props) {
      super();

      this.state = {
        ...props
      }
    }
    render() {
        return (
            <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{ lat: 57.688836, lng: 11.977970 }}
                >
                <Marker
                  position={{ lat: 57.707756, lng: 11.978284 }}
                  onClick={this.props.onToggleOpen}
                />
                {
                    this.state.issues && this.state.issues.map((issue, i) => (
                        <Marker
                            animation={google.maps.Animation.DROP}
                            key={i}
                            position={{ lat: 57.688836, lng: 11.977970 }}>
                            <InfoBox
                                style={{padding: `0px`}}
                                options={{ closeBoxURL: ``, enableEventPropagation: true, alignBottom: true, pixelOffset: new google.maps.Size(-5, -25)}}
                                >
                                    <InfoBoxInner
                                        handleClick={() => this.state.toggleAsideInfoBox(issue)} title={issue.title} body={issue.body} location={issue.location}  />
                            </InfoBox>
                        </Marker>
                    ))
                }
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(MapContainer))
