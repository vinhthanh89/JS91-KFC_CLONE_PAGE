import { Link, NavLink } from "react-router-dom";
import {PersonCircle , List} from "react-bootstrap-icons"

import "./style.css";

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
                <NavLink to="/order">Thực Đơn</NavLink>
              </li>
              <li>
                <NavLink>Khuyến Mãi</NavLink>
              </li>
              <li>
                <NavLink>Dịch Vụ Tiệc</NavLink>
              </li>
              <li>
                <NavLink>Hệ Thống Nhà Hàng</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
            <PersonCircle className="icon"/>
            <List className="icon"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
