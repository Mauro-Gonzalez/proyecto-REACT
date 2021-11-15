
import {useStateValue} from "../StateProvider";
import { actionTypes } from "../reducer";
import { element } from "prop-types";


const Cart =({match}) =>{
  let itemID=parseInt(match.params.id);
    const [{cart}, dispatch]=useStateValue();
    const e = (element) => element == itemID;
    const index=cart.findIndex(e)
console.log(index)
  const removeItem=()=>  dispatch({
  type:actionTypes.REMOVE_ITEM,
 
  
  
})
    





    return(
      
      cart==0?
      <div className="container justify-content-center align-items-center">
        <div className="text-center" style={{marginTop:"5%", border:"solid 2px", width:"70%",margin:"auto"}}>
          <p style={{color:"white"}}>no hay elementos en el carrito</p>
        </div>
      </div>



      :




     <div className="container">
         <h1>carrito</h1>
  <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
       {cart.map((item) =>{
           return(
            <div key={item} className="bg-dark animate__animated animate__fadeInUp d-flex  flex-row">
            
              <img src={item.img} alt="a wallpaper" className="card-img-top d-inline-block" style={{width:"200px"}} />
          
           
              <h4 className="card-title d-inline-block text-primary">{item.name}</h4>
              <p className="card-text text-secondary d-inline-block"></p>
             
             
          
            <div className="d-inline-block">
            <button onClick={removeItem}>borrar</button>
            </div>
          </div>
           )
       })}
   </div>
   </div>
    </div>
    )
}


export default Cart;