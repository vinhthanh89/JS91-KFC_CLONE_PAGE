import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Card } from "antd";

import "./style.css";

const HomePageCategory = ({orderData}) => {
  const { Meta } = Card;
  const navigative = useNavigate();

  const handleClick = (param) => {
    navigative(param);
    scroll.scrollToTop();
  };

  const renderCategoryCard = orderData.map((category) => {
    return (
      <div
        onClick={() => handleClick(category.navigative)}
        className="category item"
        key={category.id}
      >
        <Card cover={<img alt="example" src={`${category.image}`} />}>
          <Meta title={`${category.title} >`} />
        </Card>
      </div>
    );
  });

  return (
    <div className="foodcategory-container">
      <div className="category-title">
        <span>DANH MỤC MÓN ĂN</span>
      </div>
      <div className="foodcategory__card-container">{renderCategoryCard}</div>
    </div>
  );
};

export default HomePageCategory;
