import React, {Component} from 'react';
import './placeCards.css';
import PlaceCardDetails from "./PlaceCardDetails";


export default class PlaceCards extends Component {
    render(){

        const details = this.props.locations

        return(
            <div className="placeCards">
                <PlaceCardDetails changePosition={this.props.changePosition} details={details[0]}/>
                <PlaceCardDetails changePosition={this.props.changePosition} details={details[1]}/>
                <PlaceCardDetails changePosition={this.props.changePosition} details={details[2]}/>
                <PlaceCardDetails changePosition={this.props.changePosition} details={details[3]}/>
                <PlaceCardDetails changePosition={this.props.changePosition} details={details[4]}/>
            </div>
        )
    }
}