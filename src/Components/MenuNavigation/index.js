import { useState } from "react";
import {useNavigate} from 'react-router-dom'

import "./style.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const MenuNavigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "lighgrey" }}>
      <Tabs
        className="tabs"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="black"
        indicatorColor="red"
        aria-label="scrollable auto tabs example"
      >
        <Tab onClick={() => {navigate("/order/hot-deal")}} className="menu-tab" label="Ưu Đãi" />
        <Tab onClick={() => {navigate("/order/new-product")}} className="menu-tab" label="Món Mới" />
        <Tab onClick={() => {navigate("/order/combo-for-one")}} className="menu-tab" label="Combo 1 Người" />
        <Tab onClick={() => {navigate("/order/combo-sharing")}} className="menu-tab" label="Combo Nhóm" />
        <Tab onClick={() => {navigate("/order/fried-chicken")}} className="menu-tab" label="Gà Rán - Gà Quay" />
        <Tab onClick={() => {navigate("/order/burger-rice-pasta")}} className="menu-tab" label="Burger - Cơm - Mì Ý" />
        <Tab onClick={() => {navigate("/order/snack")}} className="menu-tab" label="Thức Ăn Nhẹ" />
        <Tab onClick={() => {navigate("/order/dessert-drink")}} className="menu-tab" label="Thức Uống & Tráng Miệng" />
      </Tabs>
    </Box>
  );
};

export default MenuNavigation;
