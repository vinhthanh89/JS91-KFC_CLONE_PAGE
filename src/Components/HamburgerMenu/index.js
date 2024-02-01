import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import "./style.css";

const HamburgerMenu = () => {
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
        <div className="burgerlist-container">
          <div className="burgerlist__title">Danh Mục Món Ăn</div>
          <ul>
            <li>
              <NavLink to="/order">Ưu Đãi &gt;</NavLink>
            </li>
            <li>
              <NavLink to="/order/new-product">Món Mới &gt;</NavLink>
            </li>
            <li>
              <NavLink to="/order/combo-for-one">Combo 1 Người &gt;</NavLink>
            </li>
            <li>
              <NavLink to="/order/combo-sharing">Combo Nhóm &gt;</NavLink>
            </li>
            <li>
              <NavLink to="/order/fried-chicken">Gà Rán - Gà Quay &gt;</NavLink>
            </li>
            <li>
              <NavLink to="/order/burger-rice-pasta">
                Burger - Cơm - Mì Ý &gt;
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/snack">Thức Ăn Nhẹ &gt;</NavLink>
            </li>
            <li>
              <NavLink to="/order/dessert-drink">
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
              <NavLink>Câu Chuyện Của Chúng Tôi &gt;</NavLink>
            </li>
            <li>
              <NavLink>Tin Khuyến Mãi &gt;</NavLink>
            </li>
            <li>
              <NavLink>Tin Tức KFC &gt;</NavLink>
            </li>
            <li>
              <NavLink>Tuyển Dụng</NavLink>
            </li>
            <li>
              <NavLink>Đặt Tiệc Sinh Nhật</NavLink>
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
              <NavLink>Liên Hệ KFC &gt;</NavLink>
            </li>
          </ul>
          <br />
          <hr />
        </div>
        <div className="burgerlist-container">
          <div className="burgerlist__title">Chính Sách</div>
          <ul>
            <li>
              <NavLink>Chính Sách Hoạt Động &gt;</NavLink>
            </li>
            <li>
              <NavLink>Chính Sách Và Quy Định &gt;</NavLink>
            </li>
            <li>
              <NavLink>Chính Sách Bảo Mật Thông Tin &gt;</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="burgermenu__footer">.</div>
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
