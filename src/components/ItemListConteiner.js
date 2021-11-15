import Cards from "./Cards";


const ItemListCointainter =({tittle}) =>{
return(
   <div className="col-12">
       <h3 style={{paddingTop:"5%"}}>{tittle}</h3>


       <Cards/>

   </div>
)

}



export default ItemListCointainter;