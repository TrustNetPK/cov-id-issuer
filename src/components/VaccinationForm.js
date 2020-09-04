import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom'
import randomString from '../helpers/RandomString'
import '../assets/styles/VaccinationForm.css'
import { PROXY_URL, GET_API_SECRET } from '../config/constants'
import { GET_ISSUER_HOST_URL } from '../config/endpoints'

const VaccinationForm = () => {
  const [firstname, setFirstName] = useState('Ali')
  const [lastname, setLastName] = useState('Ahsan')
  const [gender, setGender] = useState('Male')
  const [dob, setDob] = useState('1990-02-21')
  const [nationality, setNationality] = useState('Pakistani')
  const [doctype, setDocType] = useState('Passport')
  const [doc_id, setDocID] = useState('CV-' + randomString(8).toUpperCase())

  const [vacName, setVacName] = useState('SARS-CoV2')
  const [manufacturer, setManufacturer] = useState('Moderna')
  const [batch, setBatch] = useState('GXB-23462')
  const [dose, setDose] = useState('0.5')
  const [unit, setUnit] = useState('ml')
  const [validTill, setValidTill] = useState('2030-12-31')
  const [nextBoosterDate, setNextBoosterDate] = useState('2030-12-31')
  const [vaccinatorName, setVaccinatorName] = useState('Dr. Zeeshan Ali')
  const history = useHistory();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleRequest = () => {
    if (firstname === '' |
      lastname === '' |
      gender === '' |
      dob === '' |
      nationality === '' |
      doctype === '' |
      doc_id === '' | dose === '' | batch === '' | validTill === '' | vacName === '' |
      manufacturer === '' |
      unit === '' |
      nextBoosterDate === '' |
      vaccinatorName === '') {
      toggle();
      // alert('Please fill all fields')
    }
    else {

      fetch(`/connections/create-invitation`,
        {
          method: 'POST',
          headers: {
            'X-API-Key': `${GET_API_SECRET()}`,
            'Content-Type': 'application/json; charset=utf-8',
            'Server': 'Python/3.6 aiohttp/3.6.2'
          }
        }).then((
          resp => resp.json().then((
            data =>
              history.push('/qrcode',
                {
                  type: "connection_credential",
                  data: {
                    firstname: firstname,
                    lastname: lastname,
                    gender: gender,
                    dob: dob,
                    nationality: nationality,
                    doctype: doctype,
                    doc_id: doc_id,
                    vacName: vacName,
                    manufacturer: manufacturer,
                    batch: batch,
                    dose: dose,
                    unit: unit,
                    validTill: validTill,
                    nextBoosterDate: nextBoosterDate,
                    vaccinatorName: vaccinatorName,
                    accreditor_cred_def_id: "(none)",
                    vaccinator_org_logo: "https://vaccify.s3.ap-south-1.amazonaws.com/images/wecare-mini-transparent.png",
                    vaccinator_org_type: "Hospital",
                    vaccinator_org_loc: "Lahore, Pakistan",
                    vaccinator_did: "(none)",
                    vaccinator_org: "WeCare University Hospital",
                    validate_from: new Date().toISOString().substring(0, 10),
                  },
                  org: {
                    "name": "WeCare University Hospital",
                    "img": "https://vaccify.s3.ap-south-1.amazonaws.com/images/wecare-mini-transparent.png"
                  },
                  invitation: data
                }
              )
          )
          )
        )
        )
    }
  }

  return (
    <Form className="text-center FormBox">
      <h1 className="mb-5 pb-4 mt-3 header">Vaccination Certificate Form</h1>
      <h4>Personal Information</h4>
      <br />
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" className="inputField rounded-pill" name="fname" id="firstName" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" value={firstname} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" className="inputField rounded-pill" name="lname" id="lastName" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" value={lastname} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input type="text" className="inputField rounded-pill" name="gender" id="gender" onChange={(e) => setGender(e.target.value)} placeholder="Male, Female or None" value={gender} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="dob">Date of Birth</Label>
            <Input type="date" className="inputField rounded-pill" name="dob" id="dob" onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" value={dob} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="nationality">Nationality</Label>
            <Input type="text" className="inputField rounded-pill" name="nationality" id="nationality" onChange={(e) => setNationality(e.target.value)} placeholder="Pakistani" value={nationality} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="doctype">Travel Document Type</Label>
            <Input type="text" className="inputField rounded-pill" name="doctype" id="doctype" onChange={(e) => setDocType(e.target.value)} placeholder="Passport, CNIC etc." value={doctype} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="docid">Travel Document ID</Label>
            <Input type="text" className="inputField rounded-pill" name="docid" id="docid" onChange={(e) => setDocID(e.target.value)} placeholder="CV123456789" value={doc_id} />
          </FormGroup>
        </Col>
      </Row>
      <br />
      <br />
      <h4>Vaccine Information</h4>
      <br />
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="vac_name">Vaccination Name</Label>
            <Input type="text" className="inputField rounded-pill" name="vac_name" id="vac_name" onChange={(e) => setVacName(e.target.value)} placeholder="SARS-CoV2" value={vacName} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="manufacturer">Manufacturer</Label>
            <Input type="text" className="inputField rounded-pill" name="manufacturer" id="manufacturer" onChange={(e) => setManufacturer(e.target.value)} placeholder="Moderna" value={manufacturer} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="batch">Batch No.</Label>
            <Input type="text" className="inputField rounded-pill" name="batch" id="batch" onChange={(e) => setBatch(e.target.value)} placeholder="BX439J5" value={batch} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="dose">Dose</Label>
            <Input type="text" className="inputField rounded-pill" name="dose" id="dose" onChange={(e) => setDose(e.target.value)} placeholder="Dose" value={dose} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="unit">Dose Unit</Label>
            <Input type="text" className="inputField rounded-pill" name="unit" id="unit" onChange={(e) => setUnit(e.target.value)} placeholder="i.e. ml or g" value={unit} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="valid_till">Validate Till</Label>
            <Input type="date" className="inputField rounded-pill" name="valid_till" id="valid_till" onChange={(e) => setValidTill(e.target.value)} placeholder="" value={validTill} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="boosterdate">Next Booster Date</Label>
            <Input type="date" className="inputField rounded-pill" name="boosterdate" id="boosterdate" onChange={(e) => setNextBoosterDate(e.target.value)} placeholder="" value={nextBoosterDate} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="vaccinatorname">Vaccinator Name</Label>
            <Input type="text" className="inputField rounded-pill" name="vaccinatorname" id="vaccinatorname" onChange={(e) => setVaccinatorName(e.target.value)} placeholder="Dr." value={vaccinatorName} />
          </FormGroup>
        </Col>
      </Row>
      <Button onClick={handleRequest} outline color="danger" className="m-3">Request Certificate</Button>
      <br />
      <br />
      <br />
      <br />
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