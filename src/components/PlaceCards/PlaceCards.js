import React, {Component} from 'react';
import './placeCards.css';
import PlaceCardDetails from "./PlaceCardDetails";


export default class PlaceCards extends Component {
    render(){

        const details = this.props.locations

        return(
            <div className="placeCards">
                <PlaceCardDetails changePosition={this.props.changePosition} details={details.one}/>
                <PlaceCardDetails changePosition={this.props.changePosition} details={details.two}/>
                <PlaceCardDetails changePosition={this.props.changePosition} details={details.three}/>
                <PlaceCardDetails changePosition={this.props.changePosition} details={details.four}/>
                <PlaceCardDetails changePosition={this.props.changePosition} details={details.five}/>
            </div>
        )
    }
}