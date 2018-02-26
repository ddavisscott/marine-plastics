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

import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';

import TestForm from './TestForm';
import TeamInfo from './TeamInfo';

// import { connect } from 'react-redux';

// const selector = formValueSelector('TestForm');
// const value = selector(state, 'fieldName');

// connect(
  // state => ({
    // firstValue: selector(state, 'first'),
  // })
// )(TestForm)

const testSubmit = values => {
  console.log('something');
  console.log('Trip Leader:');
};

const FormPage = props => {
  return (
    <div>
      <TestForm onSubmit={testSubmit} />
    </div>
  );
};

export default FormPage;
