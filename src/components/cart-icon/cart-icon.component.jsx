import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="cart-icon-container"
    >
      <ShoppingIcon />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
