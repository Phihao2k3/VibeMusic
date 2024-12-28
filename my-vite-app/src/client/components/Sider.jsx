import React, { useState } from "react";
import { FaMusic, FaPodcast, FaCalendarAlt, FaHistory } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { BiSolidPlaylist } from "react-icons/bi";
import { Menu, Button, Layout } from "antd";
import {
  HomeFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SiderClient = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items = [
    {
      key: "0",

      label: <div>{collapsed ? <HomeFilled /> : "Vibe Music"}</div>,
    },
    {
      key: "1",
      icon: <FaMusic />,
      label: (
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          Khám Phá
        </Link>
      ),
    },
    {
      key: "2",
      icon: <FaPodcast />,
      label: "Podcast",
    },
    {
      key: "3",
      icon: <IoIosAlbums />,
      label: (
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/album"
        >
          Album
        </Link>
      ),
    },
    {
      key: "4",
      icon: <BsFillPeopleFill />,
      label: "Nghệ sĩ",
    },
    {
      key: "5",
      icon: <FaCalendarAlt />,
      label: "Sự kiện",
    },
    {
      key: "6",
      label: (
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/library"
        >
          Thư Viện Của Bạn
        </Link>
      ),
    },
    {
      key: "7",
      icon: <FaHistory />,
      label: "Lịch sử",
    },
    {
      key: "8",
      icon: <MdFavorite />,
      label: "Yêu thích",
    },
    {
      key: "9",
      icon: <GoFileSubmodule />,
      label: "File của bạn",
    },
    {
      key: "10",
      label: "Playlist của bạn",
      icon: <BiSolidPlaylist />,
      children: [
        {
          key: "10-1",
          label: "Nghe gần đây",
        },
        {
          key: "10-2",
          label: "Playlist yêu thích",
        },
        {
          key: "10-3",
          label: "Playlist của bạn",
        },
        {
          key: "10-4",
          label: "Playlist đã tải",
        },
      ],
    },
  ];
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={256} // Default width when expanded
      collapsedWidth={80} // Width when collapsed
      style={{
        backgroundColor: "#0D0D0F",
        overflow: "auto",
      }}
    >
      <Button
        className="m-2"
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
  );
};

export default SiderClient;
