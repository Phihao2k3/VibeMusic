import React, { useRef, useState, useEffect, useContext } from "react";
import { Avatar, Col, Row, Button, Space } from "antd";
import { FaForward, FaBackward, FaHistory } from "react-icons/fa";
import { TbRewindBackward5, TbRewindForward5 } from "react-icons/tb";

import { FaRepeat, FaShuffle } from "react-icons/fa6";
import { SelectedTrackContext } from "../../context/SelectedTrackContext";
import logo from "@src/assets/image/logo.png";
import clsx from "clsx";
import  SpotifyPlayer from "react-spotify-web-playback";
import useSpotifyAction from "../module/spotify/hook/usesotifyAction";
const FooterClient = () => {
  const { searchTrack, getNewReleases, searchAlbumClient, getCurrentPlaying } =
    useSpotifyAction();
  const { selectedTrack, listTrack, currentTrack } =
    useContext(SelectedTrackContext);
  const [play, setPlay] = useState(false);

  const accessToken = localStorage.getItem("accessToken") || null;
  useEffect(() => {
    getCurrentPlaying().then((res) => {
      console.log("New Releases: ", res);
    });
  }, [accessToken]);

  useEffect(() => {
    console.log("Selected Track: ", selectedTrack);
    console.log("List Track: ", listTrack);
    console.log("Current Track: ", currentTrack);
  }, [selectedTrack, listTrack, currentTrack]);

  return (
    <Row
      align="middle"
      justify="center"
      style={{
        background: "#161616",
        padding: "10px 20px",
        color: "white",
        height: "120px", // Adjusted height for better alignment
      }}
    >
      {/* Song Info Column */}
      {/* <Col span={6} style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={selectedTrack?.album.images[0].url || logo}
            shape="square"
            size={64}
            style={{ marginRight: "10px" }}
          />
          <div style={{ textAlign: "left" }}>
            <h5 style={{ margin: 0, fontSize: "14px", color: "#fff" }}>
              {selectedTrack?.name || "Chưa chọn bài hát"}
            </h5>
            <span style={{ fontSize: "12px", color: "#aaa" }}>
              {selectedTrack?.artists[0].name || "Chưa chọn bài hát"}
            </span>
          </div>
        </div>
      </Col> */}

      {/* Music Player Column */}
      <Col span={24} style={{ textAlign: "center" }}>
        <Row justify="center" align="middle">
          <SpotifyPlayer 
         
            token={accessToken} 
            showSaveIcon
            callback={(state) => {
              if (!state.isPlaying) setPlay(false);
            }}
            styles={{
              bgColor: "#161616",
              color: "white",
              trackNameColor: "white",
              sliderColor: "#ff6337",
              sliderHandleColor: "#ff6337",
              sliderTrackColor: "#ff6337",
            }}
            play={true}
            uris={listTrack[currentTrack]?.uri ? [selectedTrack?.uri] : []}
          />
        </Row>
      </Col>

      {/* Empty Column or Additional Features */}
      {/* <Col span={6} style={{ textAlign: "center" }}>
        <Button
          shape="circle"
          icon={<FaRepeat />}
          size="large"
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        />
        <Button
          shape="circle"
          icon={<FaShuffle />}
          size="large"
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        />
        <Button
          shape="circle"
          size="large"
          icon={<FaHistory />}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        />
      </Col> */}
    </Row>
  );
};

export default FooterClient;
