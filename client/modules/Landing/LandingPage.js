// import React, { PropTypes } from 'react';
import React from 'react';
// import { connect } from 'react-redux';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

// Import Style
// import styles from  './LandingPage.css';

// Import Image
import background from './nat_bridges.jpg';

// Import Actions
// import { fetchPost } from '../../PostActions';

export function LandingPage() {
  const background_image = {
    backgroundImage: `url(${background})`,
    height: `550px`,
  }; 
  const div_height = {
    height: `100%`,
  }
  return (
    <div className="uk-width-medium-1-1 uk-row-first">
      <div className="uk-background-cover uk-text-center" style={background_image}>
          <div className="uk-flex-middle uk-flex-center uk-flex" style={div_height}>
            <button className="uk-button-large uk-button-primary uk-text-bold uk-margin-medium-right" href="#">Post</button>
            <button className="uk-button-large uk-button-primary uk-text-bold" href="#">View</button>
          </div>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
// PostDetailPage.need = [params => {
//   return fetchPost(params.cuid);
// }];

// Retrieve data from store as props
// function mapStateToProps(state, props) {
//   return {
//     post: getPost(state, props.params.cuid),
//   };
// }

LandingPage.propTypes = {

};

export default LandingPage;
