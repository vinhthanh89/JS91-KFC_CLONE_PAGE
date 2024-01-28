import { Link, NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer__menu">
          <div className="footer__menu-list">
            <span>Danh mục đồ ăn</span>
            <ul>
              <li>
                <NavLink>Ưu Đãi</NavLink>
              </li>
              <li>
                <NavLink>Món Mới</NavLink>
              </li>
              <li>
                <NavLink>Combo 1 Người</NavLink>
              </li>
              <li>
                <NavLink>Combo Nhóm</NavLink>
              </li>
              <li>
                <NavLink>Gà Rán - Gà Quay</NavLink>
              </li>
              <li>
                <NavLink>Burger - Cơm - Mì Ý</NavLink>
              </li>
              <li>
                <NavLink>Thức Ăn Nhẹ</NavLink>
              </li>
              <li>
                <NavLink>Thức Uống & Tráng Miệng</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Về KFC</span>
            <ul>
              <li>
                <NavLink>Câu Chuyện Của Chúng Tôi</NavLink>
              </li>
              <li>
                <NavLink>Tin Khuyến Mãi</NavLink>
              </li>
              <li>
                <NavLink>Tin Tức KFC</NavLink>
              </li>
              <li>
                <NavLink>Tuyển Dụng</NavLink>
              </li>
              <li>
                <NavLink>Đặt Tiệc Sinh Nhật</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Liên Hệ KFC</span>
            <ul>
              <li>
                <NavLink>Theo Dõi Đơn Hàng</NavLink>
              </li>
              <li>
                <NavLink>Hệ Thống Nhà Hàng</NavLink>
              </li>
              <li>
                <NavLink>Liên Hệ KFC</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Chính Sách</span>
            <ul>
              <li>
                <NavLink>Chính Sách Hoạt Động</NavLink>
              </li>
              <li>
                <NavLink>Chính Sách Quy Định</NavLink>
              </li>
              <li>
                <NavLink>Chính Sách Bảo Mật Thông Tin</NavLink>
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
