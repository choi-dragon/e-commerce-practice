import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux"; // this function is need to connecto Redux Store
// it is use as e.g: export default connect(param1,param2)(Header) the param in this case will take in a function that allows you to get access to the state or reducer (to be exact) in store.
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

function Header({ currentUser, hidden }) {
	// this currentUser value is retrived from redux through the function "mapStateToProps" in the page below
	return (
		<div className="header">
			<Link to="/"></Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
}
//------------original ver-------------------//
// const mapStateToProps = (state) => {
// 	// this param state actually represents rootReducer.
// 	return { currentUser: state.user.currentUser };
// };

//------------destructured ver-----------------//
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => { // this is a function to get the value from redux. This is same as this.state.currentUser or this.state.hidden
	// this param state actually represents rootReducer.
	return { currentUser, hidden };
};

export default connect(mapStateToProps)(Header);
