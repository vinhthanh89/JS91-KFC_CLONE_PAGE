import { NavLink as RouterNavLink , Link} from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

import "./style.css";

const Footer = ({orderData}) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  const renderMenuList = orderData.map((category) => {
    return (
      <li key={category.id}>
      <RouterNavLink onClick={handleClick} to={`${category.navigative}`}>{category.title}</RouterNavLink>
    </li>
    )
  })

  return (
    <footer>
      <div className="footer-container">
        <div className="footer__menu">
          <div className="footer__menu-list">
            <span>Danh mục đồ ăn</span>
            <ul>
              {renderMenuList}
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Về KFC</span>
            <ul>
              <li>
                <RouterNavLink onClick={handleClick} to="/kfctabs/our-story">Câu Chuyện Của Chúng Tôi</RouterNavLink>
              </li>
              <li>
                <RouterNavLink onClick={handleClick} to="/kfctabs/our-history" >Lịch Sử KFC</RouterNavLink>
              </li>
              <li>
                <RouterNavLink onClick={handleClick} to="/kfctabs/about-yummy" >Về Tập Đoàn Yummy!</RouterNavLink>
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
                <RouterNavLink to="/he-thong-nha-hang-kfc" onClick={handleClick} >Hệ Thống Nhà Hàng</RouterNavLink>
              </li>
              <li>
                <RouterNavLink to="/contact-us" onClick={handleClick}>Liên Hệ KFC</RouterNavLink>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Chính Sách</span>
            <ul>
              <li>
                <RouterNavLink onClick={handleClick} to="/privacy-policy" >Chính Sách Hoạt Động</RouterNavLink>
              </li>
              <li>
                <RouterNavLink onClick={handleClick} to="/terms-condition" >Chính Sách Quy Định</RouterNavLink>
              </li>
              <li>
                <RouterNavLink onClick={handleClick} to="/infomation-policy" >Chính Sách Bảo Mật Thông Tin</RouterNavLink>
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
