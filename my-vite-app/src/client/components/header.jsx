import { Col, Input, Row, Layout } from "antd";
import React from "react";
import styles from "@src/shared/styles/style.module.scss";
import { useNavigate } from "react-router-dom";
const HeaderClient = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  // Xử lý khi nhấn Enter hoặc nút tìm kiếm
  const handleSearch = async (value) => {
    navigate(`/search?q=${value}`);
  };

  return (
    <Layout.Header className={styles.header}>
      <Input.Search
        placeholder="Nhập từ khóa"
        allowClear
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Cập nhật trạng thái
        onSearch={handleSearch} // Gọi khi nhấn Enter hoặc nút tìm kiếm
        style={{ width: "50%" }} // Điều chỉnh chiều rộng ô tìm kiếm
      />
    </Layout.Header>
  );
};

export default HeaderClient;
