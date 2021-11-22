import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";
import {collection, getDocs} from "firebase/firestore";
import { db } from "../firebase/firebaseconfig"


function Cards() {
  const [products, setProducts]=useState([])
  
 useEffect(() => {
    const requestData= async() => {
      const docs=[];
      const items = await getDocs(collection(db,"products"));
      items.forEach((document)=>{
        docs.push({...document.data(), id: document.id});
      })
      setProducts (docs)
    };
    requestData();
 },[]);


  
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {products.map((item) => { 
              return (
                <Link to={ `/detail/${item.id} `} className="col-md-6  col-xxl-4 mb-5 container d-flex justify-content-center align-items-center h-100" style={{textDecoration:"none"}}>
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
