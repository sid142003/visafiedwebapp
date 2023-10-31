import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';
import 'animate.css/animate.min.css';
import '../components/Applyhere.css';
import Formup from "../components/Formup"

function App() {
  const [showStartInput, setShowStartInput] = useState(false);
  const [showEndInput, setShowEndInput] = useState(false);

  const toggleStartInput = () => {
    setShowStartInput(!showStartInput);
  };

  const toggleEndInput = () => {
    setShowEndInput(!showEndInput);
  };

  return (
    <div className="formupApp">
    <Container>
      <Row className="apply-my-5">
        <Col xs={6} className="apply-text-left">
          <Button className="apply-rounded-pill animated fadeIn">
            <BsPlus className="apply-mb-1" /> Add Travel
          </Button>
        </Col>
      </Row>
      <Row className="apply-mb-4">
        <Col xs={6} className="apply-text-right">
          <Form.Group>
            <Button
              variant="text"
              onClick={toggleStartInput}
              className={`apply-calender-button animated ${
                showStartInput ? 'apply-fadeOut' : 'apply-fadeIn'
              }`}
            >
              <span className="apply-journey-text">Start Journey</span>
            </Button>
            {showStartInput && (
              <InputGroup>
                <Form.Control type="date" />
              </InputGroup>
            )}
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group>
            <Button
            variant="text"
              onClick={toggleEndInput}
              className={`apply-calender-button animated ${
                showEndInput ? 'apply-fadeOut' : 'apply-fadeIn'
              }`}
            >
              <span className="apply-journey-text">End Journey</span>
            </Button>
            {showEndInput && (
              <InputGroup>
                <Form.Control type="date" />
              </InputGroup>
            )}
          </Form.Group>
        </Col>
      </Row>
    </Container>
      <Formup />
    </div>
  );
}

export default App;
