// import React, { PropTypes } from 'react';
import React from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

// Import Style
// import styles from  './SamplePage.css';

// Import Actions
// import { fetchPost } from '../../PostActions';

export function SamplePage() {
  return (
    <div className="uk-width-medium-1-1 uk-row-first uk-padding">
      <h2 className="uk-heading-line uk-text-center"><span>Test Location</span></h2>
      <img className="uk-width-1-1" style={{ maxHeight: `150px` }} src={"https://datavizcatalogue.com/methods/images/top_images/line_graph.png"}/>
      <div className="uk-flex uk-flex-between uk-margin">
        <ul className="uk-accordion uk-width-1-2">
          <li>
            <a className="uk-accordion-title" href="#">Sampling Area</a>
            <div className="uk-accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in velit venenatis, eleifend arcu nec, sollicitudin purus. Morbi faucibus ante eros, at suscipit nunc ornare eu. Nunc ultricies orci et semper vestibulum. Nam diam odio, tincidunt vel tincidunt in, vehicula aliquam nunc. Curabitur consequat dui at convallis dapibus.</div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">Shoreline Characteristics</a>
            <div className="uk-accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in velit venenatis, eleifend arcu nec, sollicitudin purus. Morbi faucibus ante eros, at suscipit nunc ornare eu. Nunc ultricies orci et semper vestibulum. Nam diam odio, tincidunt vel tincidunt in, vehicula aliquam nunc. Curabitur consequat dui at convallis dapibus.</div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">Land-Use Characteristics</a>
            <div className="uk-accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in velit venenatis, eleifend arcu nec, sollicitudin purus. Morbi faucibus ante eros, at suscipit nunc ornare eu. Nunc ultricies orci et semper vestibulum. Nam diam odio, tincidunt vel tincidunt in, vehicula aliquam nunc. Curabitur consequat dui at convallis dapibus.</div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">Notes</a>
            <div className="uk-accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in velit venenatis, eleifend arcu nec, sollicitudin purus. Morbi faucibus ante eros, at suscipit nunc ornare eu. Nunc ultricies orci et semper vestibulum. Nam diam odio, tincidunt vel tincidunt in, vehicula aliquam nunc. Curabitur consequat dui at convallis dapibus.</div>
          </li>
        </ul>
        <div className="uk-width-1-3">
          <div className="uk-card uk-card-body uk-background-muted uk-margin-medium">
              <h3 className="uk-card-title">Location</h3>
              <img src={"https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg"}/>
          </div>
          <div className="uk-card uk-card-body uk-background-muted uk-margin-medium">
              <h3 className="uk-card-title">Site Photos</h3>
              <img src={"https://static.pexels.com/photos/88212/pexels-photo-88212.jpeg"}/>
          </div>
          <div className="uk-card uk-card-body uk-background-muted uk-margin-medium">
              <h3 className="uk-card-title">Entries</h3>
              <ul>
                <li>
                 <a href="#">2/14/2018 - Clean Oceans Institute</a>
               </li>
               <li>
                 <a href="#">12/5/2017 - Clean Oceans Institute</a>
               </li>
               <li>
                 <a href="#">4/18/2010 - Clean Oceans Institute</a>
               </li>   
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// TODO
// function accordionOnClick() {
//   return true;
// }

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

SamplePage.propTypes = {

};

export default SamplePage;
