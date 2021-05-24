import React from "react";
import "./toolbar.less";

export default function Toolbar({ setDroppingItem }) {
  const onDragStart = (type, dimension, e) => {
    const { w, h } = dimension;
    e.dataTransfer.setData("dragData", type);
    setDroppingItem({ i: Date.now().toString(), w, h });
  };

  return (
    <>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => {
          onDragStart("轮播", { w: 12, h: 7 }, e);
        }}
      >
        轮播组件
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
    </>
  );
}
