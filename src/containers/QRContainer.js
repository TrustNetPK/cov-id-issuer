import React, { useState, useEffect } from 'react'
import { Container, Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
import QRComponent from '../components/QRComponent'
import '../assets/styles/LoginContainer.css'
import { SCHEMA_ID, API_SECRET } from '../config/constants'

function QRContainer(props) {
	console.log(props.location, 'Props')
	const [modal, setModal] = useState(false);
	const [show, setShow] = useState(false);
	const [showAuthButton, setAuthButton] = useState(false);
	const [showLoader, setLoader] = useState(false)

	useEffect(() => getConnectionInfo(), []);

	function getConnectionInfo() {
		fetch(`/connections/${props.location.state.data.connection_id}`,
			{
				method: 'GET',
				headers: {
					'X-API-Key': `${API_SECRET}`,
					'Content-Type': 'application/json; charset=utf-8',
					'Server': 'Python/3.6 aiohttp/3.6.2'
				}
			}).then((
				resp => resp.json().then((data => {
					let intervalFunction;
					console.log(data.state === 'invitation', 'Data')
					data.state === "invitation" ? intervalFunction = setTimeout(getConnectionInfo, 5000) : clearIntervalFunction(intervalFunction);
				}))))
	}

	function clearIntervalFunction(intervalFunction) {
		clearInterval(intervalFunction);
		setAuthButton(true);
	}

	function getCredDefId() {
		fetch(`/credential-definitions`,
			{
				method: 'POST',
				headers: {
					'X-API-Key': `${API_SECRET}`,
					'Content-Type': 'application/json; charset=utf-8',
					'Server': 'Python/3.6 aiohttp/3.6.2'
				},
				body: JSON.stringify({
					"support_revocation": false,
					"tag": props.location.state.docID,
					"schema_id": `${SCHEMA_ID}`,
				})
			}).then(resp => resp.json().then((data => issueCredential(data.credential_definition_id))))
	}

	function issueCredential(credential_definition_id) {
		fetch(`/issue-credential/send`,
			{
				method: 'POST',
				body: JSON.stringify({
					"connection_id": props.location.state.data.connection_id,
					"cred_def_id": `${credential_definition_id}`,
					"credential_proposal": {
						"@type": "did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/issue-credential/1.0/credential-preview",
						"attributes": [
							{
								"name": "cred_type",
								"value": "vaccify_demo"
							},
							{
								"name": "vaccine_name",
								"value": props.location.state.vacName
							},
							{
								"name": "manufacturer",
								"value": props.location.state.manufacturer
							},
							{
								"name": "batch_no",
								"value": props.location.state.batch
							},
							{
								"name": "dose",
								"value": props.location.state.dose
							},
							{
								"name": "dose_unit",
								"value": props.location.state.unit
							},
							{
								"name": "validate_from",
								"value": props.location.state.validate_from
							},
							{
								"name": "validate_to",
								"value": props.location.state.validTill
							},
							{
								"name": "next_booster_date",
								"value": props.location.state.nextBoosterDate
							},
							{
								"name": "vaccinator_org",
								"value": props.location.state.vaccinator_org
							},
							{
								"name": "vaccinator_did",
								"value": props.location.state.vaccinator_did
							},
							{
								"name": "vaccinator_name",
								"value": props.location.state.vaccinatorName
							},
							{
								"name": "vaccinator_org_loc",
								"value": props.location.state.vaccinator_org_loc
							},
							{
								"name": "vaccinator_org_type",
								"value": props.location.state.vaccinator_org_type
							},
							{
								"name": "vaccinator_org_logo",
								"value": props.location.state.vaccinator_org_logo
							},
							{
								"name": "first_name",
								"value": props.location.state.firstname
							},
							{
								"name": "last_name",
								"value": props.location.state.lastname
							},
							{
								"name": "dob",
								"value": props.location.state.dob
							},
							{
								"name": "nationality",
								"value": props.location.state.nationality
							},
							{
								"name": "gender",
								"value": props.location.state.gender
							},
							{
								"name": "accreditor_cred_def_id",
								"value": props.location.state.accreditor_cred_def_id
							},
							{
								"name": "id_doc_type",
								"value": props.location.state.doctype
							},
							{
								"name": "doc_id",
								"value": props.location.state.docID
							}
						]
					}
				}),
				headers: {
					'X-API-Key': `${API_SECRET}`,
					'Content-Type': 'application/json; charset=utf-8',
					'Server': 'Python/3.6 aiohttp/3.6.2'
				}
			}).then((resp => props.history.replace('/proof', props.location.state)))
	}

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const toggle = () => {
		setModal(!modal);
		handleShow();
	}
	const issued = () => {
		setModal(!modal)
		handleClose();
		props.history.replace('/vaccination')
	}
	const handleAuthorisation = () => {
		// toggle()
		setLoader(true);
		getCredDefId();

	}

	return (
		<div className="Root" style={{ backgroundColor: '#FCF8F7', display: "flex" }}>
			<Container >
				<Col>
					<QRComponent value={JSON.stringify(props.location.state)} />
				</Col>
				<Col className="mt-3">
					{showAuthButton && !showLoader ?
						<Button outline color="danger" onClick={handleAuthorisation}>Authorise Certificate</Button> : showLoader ? <Spinner /> : null}
				</Col>

				<div>
					<Modal isOpen={modal} toggle={toggle}
						show={show}
						onHide={handleClose}
						backdrop="static"
						keyboard={false} centered>
						<ModalHeader toggle={toggle} closeButton>Vaccination Certificate Information</ModalHeader>
						<ModalBody>This certificate has been issued and authorised.</ModalBody>
						<ModalFooter>
							<Button color="primary" onClick={issued}>OK</Button>{' '}
						</ModalFooter>
					</Modal>
				</div>
			</Container>
		</div>
	);
}

export default QRContainer;