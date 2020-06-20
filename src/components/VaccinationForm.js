import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const VaccinationForm = (props) => {
  return (
    <Form className="text-center">
        <h1 className="mb-5 pb-4 mt-2">Vaccination Certificate Form</h1>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">CNIC #</Label>
            <Input type="text" name="cnic" id="examplePassword" placeholder="CNIC" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Dosage</Label>
            <Input type="text" name="dosage" id="examplePassword" placeholder="Dosage" />
          </FormGroup>
        </Col>
      </Row>
      <br />
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Vaccination Batch</Label>
            <Input type="text" name="batch" id="exampleEmail" placeholder="Batch" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Vaccination Expiry Date</Label>
            <Input type="date" name="expiry-date" id="examplePassword" placeholder="Expiry Date" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Vaccination Name</Label>
            <Input type="text" name="vaccine-name" id="examplePassword" placeholder="Vaccine Name" />
          </FormGroup>
        </Col>
      </Row>
      <Button className="m-5">Request Certificate</Button>
    </Form>
  );
}

export default VaccinationForm;