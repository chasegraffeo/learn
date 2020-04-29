import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import onePlusOne from '../../img/problems/onePlusOne.jpg'

const MathProblems = () => {
  const [mdShow1, setmdShow1] = useState(false);
  const [mdShow2, setmdShow2] = useState(false);
  const [mdShow3, setmdShow3] = useState(false);
  const [mdShow4, setmdShow4] = useState(false);
  const [mdShow5, setmdShow5] = useState(false);
  const [mdShow6, setmdShow6] = useState(false);
  const [mdShow7, setmdShow7] = useState(false);
  const [mdShow8, setmdShow8] = useState(false);
  const [mdShow9, setmdShow9] = useState(false);
  const [mdShow10, setmdShow10] = useState(false);
  const [mdShow11, setmdShow11] = useState(false);
  const [mdShow12, setmdShow12] = useState(false);
  const [card1Val, setCard1Val] = useState(null);
  const [card2Val, setCard2Val] = useState(null);
  const [card3Val, setCard3Val] = useState(null);
  const [card4Val, setCard4Val] = useState(null);
  const [card5Val, setCard5Val] = useState(null);
  const [card6Val, setCard6Val] = useState(null);
  const [card7Val, setCard7Val] = useState(null);
  const [card8Val, setCard8Val] = useState(null);
  const [card9Val, setCard9Val] = useState(null);
  const [card10Val, setCard10Val] = useState(null);
  const [card11Val, setCard11Val] = useState(null);
  const [card12Val, setCard12Val] = useState(null);

  //   const handleSubmit = (e) => {
  //     if (card12Val === "
  //       e.preventDefault()
  //       alert("CORRECT");
  //     } else {
  //       e.preventDefault()
  //       alert("INCORRECT");
  //     }
  //   };

  return (
    <Container
      className="main row d-flex justify-content-center m-auto p-10"
      style={{ width: "100rem" }}
    >
      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/onePlusOne.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow1(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow1}
        onHide={() => setmdShow1(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="1">
            <Card.Img
              variant="top"
              src={require("../../img/problems/onePlusOne.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card1Val}
                placeholder="Insert answer"
                onChange={(e) => setCard1Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card1Val === "2") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("TWO");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/onePlusTwo.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow2(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow2}
        onHide={() => setmdShow2(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="2">
            <Card.Img
              variant="top"
              src={require("../../img/problems/onePlusTwo.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card2Val}
                placeholder="Insert answer"
                onChange={(e) => setCard2Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card2Val === "3") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("THREE");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/onePlusThree.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow3(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow3}
        onHide={() => setmdShow3(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="3">
            <Card.Img
              variant="top"
              src={require("../../img/problems/onePlusThree.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card3Val}
                placeholder="Insert answer"
                onChange={(e) => setCard3Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card3Val === "4") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("FOUR");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/onePlusFour.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow4(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow4}
        onHide={() => setmdShow4(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="4">
            <Card.Img
              variant="top"
              src={require("../../img/problems/onePlusFour.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card4Val}
                placeholder="Insert answer"
                onChange={(e) => setCard4Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card4Val === "5") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("FIVE");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/onePlusFive.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow5(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow5}
        onHide={() => setmdShow5(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="5">
            <Card.Img
              variant="top"
              src={require("../../img/problems/onePlusFive.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card5Val}
                placeholder="Insert answer"
                onChange={(e) => setCard5Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card5Val === "6") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("SIX");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/onePlusSix.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow6(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow6}
        onHide={() => setmdShow6(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="6">
            <Card.Img
              variant="top"
              src={require("../../img/problems/onePlusSix.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card6Val}
                placeholder="Insert answer"
                onChange={(e) => setCard6Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card6Val === "7") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("SEVEN");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/twoMinusOne.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow7(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow7}
        onHide={() => setmdShow7(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="7">
            <Card.Img
              variant="top"
              src={require("../../img/problems/twoMinusOne.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card7Val}
                placeholder="Insert answer"
                onChange={(e) => setCard7Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card7Val === "1") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("ONE");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/threeMinusOne.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow8(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow8}
        onHide={() => setmdShow8(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="8">
            <Card.Img
              variant="top"
              src={require("../../img/problems/threeMinusOne.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card8Val}
                placeholder="Insert answer"
                onChange={(e) => setCard8Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card8Val === "2") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("TWO");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/sixMinusTwo.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow9(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow9}
        onHide={() => setmdShow9(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="9">
            <Card.Img
              variant="top"
              src={require("../../img/problems/sixMinusTwo.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card9Val}
                placeholder="Insert answer"
                onChange={(e) => setCard9Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card9Val === "4") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("FOUR");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/sevenMinusFour.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow10(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow10}
        onHide={() => setmdShow10(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="10">
            <Card.Img
              variant="top"
              src={require("../../img/problems/sevenMinusFour.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card10Val}
                placeholder="Insert answer"
                onChange={(e) => setCard10Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card10Val === "3") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("THREE");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/sixMinusSix.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow11(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow11}
        onHide={() => setmdShow11(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="11">
            <Card.Img
              variant="top"
              src={require("../../img/problems/sixMinusSix.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card11Val}
                placeholder="Insert answer"
                onChange={(e) => setCard11Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card11Val === "0") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("ZERO");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../img/problems/eightMinusFour.jpg")}
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow12(true)}
          >
            Click to Solve/Answer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShow12}
        onHide={() => setmdShow12(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="12">
            <Card.Img
              variant="top"
              src={require("../../img/problems/eightMinusFour.jpg")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h4>
            <form>
              <input
                type="text"
                value={card12Val}
                placeholder="Insert answer"
                onChange={(e) => setCard12Val(e.target.value)}
              ></input>
              <input
                type="submit"
                onClick={function handleSubmit(e) {
                  if (card12Val === "4") {
                    e.preventDefault()
                    alert("CORRECT");
                  } else {
                    e.preventDefault()
                    alert("INCORRECT");
                  }
                }}
              ></input>
            </form>
            <button
              onClick={() => {
                alert("FOUR");
              }}
            >
              Answer
            </button>
          </h4>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MathProblems;
