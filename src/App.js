import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./components/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./components/sign-in-and-sign-out/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
class App extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		currentUser: null,
	// 	};
	// }

	// above is replaced with redux
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			console.log(userAuth);
			// this is function inside auth library.
			// this.setState({currentUser:user}) // this grabs the users data when auth.onAuthStateChanged gives the data of an user that has logged in. Remember with monogodb token needs to be stored somewhere (usually local storage)to authenticate the user however this function does all that automatically.
			// createUserProfileDocument(userAuth)
			if (userAuth) {
				const userId = await createUserProfileDocument(userAuth);
				userId.onSnapshot((userData) => {
					// onSnapshot is built function in firebase that retrives data associated with the 'id' from the google login.
					// this.setState (// without redux
					// 	{
					// 		currentUser: {
					// 			id: userData.id,
					// 			...userData.data(),
					// 		},
					// 	},
					// 	() => {
					// 		console.log(this.state);
					// 	}
					// );
					setCurrentUser(
						// instead of saving the state locally it is passed to redux store
						{
							id: userData.id,
							...userData.data(),
						}
						// ,
						// () => {
						// 	console.log(this.state);
						// }
					);
				});
			}
			//this.setState({currentUser:userAuth}) -- with out redux
			setCurrentUser(userAuth); // -- with redux
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Header />
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/shop" component={ShopPage} />
							<Route
								path="/signin"
								component={SignInAndSignUpPage}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	// the dispatch function lets the redux know that whatever that is passed in will be "Action" e.g setCurrentUser
	return { setCurrentUser: (user) => dispatch(setCurrentUser(user)) }; // this setCurrentUser returns the Action object taking in the user as a parameter. And this "user" will be passed as "payload" to the userReducer
};

export default connect(null, mapDispatchToProps)(App);
