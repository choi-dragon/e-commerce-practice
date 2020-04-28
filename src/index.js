import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'
import { Provider } from "react-redux";
// this provider function of react-redux library let you access the 'store'(which stores all the states) and "Reducers". 
// Three libraries are needed to use react: redux, redux-logger,react-redux. 
// Above can be installed with npm in terminal
ReactDOM.render(
	<Provider store={store}> 
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
