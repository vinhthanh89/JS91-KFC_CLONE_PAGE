import ProductCard from "../../Components/ProductCard";

const BurgerRicePasta = ({ data }) => {
  const dataFilter = data.filter((item) => item.kind === "burger-rice-pasta");
  const renderData = dataFilter.map((item) => {
    return (
      <div className="productcard--item" key={item.id}>
        <ProductCard props={item} />
      </div>
    );
  });

  return (
    <div className="renderdata-container">
      <div className="title">BURGER - CƠM - MÌ Ý</div>
      <div className="productcard--item-container">{renderData}</div>
    </div>
  );
};

export default BurgerRicePasta;
