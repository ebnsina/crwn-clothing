import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.config";

export const CategoriesContext = createContext({
  categoryMap: {},
});

const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  const value = { categoryMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoryMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
