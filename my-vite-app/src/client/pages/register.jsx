import React from "react";
import { Form, Input, Button, Card, Divider, Row, Col } from "antd";
import style from "@client/module/auth/style/auth.module.scss";
import { useNavigate } from "react-router-dom";

import {
  FacebookOutlined,
  GoogleOutlined,
  TikTokOutlined,
} from "@ant-design/icons";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Form values:", values);
    // Logic xử lý đăng ký
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form failed:", errorInfo);
  };

  return (
    <div className={style.container}>
      <Card className={style.card}>
        <div className={style.form}>
          <h1 className={style.title}>Đăng Ký</h1>

          <Form
            name="RegisterForm"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Họ và Tên"
              name="fullname"
              rules={[
                { required: true, message: "Vui lòng nhập họ và tên của bạn!" },
              ]}
            >
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email của bạn!" },
                { type: "email", message: "Định dạng email không hợp lệ!" },
              ]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại của bạn!" },
                { pattern: /^\d{10,11}$/, message: "Số điện thoại không hợp lệ!" },
              ]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu của bạn!" },
                { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
              ]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
            <Form.Item
              label="Nhập lại mật khẩu"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Vui lòng xác nhận mật khẩu!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không khớp!"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Nhập lại mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className={style.btn}
              >
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
          <Divider>Hoặc</Divider>
          <Row justify="center" gutter={[16, 16]} className={style.social}>
            <Col span={8}>
              <div className={`${style["social-btn"]}`}>
                <FacebookOutlined className={style.icon} />
                Facebook
              </div>
            </Col>
            <Col span={8}>
              <div className={`${style["social-btn"]}`}>
                <GoogleOutlined className={style.icon} />
                Google
              </div>
            </Col>
            <Col span={8}>
              <div className={`${style["social-btn"]}`}>
                <TikTokOutlined className={style.icon} />
                TikTok
              </div>
            </Col>
          </Row>
          <Divider>
            Bạn đã có tài khoản?{" "}
            <Button type="link" onClick={() => navigate("/dangnhap")}>
              Đăng nhập
            </Button>
          </Divider>
        </div>
      </Card>
    </div>
  );
};

export default Register;
