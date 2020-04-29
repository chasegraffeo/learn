import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
//import Container from "react-bootstrap/Container";
//import WordCard from "../Views/Words/WordCard";
//import Button from "react-bootstrap/Button";

class Words extends React.Component {
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
      allWords: [],
    };
  }

  wordArray = [
    "at",
    "big",
    "blue",
    "black",
    "brown",
    "down",
    "find",
    "funny",
    "go",
    "help",
    "here",
    "I",
    "jump",
    "little",
    "look",
    "make",
    "my",
    "one",
    "play",
    "red",
    "run",
    "said",
    "see",
    "three",
    "two",
    "no",
    "we",
    "yellow",
    "you",
    "eat",
    "four",
    "get",
    "he",
    "into",
    "new",
    "our",
    "out",
    "pretty",
    "ride",
    "she",
    "that",
    "there",
    "they",
    "this",
    "too",
    "under",
    "want",
    "white",
    "with",
    "yes",
  ];

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
          allWords: [...this.state.allWords, this.state.currentWord],
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidMount = () => {
    for (let i = 0; i < this.wordArray.length; i++) {
      const url = this.wordArray[i];
      this.fetchWords(url);
    }
  };

  render() {
    return (
      <Container
        className="main row d-flex justify-content-center m-auto p-auto shadow border"
        style={{ width: "100rem" }}
      >
        {this.state.allWords.map((words) => (
          <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require(`../img/words/${words.word}.jpg`)}
              style={{ height: "14rem" }}
            />
            <Card.Body>
              <Card.Title>{words.word}</Card.Title>
              <Card.Text>{words.definitions[0].definition}</Card.Text>
              <Card.Footer>{words.definitions[0].type}</Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}
export default Words;
