import React from "react";
import ItemCount from "../components/itemCount";
import products from "../productsdata";
import { actionTypes } from "../reducer";
import {useStateValue} from "../StateProvider";
import "../SCSS/_itemDetail.scss"






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
            <div key={item} className="bg-dark animate__animated animate__fadeInUp d-flex  flex-row container" style={{height:"700px",position:"relative"}}>
            <div className="col-5">
            <img src={item.img} alt="a wallpaper" className="d-inline-block imgdetail "/>
            </div>
             
             
             <div className="col-6 div-description">
                <h4 className="card-title d-inline-block text-secondary name ">{item.name}</h4>
                <p className="cardDescription">{item.card_description}</p>
                <p className="card-text text-secondary " >{item.description}</p>
                <button className="mt-5" onClick={addToCart}>agregar al carrito</button>
              </div>

            
             
              <a href="javascript: history.go(-1)">Volver atrás</a>
          
            
          </div>
           )
       })}
   </div>
   </div>
    )

  
    
}


export default ItemDetail;