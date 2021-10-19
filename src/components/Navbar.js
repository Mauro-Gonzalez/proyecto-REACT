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
                    <ReactBootstrap.Navbar.Brand href="#home">Navbar</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Nav className="me-auto">
                    <ReactBootstrap.Nav.Link><Link to="/">Home</Link></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link><Link to="/Categorias">Categorias</Link></ReactBootstrap.Nav.Link>
                        <div style={{ fontSize: "20px", color: "red", marginLeft: "30%", cursor: "pointer" }}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>

                        <ReactBootstrap.Container>
                        </ReactBootstrap.Container>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Container>
            </ReactBootstrap.Navbar> 
        
       
         </>
    )
}


export default Navbar;