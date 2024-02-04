import ProductCard from "../../Components/ProductCard";

const DesserDrink = ({data}) => {
    const dataFilter = data.filter((item) => item.kind === "dessert-drink");
    const renderData = dataFilter.map((item) => {
      return (
        <div className="productcard--item" key={item.id}>
          <ProductCard props={item} />
        </div>
      );
    });

    return (
        <div className="renderdata-container">
        <div className="title">THỨC UỐNG & TRÁNG MIỆNG</div>
        <div className="productcard--item-container">{renderData}</div>
      </div>
    )
}

export default DesserDrink
