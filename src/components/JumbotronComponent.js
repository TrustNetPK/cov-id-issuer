import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const JumbotronComponent = () => {
  return (
    <div>
      <Jumbotron fluid>
          <Container fluid className="pt-2 pl-5 pr-5">
        <h1 className="display-3 text-break">An Immunised World!</h1>
        <p className="lead">This is what we believe at Vaccify.
        </p>
        <p className="lead">
        We enable you to hold digital verifiable immunity certificates in your mobile.</p>
        <hr className="my-2" />
        <p>Seems interesting? Are you with us?</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;