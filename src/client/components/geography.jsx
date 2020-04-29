import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
//import  Link  from 'react-bootstrap/Link';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaFlagUsa } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { GiPuzzle } from "react-icons/gi";

const GeographyHome = () => {
  const history = useHistory();

  return (
    <Container
      className="main row d-flex justify-content-center m-auto p-auto"
      style={{ width: "100rem" }}
    >
      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://online.seterra.com/mapimage/3287.png"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Learn the Continents</Card.Title>
          <Card.Text>Have fun learning the continents of the world!</Card.Text>
          <Button
            onClick={() => history.push("./views/Geography/Continents")}
            className="btn btn-primary m-auto d-flex"
          >
            <GiWorld className="m-1 d-flex align-bottom" /> Click here{" "}
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.maps-of-the-usa.com/maps/usa/detailed-cartoon-map-of-the-usa.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Learn the 50 States </Card.Title>
          <Card.Text>
            A map of the United States including flashcards of the States.
          </Card.Text>
          <Button
            onClick={() => history.push("./Views/Geography/50States")}
            className="btn btn-primary m-auto d-flex"
          >
            {" "}
            <FaFlagUsa className="m-1 d-flex align-bottom" /> Lets Learn
          </Button>
        </Card.Body>
      </Card>

<Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/happy-cute-kids-play-solve-puzzle-together-happy-cute-kids-play-solve-puzzle-together-activity-background-boy-brain-cartoon-160886054.jpg" style={{ height: '14rem' }}  />
  <Card.Body>
    <Card.Title>United States Map Puzzle</Card.Title>
    <Card.Text>
      An interactive puzzle of the United States.
    </Card.Text>
    <Button onClick={()=>history.push('./Views/Geography/Puzzle')} className="btn btn-primary m-auto d-flex"><GiPuzzle className="m-1 d-flex align-bottom"/> Interactive Puzzle</Button>
  </Card.Body>
</Card>
       
</Container>
  );
};

export default GeographyHome;
