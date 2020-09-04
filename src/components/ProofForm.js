import React from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

export default function ProofForm(props) {
  const { firstname,
    lastname,
    gender,
    dob,
    nationality,
    doctype,
    doc_id,
    vacName,
    manufacturer,
    batch,
    dose,
    unit,
    validTill,
    nextBoosterDate,
    vaccinatorName,
    accreditor_cred_def_id,
    vaccinator_org_logo,
    vaccinator_org_type,
    vaccinator_org_loc,
    vaccinator_did,
    vaccinator_org,
    validate_from,
  } = props.data.data

  return (
    <Col lg={5}>
      <h5 className="mb-4 pb-4 mt-2 text-center">Patient and Vaccination Information</h5>
      <FormGroup row>
        <Label for="fname" sm={3}>
          First Name
        </Label>
        <Col sm={10}>
          <Input type="text" name="fname" id="fname" value={firstname} disabled />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lname" sm={3}>
          First Name
        </Label>
        <Col sm={10}>
          <Input type="text" name="lname" id="lname" value={lastname} disabled />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="gender" sm={3}>
          Gender
        </Label>
        <Col sm={10}>
          <Input type="text" name="gender" id="gender" value={gender} disabled />
        </Col>
      </FormGroup>
      {/* <FormGroup row>
        <Label for="dob" sm={4}>
          Date of Birth
        </Label>
        <Col sm={10}>
          <Input type="text" name="dob" id="dob" value={dob} disabled />
        </Col>
      </FormGroup> */}
      {/* <FormGroup row>
        <Label for="nationality" sm={3}>
          Nationality
        </Label>
        <Col sm={10}>
          <Input type="text" name="nationality" id="nationality" value={nationality} disabled />
        </Col>
      </FormGroup> */}
      {/* <FormGroup row>
        <Label for="doctype" sm={3}>
          Document
        </Label>
        <Col sm={10}>
          <Input type="text" name="doctype" id="doctype" value={doctype} disabled />
        </Col>
      </FormGroup> */}
      <FormGroup row>
        <Label for="doc_id" sm={4}>
          Travel Document
        </Label>
        <Col sm={10}>
          <Input type="text" name="doc_id" id="doc_id" value={doctype + ': ' + doc_id} disabled />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="vacName" sm={4}>
          Vaccine Name
        </Label>
        <Col sm={10}>
          <Input type="text" name="vacName" id="vacName" value={vacName} disabled />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="manufacturer" sm={3}>
          Manufacturer
        </Label>
        <Col sm={10}>
          <Input type="text" name="manufacturer" id="manufacturer" value={manufacturer} disabled />
        </Col>
      </FormGroup>


      {/* <FormGroup row>
        <Label for="dose" sm={3}>
          Dose
        </Label>
        <Col sm={10}>
          <Input type="text" name="dose" id="dose" value={dose + ' ' + unit} disabled />
        </Col>
      </FormGroup>


      <FormGroup row>
        <Label for="vaccinatorName" sm={4}>
          Vaccinator
        </Label>
        <Col sm={10}>
          <Input type="text" name="vaccinatorName" id="vaccinatorName" value={vaccinatorName} disabled />
        </Col>
      </FormGroup> */}




      <FormGroup row>
        <Label for="validTill" sm={3}>
          Validity
        </Label>
        <Col sm={10}>
          <Input type="text" name="validTill" id="validTill" value={validate_from + ' to ' + validTill} disabled />
        </Col>
      </FormGroup>


      {/* <FormGroup row>
        <Label for="nextBoosterDate" sm={5}>
          Next Booster Date
        </Label>
        <Col sm={10}>
          <Input type="text" name="nextBoosterDate" id="nextBoosterDate" value={nextBoosterDate} disabled />
        </Col>
      </FormGroup> */}
      <br />
    </Col>
  );
}
