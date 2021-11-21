
import "../SCSS/_home.scss"
import  ItemListCointainter from "../components/ItemListConteiner";




const Home =() =>{
    

    return(
        <>
        <div className="background d-flex ">
            <div className="overlay d-flex align-items-center justify-content-center">
                <h2 className="content">HOLA MUNDO</h2>
            </div>
        </div>
        <div style={{background: "linear-gradient(black,rgb(33,37,41))"}}>
           < ItemListCointainter tittle="tengo q hacer la vaina"/>
           </div>
         </>
    )
}
 

export default Home;