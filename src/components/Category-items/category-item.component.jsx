import React from "react";
import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="category__container">
      <div
        className="category__backgroundImage"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category__bodyContainer">
        <h2 className="category__bodyTitle">{category.title} </h2>
        <p className="category__subTitle">Shop Now </p>
      </div>
    </div>
  );
};

export default CategoryItem;
