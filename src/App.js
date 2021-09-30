import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

import "./App.css";




class App extends Component {
  render() {
    return (
      <div className="app">
    <Navbar />
    <Cards />

      </div>
     
     
    );
  }
}

export default App;
