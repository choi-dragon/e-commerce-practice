import React from "react";

const Content = (props) => {
    return(
	<div className="content">
		<h1 className="title">{props.title}</h1>
		<span className="subtitle">{props.subtitle}</span>
	</div>
    )
}

export default Content;
