import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import CartItem from "../cart-item/cart-item";
import Button from "../common/button/button";
import "./cart-dropdown.style.jsx";
import { CartDropdownContainer, EmptyMessage } from "./cart-dropdown.style.jsx";

function CartDropdown() {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty!</EmptyMessage>
        )}
      </div>
      <Button onClick={gotoCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
