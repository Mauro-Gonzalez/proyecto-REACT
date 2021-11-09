import React,{useState,useEffect} from "react";
import ItemCount from "../components/itemCount";
import products from "../productsdata";
import { actionTypes } from "../reducer";
import {useStateValue} from "../StateProvider";





const ItemDetail =({match}) =>{
   
    let itemID=parseInt(match.params.id);




    const product= products.filter(x => x.id == itemID);
    const [{basket}, dispatch]=useStateValue();
    
    const addToBasket=() => {
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        item:{
          id:product[0].id,
          name:product[0].name,
          img:product[0].img,
          price:product[0].price,
          card_description:product[0].card_description,
          category:product[0].category,
                          
        }
        
      })

      
      };

    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
       {product.map((item) =>{
           return(
            <div key={item} className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
              <img src={item.img} alt="a wallpaper" className="card-img-top" style={{width:"200px"}} />
            </div>
            <div className="card-body text-light">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text text-secondary">
              <button onClick={addToBasket}>agregar carrito</button>
             <ItemCount stock={5} /> 
              </p>
             
           
            
            </div>
            <div className="container">
            <a href="javascript: history.go(-1)">Volver atrás</a>
            </div>
          </div>
           )
       })}
   </div>
   </div>
    )

  
    
}


export default ItemDetail;