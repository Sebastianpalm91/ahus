/* global google */
import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import InfoBoxInner from './InfoBoxInner';
import axios from 'axios';
import logo from '../../Assets/Images/map_marker.svg'

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
// const markers = {
//       1: {
//         lat: 57.689470,
//         lng: 11.978107
//       },
//       2: {
//         lat: 57.688833,
//         lng: 11.979287
//       },
//       3: {
//         lat: 57.689085,
//         lng: 11.976540
//       },
// }

class MapContainer extends Component {
    constructor(props) {
      super();

      this.state = {
        ...props
      }
    }
    state = {
      issues: []
    }

    componentDidMount() {
      axios.get(`http://127.0.0.1:8000/api/issue`)
        .then(res => {
          const issues = res.data.issues;
          this.setState({ issues });
          console.log(issues);
        })
    }
    render() {
        return (
            <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{ lat: 57.688836, lng: 11.977970 }}
                    style={{margineft: '20px'}}
                >
                <Marker
                  position={{ lat: 57.707756, lng: 11.978284 }}
                  onClick={this.props.onToggleOpen}
                />
                {
                    this.state.issues && this.state.issues.map((issue) => (
                        <Marker
                            style={{height: `10px`, width: `10px`}}
                            icon={logo}
                            opacity={1}
                            animation={google.maps.Animation.BOUNCE}
                            key={issue.id}
                            position={{ lat: Number.parseFloat(issue.latitude), lng: Number.parseFloat(issue.longitude) }}>
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
