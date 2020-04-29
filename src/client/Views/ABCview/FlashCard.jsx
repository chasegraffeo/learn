import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FlashCard = () => {
  const [mdShowA, setmdShowA] = useState(false);
  const [mdShowB, setmdShowB] = useState(false);
  const [mdShowC, setmdShowC] = useState(false);
  const [mdShowD, setmdShowD] = useState(false);
  const [mdShowE, setmdShowE] = useState(false);
  const [mdShowF, setmdShowF] = useState(false);
  const [mdShowG, setmdShowG] = useState(false);
  const [mdShowH, setmdShowH] = useState(false);
  const [mdShowI, setmdShowI] = useState(false);
  const [mdShowJ, setmdShowJ] = useState(false);
  const [mdShowK, setmdShowK] = useState(false);
  const [mdShowL, setmdShowL] = useState(false);
  const [mdShowM, setmdShowM] = useState(false);
  const [mdShowN, setmdShowN] = useState(false);
  const [mdShowO, setmdShowO] = useState(false);
  const [mdShowP, setmdShowP] = useState(false);
  const [mdShowQ, setmdShowQ] = useState(false);
  const [mdShowR, setmdShowR] = useState(false);
  const [mdShowS, setmdShowS] = useState(false);
  const [mdShowT, setmdShowT] = useState(false);
  const [mdShowU, setmdShowU] = useState(false);
  const [mdShowV, setmdShowV] = useState(false);
  const [mdShowW, setmdShowW] = useState(false);
  const [mdShowX, setmdShowX] = useState(false);
  const [mdShowY, setmdShowY] = useState(false);
  const [mdShowZ, setmdShowZ] = useState(false);

  return (
    <Container
      className="main row d-flex justify-content-center m-auto p-10"
      style={{ width: "100rem" }}
    >
      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-a-apple.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowA(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowA}
        onHide={() => setmdShowA(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="A">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-a-apple.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>A is for APPLE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-b-ball.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowB(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowB}
        onHide={() => setmdShowB(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="B">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-b-ball.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>B is for BALL</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowC(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowC}
        onHide={() => setmdShowC(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="C">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>C is for CAR</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-d-dog.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowD(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowD}
        onHide={() => setmdShowD(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="D">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-d-dog.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>D is for DOG</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-e-egg.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowE(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowE}
        onHide={() => setmdShowE(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="E">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-e-egg.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>E is for EGG</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-f-flower.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowF(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowF}
        onHide={() => setmdShowF(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="F">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-f-flower.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>F is for FLOWER</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-g-guitar.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowG(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowG}
        onHide={() => setmdShowG(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="G">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-g-guitar.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>G is for GUITAR</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-h-house.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowH(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowH}
        onHide={() => setmdShowH(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="H">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-h-house.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>H is for HOUSE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-i-icecream.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowI(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowI}
        onHide={() => setmdShowI(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="I">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-i-icecream.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>I is for ICECREAM</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-j-jar.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowJ(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowJ}
        onHide={() => setmdShowJ(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="J">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-j-jar.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>J is for JAR</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-k-kite1.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowK(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowK}
        onHide={() => setmdShowK(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="K">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-k-kite1.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>K is for KITE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-l-lion.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowL(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowL}
        onHide={() => setmdShowL(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="L">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-l-lion.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>L is for LION</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-m-moon.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowM(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowM}
        onHide={() => setmdShowM(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="M">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-m-moon.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>M is for MOON</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-n-notebook1.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowN(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowN}
        onHide={() => setmdShowN(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="N">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-n-notebook1.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>N is for NOTEBOOK</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-o-orange.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowO(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowO}
        onHide={() => setmdShowO(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="O">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-o-orange.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>O is for ORANGE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-p-pig.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowP(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowP}
        onHide={() => setmdShowP(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="P">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-p-pig.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>P is for PIG</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-q-queen1.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowQ(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowQ}
        onHide={() => setmdShowQ(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Q">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-q-queen1.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>Q is for QUEEN</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-r-rabbit.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowR(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowR}
        onHide={() => setmdShowR(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="R">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-r-rabbit.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>R is for RABBIT</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-s-sun.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowS(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowS}
        onHide={() => setmdShowS(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="S">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-s-sun.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>S is for SUN</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-t-tree.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowT(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowT}
        onHide={() => setmdShowT(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="T">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-t-tree.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>T is for TREE</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-u-umbrella.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowU(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowU}
        onHide={() => setmdShowU(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="U">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-u-umbrella.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>U is for UMBRELLA</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src=" http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-v-volcano.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowV(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowV}
        onHide={() => setmdShowV(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="V">
            <Card.Img
              variant="top"
              src=" http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-v-volcano.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>V is for VOLCANO</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-w-watermelon.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowW(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowW}
        onHide={() => setmdShowW(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="W">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-w-watermelon.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>W is for WATERMELON</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-x-xray1.jpg
"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowX(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowX}
        onHide={() => setmdShowX(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="X">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-x-xray1.jpg
"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>X is for X-RAY</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-y-yoyo1.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger mx-1 mt-auto"
            onClick={() => setmdShowY(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowY}
        onHide={() => setmdShowY(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Y">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-y-yoyo1.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>Y is for YO-YO</h3>
        </Modal.Body>
      </Modal>

      <Card className="m-3 mt-5 shadow border" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-z-zebra.jpg"
        />
        <Card.Body className="d-flex justify-content-center">
          <Button
            className="btn btn-danger m-auto d-flex"
            onClick={() => setmdShowZ(true)}
          >
            Click to enlarge
          </Button>
        </Card.Body>
      </Card>
      <Modal
        size="md"
        show={mdShowZ}
        onHide={() => setmdShowZ(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Z">
            <Card.Img
              variant="top"
              src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-z-zebra.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h3>Z is for ZEBRA</h3>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FlashCard;
