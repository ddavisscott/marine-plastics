import React from 'react';
import classNames from 'classnames';
// import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
// import bg from '../../header-bk.png';



export function Footer() {
  let footerStyles = classNames(styles.footer);

  return (
    <div className={footerStyles}>
      <p><a href="https://cleanoceansinternational.org/">Clean Oceans International</a></p>
    </div>
  );
}

export default Footer;


// <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
      // <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p>
