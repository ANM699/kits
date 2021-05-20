import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import { withSize } from "react-sizeme";
import "./rgl.less";

function Rgl({
  // items = [
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 18, 19, 20,
  // ],
  size,
}) {
  // const generateLayout = () => {
  //   return items.map((item, i) => {
  //     const y = Math.ceil(Math.random() * 4);
  //     return {
  //       x: i % 12,
  //       y: Math.floor(i / 6) * y,
  //       w: Math.round(Math.random() * 11 + 1),
  //       h: y,
  //       i: i.toString(),
  //     };
  //   });
  // };

  const [layout, setLayout] = useState([]);

  const onDrop = (layout) => {
    // console.log(layout);
    // console.log(layoutItem);
    setLayout(layout);
  };

  // const layout = generateLayout();
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
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        拖拽组件
      </div>
      <GridLayout
        style={{ minHeight }}
        className="layout"
        width={width}
        rowHeight={rowHeight}
        layout={layout}
        isDroppable={true}
        droppingItem={{ i: layout.length.toString(), w: 3, h: 2 }}
        isBounded
        onDrop={onDrop}
      >
        {layout.map((item) => (
          <div key={item.i}>
            <span className="text">{item.i + "类型"}</span>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

export default withSize()(Rgl);
