import React, { useState } from "react";
import { Divider } from "antd";
import ToolBar from "@components/toolbar/toolbar";
import GridLayout from "@components/grid-layout/grid-layout";

export default function Rgl() {
  const [droppingItem, setDroppingItem] = useState(null);

  return (
    <>
      <ToolBar setDroppingItem={setDroppingItem} />
      <Divider style={{ marginTop: 0, marginBottom: 15 }} />
      <GridLayout droppingItem={droppingItem} />
    </>
  );
}
