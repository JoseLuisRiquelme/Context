
import { useContext, useState, useEffect } from "react";
import Context from "../context/context";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const Liked=()=>{


    const [data, setData]=useState([])
    const {characters,setCharacters}=useContext(Context)
    

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
                    <Row className="align-items-center">
                        {data? data.map(val =><Col lg={4} md={12} className="my-4">
                        <Card style={{ height: '32rem',display:"flex",flexDirection:"column", overflow:"hidden"}}>
                        <Card.Img variant="top" src={val.thumbnail.path + "."+val.thumbnail.extension} style={{ width: '20rem', margin:"15px",borderRadius:"10px",height:"50%", border:"0.2px solid gray"}}/>
                                    <Card.Body>
                                        <Card.Title>{val.name}</Card.Title>
                                        <Card.Text>
                                                <h5>Comics Participations</h5>
                                                <div style={{overflowY:"scroll", height:"85px"}}>
                                                <p>{val.series.items.map(val=>val.name)}</p>
                                                </div>
                                        </Card.Text>
                                        <Button variant="danger" onClick={()=>handleClick2(val.id)}>Dislike</Button>
                                    </Card.Body>
                            </Card>
             
                        </Col>):<p>Loading...</p>}
                        
                    </Row>
        </Container>
        
    </div>
    )
}

export default Liked;