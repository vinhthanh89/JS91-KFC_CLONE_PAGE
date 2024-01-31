import ProductCard from "../ProductCard";

const HotDeal = ({ data }) => {
  const dataFilter = data.filter((item) => item.kind === "hot deal");
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

export default HotDeal;
