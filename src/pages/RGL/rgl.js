import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import { withSize } from "react-sizeme";

import "./rgl.less";

function Rgl({ size }) {
  const [layout, setLayout] = useState([]);
  const [droppingItem, setDroppingItem] = useState(null);

  const onDrop = (newLayout, layoutItem, e) => {
    console.log(newLayout);
    console.log(layoutItem);
    // console.log(e);
    const type = e.dataTransfer.getData("dragData");
    layoutItem.type = type;
    layout.push(layoutItem);
    setLayout(layout);
  };

  const onDragStart = (type, e) => {
    e.dataTransfer.setData("dragData", type);
    setDroppingItem({ i: Date.now().toString(), w: 4, h: 3 });
  };

  const { width } = size;
  //默认margin=10
  const rowHeight = width / 12 - 10;
  const minHeight = width / 12 + 10;
  return (
    <div>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => {
          onDragStart("轮播", e);
        }}
      >
        拖拽组件
      </div>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => {
          onDragStart("图文", e);
        }}
      >
        图文组件
      </div>
      <GridLayout
        style={{ minHeight }}
        className="layout"
        width={width}
        rowHeight={rowHeight}
        layout={layout}
        isDroppable={true}
        droppingItem={droppingItem}
        isBounded
        onDrop={onDrop}
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
