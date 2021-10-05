import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import ItemCount from "./components/itemCount"

import "./App.css";




class App extends Component {
  render() {
    return (
      <body>
      <div>
       <Navbar />
      </div>
      <ItemCount/>
       <Cards />

      </body>
    )
}
}
export default App;
