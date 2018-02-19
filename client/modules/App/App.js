import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

// Import Authentication
import Auth from '../../auth';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
    this.auth = new Auth();
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    this.auth.handleAuthentication();
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.39/css/uikit.min.css" />
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div className="uk-container uk-container-center">
          <Helmet
            title="Marine Plastics Monitor"
            titleTemplate="%s"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            auth={this.auth}
            isLoggedIn={this.state.isLoggedIn}
            login={this.login}
            logout={this.logout}
            toggleAddPost={this.toggleAddPostSection}
          />
          <div className="uk-grid">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
