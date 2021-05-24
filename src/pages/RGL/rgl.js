import React, { useState } from "react";
import { Row, Col } from "antd";
import ToolBar from "@components/toolbar/toolbar";
import GridLayout from "@components/grid-layout/grid-layout";

export default function Rgl() {
  const [droppingItem, setDroppingItem] = useState(null);

  return (
    <Row gutter={8}>
      <Col span={20}>
        <GridLayout droppingItem={droppingItem} />
      </Col>
      <Col span={4}>
        <ToolBar setDroppingItem={setDroppingItem} />
      </Col>
    </Row>
  );
}
