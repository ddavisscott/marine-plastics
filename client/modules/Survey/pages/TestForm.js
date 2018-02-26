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

const TestForm = props => {
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

      <h2 className="uk-heading-divider">Survey Area</h2>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Shoreline Location</label>
        <div className="uk-form-controls">
          <Field
            name="shorelineLocation"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Reason For Location Choice</label>
        <div className="uk-form-controls">
          <Field
            name="reasonForLocationChoice"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Substrate Type</label>
        <div className="uk-form-controls">
          <Field
            name="substrateType"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">GPS Coordinates</label>
        <div className="uk-form-controls">
          <Field
            name="latitude"
            component="input"
            type="text"
            placeholder="Latitude"
          />
          <Field
            name="longitude"
            component="input"
            type="text"
            placeholder="Longitude"
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Slope</label>
        <div className="uk-form-controls">
          <Field
            name="slope"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Nearest River Output</label>
        <div className="uk-form-controls">
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
          />
          <Field
            name=""
            component="input"
            type="text"
            placeholder="Distance(m)"
          />
          <Field
            name="directionOfFlow"
            component="input"
            type="text"
            placeholder="Direction of Flow"
          />
          <Field
            name="directionToOuput"
            component="input"
            type="text"
            placeholder="Direction to output"
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Aspect</label>
        <div className="uk-form-controls">
          <Field
            name="aspect"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Weather</label>
        <div className="uk-form-controls">
          <Field
            name="weather"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Tide Info</label>
        <div className="uk-form-controls">
          <Field
            name="tideInfo"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Wind Speed/Direction</label>
        <div className="uk-form-controls">
          <Field
            name="windspeedDirection"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Major Usage</label>
        <div className="uk-form-controls">
          <Field
            name="majorUsage"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">Notes (evidence of cleanup, animals, etc):</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-margin" htmlFor="form-horizontal-text">Survey Type (check all that apply):</label>
        <div>
          <label className="uk-padding-small"><Field name="sStock" component="input" type="radio" value="standingStock"/> Standing Stock </label>
          <label className="uk-padding-small"><Field name="mStock" component="input" type="radio" value="mockStock"/> Mock Standing Stock </label>
          <label className="uk-padding-small"><Field name="aSurvey" component="input" type="radio" value="accumSurvey"/> Accumulation Survey</label>
        </div>
      </div>

      <div className="uk-margin">
        <h2 className="uk-heading-divider">Standing Stock Survey Data:</h2>
      </div>


      <table className="uk-table uk-table-small uk-padding-remove">
        <thead>
          <tr>
            <th></th>
            <th>Transect Rib 1</th>
            <th></th>
            <th>Transect Rib 2</th>
            <th></th>
            <th>Transect Rib 3</th>
            <th></th>
            <th>Transect Rib 4</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="uk-margin">
            <td>Start Point(m)</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="startPoint1"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td></td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="startPoint2"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td></td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="startPoint3"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td></td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="startPoint4"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td></td>
          </tr>

          <tr className="uk-margin">
            <td>Rib Length(m)</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="ribLength1"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td></td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="ribLength2"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td></td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="ribLength3"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td></td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="ribLength4"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th></th>
            <th>Fresh</th>
            <th>Weathered</th>
            <th>Fresh</th>
            <th>Weathered</th>
            <th>Fresh</th>
            <th>Weathered</th>
            <th>Fresh</th>
            <th>Weathered</th>
          </tr>
        </thead>
        <tbody>
          <tr className="uk-margin">
            <td>Cig Butts</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="cigs1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="cigs1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="cigs2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="cigs2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="cigs3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="cigs3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="cigs4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="cigs4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Fishing Line</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fishline1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fishline1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fishline2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fishline2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fishline3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fishline3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fishline4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fishline4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Glass</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="glass1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="glass1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="glass2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="glass2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="glass3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="glass3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="glass4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="glass4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Paper</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="paper1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="paper1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="paper2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="paper2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="paper3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="paper3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="paper4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="paper4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Filmed Plastic</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fplastic1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fplastic1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fplastic2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fplastic2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fplastic3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fplastic3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fplastic4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="fplastic4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Misc. Plastics</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="mplastic1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="mplastic1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="mplastic2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="mplastic2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="mplastic3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="mplastic3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="mplastic4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="mplastic4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Plastic Bottle</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pbottle1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pbottle1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pbottle2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pbottle2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pbottle3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pbottle3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pbottle4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pbottle4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Plastic Cap</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pcap1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pcap1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pcap2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pcap2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pcap3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pcap3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pcap4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="pcap4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Styrofoam</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="styrofoam1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="styrofoam1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="styrofoam2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="styrofoam2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="styrofoam3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="styrofoam3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="styrofoam4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="styrofoam4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr className="uk-margin">
            <td>Wood</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="wood1f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="wood1w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="wood2f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="wood2w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="wood3f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="wood3w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="wood4f"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="wood4w"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
          <tr>
            <td>Micro Debris Survey</td>
            <td>Plastics 0.6-2.5cm</td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="smallPlastics1"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
            <td>Plastics less than 0.6 cm </td>
            <td className="uk-form-controls uk-padding-remove">
              <Field
                size="5"
                name="smallPlastics2"
                component="input"
                type="number"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
      </table>

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

TestForm.propTypes = {

};

// export default surveypage;
export default reduxForm({
  form: 'simple',
})(TestForm);
