import React, { useCallback } from "react";
import { Menu, Row, Col, Carousel } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import styles from "./index.module.scss";

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
              <Menu.SubMenu
                key="sub1"
                icon={<MailOutlined />}
                title="Navigation One"
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="sub2"
                icon={<AppstoreOutlined />}
                title="Navigation Two"
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </Menu.SubMenu>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="sub4"
                icon={<SettingOutlined />}
                title="Navigation Three"
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </Menu.SubMenu>
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
