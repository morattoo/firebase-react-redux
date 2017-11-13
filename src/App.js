import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import Firebase from 'firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {user: null};

    this.handleClickConnexion = this.handleClickConnexion.bind(this);
    this.handleClickDeConnexion = this.handleClickDeConnexion.bind(this);
  }

  handleClickConnexion() {
    var provider = new Firebase.auth.GoogleAuthProvider();

    Firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      console.log("user logIn:" + result.user.displayName);
    }).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      // The email of the user's account used.
      //var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      //var credential = error.credential;
      // ...
      console.log("user logIn Error:" + error );
    });
  }

  handleClickDeConnexion() {
    Firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("user logOut:");
    }).catch(function(error) {
      // An error happened.
      console.log('log out Error')
    });
  }

  renderLogin() {
    if(this.state.user) {
      return(<div>
              <p>{ this.state.user.displayName}</p>
              <p>{ this.state.user.email}</p>
              <button onClick={this.handleClickDeConnexion}>Deconnexion google</button>
            </div>)
    } else {
      return(<button onClick={this.handleClickConnexion}>connnexion google</button>);
    }
  }

  componentWillMount() {
    Firebase.auth().onAuthStateChanged(function(user) {
        // Take user for setState
        this.setState({user: user});
    }.bind(this));
  }


  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href=".">Ecommerce</a>
              {this.renderLogin()}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
