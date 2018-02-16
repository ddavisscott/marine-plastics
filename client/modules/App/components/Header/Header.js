import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export function Header(props, context) {
  return (
    <nav className={
        classNames(
          "uk-navbar-container", 
          "uk-navbar-transparent", 
          "uk-margin-bottom-small"
        )
      }>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-logo">
            <Link to="/" >
              <h1 className="uk-text-large uk-margin-remove-bottom">
                Marine Plastics Monitor
              </h1>
            </Link>
          </li>
          <li>
            <Link to="/landing">Landing</Link>
          </li>
          <li>
            <Link to="/test">Test Page</Link>
          </li>
        </ul>
        {
          context.router.isActive('/', true)
            ? <a href="#" className="uk-button uk-button-primary" onClick={props.toggleAddPost}>Add Post</a>
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
};

export default Header;
