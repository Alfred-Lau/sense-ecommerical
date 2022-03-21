import { FC, ReactNode } from "react";
import { Col, Divider, Row, Typography } from "antd";
import styles from "./index.module.scss";

const { Title, Text } = Typography;

export type ProductCardProps = {
  title: string | ReactNode;
  products: any[];
};

const Product: FC<ProductCardProps> = (props) => {
  const { title, products } = props;
  return (
    <div className={styles.product}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Divider type={"horizontal"}>
            <Title level={2}>{title}</Title>{" "}
          </Divider>
        </div>
        <div className={styles.content}>
          <Row gutter={12}>
            <Col span={4}>
              <div>
                <img
                  src="https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg"
                  alt=""
                  width={"100%"}
                  height="100%"
                />
              </div>
            </Col>
            <Col span={20}>
              <Row>
                {products.map((p) => {
                  const url =
                    p.touristRoutePictures[0]?.url ||
                    "https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg";
                  return (
                    <Col span={6}>
                      <div
                        style={{
                          backgroundImage: `url('${url}')`,
                          height: "200px",
                          marginLeft: "20px",
                          marginBottom: " 20px",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "8px",
                            fontSize: "16px",
                            color: "#ddd",
                            height: "50px",
                          }}
                        >
                          <Text> {p.title}</Text>
                        </div>
                        <div
                          style={{
                            color: "red",
                            position: "absolute",
                            bottom: "70px",
                            left: "8px",
                            fontSize: "16px",
                            height: "20px",
                          }}
                        >
                          {p.price} ￥
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Product;
