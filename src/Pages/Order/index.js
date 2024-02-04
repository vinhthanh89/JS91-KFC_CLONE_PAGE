
import { Outlet } from "react-router-dom";
import MenuNavigation from "../../Components/MenuNavigation";

const Order = ({orderData}) => {
  return (
    <>
      <MenuNavigation orderData={orderData} />
      <Outlet />
    </>
  );
};

export default Order;
