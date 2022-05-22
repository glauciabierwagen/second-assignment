import React, { useState } from "react";
import "./modal.css";
import Button from 'react-bootstrap/Button';
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalApp() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Button  variant="warning light" size="lg" onClick={toggleModal}>Learn more</Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="card_title">Learn more through my Gitihub and LinkeIn</div>
        <Button variant="warning light" size="sm" onClick={toggleModal}>Close</Button>
      </Modal>
    </div>
  );
}

export default ModalApp;


