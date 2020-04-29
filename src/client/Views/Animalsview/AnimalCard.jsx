/* import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import SingleCard from './SingleCard';

//import Button from "react-bootstrap/Button";



const AnimalCard = () => {
  const [animals, setAnimals] = useState([ 
  "dog",
  "cat",
  "owl",
  "frog",
  "tiger",
  "lion",
  "cow",
  "horse",
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
  "duck"]);

  const [word,setWord] = useState("");
  const [definition,setDefinition] = useState([]);
  const [pronunciation,setPronunciation] = useState("");

  function getAnimals(animals){
    
    for(let i = 0; i < animals.length; i++){
      (async () => {
        let res = await fetch(`https://owlbot.info/api/v4/dictionary/${animals[i]}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token 3ec95eb2727f567db0786d8806fdd6f32a001f1a",
        }},);
        let card = await res.json();
        // console.log('im a card: ' + card);
        setWord(word.push(card));
        console.log(word);
      })();}
  }

  useEffect(() => {
    getAnimals(animals);
  }, []);


    return(
      <div>
        {word.map(word => {
          return <SingleCard key={word.id} word={word} />
        })}
      </div>
      
      

    )
};

export default AnimalCard; */

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
