import React, { useCallback } from "react";
import { Menu, Row, Col, Carousel } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import styles from "./index.module.scss";
import { sideMenuList } from "../../mocks/home/sidemenu";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "300px",
  background: "#364d79",
};

const Banner = () => {
  const handleClick = useCallback(() => {}, []);

  return (
    <div className={styles.banner}>
      <div className={styles.mainContent}>
        <Row gutter={12}>
          <Col span={4}>
            <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
              {sideMenuList?.map((sub) => {
                return (
                  <Menu.SubMenu
                    key="sub1"
                    icon={<MailOutlined />}
                    title={sub.title}
                  >
                    {sub.subMenu.map((menuItem) => {
                      return (
                        <Menu.SubMenu title={menuItem.title}>
                          {menuItem.subMenu.map((item) => {
                            return <Menu.Item key="1">{item}</Menu.Item>;
                          })}
                        </Menu.SubMenu>
                      );
                    })}
                  </Menu.SubMenu>
                );
              })}
            </Menu>
          </Col>
          <Col span={20}>
            <Carousel effect="fade">
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
