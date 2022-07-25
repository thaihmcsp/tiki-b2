import React, { useState } from "react";
import styled from "styled-components";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const InforContainer = styled.div`
  padding: 20px;
  background: #fff;
  margin-bottom: 15px;
  border-radius: 10px;
  margin-top: 40px;
  .infor-text {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 0;
    font-weight: 600;
  }
  .infor-content-top {
    margin-top: 20px;
    .infor-content-bottom {
      margin-bottom: 24px;
      .infor-content-item-text {
        display: inline-block;
        vertical-align: top;
        text-align: right;
        padding-right: 16px;
        margin-bottom: 8px !important;
      }
      .next-form-item-control {
        .next-form-item-text {
          margin-bottom: 8px;
          max-width: 800px;
          font-size: 13px;
          color: #999;
          display: inline-block;
        }
        .image-zone {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          background-color: #fff;
          border: 1px dashed #cbced5;
          border-radius: 4px;
          padding: 15px 20px;

          .gc-action-zone {
            display: flex;
            align-items: center;
            margin-top: 5px;
            .next-btn-text {
              border-radius: 0;
              padding: 0;
              height: 20px;
              line-height: 20px;
              font-size: 14px;
              border-width: 0;
              color: #1a71ff;
              background-color: transparent;
              border-color: transparent;
              border-style: solid;
            }
            .text-sep {
              margin: 0 5px;
            }
            .text-sep::before {
              content: "|";
            }
          }
        }
        .image-zone:hover {
          background-color: #f2f3f7;
          cursor: pointer;
        }
      }
    }
  }
`;

const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  .next-form-item-label {
    .dada-required::before {
      margin-right: 4px;
      content: "*";
      color: #e64a4a;
    }
  }
  .next-form-item-control {
    .hoc-label-top {
      display: flex;
      flex-direction: column;
      .translate-input {
        display: flex;
        align-items: flex-start;
        min-width: 200px;
        .translate-source {
          flex: 1;
          min-width: 500px;
          .next-input {
            vertical-align: middle;
            display: inline-table;
            border-collapse: separate;
            font-size: 0;
            line-height: 1;
            width: 100%;
            border-spacing: 0;
            transition: all 0.3s ease-out;
            border: 1px solid #cbced5;
            background-color: #fff;
            height: 36px;
            border-radius: 8px;
            input {
              height: 34px;
              padding: 0 8px;
              font-size: 14px;
              border-radius: 8px;
              border: none;
              outline: none;
              margin: 0;
              font-weight: 400;
              vertical-align: middle;
              background-color: transparent;
              color: #333;
              width: 100%;
            }
            .next-input-control {
              display: table-cell;
              width: 1px;
              vertical-align: middle;
              line-height: 1;
              background-color: transparent;
              white-space: nowrap;
              .next-input-len {
                font-size: 12px;
                line-height: 12px;
                color: #858b9c;
                display: table-cell;
                width: 1px;
                vertical-align: bottom;
                padding-right: 10px;
              }
            }
          }
        }
        .translate-addon {
          display: flex;
          align-items: center;
          height: 36px;
          margin-left: 12px;
          .next-medium {
            border-radius: 0;
            padding: 0;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            border-width: 0;
            text-decoration: none;
            text-align: center;
            text-transform: none;
            white-space: nowrap;
            vertical-align: middle;
            transition: all 0.3s ease-out;
            cursor: pointer;
            color: #1a71ff;
            background-color: transparent;
            border-color: transparent;
          }
        }
      }
    }
  }
`;

const FormCategory = styled.div`
  .next-form-item {
    display: flex;
    flex-direction: column;
    .next-form-item-label {
      font-size: 14px;
    }
    .next-form-item-label label::before {
      margin-right: 4px;
      content: "*";
      color: #e64a4a;
    }
    .next-form-item-control {
      .next-form-item-text {
        margin-bottom: 8px;
        max-width: 800px;
        font-size: 13px;
        color: #999;
        display: inline-block;
      }
      .next-input {
        vertical-align: middle;
        display: inline-table;
        border-collapse: separate;
        font-size: 0;
        line-height: 1;
        width: 100%;
        border-spacing: 0;
        transition: all 0.3s ease-out;
        border: 1px solid #cbced5;
        background-color: #fff;
        height: 36px;
        border-radius: 8px;
        input {
          height: 34px;
          padding: 0 8px;
          font-size: 14px;
          border-radius: 8px;
          border: none;
          outline: none;
          margin: 0;
          font-weight: 400;
          vertical-align: middle;
          background-color: transparent;
          color: #333;
          width: 100%;
        }
      }
    }
  }
`;

const ButtonSend = styled.div`
  margin-top: 15px;
  .label-hoc-top {
    display: flex;
    flex-direction: column;
    .data-affix-container {
      padding: 20px 24px;
      border-radius: 18px;
      background: #fff;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      box-shadow: 0 2px 18px 0 rgb(0 0 0 / 4%);
      .btn-send {
        display: flex;
        flex-direction: column;
        margin-right: 0;
        button {
          border-radius: 8px;
          padding: 0 12px;
          height: 36px;
          line-height: 34px;
          font-size: 14px;
          border-width: 1px;
          position: relative;
          display: inline-block;
          -webkit-box-shadow: none;
          box-shadow: none;
          text-decoration: none;
          text-align: center;
          text-transform: none;
          white-space: nowrap;
          vertical-align: middle;
          user-select: none;
        }
      }
    }
  }
`;

const BasicInformation = () => {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <InforContainer>
        <h2 className="infor-text">Thông tin cơ bản</h2>
        <div className="infor-content-top">
          <div className="infor-content-bottom">
            <div className="infor-content-item">
              <div className="infor-content-item-text">
                <span>Ảnh sản phẩm</span>
              </div>
              <div className="next-form-item-control">
                <div className="next-form-item-text">
                  <span>
                    Đây là hình ảnh chính trên trang sản phẩm. Bạn có thể up nhiều hình ảnh cùng lúc và tối đa có thể có 8 hình. Hình ảnh cần có kích thước từ 330x300 px đến 5000x5000px và không dược
                    phép chứa nội dung nhạy cảm. Kích thước tối đa: 3 MB
                  </span>
                </div>
                <div className="image-zone">
                  <div>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{
                            width: "100%",
                          }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </div>
                  <div class="gc-action-zone">
                    <button type="button" class=" next-btn-text" role="button">
                      Đăng tải
                    </button>
                    <span class="text-sep"></span>
                    <button type="button" class=" next-btn-text" role="button">
                      Thư viện Đa phương tiện
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FormTitle>
            <div className="next-form-item">
              <div className="next-form-item-label">
                <label for="title" required="">
                  <span class="dada-adapter-item-label label-top label">
                    <span class="label-inner label-required-mark required" data-text-optional="( Optional )">
                      <span class="dada-required"></span>Tên sản phẩm
                    </span>
                  </span>
                </label>
              </div>
              <div className="next-form-item-control">
                <div className="hoc-label-top">
                  <div className="translate-input">
                    <div className="translate-source">
                      <span className="next-input next-medium">
                        <input placeholder="Ex. Nikon Coolpix A300 Máy Ảnh Kỹ Thuật Số" maxlength="255" height="100%" />
                        <span class="next-input-control">
                          <span class="next-input-len">0/255</span>
                        </span>
                      </span>
                    </div>
                    <div class="translate-addon">
                      <button
                        data-spm="d_open_translate_dialog"
                        type="button"
                        class="next-btn next-medium next-btn-primary next-btn-text aplus-auto-exp"
                        role="button"
                        data-aplus-clk="x22_2d82671c"
                        data-spm-anchor-id="a1zawf.20777315.0.d_open_translate_dialog.4f404edfmAa8LL"
                        data-aplus-ae="x22_3b5ed0d3"
                      >
                        Add multi-languages
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FormTitle>
          <FormCategory>
            <div className="next-form-item">
              <div class="next-form-item-label">
                <label for="categoryPath" required="">
                  <span class="dada-adapter-item-label label-top label">
                    <span class="label-inner label-required-mark required" data-text-optional="( Optional )">
                      <span class="dada-required"></span>Danh mục ngành hàng
                    </span>
                  </span>
                </label>
              </div>
              <div className="next-form-item-control">
                <div className="hoc-label-top">
                  <div className="translate-input">
                    <div className="translate-source">
                      <span className="next-input next-medium">
                        <input placeholder="Danh mục Tìm kiếm" maxlength="255" height="100%" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FormCategory>
        </div>
      </InforContainer>
      <ButtonSend>
        <div className="label-hoc-top">
          <div className="data-affix-container">
            <div className="btn-send">
              <button disabled="" aria-haspopup="true" aria-expanded="false" type="button" class="next-btn next-medium next-btn-primary" role="button">
                Gửi đi
              </button>
            </div>
          </div>
        </div>
      </ButtonSend>
    </div>
  );
};

export default BasicInformation;
