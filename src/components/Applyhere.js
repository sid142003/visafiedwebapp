import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { BsPlus, BsX } from 'react-icons/bs'; // Import the X icon for delete
import 'animate.css/animate.min.css';
import '../components/Applyhere.css';
import Formup from '../components/Formup';

function App() {
  const [showStartInput, setShowStartInput] = useState(false);
  const [showEndInput, setShowEndInput] = useState(false);
  const [travelerCount, setTravelerCount] = useState(1);
  const [currentTraveler, setCurrentTraveler] = useState(1);
  const [travelerData, setTravelerData] = useState([{ id: 1 }]);

  const toggleStartInput = () => {
    setShowStartInput(!showStartInput);
  };

  const toggleEndInput = () => {
    setShowEndInput(!showEndInput);
  };

  const addTraveler = () => {
    setTravelerCount(travelerCount + 1);
    setCurrentTraveler(travelerCount + 1);
    setTravelerData([...travelerData, { id: travelerCount + 1 }]);
  };

  const deleteTraveler = (travelerId) => {
    setTravelerData((prevTravelerData) =>
      prevTravelerData.filter((traveler) => traveler.id !== travelerId)
    );
    if (currentTraveler === travelerId) {
      setCurrentTraveler(1); // Reset currentTraveler if the selected traveler is deleted
    }
  };

  const switchTraveler = (index) => {
    setCurrentTraveler(index);
  };

  return (
    <div className="formupApp">
    

<Container>
  <Row className="apply-my-5">
    <Col xs={6} className="apply-text-left">
      <Button
        className="apply-rounded-pill animated fadeIn"
        onClick={addTraveler}
      >
        <BsPlus className="apply-mb-1" /> Add Traveler
      </Button>
    </Col>
    <Col xs={6} className="travel-buttons">
      <div className='travel'>
        {travelerData.map((traveler, index) => (
          <div key={index} className="traveler-button-container">
            <div className='i'>
            <button
              onClick={() => switchTraveler(traveler.id)}
              className={`travel-button ${currentTraveler === traveler.id ? 'active' : ''}`}
            >
              Traveler {traveler.id}
            </button>
            <BsX
              className="delete-button"
              onClick={() => deleteTraveler(traveler.id)}
            />
            </div>
          </div>
        ))}
      </div>
    </Col>
  </Row>
</Container>
        
{travelerData.map((traveler, index) => (
  <div key={index} className="traveler-container">
    <div className='c'>
      
    <div className="traveler-count">Traveler {traveler.id}</div>
      </div>
    <Formup travelerId={traveler.id} />
  </div>
))}
    </div>
  );
}

export default App;
