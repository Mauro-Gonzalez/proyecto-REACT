import React,{useContext} from "react";
import ItemCount from "../components/itemCount";

import { actionTypes } from "../reducer";
import {useStateValue} from "../StateProvider";
import "../SCSS/_itemDetail.scss";
import { DataContext } from "../components/context/DataContext";







const ItemDetail =({match}) =>{
  const {products} = useContext(DataContext);
    let itemID=match.params.id;
    console.log(itemID)
console.log(products)



    const product= products.filter(x => x.id === itemID);
    const [{cart}, dispatch]=useStateValue();
    console.log(product)
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
            <div key={item} className="bg-dark animate__animated animate__fadeInUp d-flex  flex-row container  " style={{height:"700px"}}>
              <div className="row ">                         
            <div className=" col-12 col-md-5 me-5  ">
            <img src={item.img} alt="a wallpaper" className="imgdetail "/>
            </div>
                         
             <div className="col-12 col-md-6 div-description ml-2 pb-5">
                <h4 className="card-title  text-secondary name ">{item.name}</h4>
                <p className="cardDescription">{item.card_description}</p>
                <p className="card-text text-secondary " >{item.description}</p>
                <button className="mt-5" onClick={addToCart}>agregar al carrito</button>
              </div>
           

              </div>
             
            
          </div>
           )
       })}
   </div>
   </div>
    )

  
    
}


export default ItemDetail;