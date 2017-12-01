import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Firebase from 'firebase';
import store from './store';
import { Provider } from 'react-redux';

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


ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));
        
registerServiceWorker();
