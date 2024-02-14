import ProductCard from "../../Components/ProductCard";

const HotDeal = ({ data ,handleAddProductCart }) => {
  const dataFilter = data.filter((item) => item.kind === "hot-deal");
  const renderData = dataFilter.map((item) => {
    return (
     <div className="productcard--item" key={item.id}>
        <ProductCard handleAddProductCart={handleAddProductCart} props={item} />
      </div>
    );
  });

  return (
    <div className="renderdata-container">
      <div className="title">ƯU ĐÃI</div>
      <div className="productcard--item-container">{renderData}</div>
    </div>
  );
};

export default HotDeal;
