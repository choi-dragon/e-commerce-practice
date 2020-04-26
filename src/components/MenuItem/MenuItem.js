import React from "react";
import Content from "./Content";
import {withRouter} from 'react-router-dom'
function MenuItem({size, imageUrl, linkUrl, history, title, match}) {
	return (
		<div className={`menu-item ${size}`}
		onClick={()=>history.push(`${match.url}${linkUrl}`)}
		>
            <div
            className='background-img'
            style={{ backgroundImage: `url(${imageUrl})` }} />
			<Content title={title.toUpperCase()} subtitle="SHOP NOW" />
		</div>
	);
}
export default withRouter(MenuItem);
