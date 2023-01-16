import { useState } from "react";
import "./App.css";
import React from "react";
import {
  Container,
  Col,
  Row,
  CardText,
  CardTitle,
  Button,
  Input,
} from "reactstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container fluid="lg">
        <Row>
          <Col className="bg-light border">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </Col>
          <Col className="bg-light border">
            <CardTitle tag="h5" className="text-start">
              Playlist
            </CardTitle>
            <CardText className="text-start" tag="h1">
              Playlist Name
            </CardText>
            <CardText className="text-start">Playlist Description</CardText>
            <CardText className="text-start">
              Created By: Owner 0 Songs
            </CardText>
          </Col>
        </Row>
        <Row>
          <Col className="bg-light border" xs="6">
            <Button color="primary" size="sm">
              Play
            </Button>
          </Col>
          <Col className="bg-light border" xs="6">
            <Input bsSize="sm" type="search" />
          </Col>
        </Row>
        <Row>
          <Col className="bg-light border">Table</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
