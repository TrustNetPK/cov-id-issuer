import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom'
import '../assets/styles/VaccinationForm.css'

const VaccinationForm = () => {
  const [name, setName] = useState('')
  const [CNIC, setCNIC] = useState('')
  const [dosage, setDosage] = useState('')
  const [batch, setBatch] = useState('')
  const [expiry, setExpiry] = useState('')
  const [vaccName, setVaccName] = useState('')
  const history = useHistory();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleRequest = () => {
    if (name === '' | CNIC === '' | dosage === '' | batch === '' | expiry === '' | vaccName === '') {
      toggle();
      // alert('Please fill all fields')
    }
    else {
      history.push('/qrcode', { name: name, CNIC: CNIC, dosage: dosage, batch: batch, expiry: expiry, vaccName: vaccName });
    }
  }

  return (
    <Form className="text-center FormBox">
      <h1 className="mb-5 pb-4 mt-3 header">Vaccination Certificate Form</h1>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input type="text" className="inputField rounded-pill" name="name" id="exampleEmail" onChange={(e) => setName(e.target.value)} placeholder="Name" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">CNIC #</Label>
            <Input type="text" className="inputField rounded-pill" name="cnic" id="examplePassword" onChange={(e) => setCNIC(e.target.value)} placeholder="CNIC" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Dosage</Label>
            <Input type="text" className="inputField rounded-pill" name="dosage" id="examplePassword" onChange={(e) => setDosage(e.target.value)} placeholder="Dosage" />
          </FormGroup>
        </Col>
      </Row>
      <br />
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Vaccination Batch</Label>
            <Input type="text" className="inputField rounded-pill" name="batch" id="exampleEmail" onChange={(e) => setBatch(e.target.value)} placeholder="Batch" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Vaccination Expiry Date</Label>
            <Input type="date" className="inputField rounded-pill" name="expiry-date" id="examplePassword" onChange={(e) => setExpiry(e.target.value)} placeholder="Expiry Date" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Vaccination Name</Label>
            <Input type="text" className="inputField rounded-pill" name="vaccine-name" id="examplePassword" onChange={(e) => setVaccName(e.target.value)} placeholder="Vaccine Name" />
          </FormGroup>
        </Col>
      </Row>
      <Button onClick={handleRequest} outline color="danger" className="m-3">Request Certificate</Button>
      <div>
        <Modal isOpen={modal} toggle={toggle} centered>
          <ModalHeader toggle={toggle}>Vaccination Information</ModalHeader>
          <ModalBody>Please fill all fields.</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>OK</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </Form>
  );
}

export default VaccinationForm;