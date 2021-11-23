import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";
import products from "../productsdata"


function Cards() {
 


  
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {products.map((item) => { 
              return (
                <Link to={ `/detail/${item.id} `} className="col-md-6 col-xl-4 col-xxl-3 mb-5 container d-flex justify-content-center align-items-center h-100" style={{textDecoration:"none"}}>
              <div key={item.id}>
                 <Card data={item}/>
              </div>
              </Link>
              
              );
              
            })}
          </div>
        </div>
      );
    }
export default Cards
