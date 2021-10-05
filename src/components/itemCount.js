
import React,{useState} from 'react';


const ItemCount =() =>{
    const [counter, setCounter] = useState(0);
   




    const handleIncrement=() =>{
        if(counter<5){
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
        <div style={{display:'flex'}}>
            <button onClick={handleDecrement}>restar</button>
            <p  style={{margin:"1px 5px 1px 5px"}}>{counter}</p>
            <button onClick={handleIncrement}>sumar</button>
           
        </div>    
        )
};





export default ItemCount;