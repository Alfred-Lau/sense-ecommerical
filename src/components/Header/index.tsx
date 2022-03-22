import React, { FC } from "react";
import { Layout, Typography, Input, Menu, Dropdown, Divider } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Header: FC = (props) => {
  let navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu className="Item">简体中文</Menu>
      <Menu className="Item">English</Menu>
    </Menu>
  );

  const signin = () => {
    navigate("signin");
  };

  const signup = () => {
    navigate("signup");
  };
  return (
    <div className={styles.header}>
      <div className={styles.topHeaderContainer}>
        <div className={styles.topHeader}>
          让旅行更幸福
          <Dropdown overlay={menu} className={styles.lang}>
            <p>
              <GlobalOutlined
                style={{
                  marginRight: " 10px",
                }}
              />
              <span>简体中文</span>
            </p>
          </Dropdown>
          <div className={styles.user}>
            <span className={styles.signin} onClick={signin}>
              登录
            </span>
            <Divider type={"vertical"} />
            <span className={styles.signup} onClick={signup}>
              注册
            </span>
          </div>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span>
          <img
            src={"https://lazy-minus-your-intelligence.com/assets/avatar.png"}
            alt="logo"
            className={styles.logo}
          />
          <Typography.Title level={3} className={styles.title}>
            旅游电商网站
          </Typography.Title>
        </span>
        <Input.Search
          placeholder={"请输入旅游目的地、主题、或关键字"}
          className={styles.search}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles.menu}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
