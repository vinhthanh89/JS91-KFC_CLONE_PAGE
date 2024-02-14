import { NavLink } from "react-router-dom"

import "./style.css"

const EmtyCart = () => {
    return (
        <div className="emtycart-test--section">
                <div className="emtycart-test--section-content">
                <h2>GIỎ HÀNG CỦA BẠN ĐANG TRỐNG .</h2>
                <h2>HÃY ĐẶT MÓN NGAY!</h2>
                <NavLink to="/order/new-product"><button className="cart-button">Bắt đầu đặt hàng</button></NavLink>               
                </div>
            </div>
    )
}

export default EmtyCart