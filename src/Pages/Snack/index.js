import ProductCard from "../../Components/ProductCard";

const Snack = ({data , handleAddProductCart}) => {
    const dataFilter = data.filter((item) => item.kind === "snack");
    const renderData = dataFilter.map((item) => {
      return (
        <div className="productcard--item" key={item.id}>
          <ProductCard handleAddProductCart={handleAddProductCart} props={item} />
        </div>
      );
    });

    return (
        <div className="renderdata-container">
        <div className="title">THỨC ĂN NHẸ</div>
        <div className="productcard--item-container">{renderData}</div>
      </div>
    )
}

export default Snack
