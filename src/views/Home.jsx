import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import Context from "../context/context";
import {useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';

const Home=()=>{

    const {characters,setCharacters}=useContext(Context)
    const handleClick= (id)=>{
        const character = characters.find((val) => val.id === id) 
        character.favorite = true}
const navigate=useNavigate()

const gotoCharacter=(id)=>{
    navigate(`/characters/${id}`)
}

const handleSelect= (e)=>{
    gotoCharacter(e.target.value)
}
        
    return(
        <div className="home-class">
            <Container >
            <Form.Select onChange={handleSelect} className="my-3" aria-label="Default select example">
      <option>Select Game</option>
      {characters? characters.map(character=><option value={character.id}>{character.title}</option>):'Loading'}
        </Form.Select>
                        <Row className="align-items-center" >
                            {characters? characters.map(character => <Col lg={4} md={12} className="my-4">
                                <Card style={{ height: '32rem',backgroundColor:"white"}}>
                                    <Card.Img variant="top" src={character.thumbnail} style={{margin:"auto",marginTop:"15px", borderRadius:"10px",height:"50%", border:"0.2px solid gray", justifyContent:"center", alignItems:"center", width:"90%"}}/>
                                        <Card.Body style={{borderRadius:"10px", margin:"4px 20px"}} >
                                            <Card.Title style={{fontFamily:'Dancing Script', fontSize:"30px"}}>{character.title}</Card.Title>
                                            <Card.Text >
                                                
                                                <h6>Studio({character.developer})</h6>
                                                <div style={{overflowY:"scroll", height:"85px"}}>
                                                    <h5>Short description:</h5>
                                                <p style={{fontSize:"18px", color:"white"}}>{character.short_description}</p>
                                                </div>
                                            </Card.Text>
                                            <Button href={character.game_url} target="_blank" rel="noreferrer" style={{marginRight:"20%"}}>Play Now!</Button>
                                            <Button variant="success" onClick={()=>handleClick(character.id)} style={{marginRight:"3%"}}>Like</Button>
                                            <Button variant="warning" onClick={()=>gotoCharacter(character.id)}>Details</Button>
                                        </Card.Body>
                                </Card>
                 
                            </Col>):<p>Loading...</p>}
                            
                        </Row>
            </Container>
            
        </div>
    )
}

export default Home;