import React, { useState } from "react";
import { Layout } from "antd";
import ToolBar from "@components/toolbar/toolbar";
import GridLayout from "@components/grid-layout/grid-layout";
import "./Main.less";

const { Header, Content } = Layout;

export default function Main() {
  const [droppingItem, setDroppingItem] = useState(null);

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 999, width: '100%', padding: 0 }}>
        <div className="logo">KITS</div>
        <ToolBar setDroppingItem={setDroppingItem} />
      </Header>
      <Content
        className="site-layout"
        style={{
          marginTop: 64,
          padding: '60px 15%',
        }}
      >
        <div className="site-layout-background">
          <GridLayout droppingItem={droppingItem} />
        </div>

      </Content>
    </Layout>
  );
}
