import "./Navbar.css";
import * as ReactBootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";




const Navbar =() =>{
    return(
        <>
            <ReactBootstrap.Navbar bg="dark" variant="dark">
                <ReactBootstrap.Container>
                    <ReactBootstrap.Navbar.Brand href=""><Link to="/">MI COMERCIO</Link></ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Nav className="ms-auto">
                    <ReactBootstrap.Nav.Link><Link to="/">Home</Link></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link><Link to="/Categorias">categorias</Link></ReactBootstrap.Nav.Link>
                      <Link to="/Cart">
                        <div style={{ fontSize: "20px", color: "white", marginLeft: "30%", cursor: "pointer" }}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                        </Link>
                        <ReactBootstrap.Container>
                        </ReactBootstrap.Container>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Container>
            </ReactBootstrap.Navbar> 
        
       
         </>
    )
}


export default Navbar;