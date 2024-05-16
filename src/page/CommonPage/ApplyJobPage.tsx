import React, { useEffect, useState } from "react";
import IconClose from "../../components/icons/IconClose";
import RadioButton from "../../components/radio/RadioButton";
import IconFolder from "../../components/icons/IconFolder";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { Button, message, UploadFile, UploadProps } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fileUpdateMessageRedux,
  fileUploadFile,
} from "../../store/file/file-slice";
interface PropComponent {
  className?: string;
  onClick?: any;
}
const ApplyJobPage: React.FC<PropComponent> = ({ className, onClick }) => {
  const { user } = useSelector((state: any) => state.auth);
  const { loadingFile, messageFile } = useSelector((state: any) => state.file);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState<UploadFile>();
  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
    console.log("🚀 ~ handleOptionChange ~ e.target.value:", e.target.value);
  };
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
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
      <div className={`fixed inset-0 bg-black/40 z-20 flex ${className}`}>
        <div className="absolute inset-0" onClick={() => onClick(false)}></div>
        <div className="relative m-auto w-[600px] h-[600px] bg-white rounded-md">
          <div
            className="absolute top-2 right-2 cursor-pointer z-20"
            onClick={() => onClick(false)}
          >
            <IconClose></IconClose>
          </div>
          <div className="absolute top-0 right-0 left-0 h-auto rounded-t-md bg-white text-primary z-10 px-5 py-3">
            <h3 className="font-medium text-xl">Ứng tuyển</h3>
          </div>
          <div className="p-5 h-[500px] overflow-auto mt-[30px]">
            <div className="mt-5">
              <div className="flex items-center gap-2">
                <IconFolder
                  className="text-primary"
                  classIcon="!w-7 !h-7"
                ></IconFolder>
                <h3 className="font-medium text-lg">Chọn CV để ứng tuyển</h3>
              </div>
              <div className="mt-5">
                <div className="flex flex-col gap-5">
                  <RadioButton
                    label="
                      CV ứng tuyển gần nhất"
                    name="options"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                    children={
                      <div className="px-3 pb-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Alias nihil sint illo nesciunt delectus iure
                        distinctio eveniet inventore sequi nulla! Eius
                        temporibus ipsum ab optio quaerat quis voluptate nisi
                        expedita?
                      </div>
                    }
                    className="border border-solid border-gray-200 rounded-md"
                  />
                  <RadioButton
                    label="Chọn CV khác trong thư viện CV của tôi"
                    name="options"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    children={
                      <div className="px-4 pb-3">
                        <h3 className="font-medium">CV đã tải lên</h3>
                        <div className="flex flex-col gap-2 mt-2">
                          <div className="px-4 py-2 w-full hover:border-primary transition-all border border-solid border-gray-200 rounded-md cursor-pointer">
                            <span className="w-[80%] line-clamp-1">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Sunt officia nesciunt nihil sint pariatur
                              consectetur, voluptates rem atque numquam
                              consequatur facere. Ad sapiente voluptates quo. Ex
                              quod assumenda alias ad.
                              CV_NguyenThanhDien_Intern_ReactJS.pdf
                            </span>
                          </div>
                          <div className="px-4 py-2 w-full hover:border-primary transition-all border border-solid border-gray-200 rounded-md cursor-pointer">
                            <span className="w-[80%] line-clamp-1">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Sunt officia nesciunt nihil sint pariatur
                              consectetur, voluptates rem atque numquam
                              consequatur facere. Ad sapiente voluptates quo. Ex
                              quod assumenda alias ad.
                              CV_NguyenThanhDien_Intern_ReactJS.pdf
                            </span>
                          </div>
                          <div className="px-4 py-2 w-full hover:border-primary transition-all border border-solid border-gray-200 rounded-md cursor-pointer">
                            <span className="w-[80%] line-clamp-1">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Sunt officia nesciunt nihil sint pariatur
                              consectetur, voluptates rem atque numquam
                              consequatur facere. Ad sapiente voluptates quo. Ex
                              quod assumenda alias ad.
                              CV_NguyenThanhDien_Intern_ReactJS.pdf
                            </span>
                          </div>
                          <div className="px-4 py-2 w-full hover:border-primary transition-all border border-solid border-gray-200 rounded-md cursor-pointer">
                            <span className="w-[80%] line-clamp-1">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Sunt officia nesciunt nihil sint pariatur
                              consectetur, voluptates rem atque numquam
                              consequatur facere. Ad sapiente voluptates quo. Ex
                              quod assumenda alias ad.
                              CV_NguyenThanhDien_Intern_ReactJS.pdf
                            </span>
                          </div>
                          <div className="px-4 py-2 w-full hover:border-primary transition-all border border-solid border-gray-200 rounded-md cursor-pointer">
                            <span className="w-[80%] line-clamp-1">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Sunt officia nesciunt nihil sint pariatur
                              consectetur, voluptates rem atque numquam
                              consequatur facere. Ad sapiente voluptates quo. Ex
                              quod assumenda alias ad.
                              CV_NguyenThanhDien_Intern_ReactJS.pdf
                            </span>
                          </div>
                        </div>
                      </div>
                    }
                    className="border border-solid border-gray-200 rounded-md"
                  />
                  <RadioButton
                    label="Tải CV từ thiết bị"
                    name="options"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                    children={
                      <div className="px-3 pb-3">
                        <Dragger {...props} className="h-[200px]" maxCount={1}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Nhấn hoặc kéo thả thế khu vực này để upload hồ sơ
                            xin việc của bạn
                          </p>
                          <p className="ant-upload-hint">
                            Chỉ hỗ trợ cho pdf dưới 3Mb
                          </p>
                        </Dragger>
                        <div className="flex">
                          <Button
                          
                            type="primary"
                            onClick={handleUpload}
                            disabled={file === undefined}
                            loading={loadingFile}
                            style={{ marginTop: 20 }}
                            size="large"
                            className="ml-auto"
                          >
                            {loadingFile ? "Đang lưu" : "Lưu hồ sơ xin việc"}
                          </Button>
                        </div>
                      </div>
                    }
                    className="border border-solid border-gray-200 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 left-0 flex gap-4 p-4">
            <button
              className="p-2 w-[100px] bg-red-500 rounded-md hover:opacity-80 transition-all text-white font-medium"
              type="button"
            >
              Hủy
            </button>
            <button
              className="grow px-4 py-2 rounded-md bg-primary text-white font-medium hover:opacity-80 transition-all"
              type="button"
            >
              Ứng tuyển
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyJobPage;
