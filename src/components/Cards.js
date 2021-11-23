
import Card from "./Card";





function Cards({item}) {

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {item.map((producto) => { 
              return (
              <div className="col-6 col-xxl-4 mb-5 mt-5 container d-flex justify-content-center align-productos-center h-100" >
                 <Card key={producto}data={producto}/>
              </div>
              );
              
            })}
          </div>
        </div>
      );
    }
export default Cards
