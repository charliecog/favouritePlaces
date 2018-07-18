import React, { Component } from 'react';
import './App.css';
import MapView from "./components/MapView/MapView";
import SearchColumn from "./components/SearchColumn/SearchColumn";

class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {
            mapPosition: {
                            lat: 51.3758,
                            lng: -2.36172,
                            zoom: 13,
                        },
            details: [
                {
                    key: 1,
                    name: 'Widcombe',
                    description: 'A haunted house',
                    submittedBy: 'Charlie',
                    position: [51.37501169999999, -2.349978100000044],
                },
                {
                    key: 2,
                    name: 'Bath Spa',
                    description: 'Great for a soak',
                    submittedBy: 'Mike',
                    position: [51.37768, -2.357020000000034],
                },
                {
                    key: 3,
                    name: 'UBIC',
                    description: 'Nice for a meeting',
                    submittedBy: 'Michele',
                    position: [51.3778935, -2.3607699000000366],

                },
                {
                    key: 4,
                    name: 'Odd Down',
                    description: 'Funny name!',
                    submittedBy: 'Hannah',
                    position: [51.358486, -2.380110000000059],
                },
                {
                    key: 5,
                    name: 'Temple Meads',
                    description: 'Get a train!',
                    submittedBy: 'Eve',
                    position: [51.4497534, -2.58101929999998],
                },
            ],
        }

        this.newMapPosition = this.newMapPosition.bind(this);
    }

    newMapPosition(newLat, newLong) {
        this.setState({
            mapPosition: {
                lat: newLat,
                lng: newLong,
                zoom: 13,
            },
        })
    }



  render() {
    return (
      <div className="App">

          <SearchColumn
              locations={this.state.details}
              changePosition={this.newMapPosition}
          />

          <MapView
              position={this.state.mapPosition}
              locations={this.state.details}
          />

      </div>
    );
  }
}

export default Layout;
