import React, { useState } from "react";
import ReactGridLayout from "react-grid-layout";
import { withSize } from "react-sizeme";
import Widget from "../widget/widget";

import "./grid-layout.less";

function GridLayout({ size, droppingItem }) {
  const [layout, setLayout] = useState([]);

  const { width } = size;
  const gridSize = width / 24;
  const backgroundSize = `${gridSize / 5}px ${gridSize / 5}px,${
    gridSize / 5
  }px ${
    gridSize / 5
  }px,${gridSize}px ${gridSize}px,${gridSize}px ${gridSize}px`;

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

  return (
    <ReactGridLayout
      style={{
        minHeight: gridSize * 15,
        backgroundSize,
      }}
      isBounded
      className="layout"
      width={width}
      rowHeight={gridSize}
      layout={layout}
      isDroppable={true}
      droppingItem={droppingItem}
      onDrop={onDrop}
      cols={24}
      margin={[0, 0]}
    >
      {layout.map((item) => (
        <div style={{ padding: 2 }} key={item.i}>
          <Widget data={item.data} />
        </div>
      ))}
    </ReactGridLayout>
  );
}
export default withSize()(GridLayout);
