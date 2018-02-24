import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Image
import background from './nat_bridges.jpg';

// Import Actions

export function LandingPage() {
  const background_image = {
    backgroundImage: `url(${background})`,
    height: `80vh`,
  };
  const textButtonStyles = {
    width: `fit-content`,
    margin: `auto`,
  }

  return (
    <div className="uk-width-medium-1-1">
      <div className="uk-flex uk-flex-middle uk-flex-center uk-background-cover" style={background_image}>
        <div className="uk-background-default uk-flex uk-flex-column uk-padding">
          <button className="uk-button uk-button-primary uk-button-large uk-margin-medium-bottom">
            Sign Up
          </button>
          <button className="uk-button uk-button-text" style={textButtonStyles}>
            <Link className="uk-link-reset" to="/test">Continue as Guest</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

LandingPage.propTypes = {};

export default LandingPage;
