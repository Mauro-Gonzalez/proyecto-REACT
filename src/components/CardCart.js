import {useStateValue} from "../StateProvider";
import { actionTypes } from "../reducer";
import { Link } from "react-router-dom";






function CardCart({data}) {
    const [{cart}, dispatch]=useStateValue();
   

    const removeItem=(id)=>  dispatch({
      
    type:actionTypes.REMOVE_ITEM,
    id:id
  })
  
  
    return (
        <div key={data} className="bg-dark animate__animated animate__fadeInUp d-flex  flex-row">
        
        <img src={data.img} alt="a wallpaper" className="card-img-top d-inline-block" style={{width:"200px"}} />
    
        <Link to={ `/detail/${data.id} `} className="container  justify-content-center align-items-center h-100" style={{textDecoration:"none"}}>
        <h4 className="card-title d-inline-block text-primary">{data.name}</h4>
        <p>{data.card_description}</p>
        </Link>
        <p className="card-text text-secondary d-inline-block"></p>
       
       
    
      <div className="d-inline-block">
      <button onClick={() => removeItem(data.id)}>borrar</button>
      </div>
    </div>
  );
}



export default CardCart;