import "./Navbar.css";
import * as ReactBootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



const Navbar =() =>{
    return(
        <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand href="#home">Navbar</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav className="me-auto">
          <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
          <div style={{fontSize:"20px", color:"red",marginLeft:"30%", cursor:"pointer"}}>
              <FontAwesomeIcon icon={faShoppingCart}/>
          </div>

          <ReactBootstrap.Container>
        </ReactBootstrap.Container>
        </ReactBootstrap.Nav>
        </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
    )
}


export default Navbar;