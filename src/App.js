import React, { Component } from "react";

import {BrowserRouter as Router, Route , Switch} from "react-router-dom"

import Navbar from "./components/Navbar";


import "./App.css";

//views//
import Home from "./views/Home";
import Categoria2 from "./views/Categorias";
import ItemDetail from "./views/ItemDetail";
import Cart from "./views/Cart";



class App extends Component {
  render(){
    return (
      
     <React.Fragment>
      <Router>
        <Switch>
        <div>
          <header style={{marginBottom:"20px"}}>
            <Navbar />
          </header>
             <Route path="/" exact component={Home}/>
             <Route path="/Categorias"component={Categoria2}/>
             <Route path="/detail/:id" component={ItemDetail}/>
             <Route path="/Cart"component={Cart}/>
        </div>
        </Switch>
        </Router>

      
      </React.Fragment>
      
    )
}
}
export default App;
