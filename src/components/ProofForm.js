import React from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

export default function ProofForm(props) {
  const { name, CNIC, dosage, batch, expiry, vaccName } = props.data;

  return (
    <Col lg={5}>
      <h5 className="mb-4 pb-4 mt-2 text-center">Patient and Vaccination Information</h5>
      <FormGroup row>
        <Label for="name" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input type="text" name="name" id="name" value={name} placeholder="Name" disabled />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="cnic" sm={2}>
          CNIC
        </Label>
        <Col sm={10}>
          <Input type="text" name="cnic" id="cnic" value={CNIC} placeholder="CNIC" disabled />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="batch" sm={2}>
          Batch
        </Label>
        <Col sm={10}>
          <Input type="text" name="batch" value={batch} placeholder="Batch" disabled />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="dosage" sm={2}>
          Dosage
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="dosage"
            id="dosage"
            value={dosage}
            placeholder="Dosage"
            disabled
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="expiry" sm={2}>
          Expiry
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="expiry"
            id="expiry"
            value={expiry}
            placeholder="Expiry"
            disabled
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="vaccName" sm={2}>
          Vaccine
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="vaccName"
            id="vaccName"
            value={vaccName}
            placeholder="Vaccine Name"
            disabled
          />
        </Col>
      </FormGroup>
    </Col>
  );
}
