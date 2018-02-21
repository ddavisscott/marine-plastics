import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

export function Header(props, context) {
  return (<nav className={classNames("uk-navbar-container", "uk-navbar-transparent", "uk-margin-bottom-small")}>

    <div className="uk-navbar-left uk-visible@m">
      <ul className="uk-navbar-nav">
        <li className="uk-logo">
          <Link to="/">
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
        {
          // props.auth.isAuthenticated()
          //   ? <button onClick={props.auth.logout} className="uk-button uk-button-primary">Log Out</button>
          //   : <button onClick={props.auth.login} className="uk-button uk-button-primary">Log In</button>
        }
      </ul>
      {
        context.router.isActive('/', true)
          ? <a href="#" className="uk-button uk-button-primary" onClick={props.toggleAddPost}>Add Post</a>
          : null
      }
    </div>

    <div className="uk-navbar-left uk-visible@s uk-hidden@m">
      <ul className="uk-navbar-nav">
        <li className="uk-logo">
          <Link to="/">
            <h1 className="uk-text-small uk-margin-remove-bottom">
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
        {
          // props.auth.isAuthenticated()
          //   ? <button onClick={props.auth.logout} className="uk-button uk-button-primary">Log Out</button>
          //   : <button onClick={props.auth.login} className="uk-button uk-button-primary">Log In</button>
        }
      </ul>
      {
        context.router.isActive('/', true)
          ? <a href="#" className="uk-button uk-button-primary" onClick={props.toggleAddPost}>Add Post</a>
          : null
      }
    </div>
    <div className="uk-navbar-left uk-hidden@s">
      <ul className="uk-navbar-nav">
        <li className="uk-logo">
          <Link to="/">
            <h1 className="uk-text-small uk-margin-remove-bottom">
              Marine Plastics Monitor
            </h1>
          </Link>
        </li>
        
          <div className="uk-nav uk-dropdown-nav">
              <li>
                <Link to="/landing">Landing</Link>
              </li>
              <li className="uk-nav-divider"></li>
              <li>
                <Link to="/test">Test Page</Link>
              </li>

            </div>

        {
          // props.auth.isAuthenticated()
          //   ? <button onClick={props.auth.logout} className="uk-button uk-button-primary">Log Out</button>
          //   : <button onClick={props.auth.login} className="uk-button uk-button-primary">Log In</button>
        }
      </ul>
      {
        context.router.isActive('/', true)
          ? <a href="#" className="uk-button uk-button-primary" onClick={props.toggleAddPost}>Add Post</a>
          : null
      }
    </div>

  </nav>);

}

Header.contextTypes = {
  router: React.PropTypes.object
};

Header.propTypes = {
  // isAuthenticated: PropTypes.func.isRequired,
  // login: PropTypes.func.isRequired,
  // logout: PropTypes.func.isRequired,
  toggleAddPost: PropTypes.func.isRequired
};

export default Header;
