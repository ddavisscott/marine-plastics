import auth0 from 'auth0-js';

export default class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    // this.isLoggedIn = false;
  }

  auth0 = new auth0.WebAuth({
    domain: 'marine-plastics.auth0.com',
    clientID: 'MeGxwCE1JVNy9jsRYPWzqebekosCVRDN',
    redirectUri: 'http://localhost:8000/',
    audience: 'https://marine-plastics.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    // this.auth0.authorize();
    // this.isLoggedIn = true;
    this.handleAuthentication();
  }

  handleAuthentication() {
    // this.auth0.authorize();
    this.auth0.parseHash((err, authResult) => {
      // console.log(authResult);
      console.log('HANDLE AUTHENTICATION~~~~~~~~~~~~~~~~~~~');
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('handleauth success');
        this.setSession(authResult);
        window.location.replace('/');
      } else if (err) {
        window.location.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    console.log('SET SESSION~~~~~~~~~~~~~~~~~~~');
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    window.location.replace('/');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    window.location.replace('/');
    // this.isLoggedOut = false;
  }

  isAuthenticated() {
    if (!this.isLoggedIn) { return false; }
    else {
      return new Date().getTime() < expiresAt;
    }
    // Check whether the current time is past the 
    // Access Token's expiry time
    // let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
  }
}
