import React from "react";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSumbit = (e) => {
		e.preventDefault();
		this.setstate({ email: "", password: "" });
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						name="email"
						type="email"
						value={this.state.email}
						required
						label="EMAIL"
					/>
					<FormInput
						handleChange={this.handleChange}
						name="password"
						type="password"
						value={this.state.password}
						required
						label="PASSWORD"
					/>
					<div className='buttons'>
						<CustomButton type="submit"> sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;