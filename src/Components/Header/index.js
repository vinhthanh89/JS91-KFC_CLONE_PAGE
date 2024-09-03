import { CartFill, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import HamburgerMenu from "../HamburgerMenu";
import "./style.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const cartData = useSelector(state => state.cartData.value)

  useEffect(() => {
    localStorage.setItem("cartRedux", JSON.stringify(cartData));
  }, [cartData]);

  const handleClick = () => {
    scroll.scrollToTop();
  };
  
  return (
    <header>
      <div className="header-container">
        <div className="header-navigation">
          <div className="logo-container">
            <Link onClick={handleClick} to="/JS91-KFC_CLONE_PAGE" className="logo"></Link>
          </div>
          <div className="navigation">
            <ul className="navigation__menu-bar">
              <li>
                <Link onClick={handleClick} to="JS91-KFC_CLONE_PAGE/order/new-product">
                  THỰC ĐƠN
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="JS91-KFC_CLONE_PAGE/order/hot-deal">
                  KHUYẾN MÃI
                </Link>
              </li>
              <li>
                <Link>DỊCH VỤ TIỆC</Link>
              </li>
              <li>
                <Link onClick={handleClick} to="JS91-KFC_CLONE_PAGE/he-thong-nha-hang-kfc">
                  HỆ THỐNG NHÀ HÀNG
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <Link to="JS91-KFC_CLONE_PAGE/login">
            <PersonCircle className="header-right--icon" />
          </Link>
          <Link to="JS91-KFC_CLONE_PAGE/cart">
            <CartFill onClick={handleClick} className="header-right--icon" />
            <span className="cart-icon-number">{cartData.length}</span>
          </Link>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
