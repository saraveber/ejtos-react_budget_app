// CustomAlert.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomAlert = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
  
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title >Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                OK
                </Button>
            </Modal.Footer>
        </Modal>
  
  );
};

export default CustomAlert;
