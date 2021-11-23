import * as ReactBootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import {useStateValue} from "../StateProvider";
import "../SCSS/_Navbar.scss";





const Navbar =() =>{

 const [{cart}, dispatch]=useStateValue();


    return(
        <>
 <ReactBootstrap.Navbar bg="dark" expand="lg" variant="dark">
  <ReactBootstrap.Container style={{maxWidth: "initial"}}>
    <ReactBootstrap.Navbar.Brand ><Link to="/"><img src={logo} className="logo"></img></Link></ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootstrap.Nav className="ms-auto me-5">
        <ReactBootstrap.Nav.Link ><Link to="/"className="navlink">Home</Link></ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link ><Link to="/Categorias"className="navlink">categorias</Link></ReactBootstrap.Nav.Link>
        <Link to="/Cart"  className="navlink">
            <div className="cart  d-flex align-items-center h-100">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <p>{cart?.length}</p>
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