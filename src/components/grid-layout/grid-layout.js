import React, { useState } from "react";
import ReactGridLayout from "react-grid-layout";
import { withSize } from "react-sizeme";

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
    const type = e.dataTransfer.getData("dragData");
    layoutItem.type = type;
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
        <div key={item.i}>
          <span className="text">{item.type}</span>
        </div>
      ))}
    </ReactGridLayout>
  );
}
export default withSize()(GridLayout);
