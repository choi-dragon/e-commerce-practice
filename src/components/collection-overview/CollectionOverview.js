import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/CollectionPreview";
import "./CollectionOverview.scss";
import { selectCollections } from "../../redux/shop/shop.selector";
function CollectionOverview({ collections }) {
	return (
		<div className="collection-overview">
			{collections.map(({ ...rest }, index) => {
				return <CollectionPreview key={index} {...rest} />;
			})}
		</div>
	);
}
const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
