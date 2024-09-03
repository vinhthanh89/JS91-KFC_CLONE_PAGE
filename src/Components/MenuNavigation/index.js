import { NavLink, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "./style.css";
import { useSelector } from "react-redux";

const MenuNavigation = () => {
  const location = useLocation();
  const reduxOrderData = useSelector((state) => state.orderData.value);
  
  const renderMenuNav = reduxOrderData.map((category) => {
    return (
      <Tab
        key={category.id}
        className={`${
          location.pathname === `/JS91-KFC_CLONE_PAGE/order/${category.navigative}`
            ? "Mui-selected"
            : ""
        } menu-tab`}
        label={
          <NavLink
            to={`/JS91-KFC_CLONE_PAGE/order/${category.navigative}`}
            className="menu-label"
          >
            {category.title}
          </NavLink>
        }
      />
    );
  });

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
        {renderMenuNav}
      </Tabs>
    </Box>
  );
};

export default MenuNavigation;
