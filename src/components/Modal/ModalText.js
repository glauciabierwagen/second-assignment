import React, { useState } from "react";
import "./modal.css";
import Button from 'react-bootstrap/Button';
import Modal from "react-modal";

{/* Modal Settings*/}
Modal.setAppElement("#root");

function ModalApp() {
  const [isOpen, setIsOpen] = useState(false);{/* Modal using UseState()*/}

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Button  variant="warning light" size="lg" onClick={toggleModal}>Learn more</Button>{/* Open Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="card_title">Learn more through my Gitihub and LinkeIn</div>
        <Button variant="warning light" size="sm" onClick={toggleModal}>Close</Button> {/* Close Button */}
        {/*<div> <ButtonComponent children="Close " />   </div>*/} {/* Reusable Button it is not working */}
      </Modal>
    </div>
  );
}

export default ModalApp;


