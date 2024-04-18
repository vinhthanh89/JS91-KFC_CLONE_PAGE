import { Link, NavLink } from "react-router-dom";
import { PersonCircle, CartFill } from "react-bootstrap-icons";
import { animateScroll as scroll } from "react-scroll";

import "./style.css";
import HamburgerMenu from "../HamburgerMenu";

const Header = ({ cartLocalData }) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };
  return (
    <header>
      <div className="header-container">
        <div className="header-navigation">
          <div className="logo-container">
            <Link onClick={handleClick} to="/" className="logo"></Link>
          </div>
          <div className="navigation">
            <ul className="navigation__menu-bar">
              <li>
                <NavLink onClick={handleClick} to="/order/new-product">
                  THỰC ĐƠN
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="/order/hot-deal">
                  KHUYẾN MÃI
                </NavLink>
              </li>
              <li>
                <NavLink>DỊCH VỤ TIỆC</NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="/he-thong-nha-hang-kfc">
                  HỆ THỐNG NHÀ HÀNG
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <NavLink to="/login">
            <PersonCircle className="header-right--icon" />
          </NavLink>
          <NavLink to="/cart">
            <CartFill onClick={handleClick} className="header-right--icon" />
            <span className="cart-icon-number">{cartLocalData.length}</span>
          </NavLink>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
