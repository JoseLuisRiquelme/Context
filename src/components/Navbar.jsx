import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillHouseFill } from "react-icons/bs";
import {BsHandThumbsUpFill } from "react-icons/bs";


export default function Example() {
return (
    <>
 
<Navbar bg="dark" variant="dark" sticky="top" >
    <Container >
        <Navbar.Brand href="#home"style={{color:"red", textDecoration:"none",display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
           <Link to="/" className="linkHome"style={{color:"yellow", textDecoration:"none",display:"flex", flexDirection:"row",marginRight:"10px"}} >
            <BsFillHouseFill style={{margin:"5px"}}/>Home
           </Link>
           <Link to="/liked1" className="linkContact"style={{color:"green", textDecoration:"none",display:"flex",flexDirection:"row"}}>
            <BsHandThumbsUpFill style={{margin:"5px"}}/>Liked
           </Link>
           <a href="https://github.com/JoseLuisRiquelme/Context" style={{justifyContent:"flex-end", marginLeft:"250%", border:"0.2px solid white", borderRadius:"5px", color:"white", textDecoration:"none", padding:"3px"}} target="_blank">Link to code</a>
        </Navbar.Brand>
    </Container>
</Navbar>
</>
);
}