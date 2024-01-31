import ProductCard from "../../Components/ProductCard";

const NewProduct = ({data}) => {
    const dataFilter = data.filter((item) => item.kind === "new product");
    const renderData = dataFilter.map((item) => {
      return (
        <div className="productcard--item" key={item.id}>
          <ProductCard props={item} />
        </div>
      );
    });

    return (
        <div className="renderdata-container">
        <div className="title">MÓN MỚI</div>
        <div className="productcard--item-container">{renderData}</div>
      </div>
    )
}

export default NewProduct