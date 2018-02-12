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

export function ProtocolPage() {
  return (
    <div className="prot">
      <h2>Items Required:</h2>
      <p>Device to measure 100 meters (e.g. a foldable 100m long pvc pipe)</p>
      <p>Bag(s)</p>
      <p>Survey (Physical or Virtual)</p>
      <p>Random Number Generator (RNG)</p>
      <h2>Protocol:</h2>
      <p>1. Stake out an area 100 meters in length on the beach</p>
      <p>2. Use RNG to generate 4 unique numbers from 0 to 100</p>
      <p>3. Mark 4 points along the 100 meter line</p>
      <p>4. Jot down pieces of trash within the vicinity of these 4 points</p>
      <p>5. Collect the trash in the bags and dispose of them accordingly</p>
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

ProtocolPage.propTypes = {

};

export default ProtocolPage;
