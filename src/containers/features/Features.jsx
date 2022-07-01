import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Responsive Design',
    text: 'We would ensure that your site would be responsive to fit all media devices',
  },
  {
    title: 'Memorable User Experience',
    text: 'Our designs are such that the users of your site would get the best experience by providing your with an optimized website',
  },
  {
    title: 'Unique Appearance',
    text: 'We tailor  websites to suit your business needs with unique designs that can only be identified with you and your business alone',
  },
  {
    title: 'Secure and Safe',
    text: 'We place security top on our list while providing our clients with the most responsive and user-friendly websites. Safe and secure hosting environments that provides 24hrs all round security',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future of your business is in your hands !
        </h1>
        <p>
          Contact us today to get your business that facelift you have always
          dreamed of...
        </p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
