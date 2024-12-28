import React from "react";
import Slider from "react-slick";
import styles from "@src/shared/styles/style.module.scss";
import style2 from "@src/client/module/home/style/ArtistFav.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Button, Col, Row } from "antd";
import clsx from "clsx";

const ArtistFav = () => {
  const artist = [
    {
      key: 1,
      name: (
        <h5
          className={clsx("text-center", styles.colorWhite, "p-2", style2.name)}
        >
          Ghệ Cũ Tlinh
        </h5>
      ),

      image:
        "https://toquoc.mediacdn.vn/thumb_w/640/280518851207290880/2023/12/7/img3921-1701922299101741982524.jpg",
    },
    {
      key: 2,
      name: (
        <h5
          className={clsx("text-center", styles.colorWhite, "p-2", style2.name)}
        >
          Tlinh
        </h5>
      ),
      image:
        "https://photo.znews.vn/w660/Uploaded/qfssu/2023_04_10/335077625_3588683444741405_4900003693797240393_n_1.jpg",
    },
    {
      key: 3,
      name: (
        <h5
          className={clsx("text-center", styles.colorWhite, "p-2", style2.name)}
        >
          Ghệ Mới Tlinh
        </h5>
      ),
      image:
        "https://netbiz.net.vn/stores/news_dataimages/2024/112024/13/15/xba12d37756df9b40da7ffe34fd475526.jpg,qrt=20241113162145.pagespeed.ic.xBHCXvM4iU.webp",
    },
    {
      key: 4,
      name: (
        <h5
          className={clsx("text-center", styles.colorWhite, "p-2", style2.name)}
        >
          Obito
        </h5>
      ),
      image:
        "https://kenh14cdn.com/203336854389633024/2024/11/15/4237156598969611957695545962831428724076983n-1410-1731675566770-17316755673632095293985.jpeg",
    },
    {
      key: 5,
      name: (
        <h5
          className={clsx("text-center", styles.colorWhite, "p-2", style2.name)}
        >
          VSTRA
        </h5>
      ),
      image:
        "https://yt3.googleusercontent.com/7x6fLxrtJZ47vlv_lFwaROEcN4bYafrFR0Nu4kOOn5q9mV9AM_4glhKsoQn1GtNeml8qK1PXj1Y=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Row>
        <Col span={20}>
          <h4 className={clsx(styles.colorWhite, "mb-3")}>Nghệ Sĩ Nổi Bật</h4>
        </Col>
        <Col span={4}>
          <Button type="link" className={clsx(styles.viewMore)}>
            Xem Thêm
          </Button>
        </Col>
      </Row>

      <Slider {...settings} className="mt-4">
        {artist.map((item) => (
          <div
            key={item.key}
            className={clsx("text-center", style2.artistcontainer)}
          >
            <div className={style2.artist}>
              <Avatar
                size={150}
                src={item.image}
                alt="artist"
                className={style2.avatar}
              />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArtistFav;
