import { Form, Input } from "antd";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div className="loginpage-container">
      <div className="loginpage__left-container">
        <img
        onClick={() => navigate('/sign-up')}
          src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=3J8jp4"
          alt="register"
        />
      </div>
      <div className="loginpage__right-container">
        <h1>ĐĂNG NHẬP</h1>
        <Form
        className="login__input"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            className="login__label"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            className="login__label"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          Bạn quên mật khẩu ?
          <Form.Item
          >
            <button className="login__btn login" type="primary" htmlType="submit">
              ĐĂNG NHẬP
            </button>
          </Form.Item>
          <p style={{textAlign : "center" , fontWeight: "900"}}>HOẶC TIẾP TỤC VỚI</p>
          <Form.Item
          >
            <button className="login__btn login__fb"  type="primary" htmlType="submit">
            <FaFacebook className="login__icon" /> ĐĂNG NHẬP BẰNG FACEBOOK
            </button>
          </Form.Item>
          <Form.Item
          >
            <button className="login__btn login__google" type="primary" htmlType="submit">
            <FaGoogle className="login__icon" /> ĐĂNG NHẬP BẰNG GOOGLE
            </button>
          </Form.Item>
        </Form>
        <p>Bạn chưa có tài khoản ? <Link to={'/sign-up'}>Đăng Ký</Link> </p>
      </div>
    </div>
  );
};

export default LoginPage;
