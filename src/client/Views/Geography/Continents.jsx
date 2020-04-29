import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// import  Button  from 'react-bootstrap/Button';
// import { useHistory } from "react-router-dom";
// import { IoIosArrowBack } from 'react-icons/io';

const Continents = () => {
  // const history = useHistory()

  return (
    <Container
      className="main row d-flex justify-content-center m-auto p-auto"
      style={{ width: "100rem" }}
    >
      <Card
        className="m-3 mt-5 shadow border align-items-center"
        style={{ width: "60rem" }}
      >
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/ff/60/41/ff604198955d6177539607b0edaf6ef2.gif"
        />
        <Card.Body>
          <Card.Title>
            Here is a map of the 7 continents of the world!
          </Card.Title>
          {/* <Button onClick={()=>history.goBack()}  className="btn btn-danger m-auto d-flex"><IoIosArrowBack className="m-1 d-flex align-bottom"/> Go back</Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Continents;
