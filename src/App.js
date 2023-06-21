
import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import _Navbar from "./component/NavBar/_Navbar";
import _Carousel from "./component/Carousel/Carousel";
import _Cards from "./component/cards/_Cards";
import _Footer from "./component/footer/_Footer";
import CountContext from "./component/CountContext";


function App() {
  return (
    <>
    
    <CountContext>
      <_Navbar />
      <div style={{backgroundColor:'#2a4766'/* '#cecbdb' */}}>
        <_Carousel/>
        <_Cards/>     
        <_Footer/>  
      </div>
    </CountContext>
    
    </>
  );
}
export default App;

