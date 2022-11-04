import React from "react";
import "./index.styles.scss";

interface ICategoryItem {
  title: string;
  imageUrl: string;
}

const CategoryItem: React.FC<ICategoryItem> = ({ title, imageUrl }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
