import React, { useState } from "react";
import { Divider } from "antd";
import ToolBar from "@components/toolbar/toolbar";
import GridLayout from "@components/grid-layout/grid-layout";
import Ruler from "@components/ruler/ruler";

export default function Rgl() {
  const [droppingItem, setDroppingItem] = useState(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  return (
    <>
      <ToolBar setDroppingItem={setDroppingItem} />
      <Divider style={{ marginTop: 0, marginBottom: 15 }} />
      <Ruler size={size}>
        <GridLayout setSize={setSize} droppingItem={droppingItem} />
      </Ruler>
    </>
  );
}
