import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_DIV_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showDivCart: false,
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideDivCart = () => {
    dispatch({ type: SHOW_HIDE_DIV_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cart: state.cart,
        addToCart,
        showHideDivCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
