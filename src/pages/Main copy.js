import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Switch, Route, HashRouter, Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BorderlessTableOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import "./Main.less";

import Rgl from "./rgl/rgl";
import Demo from "./demo/demo";

const { Header, Sider, Content } = Layout;

const navList = [
  {
    path: "/",
    component: Rgl,
    exact: true,
  },
  {
    path: "/ruler",
    component: Demo,
    exact: true,
  },
];

const menuList = [
  {
    path: "/",
    title: "React Grid Layout",
    icon: <LayoutOutlined />,
  },
  {
    path: "/ruler",
    title: "Ruler",
    icon: <BorderlessTableOutlined />,
  },
  {
    path: "/2",
    title: "2",
    icon: <VideoCameraOutlined />,
  },
  {
    path: "/3",
    title: "3",
    icon: <UploadOutlined />,
  },
];

export default function Main() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <HashRouter>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">KITS</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            {menuList.map((menu, index) => (
              <Menu.Item key={index} icon={menu.icon}>
                <Link to={menu.path}>{menu.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ minHeight: "100vh" }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: 8,
              padding: 8,
            }}
          >
            <Switch>
              {navList.map((nav, index) => (
                <Route key={index} {...nav} />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </HashRouter>
  );
}
