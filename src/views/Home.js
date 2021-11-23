
import "../SCSS/_home.scss";
import {useContext,useState} from 'react';
import  ItemListCointainter from "../components/ItemListConteiner";
import { DataContext } from "../components/context/DataContext";
import jsonproducts from "../productsdata";


const Home =() =>{
    
    const [loading, setLoading] = useState(true);
    const {products} = useContext(DataContext);
    console.log(products)


    return(
        <>
        <div className="background d-flex ">
            <div className="overlay d-flex align-items-center justify-content-center">
                <h2 className="content">HOLA MUNDO</h2>
            </div>
        </div>
        <div style={{background: "linear-gradient(black,rgb(33,37,41))"}}>
           < ItemListCointainter items={products} tittle="tengo q hacer la vaina"/>
           </div>
         </>
    )
}
 

export default Home;