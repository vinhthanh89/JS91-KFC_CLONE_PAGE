import {Link} from "react-router-dom"

const ProductCard = () => {
    return (
        <div className="productcard-container">
            <div className="productcard__image">
                <div className="productcard__image-container">
                    <img src="https://static.kfcvietnam.com.vn/images/items/xs/Combo-86-tet.jpg?v=Z461pL" alt="" />
                </div>
            </div>
            <div className="productcard__info">
                <div className="productcard__info-container">
                    <div className="productcard__info--title">
                        <div className="info--title">
                            <Link><span>Combo Sung Tuc</span></Link>
                        </div>
                        <div className="info--price">
                            <span>90000</span>
                        </div>
                    </div>
                    <div className="productcard__info--des">
                        <div className="info--des">
                            <p>2 Miếng Gà Rán + 1 Khoai Tây Múi Cau (vừa) + 1 lon Pepsi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard