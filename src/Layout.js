import React, { Component } from 'react';
import './App.css';
import MapView from "./components/MapView/MapView";
import SearchColumn from "./components/SearchColumn/SearchColumn";

class Layout extends Component {
  render() {
    return (
      <div className="App">
          <SearchColumn/>
          <MapView/>
      </div>
    );
  }
}

export default Layout;
