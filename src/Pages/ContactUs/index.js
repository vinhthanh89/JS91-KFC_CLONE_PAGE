import { Envelope, Telephone } from "react-bootstrap-icons";
import ContactForm from "../../Components/ContactForm";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <h1>LIÊN HỆ CHÚNG TÔI</h1>
      <p>
        Tầng 12, Tòa nhà BlueSky,
        <br />
        01 đường Bạch Đằng, phường 2, quận Tân Bình, Tp. Hồ Chí Minh
      </p>
      <div className="contactus--button-container">
        <button className="contactus--button">
          <Envelope />
          Gửi email
        </button>
        <button className="contactus--button">
          <Telephone />
          (84-28) 3848 9828
        </button>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
