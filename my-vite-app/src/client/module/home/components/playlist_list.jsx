import React from "react";
import { Card, Col, Image, Row } from "antd";
import styles from "@src/shared/styles/style.module.scss";
import styles2 from "@src/client/module/home/style/playlist.module.scss";

const PlaylistList = () => {
  return (
    <div>
      <h3 className={styles2.title}>PlayList Của Bạn</h3>
      <Row gutter={[16, 16]}>
        <Col span={12} className={styles2.playlistContainer}>
          <div>
            <Image
              preview={false}
              src="https://www.elleman.vn/app/uploads/2023/10/18/226632/hieuthuhai_elleman-4.jpg"
              alt="playlist"
              className={styles2.PlaylistListImg}
            />
            <div className={styles2.playlistName}>
              <h5>Playlist 1</h5>
            </div>
          </div>
        </Col>
        <Col span={12} className={styles2.playlistContainer}>
          <div>
            <Image
              preview={false}
              src="https://i.ytimg.com/vi/eW4AM1539-g/maxresdefault.jpg"
              alt="playlist"
              className={styles2.PlaylistListImg}
            />
            <div className={styles2.playlistName}>
              <h5>Playlist 1</h5>
            </div>
          </div>
        </Col>
        <Col span={12} className={styles2.playlistContainer}>
          <div>
            <Image
              preview={false}
              src="https://ticketgo.vn/photos/3448/News/640ec41b08b43.jpg"
              alt="playlist"
              className={styles2.PlaylistListImg}
            />
            <div className={styles2.playlistName}>
              <h5>Playlist 1</h5>
            </div>
          </div>
        </Col>
        <Col span={12} className={styles2.playlistContainer}>
          <div>
            <Image
              preview={false}
              src="https://i.ytimg.com/vi/82ZTNQNEQgE/maxresdefault.jpg"
              alt="playlist"
              className={styles2.PlaylistListImg}
            />
            <div className={styles2.playlistName}>
              <h5>Playlist 1</h5>
            </div>
          </div>
        </Col>
        <Col span={12} className={styles2.playlistContainer}>
          <div>
            <Image
              preview={false}
              src="https://kenh14cdn.com/zoom/700_438/203336854389633024/2023/10/15/photo1697345410345-1697345411277930571317.png"
              alt="playlist"
              className={styles2.PlaylistListImg}
            />
            <div className={styles2.playlistName}>
              <h5>Playlist 1</h5>
            </div>
          </div>
        </Col>
        <Col span={12} className={styles2.playlistContainer}>
          <div>
            <Image
              preview={false}
              src="https://bazaarvietnam.vn/wp-content/uploads/2023/12/Harpers-Bazaar-Wren-Evans-ra-mat-album-dau-tay-Loichoi_03.jpg"
              alt="playlist"
              className={styles2.PlaylistListImg}
            />
            <div className={styles2.playlistName}>
              <h5>Playlist 1</h5>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default PlaylistList;
