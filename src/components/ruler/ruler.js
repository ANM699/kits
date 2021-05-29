import React from "react";
import "./ruler.less";

export default function Ruler({ children, size }) {
  const rulerStyle = {
    backgroundSize: `${size}px 30px`,
  };
  return (
    <>
      <div className="container">
        <div className="ruler h" style={rulerStyle}>
          <ul className="scale">
            {Array.from(Array(24), (e, i) => {
              return (
                <li style={{ width: `${size}px` }} key={i}>
                  {i + 1}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="ruler v"
          style={{ ...rulerStyle, width: `${size * 12}px` }}
        >
          <ul className="scale">
            {Array.from(Array(12), (e, i) => {
              return (
                <li style={{ width: `${size}px` }} key={i}>
                  {12 - i}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="children">{children}</div>
      </div>
    </>
  );
}
