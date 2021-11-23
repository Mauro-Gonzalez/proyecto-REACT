import {useStateValue} from "../StateProvider";
import { actionTypes } from "../reducer";
import { Link } from "react-router-dom";
import CardCart from "../components/CardCart"








const Cart =() =>{
  
    const [{cart}, dispatch]=useStateValue();
   

const clearCart=()=> dispatch({
  type:actionTypes.CLEAR_CART,
  cart:[]
})
    





    return(
      
      cart.length==0?
      <div className="container justify-content-center align-items-center">
        <div className="text-center" style={{marginTop:"5%", border:"solid 2px", width:"70%",margin:"auto"}}>
          <p style={{color:"white"}}>no hay elementos en el carrito</p>
        </div>
      </div>             

      :

     <div className="container">
         <h1>carrito</h1>
  <div className="container justify-content-center align-items-center h-100">
        <div className="row">
          
{cart?.map((item) => { 
              return (
                <div key={item.id} > 
                   <CardCart data={item}/>
                </div>
                
                
              )
            })}              
   </div>
   </div>
   <button onClick={clearCart}>borrar todo</button>
    </div>
    )
}


export default Cart;