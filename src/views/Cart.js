
import {useStateValue} from "../StateProvider";


const Cart =() =>{
    const [{basket}, dispatch]=useStateValue();



    return(
     <div>
         <h1>carrito</h1>
  <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
       {basket.map((item) =>{
           return(
            <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
              <img src={item.img} alt="a wallpaper" className="card-img-top" style={{width:"200px"}} />
            </div>
            <div className="card-body text-light">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text text-secondary">
              
             
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
    </div>
    )
}


export default Cart;