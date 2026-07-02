import { EDIT_ITEM_IN_CART } from "../actions/CartActions";

const initialState = {
    cart: []
};

function isItemInCart(cart, itemId) {
    return cart.some(item => item.id === itemId);
}

/*
*Change la quantité d'un objet dans le cart.
Gère l'ajout et le retrait des articles du cart.

**NB 
* Avec le store il serai plus lisible de faire plusieurs petite action qu'une seule grosse
***
*/

export default function CartReducer(state = initialState, action) {

    switch (action.type) {

        case EDIT_ITEM_IN_CART: {

            const { itemId, deltaUnits } = action.payload;

            const cart = state.cart;

            const newCart = isItemInCart(cart, itemId)

                ? cart
                    .map(item =>
                        item.id === itemId
                            ? {
                                  ...item,
                                  units: item.units + deltaUnits
                              }
                            : item
                    )
                    .filter(item => item.units > 0)

                : deltaUnits > 0

                    ? [...cart, { id: itemId, units: 1 }]

                    : cart;

            return {
                ...state,
                cart: newCart
            };
        }

        default:
            return state;
    }
}