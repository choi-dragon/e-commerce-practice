import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import CheckOut from './components/checkout/CheckOut'
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
			setCurrentUser(userAuth); // -- with redux. This is necessary when user logs out and userAuth becomes 'null' the currentUser will store the value of null
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
							<Route path="/shop" component={ShopPage} />
							<Route exact path='/checkout' component={CheckOut}/>
							<Route
								exact
								path="/signin"
								render={() => {
									return this.props.currentUser ? ( // what this will do if if currentUser is not 'null' it will redirect the page to the home page
										<Redirect to="/" />
									) : (
										<SignInAndSignUpPage />
									);
								}}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => { // this is a function to get the value from redux
	// this grabs the user state or userReducer from redux rootReducer. This needs to be passed to connect() at the bottom of the page.
	// Just to make note this will be passed as props 
	// So to access the currentUser it will be this.props.currentUser.
	return { currentUser: user.currentUser };
}; 
// above can be changed with reselector but I have decided not to because I need to know how the basic level look like without implementing selectors. 

const mapDispatchToProps = (dispatch) => { // this is a function that allows changes in the state
	// the dispatch function lets the redux know that whatever that is passed in will be "Action" e.g setCurrentUser.
	//NOTE:This needs to be passed to connect() at the bottom of the page
	// Just to make note this will be passed as props 
	// So to access the currentUser it will be--> this.props.currentUser.
	return { setCurrentUser: (user) => dispatch(setCurrentUser(user)) }; // this setCurrentUser returns the Action object taking in the user(this is just a parameter) as a parameter. And this "user" will be passed as "payload" to the userReducer.
	// this step is necessary to use the function setCurrentUser()
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
