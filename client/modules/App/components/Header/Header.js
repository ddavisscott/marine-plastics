import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
// import styles from './Header.css';

export function Header(props, context) {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );

  return (
    <nav className="uk-navbar-container uk-navbar-transparent">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-logo">
            <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
          </li>
          <li><Link to="/landing">Landing</Link></li>
          <li><Link to="/protocol">Protocol</Link></li>
        </ul>
        {
          context.router.isActive('/', true)
            ? <a href="#" className="uk-button uk-button-primary" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
      </div>
    </nav>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  // intl: PropTypes.object.isRequired,
};

export default Header;
