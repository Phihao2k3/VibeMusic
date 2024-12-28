import React from "react";
import styles from "@src/shared/styles/style.module.scss";
import { Card, Col, Image, Row } from "antd";
import clsx from "clsx";
const cardsongCol = () => {
  return (
    <div className="mt-4 mb-4">
      <h3 className={styles.colorWhite}>Các Hạng Mục Phổ Biến</h3>
      <Row className="mt-4" gutter={[16, 16]}>
        <Col span={4} className={styles.cardsongCol}>
          <Card
            className={styles.cardsong}
            cover={
              <Image
                preview={!true}
                alt="example"
                className={styles.imgTop}
                width={"100%"}
                height={205}
                src="https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/33/10/f7/3310f7c0-9aee-b263-99be-97602c8be731/Job6466fa82-1e20-4f12-9c34-debd240ae4c4-146375042-PreviewImage_Preview_Image_Intermediate_nonvideo_272976479_1377247079-Time1678484014455.png/305x305cc.webp"
              />
            }
          >
            <p className={clsx(styles.colorWhite, styles.title2line)}>
              Top 100 Toàn Cầu
            </p>
          </Card>
        </Col>{" "}
        <Col span={4} className={styles.cardsongCol}>
          <Card
            className={styles.cardsong}
            cover={
              <Image
                preview={!true}
                alt="example"
                width={"100%"}
                height={205}
                style={{ objectFit: "cover" }}
                className={styles.imgTop}
                src="https://imgs.search.brave.com/bo3dS-gc8-kk1cTTmyj6vUlViUsmleKqNCVdngZ4mnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXVzaWNncm90dG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA4L3JhcHBl/ci1ob2xkaW5nLW1p/Y3JvcGhvbmUtYm9v/bWJveC1pbi1iYWNr/Z3JvdW5kLWdyYXBo/aWMtYXJ0LmpwZw"
              />
            }
          >
            <p className={clsx(styles.colorWhite, styles.title2line)}>
              Top 50 Rapper Việt Nam
            </p>
          </Card>
        </Col>{" "}
        <Col span={4} className={styles.cardsongCol}>
          <Card
            className={styles.cardsong}
            cover={
              <Image
                preview={!true}
                width={"100%"}
                height={205}
                style={{ objectFit: "cover" }}
                alt="example"
                className={styles.imgTop}
                src="https://imgs.search.brave.com/dMQlPp22bWK7lNaVVqZOp_3Bnpmj0104CrxKJlKrpXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFy/dG1hc3RlcnMub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL1RvcC1hcnRp/c3RzLUVBUy5qcGc"
              />
            }
          >
            <p className={clsx(styles.colorWhite, styles.title2line)}>
              Top Nghệ Sĩ Năng Nổ Nhất
            </p>
          </Card>
        </Col>{" "}
        <Col span={4} className={styles.cardsongCol}>
          <Card
            className={styles.cardsong}
            cover={
              <Image
                preview={!true}
                width={"100%"}
                height={205}
                style={{ objectFit: "cover" }}
                alt="example"
                className={styles.imgTop}
                src="https://imgs.search.brave.com/N6PvT0G5GpgBOyn0VmAKnCiNTuSzO6KEw9-WegD276Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jaGFy/dG1hc3RlcnMub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL1RvcC1hbGJ1/bXMtRUFTLmpwZw"
              />
            }
          >
            <p className={clsx(styles.colorWhite, styles.title2line)}>
              Top Album 2025
            </p>
          </Card>
        </Col>{" "}
        <Col span={4} className={styles.cardsongCol}>
          <Card
            className={styles.cardsong}
            cover={
              <Image
                preview={!true}
                width={"100%"}
                height={205}
                style={{ objectFit: "cover" }}
                alt="example"
                className={styles.imgTop}
                src="https://imgs.search.brave.com/EqE_Co06rpJwj7L8cU-9uzRGY2SGuIrl8hHhOafAKqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFy/dG1hc3RlcnMub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL1RvcC1zb25n/cy1FQVMuanBn"
              />
            }
          >
            <p className={clsx(styles.colorWhite, styles.title2line)}>
              Bài Hát Của Năm
            </p>
          </Card>
        </Col>{" "}
        <Col span={4} className={styles.cardsongCol}>
          <Card
            className={styles.cardsong}
            cover={
              <Image
                preview={!true}
                width={"100%"}
                height={205}
                style={{ objectFit: "cover" }}
                alt="example"
                className={styles.imgTop}
                src="https://imgs.search.brave.com/V52Jg-h9a1UYVez0S2QW_8nmn5lxttEiJPCuF30d1S4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFy/dG1hc3RlcnMub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL1RvcC1hcnRp/c3RzLUFTUi5qcGc"
              />
            }
          >
            <p className={clsx(styles.colorWhite, styles.title2line)}>
              Top Nghệ Sĩ Nổi Tiếng
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default cardsongCol;
