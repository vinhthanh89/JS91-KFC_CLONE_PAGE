import ProductCard from "../../Components/ProductCard";

const ComboSharing = ({data}) => {
    const dataFilter = data.filter((item) => item.kind === "combo sharing");
    const renderData = dataFilter.map((item) => {
      return (
        <div className="productcard--item" key={item.id}>
          <ProductCard props={item} />
        </div>
      );
    });

    return (
        <div className="renderdata-container">
        <div className="title">COMBO NHÓM</div>
        <div className="productcard--item-container">{renderData}</div>
      </div>
    )
}

export default ComboSharing