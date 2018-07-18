import React, {Component} from 'react';
import './placeCards.css';
import PlaceCardDetails from "./PlaceCardDetails";


export default class PlaceCards extends Component {
    render(){
        const one = {
            name: 'Widcombe',
            description: 'A haunted house',
            submittedBy: 'Charlie',
        }

        const two = {
            name: 'Bath Spa',
            description: 'Great for a soak',
            submittedBy: 'Mike',
        }

        const three = {
            name: 'UBIC',
            description: 'Nice for a meeting',
            submittedBy: 'Michele',
        }

        const four = {
            name: 'Odd Down',
            description: 'Funny name!',
            submittedBy: 'Hannah',
        }

        const five = {
            name: 'Bath Station',
            description: 'Get to Bristol',
            submittedBy: 'Eve',
        }

        return(
            <div className="placeCards">
                <PlaceCardDetails details={one}/>
                <PlaceCardDetails details={two}/>
                <PlaceCardDetails details={three}/>
                <PlaceCardDetails details={four}/>
                <PlaceCardDetails details={five}/>
            </div>
        )
    }
}