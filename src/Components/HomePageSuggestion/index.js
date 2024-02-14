import Slider from "react-slick";

import "./style.css";
import ProductCard from "../ProductCard";

const HomePageSuggestion = ({ data ,handleAddProductCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const dataFilter = data.filter((item) => item.kind === "combo-for-one");
  const renderData = dataFilter.map((item) => {
    return (
      <div className="productcard--item" key={item.id}>
        <ProductCard handleAddProductCart={handleAddProductCart} props={item} />
      </div>
    );
  });

  return (
    <div className="suggestion-container">
      <div className="category-title">
        <span>CÓ THỂ BẠN SẼ THÍCH</span>
      </div>
      <div className="suggestionslider-container">
        <Slider {...settings}>{renderData}</Slider>
      </div>
    </div>
  );
};

export default HomePageSuggestion;
