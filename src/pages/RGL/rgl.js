import React, { useState } from "react";
import { Divider } from "antd";
import ToolBar from "@components/toolbar/toolbar";
import GridLayout from "@components/grid-layout/grid-layout";
import Ruler from "@components/ruler/ruler";

export default function Rgl() {
  const [droppingItem, setDroppingItem] = useState(null);
  const [gridSize, setGridSize] = useState(null);
  return (
    <>
      <ToolBar setDroppingItem={setDroppingItem} />
      <Divider style={{ marginTop: 0, marginBottom: 15 }} />
      <Ruler size={gridSize}>
        <GridLayout setGridSize={setGridSize} droppingItem={droppingItem} />
      </Ruler>
    </>
  );
}
