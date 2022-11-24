import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../product-card";

import { selectCategoriesMap } from '../../store/categories/category.selector'

import "./index.styles.scss";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [products, categoriesMap, category]);

  return (
    products && (
      <div className="container">
        <h2>{category.toUpperCase()}</h2>
        <div className="categories-container">
          <div className="grid-cards">
            {products.map((product, index) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Category;
