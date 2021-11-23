import React from "react";
import ItemCount from "../components/itemCount";
import products from "../productsdata";
import CartContext from "../context/cart/CartContext";







const ItemDetail =({match}) =>{
  const { addToCart } = useContext(CartContext);
    let itemID=parseInt(match.params.id);

    const product= products.filter(x => x.id == itemID);  
    



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
              <button onClick={addToCart(item)}>agregar carrito</button>
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