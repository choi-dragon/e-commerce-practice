import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../collection-item/CollectionItem";
const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, index) => {
					// this only grabs first four items of each objects.
					return index < 4;
				})
				.map((item, index) => {
					return <CollectionItem key={index} item={item} />;
				})}
		</div>
	</div>
);

export default CollectionPreview;
