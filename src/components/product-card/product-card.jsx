import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Button, { BUTTON_TYPE_CLASSES } from "../common/button/button";
import "./product-card.scss";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
