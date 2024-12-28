import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "antd";
import styles from "@src/shared/styles/style.module.scss";
import { FaCirclePlay } from "react-icons/fa6";
import useSpotifyAction from "../../spotify/hook/usesotifyAction";
import { useNavigate } from "react-router-dom";
const NewsongList = () => {
  const navigate = useNavigate();
  const { getNewReleases, searchAlbum } = useSpotifyAction();
  const [newReleases, setNewReleases] = React.useState([]);

  useEffect(() => {
    getNewReleases().then((res) => {
      setNewReleases(res.payload.albums.items);
    });
  }, []);

  return (
    <div className="mb-5">
      <Row gutter={[16, 16]} className="mt-4">
        <Col span={20}>
          <h3>
            <span className={styles.title}>Bài Hát Mới</span>
          </h3>
        </Col>
        <Col span={4}>
          <Button
            type="link"
            onClick={() => navigate("/album")}
            className={styles.viewMore}
          >
            Xem thêm
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mt-4">
        {newReleases.length > 0 ? (
          newReleases.slice(0, 6).map((album, index) => (
            <Col span={4} key={index} className={styles.cardsongCol}>
              <Card
                className={styles.cardsong}
                cover={
                  <div className={styles.imageWrapper}>
                    <img
                      src={
                        album.images[0]?.url ||
                        "https://via.placeholder.com/150"
                      } // Fallback image if album image is unavailable
                      alt="song-cover"
                      className={styles.songImage}
                    />
                    <div className={styles.playButton}>
                      <FaCirclePlay />
                    </div>
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <span className={styles.cardsongTitle}>{album.name}</span>
                  }
                  description={
                    <span className={styles.cardsongDescription}>
                      {album.artists.map((artist) => artist.name).join(", ")}
                    </span>
                  }
                />
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <p>No new releases available.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default NewsongList;
