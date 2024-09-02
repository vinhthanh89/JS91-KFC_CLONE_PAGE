
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Card } from "antd";

import "./style.css";
import { useSelector } from "react-redux";

const HomePageCategory = () => {
  const reduxOrderData = useSelector(state => state.orderData.value)
  const { Meta } = Card;
  const navigative = useNavigate();

  const handleClick = (param) => {
    navigative(param);
    scroll.scrollToTop();
  };
  
  const renderCategoryCard = reduxOrderData.map((category) => {
    return (
      <div
        onClick={() => handleClick(`order/${category.navigative}`)}
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
