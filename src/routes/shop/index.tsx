import { Routes, Route } from "react-router-dom";
import Category from "../../components/category";
import CategoriesPreview from "../../components/category-preview";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
