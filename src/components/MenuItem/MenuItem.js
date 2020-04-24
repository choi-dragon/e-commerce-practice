import React from "react";
import Content from "./Content";
function MenuItem(props) {
	return (
		<div className={`menu-item ${props.size}`}>
            <div
            className='background-img'
            style={{ backgroundImage: `url(${props.imageUrl})` }} />
			<Content title={props.title.toUpperCase()} subtitle="BUY NOW" />
		</div>
	);
}
export default MenuItem;
