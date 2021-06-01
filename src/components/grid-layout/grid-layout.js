import React, { useState, useEffect } from "react";
import ReactGridLayout from "react-grid-layout";
import { CloseCircleOutlined } from "@ant-design/icons";
import { withSize } from "react-sizeme";
import Widget from "../widget/widget";

import "./grid-layout.less";

function GridLayout({ size, droppingItem, setSize }) {
  const [layout, setLayout] = useState([]);
  const { width, height } = size;
  const gridSize = width / 24;
  const backgroundSize = `${gridSize / 5}px ${gridSize / 5}px,${
    gridSize / 5
  }px ${
    gridSize / 5
  }px,${gridSize}px ${gridSize}px,${gridSize}px ${gridSize}px`;

  useEffect(() => {
    setSize({ width, height });
  }, [width, height, setSize]);

  const onDrop = (newLayout, layoutItem, e) => {
    const data = e.dataTransfer.getData("dragData");
    layoutItem.data = data;
    const _newLayout = newLayout.map((newItem) => {
      const oldItem = layout.find((oldItem) => oldItem.i === newItem.i);
      if (oldItem) newItem = Object.assign(oldItem, newItem);
      return newItem;
    });
    setLayout(_newLayout);
  };

  const onResize = (newLayout, oldItem, newItem, placeholder, e, element) => {
    // console.log(layout, oldItem, newItem, placeholder, e, element);
    const _newLayout = layout.map((item) => {
      if (item.i === newItem.i) return Object.assign(item, newItem);
      return item;
    });
    setLayout(_newLayout);
  };

  const onRemove = (i) => {
    const _newLayout = layout.filter((item) => item.i !== i);
    setLayout(_newLayout);
  };

  return (
    <ReactGridLayout
      style={{
        minHeight: gridSize * 12,
        backgroundSize,
      }}
      isBounded
      className="layout"
      width={width}
      rowHeight={gridSize}
      layout={layout}
      isDroppable={true}
      droppingItem={droppingItem}
      onResize={onResize}
      onDrop={onDrop}
      cols={24}
      margin={[0, 0]}
    >
      {layout.map((item) => (
        <div key={item.i}>
          <Widget grid={item} gridSize={gridSize} />
          <CloseCircleOutlined
            className="remove"
            onClick={(e) => {
              onRemove(item.i);
            }}
          />
        </div>
      ))}
    </ReactGridLayout>
  );
}
export default withSize({ monitorHeight: true })(GridLayout);
