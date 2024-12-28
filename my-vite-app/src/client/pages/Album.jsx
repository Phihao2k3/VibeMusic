import React from "react";
import styles from "@src/shared/styles/style.module.scss";
import { Card, Col, Input, List, Row } from "antd";
import { FaCirclePlay } from "react-icons/fa6";
import useSpotifyAction from "../module/spotify/hook/usesotifyAction";

const Album = () => {
  const { getNewReleases, searchAlbumClient } = useSpotifyAction();
  const [newReleases, setNewReleases] = React.useState([]);
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    getNewReleases().then((res) => {
      setNewReleases(res.payload.albums.items);
    });
  }, []);
  const handleSearch = async (query) => {
    if (!query) {
      getNewReleases().then((res) => {
        setNewReleases(res.payload.albums.items);
      });
      return;
    }
    const response = await searchAlbumClient({ query });
    setNewReleases(response?.payload?.albums?.items);
  };
  return (
    <div className="container">
      <Row>
        <Col span={15}>
          <h3 className={styles.title}>Album Phổ Biến</h3>
        </Col>
        <Col span={9}>
          <Input.Search
            size="large"
            placeholder="Tìm kiếm"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
      </Row>

      <List
        className="mt-4"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        dataSource={newReleases}
        renderItem={(item) => (
          <List.Item className={styles.cardsongCol}>
            <Card
              className={styles.cardsong}
              cover={
                <div className={styles.imageWrapper}>
                  <img
                    src={
                      item.images[0]?.url || "https://via.placeholder.com/150"
                    } // Use fallback image if URL is unavailable
                    alt="song-cover"
                    className={styles.songImage}
                  />
                  <div className={styles.playButton}>
                    <FaCirclePlay />
                  </div>
                </div>
              }
              style={{ width: 240 }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                }}
                className={styles.cardsongTitle}
              >
                {item.name}
              </div>

              <div
                style={{
                  color: "gray",
                }}
                className={styles.cardsongDescription}
              >
                {item.artists.map((artist) => artist.name).join(", ")}
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Album;
