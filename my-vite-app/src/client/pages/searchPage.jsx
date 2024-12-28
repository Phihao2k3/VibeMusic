import React, { useState, useEffect, useMemo, useContext } from "react";
import { useLocation } from "react-router-dom";
import styles from "@src/shared/styles/style.module.scss";
import useSpotifyAction from "../module/spotify/hook/usesotifyAction";
import { Card, List } from "antd";
import { FaCirclePlay } from "react-icons/fa6";
import { SelectedTrackContext } from "../../context/SelectedTrackContext";

const SearchPage = () => {
  const location = useLocation();
  const { searchTrack } = useSpotifyAction();
  const { setCurrentTrack, setListTrack } = useContext(SelectedTrackContext); // Lấy hàm setSelectedTrack từ context

  const [resultSearch, setResultSearch] = useState([]);

  // Lấy query từ URL
  const query = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("q") || ""; // Mặc định là chuỗi rỗng nếu không có giá trị
  }, [location.search]);

  // Xử lý tìm kiếm khi query thay đổi
  useEffect(() => {
    if (query) {
      searchTrack(query)
        .then((res) => {
          setResultSearch(res.payload.tracks.items); // Lưu kết quả vào trạng thái
        })
        .catch((err) => {
          console.error("Lỗi khi tìm kiếm:", err);
        });
    } else {
      setResultSearch([]); // Xóa kết quả nếu không có query
    }
  }, [query]);

  // Xử lý khi người dùng chọn bài hát
  const handleSelectTrack = (list, index) => {
   
    setCurrentTrack(index); // Lưu bài hát hiện tại vào context
    setListTrack(list); // Lưu danh sách bài hát vào context
  };

  return (
    <div>
      <h3 className={styles.colorWhite}>Từ khóa tìm kiếm: {query}</h3>
      <div>
        {resultSearch.length > 0 ? (
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
            dataSource={resultSearch}
            renderItem={(item, index) => (
              <List.Item className={styles.cardsongCol}>
                <Card
                  className={styles.cardsong}
                  cover={
                    <div className={styles.imageWrapper}>
                      <img
                        src={item.album.images[1].url}
                        alt="song-cover"
                        className={styles.songImage}
                      />
                      <div
                        className={styles.playButton}
                        onClick={() => handleSelectTrack(resultSearch, index)}
                      >
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
        ) : (
          <p>Không có kết quả tìm kiếm</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
