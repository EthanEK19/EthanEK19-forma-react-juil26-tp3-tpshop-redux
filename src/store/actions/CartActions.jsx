// actions/cartActions.js

export const EDIT_ITEM_IN_CART = "EDIT_ITEM_IN_CART";

export function editItemInCart(itemId, deltaUnits) {
    return {
        type: EDIT_ITEM_IN_CART,
        payload: {
            itemId,
            deltaUnits
        }
    };
}