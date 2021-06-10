import React, { useState, useEffect } from "react";
import ReactGridLayout from "react-grid-layout";
import { Drawer, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { withSize } from "react-sizeme";
import Widget from "../widget/widget";
import PicturesWall from "../pictures-wall/pictures-wall";
import withRuler from "@components/ruler/withRuler";
import "./grid-layout.less";

function GridLayout({ size, droppingItem, setRuler }) {
  const [layout, setLayout] = useState([]);
  const [curItem, setCurItem] = useState(null);
  const [visible, setVisible] = useState(false);

  const { width, height } = size;
  const gridSize = width / 24;
  const backgroundSize = `${gridSize / 5}px ${gridSize / 5}px,${
    gridSize / 5
  }px ${
    gridSize / 5
  }px,${gridSize}px ${gridSize}px,${gridSize}px ${gridSize}px`;

  useEffect(() => {
    setRuler({ width, height });
  }, [width, height, setRuler]);

  const showDrawer = (item) => {
    setCurItem({ ...item });
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onConfirm = () => {
    const _newLayout = layout.map((item) => {
      return item.i === curItem.i ? curItem : item;
    });
    setLayout(_newLayout);
    setVisible(false);
    setCurItem(null);
  };

  const onDrop = (newLayout, layoutItem, e) => {
    const data = JSON.parse(e.dataTransfer.getData("dragData"));
    layoutItem.data = data;
    const _newLayout = newLayout.map((newItem) => {
      const oldItem = layout.find((oldItem) => oldItem.i === newItem.i);
      if (oldItem) newItem = Object.assign(oldItem, newItem);
      return newItem;
    });
    setLayout(_newLayout);
  };

  const onResize = (newLayout, oldItem, newItem, placeholder, e, element) => {
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

  const handleChange = ({ fileList }) => {
    curItem.data.fileList = fileList;
    // console.log(curItem);
    // console.log(layout);
    setCurItem({ ...curItem });
    // setLayout(layout);
    console.log(fileList);
  };

  return (
    <>
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
          <div key={item.i} onClick={() => showDrawer(item)}>
            <Widget grid={item} gridSize={gridSize} />
            <CloseCircleOutlined
              className="remove"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(item.i);
              }}
            />
          </div>
        ))}
      </ReactGridLayout>
      <Drawer
        title={curItem ? curItem.data.type : ""}
        width={384}
        bodyStyle={{ paddingBottom: 80 }}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
            <Button onClick={onConfirm} type="primary">
              确定
            </Button>
          </div>
        }
      >
        <PicturesWall
          defaultFileList={curItem ? curItem.data.fileList : []}
          onChange={handleChange}
        />
      </Drawer>
    </>
  );
}

export default withRuler(withSize({ monitorHeight: true })(GridLayout));
