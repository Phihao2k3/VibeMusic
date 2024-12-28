import { Card, Col, Row } from "antd";
import React from "react";
import NewsongList from "../module/home/components/newsong_list";
import SongRankList from "../module/home/components/songrank_list";
import PlaylistList from "../module/home/components/playlist_list";
import styles from "@src/shared/styles/style.module.scss";
import ArtistFav from "../module/home/components/artistfav";
import ListTop from "../module/home/components/listtop";

const Home = () => {
  document.title = "Trang Chủ";
  return (
    <div className="container">
      {/* newssong */}
      <NewsongList />
      <Row gutter={[16, 16]} className="mt-4">
        <Col span={16}>
          <Card bordered={false} className={styles.Card}>
            <SongRankList />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} className={styles.Card}>
           <PlaylistList />
          </Card>
        </Col>
      </Row>
      <ArtistFav />
      <ListTop />
    </div>
  );
};
export default Home;
