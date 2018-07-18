import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './mapView.css';

const MyPopupMarker = ({ name, position }) => (
    <Marker position={position}>
        <Popup>{name}</Popup>
    </Marker>
)

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ))
    return <div style={{ display: 'none' }}>{items}</div>
}


export default class LeafletMap extends Component {

    render() {

        const locations = this.props.locations;
        const position = this.props.position;

        return (
            <Map className="leafletMap" center={position} zoom={this.props.position.zoom}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList
                    markers={locations}
                />

            </Map>
        )
    }
}