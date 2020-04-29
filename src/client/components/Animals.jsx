import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
//import AnimalCard from "./../Views/Animalsview/AnimalCard";
//import Button from "react-bootstrap/Button";

class Animals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: {
        definitions: [
          {
            type: "",
            definition: "",
            example: "",
            image_url: "",
            emoji: "",
          },
        ],
      },
      allAnimals: [],
    };
  }

  animals = [
    "dog",
    "cat",
    "owl",
    "frog",
    "tiger",
    "lion",
    "cow",
    "chicken",
    "zebra",
    "monkey",
    "butterfly",
    "giraffe",
    "elephant",
    "goose",
    "flamingo",
    "hippopotamus",
    "leopard",
    "wolf",
    "finch",
    "pig",
    "ostrich",
    "penguin",
    "lizard",
    "snake",
    "gorilla",
    "fish",
    "duck",
  ];

  // if(animals.length == images)

  fetchWords(url) {
    fetch(`https://owlbot.info/api/v4/dictionary/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 3ec95eb2727f567db0786d8806fdd6f32a001f1a",
      },

      //body: JSON.stringify({type, word, definitions  })
    })
      .then((res) => res.json())
      .then((currentWord) => this.setState({ currentWord }))
      .then(() =>
        this.setState({
          allAnimals: [...this.state.allAnimals, this.state.currentWord],
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidMount = () => {
    for (let i = 0; i < this.animals.length; i++) {
      const url = this.animals[i];
      this.fetchWords(url);
    }
  };

  render() {
    return (
      <Container
        className="main row d-flex justify-content-center m-auto p-auto shadow border"
        style={{ width: "100rem" }}
      >
        {this.state.allAnimals.map((animal) => (
          <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require(`../img/animals/${animal.word}.jpg`)}
              style={{ height: "18rem", padding: "10px" }}
            />
            <Card.Body>
              <Card.Title>{animal.word}</Card.Title>
              <Card.Text>{animal.definitions[0].definition}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}
export default Animals;

//get the list of all files with .jpg extension in the directory and safe it in an array named $images

//extract only the name of the file without the extension and save in an array named $find

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
