import React, { useState,useEffect } from "react";
import CardData from "./CardData";
import {Card,Button,Container,Col,Row  } from 'react-bootstrap';

function Cards() {
  const [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div>
      {/* <button onClick={myRandomEmg}>Get a new image</button>
      <img src={memeImage} ></img> */}
    <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <Card style={{ width: '24rem' }} >
<Card.Img variant="top" src={memeImage} />
<Card.Body>
  {/* <Card.Title>Card Title</Card.Title> */}
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="warning" onClick={myRandomEmg}>Go somewhere</Button>
</Card.Body>
</Card>
        </Col>
      </Row>




 </div>

  );
}

export default Cards;