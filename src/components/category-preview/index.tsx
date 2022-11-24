import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card";

import "./index.styles.scss";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  
  const navigate = useNavigate();

  const goToProductPage = (title: string) => {
    navigate(title);
  };

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        return (
          <div key={title}>
            <h2 className="title" onClick={() => goToProductPage(title)}>
              {title.toLocaleUpperCase()}
            </h2>
            <div className="grid-cards">
              {categoriesMap[title].map((product: any, index: number) => {
                return (
                  index < 4 && (
                    <ProductCard key={product.id} product={product} />
                  )
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
