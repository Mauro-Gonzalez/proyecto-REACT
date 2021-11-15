import React from "react";
import ItemCount from "../components/itemCount";
import products from "../productsdata";
import { actionTypes } from "../reducer";
import {useStateValue} from "../StateProvider";





const ItemDetail =({match}) =>{
   
    let itemID=parseInt(match.params.id);




    const product= products.filter(x => x.id == itemID);
    const [{cart}, dispatch]=useStateValue();
    
    const addToCart=() => {
      dispatch({
        type: actionTypes.ADD_TO_CART,
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
      
        <div className="container">
        <div style={{width:"100%"}}>
       {product.map((item) =>{
           return(
            <div key={item} className="bg-dark animate__animated animate__fadeInUp d-flex  flex-row" style={{height:"700px",position:"relative"}}>
            
              <img src={item.img} alt="a wallpaper" className="d-inline-block" style={{width:"400px", height:"400px", position:"absolute", top:"15%", marginLeft:"2%"}} />
          
           
              <h4 className="card-title d-inline-block text-secondary" style={{position:"absolute", top:"17%", left:"35%"}}>{item.name}</h4>
              <p style={{color:"black",position:"absolute", top:"25%", left:"35%"}}>{item.card_description}</p>
              <p className="card-text text-secondary d-inline-block" style={{position:"absolute", top:"35%", left:"35%"}}>
              <button onClick={addToCart}>agregar carrito</button>
             <ItemCount stock={5} /> 
              </p>
             
          
            <div className="d-inline-block">
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