/* import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";


const WordCard = (props) => {
  return props.data.map(data => (
    <Container className="main m-5 row justify-content-center"style={{ width: "100rem" }}>
      <Card key={data.word} className="mt-4 ml-4 mr-4 mt-4" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{data.word}</Card.Title>
          <Card.Text>{data.definitions[0].definition}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  ));
};

export default WordCard; */

// {definitions:
// [ { type: 'noun',
//     definition:
//      'a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.',
//     example:
//      'I love reaching out into that absolute silence, when you can hear the owl or the wind.',
//     image_url:
//      'https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg',
//     emoji: '🦉' } ],
// word: 'owl',
// pronunciation: 'oul' }

//curl --header "Authorization: Token 08b6d412d2a92b706161ecd99c49bc5197b0703a" https://owlbot.info/api/v4/dictionary/owl -s | json_pp
//var Owlbot = require('owlbot-js');

//var client = Owlbot("Authorization: Token 08b6d412d2a92b706161ecd99c49bc5197b0703a");
