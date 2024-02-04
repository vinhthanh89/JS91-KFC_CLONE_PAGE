import { Link, NavLink } from "react-router-dom";
import {PersonCircle} from "react-bootstrap-icons"

import "./style.css";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-navigation">
          <div className="logo-container">
            <Link to="/" className="logo"></Link>
          </div>
          <div className="navigation">
            <ul className="navigation__menu-bar">
              <li>
                <NavLink to="/order/new-product">THỰC ĐƠN</NavLink>
              </li>
              <li>
                <NavLink to="/order/hot-deal">KHUYẾN MÃI</NavLink>
              </li>
              <li>
                <NavLink >DỊCH VỤ TIỆC</NavLink>
              </li>
              <li>
                <NavLink to="/he-thong-nha-hang-kfc">HỆ THỐNG NHÀ HÀNG</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
            <PersonCircle className="icon"/>
            <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
