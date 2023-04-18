import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import Context from "../context/context";

const Home=()=>{

    const {characters,setCharacters}=useContext(Context)
    const handleClick= (id)=>{
        const character = characters.find((val) => val.id === id) 
        character.favorite = true}
        
    return(
        <div className="home-class">
            <Container >
                        <Row className="align-items-center" >
                            {characters? characters.map(character => <Col lg={4} md={12} className="my-4">
                                <Card style={{ height: '32rem',backgroundColor:"white"}}>
                                    <Card.Img variant="top" src={character.thumbnail.path + "."+character.thumbnail.extension} style={{margin:"auto",marginTop:"15px", borderRadius:"10px",height:"50%", border:"0.2px solid gray", justifyContent:"center", alignItems:"center", width:"90%"}}/>
                                        <Card.Body  >
                                            <Card.Title >{character.name}</Card.Title>
                                            <Card.Text >
                                                
                                                <h5>Comics Participations</h5>
                                                <div style={{overflowY:"scroll", height:"85px"}}>
                                                <p>{character.series.items.map(val=>val.name)}</p>
                                                </div>
                                            </Card.Text>
                                            <Button variant="success" onClick={()=>handleClick(character.id)}>Like</Button>
                                        </Card.Body>
                                </Card>
                 
                            </Col>):<p>Loading...</p>}
                            
                        </Row>
            </Container>
            
        </div>
    )
}

export default Home;