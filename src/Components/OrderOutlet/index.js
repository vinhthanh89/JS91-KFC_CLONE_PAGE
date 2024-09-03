import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import "./style.css";

const OrderOutlet = ({ category }) => {
  const foodData = useSelector(state => state.foodData.value)

  const dataFilter = foodData.filter((item) => item.kind === category.navigative);
  const renderData = dataFilter.map((item) => {
    return (
      <div className="productcard--item" key={item.id}>
        <ProductCard
         props={item} />
      </div>
    );
  });

  return (
    <div className="renderdata-container">
      <div className="title">{category.title}</div>
      <div className="productcard--item-container">{renderData}</div>
    </div>
  );
};

export default OrderOutlet;
