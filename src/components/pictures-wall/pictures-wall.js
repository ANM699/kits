import React, { Component } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default class PicturesWall extends Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  render() {
    const { previewVisible, previewImage, previewTitle } = this.state;
    const { defaultFileList, onChange } = this.props;
    const UploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>上传图片</div>
      </div>
    );
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          defaultFileList={defaultFileList}
          //   fileList={fileList}
          onPreview={this.handlePreview}
          onChange={onChange}
        >
          {/* {fileList.length >= 8 ? null : UploadButton} */}
          {UploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }
}
