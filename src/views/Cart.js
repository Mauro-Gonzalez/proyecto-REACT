
import {useStateValue} from "../StateProvider";
import { actionTypes } from "../reducer";
import { Link } from "react-router-dom";
import { element } from "prop-types";






const Cart =() =>{
  
    const [{cart}, dispatch]=useStateValue();
   

  const removeItem=(id)=>  dispatch({
    
  type:actionTypes.REMOVE_ITEM,
  id:id
})

const clearCart=()=> dispatch({
  type:actionTypes.CLEAR_CART,
  cart:[]
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
  <div className="container justify-content-center align-items-center h-100">
        <div className="row">
{/**/}
{cart?.map((item) => { 
              return (
                <div key={item} className="bg-dark animate__animated animate__fadeInUp d-flex  flex-row">
        
                <img src={item.img} alt="a wallpaper" className="card-img-top d-inline-block" style={{width:"200px"}} />
            
                <Link to={ `/detail/${item.id} `} className="col-md-6 col-xl-4 col-xxl-3 mb-5 container d-flex justify-content-center align-items-center h-100" style={{textDecoration:"none"}}>
                <h4 className="card-title d-inline-block text-primary">{item.name}</h4>
                </Link>
                <p className="card-text text-secondary d-inline-block"></p>
               
               
            
              <div className="d-inline-block">
              <button onClick={() => removeItem(item.id)}>borrar</button>
              </div>
            </div>
              );
            })}              
   </div>
   </div>
   <div style={{color:"white"}}>hola</div>
   <button onClick={clearCart}>borrar todo</button>
    </div>
    )
}


export default Cart;