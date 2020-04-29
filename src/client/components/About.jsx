import React from "react";
// import  {GiGiftOfKnowledge}  from "react-icons/gi";
// import  {GiAnarchy}  from "react-icons/gi";
// import  {GiOwl}  from "react-icons/gi";
// import  {GiByzantinTemple}  from "react-icons/gi";
// import  {FaHatWizard}  from "react-icons/fa";
import {Container,Jumbotron,Card,} from "react-bootstrap";
import { GiLightBulb } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const About = () => {
return (
    <Container>
<Jumbotron fluid className="main row d-flex justify-content-center mt-3 m-auto p-auto vertical-center" style={{ width: '50rem' , height:'5rem'}}>
  <Container>
    <h2 className="text-center d-flex justify-content-center">About <h1 style={{ color: 'black'}}><GiLightBulb className="ml-2 mr-0"/> MIM</h1></h2>
    
  </Container>
</Jumbotron>

<div className="text-center" >
  <Card className="main row d-flex justify-content-center text-center mt-3 m-auto p-auto" style={{ width: '50rem' }}>
  
 <Card.Body>
    <Card.Title>

    </Card.Title>
    <Card.Text>
   <p className="p-5"> 
  As there are parents in our development team, we know how hard it can be to make sure our kids are getting the enrichment they need
  to succeed in school. With the current pandemic, many children will struggle with getting the educational stimulation they need from home.
  We developed MIM to be a tool parents could use to bridge that gap. All of our lessons have been currated by parents. We look forward to building a relationship with our audience so that we can bring many new features 
  to our program, so that we can further serve your family. 


   </p>
    </Card.Text>
     </Card.Body>
     <div class="card-footer text-muted text-center">
      
    Contact Us  <br/>
    <MdEmail /> Team@MIMknowledge.com
  </div>
</Card>
</div>





    </Container>
  );
};

export default About;
