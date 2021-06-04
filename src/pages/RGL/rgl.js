import React, { useState } from "react";
import { Divider, Drawer } from "antd";
import ToolBar from "@components/toolbar/toolbar";
import GridLayout from "@components/grid-layout/grid-layout";

export default function Rgl() {
  const [droppingItem, setDroppingItem] = useState(null);
  const [curWidgetProps, setCurWidgetProps] = useState({});
  const [visible, setVisible] = useState(false);

  const showDrawer = (grid) => {
    setCurWidgetProps(grid);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <ToolBar setDroppingItem={setDroppingItem} />
      <Divider style={{ marginTop: 0, marginBottom: 15 }} />
      <GridLayout droppingItem={droppingItem} onItemClick={showDrawer} />
      <Drawer
        title={curWidgetProps.data || ""}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
