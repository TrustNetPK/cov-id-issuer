import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';

import '../assets/styles/ProofContainer.css';
import Icon from '../assets/images/icons/anim-icon-1.png';
import Success from '../assets/images/success.png';
import ProofForm from '../components/ProofForm';

const ProofContainer = (props) => {
  return (
    <Container className="my-5">
      <Row form>
        <ProofForm data={props.location.state} />
        <Col lg={7} className="text-center proof-left-col">
          <img className="rotate-icon rotate-me" src={Icon} alt="rotate-icon" />
          <img className="text-center w-25" src={Success} alt="proof-banner" />
          <h4 className="ml-md-5 pb-4 mt-4">
            Vaccination Certificate Has Been Issued Successfully
          </h4>
          <p className="ml-md-5 pb-4 mt-2">
            The WeCare University Hospital has successfully issued a digital vaccination certificate. In order to test if this digital certificate can be verified by other authorities, visit Vaccify's vaccination verification demo.
          </p>
          <div className="text-center ">
            <Button className="mt-2" outline color="primary" size="lg" onClick={() => window.open("https://verifier.vaccify.pk", "_blank")} >Try Verifer Demo</Button>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default ProofContainer;
