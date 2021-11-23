
import React,{useState} from 'react';
import "../SCSS/_itemCount.scss";
import { Link } from "react-router-dom";


const ItemCount =({stock}) =>{
    const [counter, setCounter] = useState(0);
   




    const handleIncrement=() =>{
        if(counter<stock){
            setCounter(counter + 1);
        }else{
            setCounter(counter);
        }
    };

    const handleDecrement=() =>{
        if(counter<1){
            setCounter(counter);
        }else{
            setCounter(counter - 1);
        }
    }

  


    return(
        <>
        <div style={{display:'flex'}}>
            <button onClick={handleDecrement}>restar</button>
            <p  style={{margin:"1px 5px 1px 5px", color:"white"}}>{counter}</p>
            <button onClick={handleIncrement}>sumar</button>
        </div>    
        <Link to="/Cart">
        <button className={counter<1 ? "disabled":"enable"}>comprar</button>
        </Link>
        </>
        ) 
};





export default ItemCount;