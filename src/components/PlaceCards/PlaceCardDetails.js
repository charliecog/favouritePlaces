import React, {Component} from 'react';
import './placeCards.css';


export default class PlaceCardDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            lat: this.props.details.position[0],
            lng: this.props.details.position[1],
        }
        this.newPosition = this.newPosition.bind(this);
    }

    newPosition(){
        this.props.changePosition(this.state.lat, this.state.lng)
    }

    render(){
        const details = this.props.details;
        return(
            <div className="placeCardDetails">
                <p>Name: {details.name}</p>
                <p>Description: {details.description}</p>
                <p>Submitted By: {details.submittedBy}</p>
                <button
                    onClick={this.newPosition}>
                    See on map!
                </button>
            </div>
        )
    }
}