import { SHOW_HIDE_DIV_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_DIV_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart:[...state.cart,action.item],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
