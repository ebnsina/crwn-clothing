import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategories } from "../../store/categories/category.selector";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
