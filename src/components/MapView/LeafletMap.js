import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './mapView.css';

const MyPopupMarker = ({ children, position }) => (
    <Marker position={position}>
        <Popup>{children}</Popup>
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

        const markers = [
            { key: 'marker1', position: [51.37501169999999, -2.349978100000044], children: 'Widcombe Crescent' },
            { key: 'marker2', position: [51.37768, -2.357020000000034], children: 'Bath Spa' },
            { key: 'marker3', position: [51.3778935, -2.3607699000000366], children: 'UBIC' },
            { key: 'marker4', position: [51.358486, -2.380110000000059], children: 'Odd Down' },
            { key: 'marker5', position: [51.4497534, -2.58101929999998], children: 'Temple Meads' },
        ]
        


        const position = [this.props.position.lat, this.props.position.lng]

        return (
            <Map className="leafletMap" center={position} zoom={this.props.position.zoom}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList
                    markers={markers}
                />

            </Map>
        )
    }
}