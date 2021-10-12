import React, {useState,useEffect} from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import Card from "./Card";


function Cards() {
 

  const [items,setItems]= useState([]);
   

  useEffect(() => {
   
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => setItems(data));

    
   
    
   
    
  
  },[]);
  
  




    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {items.map((item) => (
              <div className="col-md-4">
                <Card data={item}/>
              </div>
            ))}
          </div>
        </div>
      );
    }
export default Cards
