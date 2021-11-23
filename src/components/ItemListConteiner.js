import Cards from "./Cards";
import "../SCSS/_ItemListConteiner.scss"


const ItemListCointainter =({items,tittle}) =>{
    console.log(items)

return(
   <div className="col-12 " style={{background:" background: linear-gradient(rgba(0, 0, 0, 0.884),rgb(33,37,41));"}}>
       <div className="Nav-items pt-2 ">
        <h3 >{tittle}</h3>
        
       </div>
      
        <section>
            <Cards item={items}/>
        </section>

      

   </div>
)

}



export default ItemListCointainter;