import { NavLink as RouterNavLink , Link} from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

import "./style.css";

const Footer = () => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer__menu">
          <div className="footer__menu-list">
            <span>Danh mục đồ ăn</span>
            <ul>
              <li>
                <RouterNavLink onClick={handleClick} to="/order">Ưu Đãi</RouterNavLink>
              </li>
              <li>
                <RouterNavLink onClick={handleClick} to="/order/new-product">Món Mới</RouterNavLink>
              </li>
              <li>
                <RouterNavLink  to="/order/combo-for-one" onClick={handleClick}>Combo 1 Người</RouterNavLink>
              </li>
              <li>
                <RouterNavLink  onClick={handleClick} to="/order/combo-sharing">Combo Nhóm</RouterNavLink>
              </li>
              <li>
                <RouterNavLink  onClick={handleClick} to="/order/fried-chicken">Gà Rán - Gà Quay</RouterNavLink>
              </li>
              <li>
                <RouterNavLink  onClick={handleClick} to="/order/burger-rice-pasta">Burger - Cơm - Mì Ý</RouterNavLink>
              </li>
              <li>
                <RouterNavLink  onClick={handleClick} to="/order/snack">Thức Ăn Nhẹ</RouterNavLink>
              </li>
              <li>
                <RouterNavLink  onClick={handleClick} to="/order/dessert-drink">Thức Uống & Tráng Miệng</RouterNavLink>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Về KFC</span>
            <ul>
              <li>
                <RouterNavLink >Câu Chuyện Của Chúng Tôi</RouterNavLink>
              </li>
              <li>
                <RouterNavLink >Tin Khuyến Mãi</RouterNavLink>
              </li>
              <li>
                <RouterNavLink >Tin Tức KFC</RouterNavLink>
              </li>
              <li>
                <RouterNavLink >Tuyển Dụng</RouterNavLink>
              </li>
              <li>
                <RouterNavLink >Đặt Tiệc Sinh Nhật</RouterNavLink>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Liên Hệ KFC</span>
            <ul>
              <li>
                <RouterNavLink >Theo Dõi Đơn Hàng</RouterNavLink>
              </li>
              <li>
                <RouterNavLink >Hệ Thống Nhà Hàng</RouterNavLink>
              </li>
              <li>
                <RouterNavLink >Liên Hệ KFC</RouterNavLink>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Chính Sách</span>
            <ul>
              <li>
                <RouterNavLink >Chính Sách Hoạt Động</RouterNavLink>
              </li>
              <li>
                <RouterNavLink >Chính Sách Quy Định</RouterNavLink>
              </li>
              <li>
                <RouterNavLink >Chính Sách Bảo Mật Thông Tin</RouterNavLink>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Dowload App</span>
            <div className="footer__dowload-app">
              <div className="dowload-app">
                <Link className="apple"></Link>
              </div>
              <div className="dowload-app">
                <Link className="play"></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
            <p>Copyright © 2023 KFC Vietnam</p>
          <div className="social-contact">
            <Link className="social-icon">
              <Facebook />
            </Link>
            <Link className="social-icon">
              <Instagram />
            </Link>
            <Link className="social-icon">
              <Youtube />
            </Link>
            <Link className="social-icon">
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
