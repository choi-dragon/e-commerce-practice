import React from "react";

import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignIn, ...rest }) {
    console.log(children)
	return (
		<button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...rest}>
			{children}
		</button>
	);
}

export default CustomButton;
