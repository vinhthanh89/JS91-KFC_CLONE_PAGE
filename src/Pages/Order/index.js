
import { Outlet } from "react-router-dom";
import MenuNavigation from "../../Components/MenuNavigation";

const Order = () => {
  return (
    <>
      <MenuNavigation />
      <Outlet />
    </>
  );
};

export default Order;
