import { createSelector } from "reselect";

const selectShop = (state) => {
	return state.shop;
};

export const selectCollections = createSelector([selectShop], (shop) => {
	return shop.collections;
});
//------------Not too sure whether below is necessary but did it anyway -----//
const CATEGORY_ID = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5,
};

export const selectCategory = (categoryId) => {
	return createSelector([selectCollections], (collections) => {
		return collections.find((collection) => {
			return collection.id === CATEGORY_ID[categoryId];
		});
	});
};
