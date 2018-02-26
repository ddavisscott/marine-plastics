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

import { Field, FieldArray, reduxForm } from 'redux-form';

// currently something about header.js misaligns columns in the form I think...

const TeamInfo = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form className="uk-form-horizontal uk-table uk-table-striped uk-margin-large" onSubmit={handleSubmit}>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Date:</label>
        <div className="uk-form-controls">
          <Field
            name="cleanupDate"
            component="input"
            type="date"
            placeholder=""
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Start Time:</label>
        <div className="uk-form-controls">
          <Field
            name="startTime"
            component="input"
            type="time"
            placeholder=""
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Location:</label>
        <div className="uk-form-controls">
          <Field
            name="location"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className="uk-margin">
        <h2 className="uk-heading-divider">Team Info</h2>
        <label className="uk-form-label" htmlFor="form-horizontal-text">Trip Leader</label>
        <div className="uk-form-controls">
          <Field
            name="tripLeader"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Surveyor Name(s)</label>
        <div className="uk-form-controls">
          <Field
            name="surveyorNames"
            component="input"
            type="text"
            placeholder="Surveyor 1"
          />
          <Field
            name="addedSurveyor1"
            component="input"
            type="text"
            placeholder="Surveyor 2"
          />
          <Field
            name="addedSurveyor2"
            component="input"
            type="text"
            placeholder="Surveyor 3"
          />
          <Field
            name="addedSurveyor3"
            component="input"
            type="text"
            placeholder="Surveyor 4"
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Contact Info</label>
        <div className="uk-form-controls">
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="uk-form-submit uk-margin">
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

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

TeamInfo.propTypes = {

};

// export default surveypage;
export default reduxForm({
  form: 'simple',
})(TeamInfo);
