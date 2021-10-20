import React,{useState,useEffect} from "react";
import axios from "axios";

const ItemDetail =({match}) =>{
    const [item,setItem]= useState([]);
    let itemID=match.params.id;

    useEffect(() => {
        axios(`https://www.breakingbadapi.com/api/characters/${itemID}`)
        .then((res) => setItem(res.data));
    },[itemID]);





    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
       {item.map((item) =>{
           return(
            <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
              <img src={item.img} alt="a wallpaper" className="card-img-top" style={{width:"200px"}} />
            </div>
            <div className="card-body text-light">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text text-secondary">
      
             {item.albumId}
              </p>
             
             <p className="btn btn-outline-secondary border-0">ver mas sobre {item.name}</p>
            
            </div>
          </div>
           )
       })}
   </div>
   </div>
    )
}


export default ItemDetail;