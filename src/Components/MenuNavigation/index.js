import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "./style.css";

const MenuNavigation = () => {
  const location = useLocation();
  
  return (
    <Box sx={{ borderBottom: 1, borderColor: "lightgrey" }}>
      <Tabs
        className="tabs"
        variant="scrollable"
        scrollButtons="auto"
        textColor="black"
        indicatorColor="red"
        aria-label="scrollable auto tabs example"
      >
        <Tab
          className={`${
            location.pathname === "/JS91-KFC_CLONE_PAGE/order/hot-deal"
              ? "Mui-selected"
              : ""
          } menu-tab`}
          label={
            <NavLink
              to="/JS91-KFC_CLONE_PAGE/order/hot-deal"
              className="menu-label"
              activeClassName="active"
              exact
            >
              Ưu Đãi
            </NavLink>
          }
        />
        <Tab
          className={`${
            location.pathname === "/JS91-KFC_CLONE_PAGE/order/new-product"
              ? "Mui-selected"
              : ""
          } menu-tab`}
          label={
            <NavLink
              to="/JS91-KFC_CLONE_PAGE/order/new-product"
              className="menu-label"
              activeClassName="active"
              exact
            >
              Món Mới
            </NavLink>
          }
        />
        <Tab
          className={`${
            location.pathname === "/JS91-KFC_CLONE_PAGE/order/combo-for-one"
              ? "Mui-selected"
              : ""
          } menu-tab`}
          label={
            <NavLink
              to="/JS91-KFC_CLONE_PAGE/order/combo-for-one"
              className="menu-label"
              activeClassName="active"
              exact
            >
              Combo 1 người
            </NavLink>
          }
        />
        <Tab
          className={`${
            location.pathname === "/JS91-KFC_CLONE_PAGE/order/combo-sharing"
              ? "Mui-selected"
              : ""
          } menu-tab`}
          label={
            <NavLink
              to="/JS91-KFC_CLONE_PAGE/order/combo-sharing"
              className="menu-label"
            >
              Combo Nhóm
            </NavLink>
          }
        />
        <Tab
          className={`${
            location.pathname === "/JS91-KFC_CLONE_PAGE/order/fried-chicken"
              ? "Mui-selected"
              : ""
          } menu-tab`}
          label={
            <NavLink
              to="/JS91-KFC_CLONE_PAGE/order/fried-chicken"
              className="menu-label"
            >
              Gà Rán - Gà Quay
            </NavLink>
          }
        />
        <Tab
          className={`${
            location.pathname === "/JS91-KFC_CLONE_PAGE/order/burger-rice-pasta"
              ? "Mui-selected"
              : ""
          } menu-tab`}
          label={
            <NavLink
              to="/JS91-KFC_CLONE_PAGE/order/burger-rice-pasta"
              className="menu-label"
            >
              Buger - Cơm - Mì Ý
            </NavLink>
          }
        />
        <Tab
          className={`${
            location.pathname === "/JS91-KFC_CLONE_PAGE/order/snack"
              ? "Mui-selected"
              : ""
          } menu-tab`}
          label={
            <NavLink
              to="/JS91-KFC_CLONE_PAGE/order/snack"
              className="menu-label"
            >
              Thức Ăn Nhẹ
            </NavLink>
          }
        />
        <Tab
          className={`${
            location.pathname === "/JS91-KFC_CLONE_PAGE/order/dessert-drink"
              ? "Mui-selected"
              : ""
          } menu-tab`}
          label={
            <NavLink
              to="/JS91-KFC_CLONE_PAGE/order/dessert-drink"
              className="menu-label"
            >
              Thức Uống & Tráng Miệng
            </NavLink>
          }
        />
      </Tabs>
    </Box>
  );
};

export default MenuNavigation;
