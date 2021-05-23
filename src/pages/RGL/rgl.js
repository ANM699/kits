import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import { withSize } from "react-sizeme";

import "./rgl.less";

function Rgl({ size }) {
  const [layout, setLayout] = useState([]);
  const [droppingItem, setDroppingItem] = useState(null);

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

  const onDragStart = (type, dimension, e) => {
    const { w, h } = dimension;
    e.dataTransfer.setData("dragData", type);
    setDroppingItem({ i: Date.now().toString(), w, h });
  };

  const { width } = size;
  //默认margin=10
  const gridSize = width / 24;
  const rowHeight = gridSize - 10;
  const minHeight = gridSize + 10;
  const backgroundSize = `${gridSize / 5}px ${gridSize / 5}px,${
    gridSize / 5
  }px ${
    gridSize / 5
  }px,${gridSize}px ${gridSize}px,${gridSize}px ${gridSize}px`;
  return (
    <div>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => {
          onDragStart("轮播", { w: 12, h: 7 }, e);
        }}
      >
        拖拽组件
      </div>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => {
          onDragStart("图文", { w: 3, h: 4 }, e);
        }}
      >
        图文组件
      </div>
      <GridLayout
        style={{
          minHeight: gridSize * 10,
          backgroundSize,
        }}
        className="layout"
        width={width}
        rowHeight={gridSize}
        layout={layout}
        isDroppable={true}
        droppingItem={droppingItem}
        isBounded
        onDrop={onDrop}
        cols={24}
        margin={[0, 0]}
      >
        {layout.map((item) => (
          <div key={item.i}>
            <span className="text">{item.type}</span>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

export default withSize()(Rgl);
