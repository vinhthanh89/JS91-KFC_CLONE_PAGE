import ProductCard from "../../Components/ProductCard";

import "./style.css"

const FriedChicken = ({ data }) => {
  const dataFilter = data.filter((item) => item.kind === "fried chicken");
  const renderData = dataFilter.map((item) => {
    return (
      <div className="productcard--item" key={item.id}>
        <ProductCard props={item} />
      </div>
    );
  });

  return (
    <div className="renderdata-container">
      <div className="title">GÀ RÁN - GÀ QUAY</div>
      <div className="productcard--item-container">{renderData}</div>
    </div>
  );
};

export default FriedChicken;
