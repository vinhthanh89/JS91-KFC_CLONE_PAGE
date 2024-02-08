import Slider from "react-slick";

import "./style.css";

const OurStory = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
  };

  return (
    <div className="ourstory-container">
      <img
        src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/kfc_vietnam_pc.jpg"
        alt=""
      />
      <p className="ourstory-firstcontent">
        KFC là tên viết tắt của Kentucky Fried Chicken, một thương hiệu và mảng
        hoạt động của Yum! International Restaurant Group (Hoa Kỳ). KFC bán gà
        rán, một loại thức ăn nhanh ngày càng trở nên phổ biến ở các quốc gia
        đông dân trên toàn thế giới. Ngày nay, chuỗi KFC đã có mặt tại 145 quốc
        gia và vùng lãnh thổ trên thế giới, với hơn 27.000 nhà hàng phục vụ 12
        triệu khách mỗi ngày.
      </p>
      <p className="ourstory-secondcontent">
        KFC nổi tiếng với các sản phẩm gà tươi sống. Tất cả các đầu bếp của KFC
        đều phải trải qua một khóa đào tạo khắc nghiệt để đảm bảo hương vị độc
        đáo và chất lượng dinh dưỡng cho các món ăn của họ, theo tiêu chuẩn của
        tập đoàn. Công thức của 11 loại thảo mộc và gia vị được KFC sử dụng để
        chế biến gà của họ vẫn là một bí mật kinh doanh bí mật, giúp tạo ra
        hương vị đặc biệt cho sản phẩm của họ.
      </p>
      <p className="ourstory-thirdcontent">
        KFC đặc biệt coi trọng sự đa dạng của sản phẩm bằng cách luôn đưa ra
        thực đơn phong phú. Bên cạnh những món ăn truyền thống như gà rán và
        hamburger, KFC đã thỏa mãn khẩu vị của người Việt với một số sáng tạo
        mới như: Big 'n Juicy, Crispy Strips, KFC Chicken Rice, Coleslaw ...
        khách hàng, bao gồm: Gà công thức nguyên bản, Bữa ăn kết hợp, Bữa ăn
        dành cho trẻ em, Đồ ăn nhẹ, Đồ ăn kèm, Món tráng miệng và nước giải
        khát… Ngoài ra, KFC còn mở rộng lĩnh vực sang các nguyên liệu khác bằng
        cách tung ra thị trường Việt Nam các món ăn mới như Burger tôm, Lipton…
        để thu hút hơn sự thích thú và tò mò của khách hàng Việt Nam
      </p>
      <p className="ourstory-fourthcontent">
        Năm 1997, KFC khai trương nhà hàng đầu tiên tại Thành phố Hồ Chí Minh ở
        Việt Nam. Cho đến ngày nay, chuỗi nhà hàng thức ăn nhanh này đã mở rộng
        sự hiện diện của mình lên hơn 172 nhà hàng tại 39 tỉnh thành của Việt
        Nam, cung cấp việc làm cho hơn 4.000 người và đóng góp đáng kể cho ngành
        công nghiệp thức ăn nhanh của Việt Nam cũng như sự hình thành của một
        thói quen tiêu dùng và văn hóa ẩm thực mới tại những khu vực mà KFC có
        mặt.
      </p>
      <div className="ourstory__slider">
        <h3>CỘT MỐC PHÁT TRIỂN</h3>
        <Slider {...settings}>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg1.png"
              alt=""
            />
            <p className="slider-item-highposition">1997</p>
            <h4>TP.HCM</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg2.png"
              alt=""
            />
            <p className="slider-item-lowposition">1998</p>
            <h4>ĐỒNG NAI</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg1.png"
              alt=""
            />
            <p className="slider-item-highposition">2006</p>
            <h4>HÀ NỘI , HẢI PHÒNG , CẦN THƠ</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg2.png"
              alt=""
            />
            <p className="slider-item-lowposition">2008</p>
            <h4>BÀ RỊA VŨNG TÀU , ĐĂK LĂK</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg1.png"
              alt=""
            />
            <p className="slider-item-highposition">2009</p>
            <h4>ĐÀ NẴNG , HUẾ</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg2.png"
              alt=""
            />
            <p className="slider-item-lowposition">2010</p>
            <h4>BÌNH DƯƠNG , NGHỆ AN</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg1.png"
              alt=""
            />
            <p className="slider-item-highposition">2011</p>
            <h4>KHÁNH HÒA , AN GIANG , BÌNH ĐỊNH</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg2.png"
              alt=""
            />
            <p className="slider-item-lowposition">2013</p>
            <h4>QUẢNG NINH</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg1.png"
              alt=""
            />
            <p className="slider-item-highposition">2016</p>
            <h4>THANH HÓA</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg2.png"
              alt=""
            />
            <p className="slider-item-lowposition">2017</p>
            <h4>BẾN TRE</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg1.png"
              alt=""
            />
            <p className="slider-item-highposition">2018</p>
            <h4>GIA LAI , PHÚ THỌ</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg2.png"
              alt=""
            />
            <p className="slider-item-lowposition">2019</p>
            <h4>LÂM ĐỒNG , BẮC NINH , CÀ MAU , NINH BÌNH</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg1.png"
              alt=""
            />
            <p className="slider-item-highposition">2020</p>
            <h4>HƯNG YÊN , TÂY NINH , QUẢNG NGẢI</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg2.png"
              alt=""
            />
            <p className="slider-item-lowposition">2021</p>
            <h4>LONG AN , THÁI NGUYÊN , THÁI BÌNH</h4>
          </div>
          <div className="ourstory__slider-item">
            <img
              src="https://kfcvietnam.com.vn/assets/images/static-page/kfc-vietnam/img_about_dev_bg1.png"
              alt=""
            />
            <p className="slider-item-highposition">2022</p>
            <h4>QUẢNG NAM , VĨNH PHÚC , HÀ NAM</h4>
          </div>
        </Slider>
      </div>
      <p className="ourstory-fifthcontent">
        Hương vị độc đáo, lòng hiếu khách và bầu không khí của các nhà hàng vẫn
        là những yếu tố then chốt tạo nên thành công của KFC tại Việt Nam cũng
        như trên toàn thế giới. Ngoài ra, KFC được đánh giá cao là một công ty
        tốt thông qua nhiều hoạt động xã hội quan trọng.
      </p>
    </div>
  );
};

export default OurStory;
