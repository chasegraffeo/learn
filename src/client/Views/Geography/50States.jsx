import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const States = () => {
  const history = useHistory();

  return (
    <Container
      className="main row d-flex justify-content-center m-auto p-auto"
      style={{ width: "100rem" }}
    >
      <Card
        className="m-3 mt-5 shadow border align-items-center"
        style={{ width: "50rem" }}
      >
        <Card.Img
          variant="top"
          src="https://www.ephotopix.com/wp-content/uploads/2018/11/USA-States-Color-Map.jpg"
        />
        <Card.Body>
          <Card.Title>
            Here is a map of the United States of America!
          </Card.Title>
          <Button
            onClick={() => history.push("/Views/Geography/StateCards")}
            className="btn btn-primary m-auto d-flex"
          >
            <FaMapMarkerAlt className="m-1 d-flex align-bottom" /> Click me to
            learn about each state!
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default States;
