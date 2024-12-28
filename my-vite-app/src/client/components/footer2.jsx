import { Col, Divider, Row } from "antd";
import React from "react";
import styles from "@src/shared/styles/style.module.scss";
import clsx from "clsx";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer2 = () => {
  return (
    <div>
      <Divider className={styles.Divider} />
      <Row style={{ padding: "20px 0" }} className={clsx(styles.colorWhite)}>
        <Col span={6}>
          <h3 className="text-left">Thông tin</h3>
          <ul className={styles.footerUl}>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Điều khoản</li>
          </ul>
        </Col>
        <Col span={6}>
          <h3 className="text-left">Chính sách</h3>
          <ul className={styles.footerUl}>
            <li>Chính sách bảo mật người dùng</li>
            <li>Chính sách bảo mật thông tin</li>
            <li>Chính sách bảo mật Thanh toán</li>
          </ul>
        </Col>
        <Col span={6}>
          <h3 className="text-left">Liên hệ</h3>
          <ul className={styles.footerUl}>
            <li>Địa chỉ: Cần Thơ</li>
            <li>Email: VibeMusic@contact.com </li>
            <li>Điện thoại: 0978648720</li>
          </ul>
        </Col>
        <Col span={6}>
          <h3 className="text-left">Kết nối</h3>
          <ul className={styles.footerUl}>
            <li>
              <FaFacebook size={30} />
            </li>
            <li>
              <FaInstagram size={30} />
            </li>
            <li>
              <FaTwitter size={30} />
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
export default Footer2;
