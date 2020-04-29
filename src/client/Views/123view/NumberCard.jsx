import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NumberCards = () => {
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

  return (
    <Container
      className="main row d-flex justify-content-center m-auto p-10"
      style={{ width: "100rem" }}
    >
      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-one-giraffe.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow1(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-one-giraffe.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>ONE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-two-guitars-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow2(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-two-guitars-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>TWO</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-three-airplanes-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow3(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-three-airplanes-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>THREE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-four-umbrellas-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow4(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-four-umbrellas-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>FOUR</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-five-butterflies-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow5(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-five-butterflies-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>FIVE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/12/flashcard-number-six-tomatoes-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow6(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/12/flashcard-number-six-tomatoes-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>SIX</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/12/flashcard-number-seven-sharpeners-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow7(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/12/flashcard-number-seven-sharpeners-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>SEVEN</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-eight-rabbits-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow8(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-eight-rabbits-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>EIGHT</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-nine-bowlingpins-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow9(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-nine-bowlingpins-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>NINE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-ten-cars-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow10(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-ten-cars-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>TEN</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-eleven-bananas-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow11(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-eleven-bananas-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>ELEVEN</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-twelve-flowers-399x600.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShow12(true)}
          >
            Click to enlarge
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
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-number-twelve-flowers-399x600.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>TWELVE</h3>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default NumberCards;
