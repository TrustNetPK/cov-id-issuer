import React from 'react';
import { Button } from 'reactstrap';
import bannerImg from '../assets/images/banner-img-1.png'
import bg from '../assets/images/shape/shape-3.png';

import './css/JumbotronComponent.css';

const JumbotronComponent = () => {
  return (
    <header>
      <div class="container-fluid text-center">

        <div class="row" style={{ backgroundImage: `url(${bg})` }}>
          <div class="col-md-7 col-sm-12 ">
            <h1>An Immunised World!</h1>
            <p>
              This is what we believe at Vaccify.
            </p>
            <p className="lead">
              We enable you to hold digital verifiable immunity certificates in your mobile.</p>
            <Button className="mt-2" outline color="danger" size="lg" >Learn More</Button>
          </div>
          <div class="col-md-5 col-sm-12  h-25">
            <img src={bannerImg} alt="CovidPerson" />
          </div>
        </div>
      </div>
    </header>
  );
};


export default JumbotronComponent;