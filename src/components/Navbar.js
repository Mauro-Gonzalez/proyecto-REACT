import "./Navbar.css";
import * as ReactBootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"



const Navbar =() =>{



    return(
        <>
 <ReactBootstrap.Navbar bg="dark" expand="lg" variant="dark">
  <ReactBootstrap.Container style={{maxWidth: "initial"}}>
    <ReactBootstrap.Navbar.Brand ><Link to="/"><img src={logo} style={{width:"400px",height:"50px"}}></img></Link></ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootstrap.Nav className="ms-auto">
        <ReactBootstrap.Nav.Link ><Link to="/">Home</Link></ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link ><Link to="/Categorias">categorias</Link></ReactBootstrap.Nav.Link>
        <Link to="/Cart">
            <div style={{ fontSize: "20px", color: "white", cursor: "pointer" }}>
                            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </Link>
      </ReactBootstrap.Nav>
    </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Container>
</ReactBootstrap.Navbar>           
                 
       
         </>
    )
}


export default Navbar;