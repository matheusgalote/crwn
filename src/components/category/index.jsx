import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../product-card";

import "./index.styles.scss";

const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);

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
