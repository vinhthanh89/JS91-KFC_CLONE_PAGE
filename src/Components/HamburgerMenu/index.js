import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  List,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { animateScroll as scroll } from "react-scroll";

import "./style.css";
import { useSelector } from "react-redux";

const HamburgerMenu = () => {
  const reduxOrderData = useSelector((state) => state.orderData.value);

  const handleClick = () => {
    scroll.scrollToTop();
  };

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const renderMenuList = reduxOrderData.map((category) => {
    return (
      <li key={category.id}>
        <Link
          onClick={handleClick}
          to={`JS91-KFC_CLONE_PAGE/order/${category.navigative}`}
        >
          {category.title} &gt;
        </Link>
      </li>
    );
  });

  const list = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="burgermenu-container">
        <div className="triplecolumn-container"></div>
        <div className="burgerlist-container">
          <div className="burgerlist__title">Danh Mục Món Ăn</div>
          <ul>{renderMenuList}</ul>
          <br />
          <hr />
        </div>
        <div className="burgerlist-container">
          <div className="burgerlist__title">Về KFC</div>
          <ul>
            <li>
              <NavLink
                onClick={handleClick}
                to="JS91-KFC_CLONE_PAGE/kfctabs/our-story"
              >
                Câu Chuyện Của Chúng Tôi &gt;
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                to="JS91-KFC_CLONE_PAGE/kfctabs/our-history"
              >
                Lịch Sử KFC &gt;
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                to="JS91-KFC_CLONE_PAGE/kfctabs/about-yummy"
              >
                Về Tập Đoàn YUM! &gt;
              </NavLink>
            </li>
          </ul>
          <br />
          <hr />
        </div>
        <div className="burgerlist-container">
          <div className="burgerlist__title">Liên Hệ KFC</div>
          <ul>
            <li>
              <NavLink>Theo Dõi Đơn Hàng &gt;</NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                to="JS91-KFC_CLONE_PAGE/contact-us"
              >
                Liên Hệ KFC &gt;
              </NavLink>
            </li>
          </ul>
          <br />
          <hr />
        </div>
        <div className="burgerlist-container">
          <div className="burgerlist__title">Chính Sách</div>
          <ul>
            <li>
              <NavLink
                onClick={handleClick}
                to="JS91-KFC_CLONE_PAGE/privacy-policy"
              >
                Chính Sách Hoạt Động &gt;
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                to="JS91-KFC_CLONE_PAGE/terms-condition"
              >
                Chính Sách Và Quy Định &gt;
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                to="JS91-KFC_CLONE_PAGE/infomation-policy"
              >
                Chính Sách Bảo Mật Thông Tin &gt;
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="burgermenu__footer">
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
        <br />
        <hr />

        <div className="footer__triplecolumn-container">
          <p>Copyright © 2023 KFC Vietnam</p>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <List className="icon" />
      </Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
