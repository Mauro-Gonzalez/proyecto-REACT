import { createContext, useState, useEffect,useCallback } from 'react';
import {collection,getDocs} from "firebase/firestore";
import {db} from "../../firebase/firebaseconfig";


export const DataContext = createContext();

export const AppProvider = ({children}) => {
  const [loading , setLoading]=useState(false)
  const [products, setProducts]=useState([])
  console.log (products)
  //
 const getProducts = useCallback(async() => {
setLoading (true);
try{
  const items = await getDocs(collection(db,"products"));
if(items){
  const docs=[];
  items.forEach((document)=>{
    docs.push({...document.data(), id: document.id});
  })
  
  setProducts (docs);
}
setLoading(false);
}catch (error){
  console.log(error);
  setLoading(false);
}
},[]);

useEffect(()=>{
  getProducts();
},[getProducts]);


    return <DataContext.Provider value={{products}}>  
        {children}  
    </DataContext.Provider>

}






