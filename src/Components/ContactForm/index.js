import { Button, Form, Input, Space, Select } from "antd";
import { useState, useEffect } from "react";
import TextArea from "antd/es/input/TextArea";

import "./style.css";
import optiondata from "../../Data/optiondata";

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email : "",
    phonenumber: "",
    address: "",
    city: "",
  })

  const {name , email , phonenumber } = contactInfo;

  const handleChangeInput = (event) => {
    setContactInfo((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  const handleAlert = () => {
    window.alert(`Cảm ơn ${name} đã gửi thông tin
Chúng tôi sẽ gửi phản hồi sớm nhất thông qua :
SĐT : ${phonenumber} hoặc Email : ${email}`);
    
  };

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
        onClick={handleAlert}
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
    <div className="contactus__form-container">
      <h2>LIÊN HỆ KFC VIỆT NAM</h2>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <div className="contactus__form--infomation">
          <Form.Item
            name="name"
            label="Họ và Tên"
            className="contactus__form--input"
            rules={[
              {
                required: true,
                message: "Hãy nhập Họ và Tên",
              },
            ]}
          >
            <Input
              onChange={handleChangeInput}
              name="name"
              placeholder="Họ và tên của bạn"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            className="contactus__form--input"
            rules={[
              {
                required: true,
                message: "Hãy nhập Email",
              },
            ]}
          >
            <Input
              onChange={handleChangeInput}
              name="email"
              placeholder="Email của bạn"
            />
          </Form.Item>
          <Form.Item
            name="phonenumber"
            label="Số Điện Thoại"
            className="contactus__form--input"
            rules={[
              {
                required: true,
                message: "Hãy nhập số điện thoại",
              },
            ]}
          >
            <Input
              onChange={handleChangeInput}
              name="phonenumber"
              className="input-number"
              type="number"
              placeholder="Số điện thoại của bạn"
            />
          </Form.Item>
        </div>
        <div className="contactus__form--infomation">
          <Form.Item
            name="address"
            label="Địa Chỉ"
            className="contactus__form--input"
            rules={[
              {
                required: true,
                message: "Hãy nhập địa chỉ",
              },
            ]}
          >
            <Input
              onChange={handleChangeInput}
              name="address"
              placeholder="Địa Chỉ"
            />
          </Form.Item>
          <Form.Item
            className="contactus__form--input"
            rules={[
              {
                required: true,
                message: "Hãy chọn Tỉnh/Thành Phố",
              },
            ]}
            label="Tỉnh/Thành Phố"
          >
            <Select placeholder="Tỉnh/Thành Phố" options={optiondata} />  
          </Form.Item>
        </div>
        <div className="contactus__form--textarea">
          <h2>Nội dung bạn muốn liên hệ</h2>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Hãy nhập nội dung bạn muốn liên hệ",
              },
            ]}
          >
            <TextArea className="textarea" rows={4} />
          </Form.Item>
        </div>

        <Form.Item>
          <Space>
            <SubmitButton form={form} />
            <Button className="button-reset" htmlType="reset">
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
