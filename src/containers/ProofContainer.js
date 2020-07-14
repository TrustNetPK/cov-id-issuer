import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import '../assets/styles/ProofContainer.css';
import Icon from '../assets/images/icons/anim-icon-1.png';
import BannerImg from '../assets/images/banner-img-1.png';
import ProofForm from '../components/ProofForm';

const ProofContainer = (props) => {
  return (
    <Container className="my-5">
      <Row form>
        <ProofForm data={props.location.state} />
        <Col lg={7} className="text-center proof-left-col">
          <img className="rotate-icon rotate-me" src={Icon} alt="rotate-icon" />
          <img className="text-center w-25" src={BannerImg} alt="proof-banner" />
          <h4 className="ml-md-5 pb-4 mt-4">
            Vaccination Certificate Has Been Issued Successfully
          </h4>
          <p className="ml-md-5 pb-4 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProofContainer;
