import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import {connect}from 'react-redux'
import {selectSessions} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'
function Directory ({sections}) {
	// We dont need the local state anymore as we are using redux. 
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		sections: [
	// 			{
	// 				title: "hats",
	// 				imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
	// 				id: 1,
	// 				linkUrl: "shop/hats",
	// 			},
	// 			{
	// 				title: "jackets",
	// 				imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
	// 				id: 2,
	// 				linkUrl: "shop/jackets",
	// 			},
	// 			{
	// 				title: "sneakers",
	// 				imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
	// 				id: 3,
	// 				linkUrl: "shop/sneakers",
	// 			},
	// 			{
	// 				title: "womens",
	// 				imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
	// 				size: "large",
	// 				id: 4,
	// 				linkUrl: "shop/womens",
	// 			},
	// 			{
	// 				title: "mens",
	// 				imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
	// 				size: "large",
	// 				id: 5,
	// 				linkUrl: "shop/mens",
	// 			},
	// 		],
	// 	};
	// }
	//render(){
		return (
			<div className="directory-menu">
				{sections.map(({ ...rest }, index) => {
					return <MenuItem key={index} {...rest} />;
				})}
			</div>
		);
	//}
}

const mapStateToProps=createStructuredSelector({
    sections:selectSessions
})


export default connect(mapStateToProps)(Directory);
