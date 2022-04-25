import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import "./category-preview.scss";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
