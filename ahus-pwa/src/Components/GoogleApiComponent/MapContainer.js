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

class MapContainer extends Component {
    constructor(props) {
      super(props);

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
        })
    }

    componentWillUpdate() {
        console.log("MAP Props PRE UP")
        console.log(this.props)
    }

    componentDidUpdate(){
        console.log("MAP Props POST UP");
        console.log(this.props)
    }
    render() {
        const newCenter = {lat: parseFloat(this.props.current_campus.lat), lng: parseFloat(this.props.current_campus.long)}
        return (
            <GoogleMap
                    defaultZoom={16}
                    center={newCenter}
                    style={{marginLeft: '20px'}}
                >
                <Marker
                  onClick={this.props.onToggleOpen}
                />
                {
                    this.state.issues && this.state.issues.map((issue) => (
                        <Marker
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
