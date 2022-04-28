import CategoryPreview from "../../components/category-preview/category-preview";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";
import "./categories-preview.scss";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

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
}

export default CategoriesPreview;
