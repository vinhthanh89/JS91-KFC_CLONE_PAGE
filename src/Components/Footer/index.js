import { Link } from "react-router-dom";

import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import { animateScroll as scroll } from "react-scroll";

import "./style.css";
// import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";

const Footer = () => {
  const reduxOrder = useSelector((state) => state.orderData.value)
  console.log(reduxOrder);
  
  const handleClick = () => {
    scroll.scrollToTop();
  };

  const renderMenuList = reduxOrder.map((category) => {
    return (
      <li key={category.id}>
        <Link
          onClick={handleClick}
          to={`/JS91-KFC_CLONE_PAGE/order/${category.navigative}`}
        >
          {category.title}
        </Link>
      </li>
    );
  });

  return (
    <footer>
      <div className="footer-container">
        <div className="footer__menu">
          <div className="footer__menu-list">
            <span>Danh mục đồ ăn</span>
            <ul>{renderMenuList}</ul>
          </div>
          <div className="footer__menu-list">
            <span>Về KFC</span>
            <ul>
              <li>
                <Link
                  onClick={handleClick}
                  to="JS91-KFC_CLONE_PAGE/kfctabs/our-story"
                >
                  Câu Chuyện Của Chúng Tôi
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="JS91-KFC_CLONE_PAGE/kfctabs/our-history"
                >
                  Lịch Sử KFC
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="JS91-KFC_CLONE_PAGE/kfctabs/about-yummy"
                >
                  Về Tập Đoàn Yummy!
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Liên Hệ KFC</span>
            <ul>
              <li>
                <Link>Theo Dõi Đơn Hàng</Link>
              </li>
              <li>
                <Link
                  to="JS91-KFC_CLONE_PAGE/he-thong-nha-hang-kfc"
                  onClick={handleClick}
                >
                  Hệ Thống Nhà Hàng
                </Link>
              </li>
              <li>
                <Link to="JS91-KFC_CLONE_PAGE/contact-us" onClick={handleClick}>
                  Liên Hệ KFC
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <span>Chính Sách</span>
            <ul>
              <li>
                <Link
                  onClick={handleClick}
                  to="JS91-KFC_CLONE_PAGE/privacy-policy"
                >
                  Chính Sách Hoạt Động
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="JS91-KFC_CLONE_PAGE/terms-condition"
                >
                  Chính Sách Quy Định
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="JS91-KFC_CLONE_PAGE/infomation-policy"
                >
                  Chính Sách Bảo Mật Thông Tin
                </Link>
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
