import { createContext, useState, useEffect } from 'react';
import {collection,getDocs} from "firebase/firestore";
import {db} from "../../firebase/firebaseconfig";


export const DataContext = createContext();

export const AppProvider = ({children}) => {

  const [products, setProducts]=useState([])
  console.log (products)
 useEffect(() => {
    const requestData= async() => {
      const docs=[];
      const items = await getDocs(collection(db,"products"));
      items.forEach((document)=>{
        docs.push({...document.data(), id: document.id});
      })
      
      setProducts (docs)
      console.log(items)
    };
    requestData();
 },[]);



    return <DataContext.Provider value={{products}}>  
        {children}  
    </DataContext.Provider>

}






