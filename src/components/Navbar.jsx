
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BsHandThumbsUpFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FcFlashOn } from "react-icons/fc";


export default function Example() {
    const setActiveClass=({isActive})=>(isActive?"active":undefined)
       
return (
    <>
 
<Navbar bg="dark" variant="dark" sticky="top" >
    <Container style={{borderRadius:"10px"}}>
        <Navbar.Brand style={{color:"gray", textDecoration:"none",display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
            <p style={{marginRight:"10px",fontFamily:'Dancing Script',fontWeight:"bolder",fontSize:"30px",paddingTop:"10px"}}>MMO ADVENTURE</p>
           <NavLink to="/" className={setActiveClass}style={{ textDecoration:"none",display:"flex", flexDirection:"row",marginRight:"10px"}} >
            <FcFlashOn style={{margin:"5px"}}/>GAMES HOME
           </NavLink>
           <NavLink to="/liked1" className={setActiveClass}style={{textDecoration:"none",display:"flex",flexDirection:"row"}}>
            <BsHandThumbsUpFill style={{margin:"5px",color:"green"}}/>LIKED GAMES
           </NavLink>
           <a href="https://github.com/JoseLuisRiquelme/Context" style={{justifyContent:"flex-end", marginLeft:"90%", border:"0.2px solid white", borderRadius:"5px", color:"white", textDecoration:"none", padding:"3px"}} target="_blank">Link to code</a>
        </Navbar.Brand>
    </Container>
</Navbar>
</>
);
}