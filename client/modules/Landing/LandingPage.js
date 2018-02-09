// import React, { PropTypes } from 'react';
import React from 'react';
// import { connect } from 'react-redux';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

// Import Style
// import styles from './LandingPage.css';
// import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
// import { fetchPost } from '../../PostActions';

export function LandingPage() {
  return (
    <div className="uk-align-center uk-width-1-2">
      <button className="uk-button uk-align-left uk-button-primary uk-margin-small-left uk-margin-small-right" href="#">Post</button>
      <button className="uk-button uk-align-right uk-button-primary uk-margin-small-left uk-margin-small-right" href="#">View</button>
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
