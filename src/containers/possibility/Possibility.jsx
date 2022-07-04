import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.jpg';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Knockoff Your Competitors by Placing a call to us today !!!</h4>
        <h1 className="gradient__text">
          There would be an unimaginary positive shift in your business
        </h1>
        <p>
          We have handled businesses in diverse areas from real estate,
          ecommerce, finance, personal portfolio, hotel management, to games.
          Our experts are always available to provide that necessary visual
          looks to your imaginary virtual office.
        </p>
        <h4>
          Request for our service to get access to our 10% discount on every
          services rendered...
        </h4>
      </div>
    </div>
  );
};

export default Possibility;
