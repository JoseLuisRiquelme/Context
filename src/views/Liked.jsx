
import { useContext, useState, useEffect } from "react";
import Context from "../context/context";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';

const Liked=()=>{


    const [data, setData]=useState([])
    const {characters,setCharacters}=useContext(Context)
    const navigate=useNavigate()

const gotoCharacter=(id)=>{
    navigate(`/characters/${id}`)
}
const handleSelect= (e)=>{
    gotoCharacter(e.target.value)
}

    useEffect(()=>{
        setData(characters.filter(val=>val.favorite===true))},[characters])
        const handleClick2=(id)=>{
            const character1 = data.find((val) => val.id === id) 
            character1.favorite = false
            setData(characters.filter(val=>val.favorite===true))
            console.log(data)
    
        }  
    return(
        <div className="home-class">
        <Container>
        <Form.Select onChange={handleSelect} className="my-3" aria-label="Default select example">
      <option>Select Game</option>
      {characters? characters.map(character=><option value={character.id}>{character.title}</option>):'Loading'}
        </Form.Select>
                    <Row className="align-items-center">
                        {data? data.map(val =><Col lg={4} md={12} className="my-4">
                        <Card style={{ height: '32rem',backgroundColor:"white"}}>
                        <Card.Img variant="top" src={val.thumbnail} style={{margin:"auto",marginTop:"15px", borderRadius:"10px",height:"50%", border:"0.2px solid gray", justifyContent:"center", alignItems:"center", width:"90%"}}/>
                                    <Card.Body style={{borderRadius:"10px", margin:"4px 20px"}}>
                                        <Card.Title style={{fontFamily:'Dancing Script', fontSize:"30px"}}>{val.title}</Card.Title>
                                        <Card.Text>
                                                <h6>Studio({val.developer})</h6>
                                                <div style={{overflowY:"scroll", height:"85px"}}>
                                                     <h5>Short description:</h5>
                                                <p style={{fontSize:"18px", color:"white"}}>{val.short_description}</p>
                                                </div>
                                        </Card.Text>
                                        <Button href={val.game_url} target="_blank" rel="noreferrer" style={{marginRight:"20%"}}>Play Now!</Button>
                                        <Button variant="danger" onClick={()=>handleClick2(val.id)} style={{marginRight:"3%"}}>Dislike</Button>
                                        <Button variant="warning" onClick={()=>gotoCharacter(val.id)}>Details</Button>
                                    </Card.Body>
                            </Card>
             
                        </Col>):<p>Loading...</p>}
                        
                    </Row>
        </Container>
        
    </div>
    )
}

export default Liked;