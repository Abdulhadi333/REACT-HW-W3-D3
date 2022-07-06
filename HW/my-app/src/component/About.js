import React, { useState,useEffect } from "react";
import Cards from "./Cards";
import {Card,Button,Container,Col,Row  } from 'react-bootstrap';


// function About() {
//   return (
//     <div>
//       {/* ماابي اصدمكم بس هنا ابيكم تستخدمون اليوز افكت تصرفوا احتاج يوز افكت في
//       موقعي :( */}
//     </div>
//   );
// }

const About = () =>{
    const [showComponent , setShowComponent] = useState(true);




    const images = ["https://www.ewaahotels.com/uploads/image-slider/03d7703488a58cec3059bc6df945fad41582891535.jpg","https://media.istockphoto.com/photos/saudi-arabiariyadhking-fahad-road-at-night7-picture-id1168210356?k=20&m=1168210356&s=612x612&w=0&h=yH1Il4_3zIBv5xNSYJPOjBzAnl15dqGD2v_kbS9tAs4=","https://media.istockphoto.com/photos/kingdom-of-saudi-arabia-landscape-at-night-riyadh-tower-kingdom-picture-id1264361225?k=20&m=1264361225&s=612x612&w=0&h=5RvVRReeVok7igQNyn2l19m7f6K-sRnI9FVbM94c_DI="];
    const [count1 , setCount1] = useState(0);
    const nextImage=()=>{
        if(count1 < images.length-1){
         setCount1(count1+1)
        }
        else{
            setCount1(0)
        }
    }

useEffect(() => {
    document.title = `You clicked ${count1} times`;
    console.log("mount")
    
    return console.log("out")
}, [console.log(`You updated ${count1+1} times`)]);



    return(
        <div className="About">

        <Button variant="warning" onClick={()=> setShowComponent(true)}>Show Components</Button>
        <Button variant="warning" onClick={()=> setShowComponent(false)}>Hide Components</Button>
        {showComponent && <Cards />}



        <br />



        <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <Card style={{ width: '40rem' }} >
<Card.Img variant="top" src={images[count1]} />
<Card.Body>
  {/* <Card.Title>Card Title</Card.Title> */}
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="warning" onClick={nextImage}>Next Image</Button>
</Card.Body>
</Card>
        </Col>
      </Row>

        


</div>        
    )
}


export default About;