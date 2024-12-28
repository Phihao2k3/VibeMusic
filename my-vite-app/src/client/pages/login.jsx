import React from "react";
import { Form, Input, Button, Card, Divider, Row, Col } from "antd";
import style from "@client/module/auth/style/auth.module.scss";
import { useNavigate } from "react-router-dom";

import {
  FacebookOutlined,
  GoogleOutlined,
  SpotifyOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
const Login = () => {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=0e42ca6f41894f6389c40a0ee693feb2&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Form values:", values);
    // Xử lý logic đăng nhập tại đây
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form failed:", errorInfo);
  };

  return (
    <div className={style.container}>
      <Card className={style.card}>
        <div className={style.form}>
          <h1 className={style.title}>Đăng Nhập</h1>

          <Form
            name="loginForm"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
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
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu của bạn!" },
              ]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className={style.btn}
              >
                Đăng nhập
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
              <div className={`${style["social-btn"]}`}
              onClick={() => window.location.href = AUTH_URL}
              >
                <SpotifyOutlined className={style.icon} />
                Spotify
              </div>
            </Col>
          </Row>
          <Divider>
            Bạn chưa có tài khoản?{" "}
            <Button type="link" onClick={() => navigate("/dangky")}>
              Đăng ký
            </Button>
          </Divider>
        </div>
      </Card>
    </div>
  );
};

export default Login;
