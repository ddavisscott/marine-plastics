import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styles from '/Users/guitavahdatinia/Desktop/Marine Plastics/marineplastics/src/style.css';
// Insert the link in the #
class Application extends React.Component {  render() {
    return (
      <div>
        <button className="largebutton" onclick="window.location='https://www.google.com/';">Post</button>
        <button className="largebutton" onclick="window.location='#';">View</button>
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('content'));
