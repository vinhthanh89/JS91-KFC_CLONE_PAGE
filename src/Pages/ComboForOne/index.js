import ProductCard from "../../Components/ProductCard";

const ComboForOne = ({data}) => {
    const dataFilter = data.filter((item) => item.kind === "combo-for-one");
    const renderData = dataFilter.map((item) => {
      return (
        <div className="productcard--item" key={item.id}>
          <ProductCard props={item} />
        </div>
      );
    });

    return (
        <div className="renderdata-container" id="comboforone">
        <div className="title">COMBO 1 NGƯỜI</div>
        <div className="productcard--item-container">{renderData}</div>
      </div>
    )
}

export default ComboForOne
