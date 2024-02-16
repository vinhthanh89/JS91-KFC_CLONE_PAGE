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

const HamburgerMenu = () => {
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
          <ul>
            <li>
              <NavLink onClick={handleClick} to="/order/hot-deal">
                Ưu Đãi &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/order/new-product">
                Món Mới &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/order/combo-for-one">
                Combo 1 Người &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/order/combo-sharing">
                Combo Nhóm &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/order/fried-chicken">
                Gà Rán - Gà Quay &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/order/burger-rice-pasta">
                Burger - Cơm - Mì Ý &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/order/snack">
                Thức Ăn Nhẹ &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/order/dessert-drink">
                Thức Uống & Tráng Miệng &gt;
              </NavLink>
            </li>
          </ul>
          <br />
          <hr />
        </div>
        <div className="burgerlist-container">
          <div className="burgerlist__title">Về KFC</div>
          <ul>
            <li>
              <NavLink onClick={handleClick} to="/kfctabs/our-story">
                Câu Chuyện Của Chúng Tôi &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/kfctabs/our-history">
                Lịch Sử KFC &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/kfctabs/about-yummy">
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
              <NavLink onClick={handleClick} to="/contact-us">
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
              <NavLink onClick={handleClick} to="/privacy-policy">
                Chính Sách Hoạt Động &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/terms-condition">
                Chính Sách Và Quy Định &gt;
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/infomation-policy">
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
