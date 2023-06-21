import React ,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import salem from './salem.jpg';
import { Count } from '../CountContext';
import _Cards from '../cards/_Cards';
import _Footer from '../footer/_Footer';
import _Carousel from '../Carousel/Carousel';
import {FaShoppingCart} from 'react-icons/fa';

export default function _Navbar() {
    const { count } = useContext(Count);
    return (
        <Router>
        <div  >
            <Navbar   variant="dark"   expand="lg" className="fixed-top"style={{backgroundColor:'#2f4766'/* '#cecbdb' */}} >
            {/* <img style={{width:'180px',height:'60px'}} src={salem}/> */}
                <div className="container-fluid" style={{backgroundColor:'#05101c', color:'green',fontSize:'20px'}} >
                    
                <Navbar.Brand href="#home" ><i style={{width:'120px',color:'white',backgroundColor:'black',fontSize:'30px',fontWeight:'30px',border:'5px solid black',borderRadius:'20%'}}><span style={{color:'green'}}>SaL</span>im</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/home"} >Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"} >About</Nav.Link>
                    <Nav.Link as={Link} to={"/cards"}>cards</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Form inline>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button> */}
                    <span className="mx-5 my-2 " style={{ backgroundColor:'black',color:'rgb(247, 140, 0)',float:'right',position:'flex' , left:'800px'}}>Count:{count} <a href="#"> <FaShoppingCart style={{marginRight:'20px',color:'rgb(247, 140, 0)'}}/></a></span>
                    </Form>
                </Navbar.Collapse>
                </div>
                
            </Navbar>

            <Switch>
                <Route path="/home">
                <Home/>
                </Route>
                <Route path="/cards">
                <_Cards/>
                </Route>
                <Route path="/about">
                <_Footer/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}
