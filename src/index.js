import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Firebase from 'firebase';

/* Firebase Initialize */
var config = {
    apiKey: "AIzaSyAXd6_pp_jEOIRvL1nURYOgwCr4QKiU8z0",
    authDomain: "partyoutube.firebaseapp.com",
    databaseURL: "https://partyoutube.firebaseio.com",
    projectId: "partyoutube",
    storageBucket: "partyoutube.appspot.com",
    messagingSenderId: "801816501460"
  };

Firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
