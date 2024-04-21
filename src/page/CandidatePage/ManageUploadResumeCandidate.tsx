import React, { useEffect, useState } from "react";
import { HomeOutlined, InboxOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, message } from "antd";
import type { UploadFile, UploadProps } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useDispatch, useSelector } from "react-redux";
import {
  fileUpdateMessageRedux,
  fileUploadFile,
} from "../../store/file/file-slice";

const ManageUploadResumeCandidate: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { loading, messageFile } = useSelector((state: any) => state.file);
  const dispatch = useDispatch();
  const [file, setFile] = useState<UploadFile>();

  const props: UploadProps = {
    onRemove: (file) => {
      setFile(file);
    },
    beforeUpload: (file) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        message.error(`${file.name} is not a pdf file`);
      }
      setFile(file);
      return false;
    },
  };
  const handleUpload = () => {
    dispatch(fileUploadFile({ file, candidate_id: user?.id }));
  };
  useEffect(() => {
    if (messageFile == "success") {
      dispatch(fileUpdateMessageRedux({ messageFile: "" }));
      setFile(undefined);
      const elementFile: any = document.querySelector(
        ".ant-upload-list-item-container"
      );
      if (elementFile) {
        elementFile.style.display = "none";
      }
    }
  }, [messageFile]);

  return (
    <>
      <Breadcrumb
        className="px-5 pt-5"
        items={[
          {
            href: "/manage",
            title: <HomeOutlined />,
          },
          {
            href: "/list-resume",
            title: (
              <>
                <UserOutlined />
                <span>Danh sách CV</span>
              </>
            ),
          },
          {
            title: "Application",
          },
        ]}
      />
      <h3 className="self-start p-5 font-semibold text-lg">
        Tải hồ sơ xin việc.
      </h3>
      <div className="px-10 py-5 flex flex-col items-center mx-auto">
        <Dragger {...props} className="h-[200px]" maxCount={1}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={file === undefined}
          loading={loading}
          style={{ marginTop: 40 }}
          size="large"
          className=""
        >
          {loading ? "Đang lưu" : "Lưu hồ sơ xin việc"}
        </Button>
      </div>
    </>
  );
};

export default ManageUploadResumeCandidate;
