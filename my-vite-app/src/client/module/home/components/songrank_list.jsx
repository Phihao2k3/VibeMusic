import React from "react";
import { Card, Col, List, Row, Avatar, Space, Badge } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons"; // Imported necessary icons
import styles from "@src/shared/styles/style.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
// IconText component for list actions
import { FaPlay } from "react-icons/fa";
import clsx from "clsx";
import { MdBookmarkBorder } from "react-icons/md";
const SongRankList = () => {
  const [data, setData] = React.useState([
    {
      title: "Loi Choi",
      avatar:
        "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/12/18/artwork-dsp-album-17028911773511330855800.png",
      description: "Jack",
      duration: "3:45",
    },
    {
      title: "Đánh ĐỔi",
      avatar:
        "https://i1.sndcdn.com/artworks-PGBfOfF1uKaBgS6o-b9rDIA-t500x500.jpg",
      description: "Obito",
      duration: "4:45",
    },
    {
      title: "Chìm Loi",
      avatar:
        "https://avatar-ex-swe.nixcdn.com/song/2023/03/03/e/d/0/3/1677809272557_640.jpg",
      description: "MCK",
      duration: "3:00",
    },
    {
      title: "Băng Qua Cầu Giấy",
      avatar:
        "data:image/jpeg;base64,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",
      description: "Wxrdie",
      duration: "3:45",
    },
    {
      title: "Ái",
      avatar: "https://i.ytimg.com/vi/82ZTNQNEQgE/maxresdefault.jpg",
      description: "Tlinh",
      duration: "3:45",
    },

  ]);

  return (
    <div className={styles.songRankList}>
      <h3 className={styles.title}>
        Bảng Xếp Hạng <span className={styles.PrimaryColor}>Top 100</span>
      </h3>
      <List
        itemLayout="vertical"
        size="large"
        grid={{
          gutter: 0,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 1,
          xl: 1,
          xxl: 1,
        }}
        pagination={{
          hideOnSinglePage: true,
          onChange: (page) => {
            console.log("Current page:", page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <Badge.Ribbon text={`#${index + 1}`} placement="start" color={index < 3 ? "#ff6337" : "green"}>
            <List.Item className={styles.songRankListCard} key={item.title}>
              <Row gutter={16} align="middle">
                <Col span={3}>
                  <Avatar
                    size={64}
                    shape="square"
                    className={styles.songRankListCardAvatar}
                    src={item.avatar}
                  />
                </Col>
                <Col span={15}>
                  <h5 className={styles.title}>{item.title}</h5>
                  <span className={styles.colorWhite}>{item.description}</span>
                </Col>
                <Col span={3}>
                  <span className={styles.colorWhite}>{item.duration}</span>
                </Col>
                <Col span={3}>
                  <Space>
                    <MdFavoriteBorder
                      size={20}
                      className={clsx(styles.colorWhite, styles.iconAction)}
                    />
                    <MdBookmarkBorder
                      size={18}
                      className={clsx(styles.colorWhite, styles.iconAction)}
                    />
                    <FaPlay
                      size={18}
                      className={clsx(styles.colorWhite, styles.iconAction)}
                    />
                  </Space>
                </Col>
              </Row>
            </List.Item>
          </Badge.Ribbon>
        )}
      />
    </div>
  );
};

export default SongRankList;
