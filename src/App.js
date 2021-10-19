import React, { Component } from "react";

import {BrowserRouter as Router, Route , Switch} from "react-router-dom"

import Navbar from "./components/Navbar";


import "./App.css";

//views//
import Home from "./views/Home";
import Categorias from "./views/Categorias";
import ItemDetail from "./views/ItemDetail";



class App extends Component {
  render(){
    return (
      
      <body>
      <Router>
        <Switch>
        <div>
       <Navbar />
       <Route path="/" exact component={Home}/>
       <Route path="/Categorias" exact component={Categorias}/>
       <Route path="/detail/:id" component={ItemDetail}/>
        </div>
        </Switch>
        </Router>

      
      </body>
      
    )
}
}
export default App;
