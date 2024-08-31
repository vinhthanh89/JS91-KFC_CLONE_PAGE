import { Button, Form, Input, Space } from "antd";
import { useEffect, useState } from "react";

import "./style.css";

const SignUp = () => {
  const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = useState(false);
    const values = Form.useWatch([], form);
    useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(
          () => {
            setSubmittable(true);
          },
          () => {
            setSubmittable(false);
          }
        );
    }, [values, form]);
    return (
      <Button
        // onClick={handleAlert}
        type="primary"
        htmlType="submit"
        disabled={!submittable}
      >
        Gửi đi
      </Button>
    );
  };

  const [form] = Form.useForm();

  return (
    <div className="signup-container">
      <h1>TẠO TÀI KHOẢN</h1>
      <div className="signup__form-container">
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="lastName"
            label="Họ của bạn"
            rules={[
              {
                required: true,
                message: "Hãy nhập Họ của bạn",
              },
            ]}
          >
            <Input
              //   onChange={handleChangeInput}
              name="lastName"
              placeholder="Hãy nhập Họ của bạn"
            />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="Tên của bạn"
            rules={[
              {
                required: true,
                message: "Hãy nhập Tên của bạn",
              },
            ]}
          >
            <Input
              //   onChange={handleChangeInput}
              name="firstName"
              placeholder="Hãy nhập Tên của bạn"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email của bạn"
            rules={[
              {
                required: true,
                message: "Email là bắt buộc",
              },
            ]}
          >
            <Input
              //   onChange={handleChangeInput}
              name="email"
              placeholder="Hãy nhập email của bạn"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Hãy nhập số điện thoại",
              },
            ]}
          >
            <Input
              //   onChange={handleChangeInput}
              name="phone"
              placeholder="Hãy nhập số điện thoại của bạn"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu của bạn",
              },
            ]}
          >
            <Input.Password
              //   onChange={handleChangeInput}
              name="password"
              placeholder="Hãy nhập mật khẩu của bạn"
            />
          </Form.Item>
          <div className="signup__submit-btn">
            <Form.Item>
              <Space>
                <SubmitButton form={form} />
                <Button className="button-reset" htmlType="reset">
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
