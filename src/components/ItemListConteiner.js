import Cards from "./Cards";
import "../SCSS/_ItemListConteiner.scss"


const ItemListCointainter =({tittle}) =>{
return(
   <div className="col-12 " style={{background:" background: linear-gradient(rgba(0, 0, 0, 0.884),rgb(33,37,41));"}}>
       <div className="Nav-items">
        <h3 style={{paddingTop:"5%"}}>{tittle}</h3>
       </div>
      
        <section>
            <Cards/>
        </section>

      

   </div>
)

}



export default ItemListCointainter;