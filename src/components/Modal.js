import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';






const ModalComponent = () =>  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Book 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: "#1abc9c", font: "Poppins, Sans Pro", weight: "lighter" }}>Book a time</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color: "#1abc9c", font: "Poppins, Sans Pro", weight: "lighter" }}>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;