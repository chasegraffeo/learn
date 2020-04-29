import * as React from "react";
// import Card from "react-bootstrap/Card";
//import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
//import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";

const SpaceSingle = (props) => {
  return (
    // <div key={props.image.id}>
    //   <h1>ID: {props.image.id}</h1>
    //   <h2>TITLE: {props.image.title}</h2>
    //   <p>EXPLANATION: {props.image.explanation}</p>
    //   <img src={`${props.image.link}`} alt={`${props.image.title}`} />
    // </div>
    <Figure style={{}}>
      <Figure.Image
        max-width={"100%"}
        height={"auto"}
        alt={`${props.image.title}`}
        src={`${props.image.link}`}
        onClick={() => props.callback()}
      />
      <Figure.Caption>
        <h1>
          {props.image.title} | {props.image.id}
        </h1>
        <p>{props.image.explanation}</p>
      </Figure.Caption>
      <Button onClick={() => props.callback()} variant="primary">
        Next Picture
      </Button>
    </Figure>
  );
};

export default SpaceSingle;

//deal with flickering effect
//deal with navigation solutions
//divide into categories?
//gallery view? seems promising
