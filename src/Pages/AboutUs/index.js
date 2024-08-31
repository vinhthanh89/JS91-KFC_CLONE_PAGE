import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

const AboutUs = () => {
  return (
    <div className="kfctabs-container">
      <img
        src="https://static.kfcvietnam.com.vn/images/web/our-story/lg/our-story.jpg?v=30BZn4"
        alt=""
      />
      <div className="kfctabs__navigation">
        <ul>
          <li>
            <NavLink to="/JS91-KFC_CLONE_PAGE/kfctabs/our-story">CÂU CHUYỆN CỦA CHÚNG TÔI</NavLink>
          </li>
          <li>
            <NavLink to="/JS91-KFC_CLONE_PAGE/kfctabs/our-history">LỊCH SỬ KFC</NavLink>
          </li>
          <li>
            <NavLink to="/JS91-KFC_CLONE_PAGE/kfctabs/about-yummy">VỀ TẬP ĐOÀN YUM!</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutUs;
