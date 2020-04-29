import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
//import  Link  from 'react-bootstrap/Link';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { GiStarSwirl } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { GiCardRandom } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { FaDog } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { AiFillCalculator } from "react-icons/ai";

const Home = () => {
  const history = useHistory();

  return (
    <Container
      className="main row d-flex justify-content-center m-auto p-auto"
      style={{ width: "100rem" }}
    >
      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://previews.123rf.com/images/phanuchat/phanuchat1806/phanuchat180600032/104290986-cartoon-kids-with-abc-letters-school-kids-with-abc-children-with-abc-letters.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Learn Your ABC's</Card.Title>
          <Card.Text>
            Digital Flash Cards to help you teach your child their ABC's.
          </Card.Text>
          <Button
            onClick={() => history.push("./Views/ABCview/FlashCard")}
            className="btn btn-danger m-auto d-flex"
          >
            <GiCardRandom className="m-1 d-flex align-bottom" /> Flash Cards
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://mrprintables.com/wp-content/uploads/2017/04/alphabet-printables-category-alphabet-flash-cards.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Learn Your Words</Card.Title>
          <Card.Text>A way to teach your kids words with flash cards</Card.Text>
          <Button
            onClick={() => history.push("/Words")}
            className="btn btn-danger m-auto d-flex"
          >
            <FaBookReader className="m-1 d-flex align-bottom" /> Say It With Me
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.pitara.com/wordpress/wp-content/uploads/2002/09/animals-zoo.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Learn Your Animals</Card.Title>
          <Card.Text>
            Have fun with these pictures an desriptions of Animals.
          </Card.Text>
          <Button
            onClick={() => history.push("/Animals")}
            className="btn btn-danger m-auto d-flex"
          >
            <FaDog className="m-1 d-flex align-bottom" />
            What Creature Is That
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn6.aptoide.com/imgs/b/9/9/b9999de5dfddb50276a4b16cb83723c4_icon.png"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Learn Your 123's</Card.Title>
          <Card.Text>
            Digital Flash Cards to help you teach your child their 123's.
          </Card.Text>
          <Button
            onClick={() => history.push("./Views/123view/NumberCard")}
            className="btn btn-warning m-auto d-flex"
          >
            <GiCardRandom className="m-1 d-flex align-bottom" /> Flash Cards
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.weisradio.com/wp-content/uploads/2013/07/apple_and_slateboard-1200x1200.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Math Fun</Card.Title>
          <Card.Text>Basic Adding & Subtracting math solving.</Card.Text>
          <Button
            onClick={() => history.push("./Views/Mathview/Math")}
            className="btn btn-warning m-auto d-flex"
          >
            <AiFillCalculator className="m-1 d-flex align-bottom" />
            Solve Problems
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://st.depositphotos.com/3471499/4797/i/950/depositphotos_47979627-stock-photo-kids-around-the-world.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Learn Geography</Card.Title>
          <Card.Text>
            Learn the continents of the world and the 50 states.
          </Card.Text>
          <Button
            onClick={() => history.push("/geography")}
            className="btn btn-warning m-auto d-flex"
          >
            <GiWorld className="m-1 d-flex align-bottom" /> Lets Travel
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://thumbs.dreamstime.com/b/illustration-story-book-cartoon-princesses-princes-front-castle-story-book-cartoon-princesses-princes-129245747.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Story Books</Card.Title>
          <Card.Text>Find a story Book and read along with them.</Card.Text>
          <Button
            onClick={() => history.push("./Views/StoryBookView/StoryBooks")}
            className="btn btn-success m-auto d-flex"
          >
            <GiBookshelf className="m-1 d-flex align-bottom" />
            Pick your Story
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://static.vecteezy.com/system/resources/previews/000/128/131/original/free-mom-and-child-cooking-illustration-vector.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Fun Recipes</Card.Title>
          <Card.Text>
            Fun videos of recipes and a list of ingredients.
          </Card.Text>
          <Button
            onClick={() => history.push("./Views/RecipeVideos")}
            className="btn btn-success m-auto d-flex"
          >
            <GiCupcake className="m-1 d-flex align-bottom" /> Lets Cook
          </Button>
        </Card.Body>
      </Card>

      <Card className="m-3 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://static.vecteezy.com/system/resources/previews/000/136/812/original/starship-space-cartoon-free-vector.jpg"
          style={{ height: "14rem" }}
        />
        <Card.Body>
          <Card.Title>Learn Your Stars</Card.Title>
          <Card.Text>
            Gaze at the stars with your little ones and learn their stories.
          </Card.Text>
          <Button
            onClick={() => history.push("./Views/Space/Space")}
            className="btn btn-success m-auto d-flex"
          >
            <GiStarSwirl className="m-1 d-flex align-bottom" /> Lets Star Gaze
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
