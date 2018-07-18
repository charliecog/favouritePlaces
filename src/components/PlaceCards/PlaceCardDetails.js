import React, {Component} from 'react';
import './placeCards.css';


export default class PlaceCardDetails extends Component {
    render(){
        const details = this.props.details;
        return(
            <div className="placeCardDetails">
                <p>Name: {details.name}</p>
                <p>Description: {details.description}</p>
                <p>Submitted By: {details.submittedBy}</p>
                <button>See on map!</button>
            </div>
        )
    }
}