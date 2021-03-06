import React, {Component} from 'react';
import './mapView.css';
import LeafletMap from "./LeafletMap";


export default class MapView extends Component {
    render(){
        return(
            <div className="mapArea">
                <LeafletMap id="mapid"
                            position={this.props.position}
                            locations={this.props.locations}
                />
            </div>
        )
    }
}