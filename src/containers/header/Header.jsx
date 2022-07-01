import React from 'react';
import './header.css';
import headerImage from '../../assets/header_image.jpeg';
import people from '../../assets/people.png';
import back from '../../assets/2.jpg';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Get Your Business Running With An Amazing Virtual Office
        </h1>
        <p>
          A good presentation is the first impression that you give to your
          clients. Do you have that business that you want to give a face lift ?
          We are here to do just that for you. With a responsive and
          user-friendly website for you business, you can achieve that excellent
          virtual office to give you business a whole new look. Kindly send us
          an email to get started
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>500+ Clients spread all over the world...</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={back} alt="Web development banner" />
      </div>
    </div>
  );
};

export default Header;
