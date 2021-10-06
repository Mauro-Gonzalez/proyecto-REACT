import React, { Component } from "react";

import Navbar from "./components/Navbar";
import  ItemListCointainter from "./components/ItemListConteiner";
import ItemCount from "./components/itemCount";

import "./App.css";




class App extends Component {
  render() {
    return (
      <body>
      <div>
       <Navbar />

      </div>
      < ItemListCointainter greeting="cumpliendo la consigna"/>
      <ItemCount />
      
      </body>
    )
}
}
export default App;
