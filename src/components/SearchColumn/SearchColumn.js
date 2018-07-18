import React, {Component} from 'react';
import './searchColumn.css';
import PlaceCards from "../PlaceCards/PlaceCards";


export default class SearchColumn extends Component {
    render(){
        return(
            <div className="searchColumn">
                <input type="text" name="search" placeholder="Find your favourite places..."/>
                <PlaceCards
                    locations={this.props.locations}
                    changePosition={this.props.changePosition}
                />
            </div>
        )
    }
}