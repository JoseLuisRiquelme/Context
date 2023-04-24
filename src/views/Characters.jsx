import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import Context from "../context/context";
import {useParams} from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const Characters=()=>{
const [char, setChar]=useState([])
const [data, setData]=useState([])
const {id}=useParams()
const {characters, setCharacters} = useContext(Context)


console.log(characters)
const likeds=characters.filter((ele=>ele.favorite===true))
console.log(likeds)
const handleClick2=(id)=>{
    const character1 = likeds.find((val) => val.id === id) 
    character1.favorite = false
    setData(characters.filter(val=>val.favorite===true))
}
const navigate=useNavigate()
const gotoCharacter=(id)=>{
    navigate(`/characters/${id}`)
}
const handleSelect= (e)=>{
    gotoCharacter(e.target.value)
}

useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3b9ac12464msh1f7f7b0cce0434bp19ce6ejsn43db372073af',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    .then((response)=>response.json())
    .then((data)=> setChar(data))
    
  },[id])

  console.log(char)
  const images = char.screenshots?.map(s => s.image) ?? []
  console.log(char)

        return( 
        <div>
            <Form.Select onChange={handleSelect} className="my-3" aria-label="Default select example">
      <option>Select Game</option>
      {characters? characters.map(character=><option value={character.id}>{character.title}</option>):'Loading'}
        </Form.Select>
            <Carousel fade>
                {
                    images.map(url=>{
                        return(
                            <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={url}
                              alt="First slide"
                            />
                            <Carousel.Caption style={{backgroundImage:`url(${url})`, borderRadius:"20px"}}>
          <h2 style={{backgroundImage:`url(${url})`,fontFamily:'Dancing Script', fontWeight:"bold"}}>{char.title}</h2>
          <p style={{height:"50px", overflowY:"hidden",backgroundImage:`url(${url})`,fontSize:"18px", padding:"3px",color:"black", fontWeight:"bold"}}>{char.description}</p>
        </Carousel.Caption>
                            
                          </Carousel.Item>
                          
                          
                        )
                    })
                }
    </Carousel>
    <Button variant="warning" href={char.game_url}target="_blank" rel="noreferrer" style={{margin:"5px 45%", width:"150px", fontSize:"20px"}}>PLAY NOW!</Button>
    
            <Container >
            <Row className="align-items-center" >
                {likeds? likeds?.map((like)=>{return(<Col lg={4} md={12} className="my-4">
                    <Card style={{ height: '32rem',backgroundColor:"white"}}>
                        <Card.Img variant="top" src={like.thumbnail} style={{margin:"auto",marginTop:"15px", borderRadius:"10px",height:"50%", border:"0.2px solid gray", justifyContent:"center", alignItems:"center", width:"90%"}}/>
                            <Card.Body style={{borderRadius:"10px", margin:"4px 20px"}} >
                                <Card.Title style={{fontFamily:'Dancing Script', fontSize:"30px"}}>{like.title}</Card.Title>
                                <Card.Text >
                                    
                                    <h6>Studio({like.developer})</h6>
                                    <div style={{overflowY:"scroll", height:"85px"}}>
                                        <h5>Short description:</h5>
                                    <p style={{fontSize:"18px", color:"white"}}>{like.short_description}</p>
                                    </div>
                                </Card.Text>
                                <Button href={like.game_url} target="_blank" rel="noreferrer" style={{marginRight:"20%"}}>Play Now!</Button>
                                <Button variant="danger" onClick={()=>handleClick2(like.id)} style={{marginRight:"3%"}}>Dislike</Button>
                                <Button variant="warning" onClick={()=>gotoCharacter(like.id)}>Details</Button>
                            </Card.Body>
                    </Card>
     
                </Col>)}):<p>Loading...</p>}
                
            </Row>
            </Container>
        </div>)
}

export default Characters;