import { Form, Input } from "antd";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast'

import "./style.css";
import { loginUser } from "../../Services/user.service";
import { saveAccessToken, saveRefreshToken } from "../../Utils/localstorage";



const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setLoginInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitLogin = async () => {
    try {
      const response = await loginUser(loginInput);
      console.log(response);
      saveAccessToken(response.data.accessToken)
      saveRefreshToken(response.data.refreshToken)
      toast.success(response.data.message)
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };
  return (
    <div className="loginpage-container">
      <div className="loginpage__left-container">
        <img
          onClick={() => navigate("/JS91-KFC_CLONE_PAGE/sign-up")}
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
          onFinish={handleSubmitLogin}
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
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              name="email"
              value={loginInput.email}
              onChange={handleChangeInput}
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            initialValue={loginInput.password}
            className="login__label"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              name="password"
              value={loginInput.password}
              onChange={handleChangeInput}
            />
          </Form.Item>
          Bạn quên mật khẩu ?
          <Form.Item>
            <button
              onSubmit={handleSubmitLogin}
              className="login__btn login"
              type="submit"
            >
              ĐĂNG NHẬP
            </button>
          </Form.Item>
          <p style={{ textAlign: "center", fontWeight: "900" }}>
            HOẶC TIẾP TỤC VỚI
          </p>
          <Form.Item>
            <button
              className="login__btn login__fb"
              type="primary"
              htmlType="submit"
            >
              <FaFacebook className="login__icon" /> ĐĂNG NHẬP BẰNG FACEBOOK
            </button>
          </Form.Item>
          <Form.Item>
            <button
              className="login__btn login__google"
              type="primary"
              htmlType="submit"
            >
              <FaGoogle className="login__icon" /> ĐĂNG NHẬP BẰNG GOOGLE
            </button>
          </Form.Item>
        </Form>
        <p>
          Bạn chưa có tài khoản ? <Link to={"/JS91-KFC_CLONE_PAGE/sign-up"}>Đăng Ký</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
