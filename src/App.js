import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./components/shop/ShopPage";

import Header from "./components/header/Header";
import SignInAndSignUpPage from "./components/sign-in-and-sign-out/SignInAndSignUpPage";

import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null


componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{ // this is function inside auth library.
    this.setState({currentUser:user}) // this grabs the users data when auth.onAuthStateChanged gives the data of an user that has logged in. Remember with monogodb token needs to be stored somewhere (usually local storage)to authenticate the user however this function does all that automatically.
    console.log(user)
  })
}
componentWillUnmount(){
  this.unsubscribeFromAuth()
}

	render(){
    return (
      <div className="App">
        <Router>
          <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/shop" component={ShopPage} />
              <Route path="/signin" component={SignInAndSignUpPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
