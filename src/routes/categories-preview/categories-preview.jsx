import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
