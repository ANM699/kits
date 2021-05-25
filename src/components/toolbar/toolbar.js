import React from "react";
import { Row, Col, Tooltip } from "antd";
import "./toolbar.less";

export default function Toolbar({ setDroppingItem }) {
  const onDragStart = (data, dimension, e) => {
    const { w, h } = dimension;
    e.dataTransfer.setData("dragData", data);
    setDroppingItem({ i: Date.now().toString(), w, h });
  };

  return (
    <Row className="row" justify="start">
      <Col className="col">
        <Tooltip title="轮播">
          <div
            className="icon iconfont icon-lunbotu"
            draggable={true}
            unselectable="on"
            onDragStart={(e) => {
              onDragStart("carousel", { w: 12, h: 7 }, e);
            }}
          ></div>
        </Tooltip>
      </Col>
      <Col className="col">
        <Tooltip title="图文">
          <div
            className="icon iconfont icon-haibaozujian"
            draggable={true}
            unselectable="on"
            onDragStart={(e) => {
              onDragStart("image", { w: 3, h: 4 }, e);
            }}
          ></div>
        </Tooltip>
      </Col>
      <Col className="col">
        <Tooltip title="自定义">
          <div
            className="icon iconfont icon-requzujian"
            draggable={true}
            unselectable="on"
            onDragStart={(e) => {
              onDragStart("custom", { w: 4, h: 4 }, e);
            }}
          ></div>
        </Tooltip>
      </Col>
    </Row>
  );
}
