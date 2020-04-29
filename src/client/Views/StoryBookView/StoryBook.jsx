import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const StoryOne = () => {
  return (
    <Container
      className="main m-5 row justify-content-center"
      style={{ width: "100rem" }}
    >
      <Card className="mt-4 ml-4 mr-4 mt-4" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            "Ten steps from the porch and twenty steps from the rose bushes,"
            growled Bluebeard in Jimmy's dream one night. "There be treasure
            there! Aawrgh."
          </Card.Text>
          <Button
            /* onClick={()=>history.push('./Views/StoryBooks')} */ className="btn btn-warning mx-1"
          >
            Next Page
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default StoryOne;
