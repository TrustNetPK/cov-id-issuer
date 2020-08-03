import React from 'react';
import { Button } from 'reactstrap';
import bannerImg from '../assets/images/banner-img-1.png'
import '../assets/styles/JumbotronComponent.css'

const JumbotronComponent = () => {
  return (
    <header>
      <div class="pt-5 container-fluid text-center" >

        <div class="row" >
          <div class="col-md-7 col-sm-12">
            <h1>Issue Vaccination Certificates</h1>
            <p>
              Vaccination certificates made reliable and easy.
            </p>
            <p className="lead">
              This demo shows how an institution can issue a digital verifiable immunity certificates to a person.</p>
            <Button className="mt-2" outline color="danger" size="lg" onClick={() => window.open("https://vaccify.pk", "_blank")} >Learn More</Button>
          </div>
          <div class="col-md-5 col-sm-12">
            <img src={bannerImg} alt="CovidPerson" />
          </div>
        </div>
      </div>
    </header>
  );
};


export default JumbotronComponent;