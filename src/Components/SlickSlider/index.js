import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/GaDiaTrungHai.webp?v=4aZoGg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/BO.webp?v=4aZoGg"
            alt=""
          />
        </div>
        <div>
          <img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Tet24.webp?v=4aZoGg" alt="" />
        </div>
        <div>
          <img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/GaXotCua.webp?v=4aZoGg" alt="" />
        </div>
        <div>
          <img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/MiY.webp?v=4aZoGg" alt="" />
        </div>
        <div>
          <img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/BTLD.webp?v=4aZoGg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
