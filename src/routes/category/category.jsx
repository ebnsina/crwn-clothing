import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="category-container">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Category;
