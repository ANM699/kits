import React, { useState } from "react";
import "./ruler.less";
export default function withRuler(WrappedComponent) {
  return function (props) {
    const [size, setSize] = useState({ width: 0, height: 0, divide: 24 });
    const { width, height, divide } = size;
    const gridSize = width / divide;
    const count_v = Math.round(height / gridSize) || 0;
    const rulerStyle = {
      backgroundSize: `${gridSize}px 30px`,
    };

    return (
      <div className="container">
        <div
          className="ruler h"
          style={{ ...rulerStyle, width: `${width + 30}px` }}
        >
          <ul className="scale">
            {Array.from(Array(divide), (e, i) => {
              return (
                <li style={{ width: `${gridSize}px` }} key={i}>
                  {i + 1}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="ruler v"
          style={{
            ...rulerStyle,
            minWidth: `${gridSize * 12}px`,
            width: `${height}px`,
          }}
        >
          <ul className="scale">
            {Array.from(Array(count_v), (e, i) => {
              return (
                <li style={{ width: `${gridSize}px` }} key={i}>
                  {i + 1}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="children">
          <WrappedComponent setRuler={setSize} {...props} />
        </div>
      </div>
    );
  };
}
