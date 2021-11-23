
 import React, {useState,useEffect} from 'react';

 import Card from "../components/Card";
 
 

const Categoria2 =(URL) =>{
  

  const [items,setItems]= useState([]);
  

  useEffect(() => {
    URL="https://www.breakingbadapi.com/api/characters"
      fetch(URL)
      .then((response) => response.json())
      .then((data) => setItems(data));

    
  
  },[]);
  
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {items.map((item) => { 
              return (
                <div className="col-md-4" key={item.char_id}>
                
                 <Card data={item}/>
               
                
              </div>
              );
              
            })}
          </div>
        </div>
      );
    }

    export default Categoria2;

