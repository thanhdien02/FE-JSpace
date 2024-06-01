import React, { useEffect, useState } from "react";
import IconClose from "../../components/icons/IconClose";
import RadioButton from "../../components/radio/RadioButton";
import IconFolder from "../../components/icons/IconFolder";
import Dragger from "antd/es/upload/Dragger";
import { EditOutlined, InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Empty,
  message,
  Skeleton,
  UploadFile,
  UploadProps,
} from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fileGetAllFile,
  fileUpdateMessageRedux,
  fileUploadFile,
} from "../../store/file/file-slice";
import Loading from "../../components/loading/Loading";
import { applyJobApply } from "../../store/apply/apply-slice";
// import { useParams } from "react-router-dom";
interface PropComponent {
  className?: string;
  jobId?: string;
  onClick?: any;
}
const ApplyJobPage: React.FC<PropComponent> = ({
  className,
  onClick,
  jobId,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const { loadingApply } = useSelector((state: any) => state.apply);
  const { files, loadingFile, messageFile } = useSelector(
    (state: any) => state.file
  );
  // const { jobId } = useParams();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState<UploadFile>();
  const [selectCV, setSelectCV] = useState(false);
  const [cvchoose, setCVChoose] = useState<any>(null);

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
  const handleApply = () => {
    if (user?.id) {
      if (selectedOption == "option2") {
        console.log("🚀 ~ cvchoose:", cvchoose);
        dispatch(
          applyJobApply({
            candidate_id: user?.id,
            job_id: jobId,
            resume_id: cvchoose?.id,
          })
        );
      }
    }
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
  useEffect(() => {
    dispatch(fileGetAllFile({ candidate_id: user?.id }));
  }, [user]);
  return (
    <>
      <div className={`fixed inset-0 bg-black/40 z-40 flex ${className}`}>
        <div className="absolute inset-0" onClick={() => onClick(false)}></div>
        <div className="px-2 m-auto md:px-0">
          <div className="relative m-auto max-w-full md:w-[650px] h-[600px] bg-white rounded-lg">
            <div
              className="absolute top-2 right-2 cursor-pointer z-20"
              onClick={() => onClick(false)}
            >
              <IconClose></IconClose>
            </div>
            <div className="absolute top-0 right-0 left-0 h-auto rounded-t-md bg-white text-primary z-10 px-5 py-3">
              <h3 className="font-medium text-xl">Ứng tuyển</h3>
            </div>
            <div className="md:p-5 p-3 !pt-14 h-[500px] overflow-auto ">
              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <IconFolder
                    className="text-primary"
                    classIcon="!w-7 !h-7"
                  ></IconFolder>
                  <h3 className="font-medium text-lg">Chọn CV để ứng tuyển</h3>
                </div>
                <div className="mt-5">
                  <div className="flex flex-col md:gap-5 gap-3">
                    <RadioButton
                      label="
                      CV ứng tuyển gần nhất"
                      name="options"
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={handleOptionChange}
                      children={
                        <div className="px-3 pb-3">
                          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
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
                          {selectCV ? (
                            <div className="">
                              <div className="flex items-center gap-3">
                                <h3>CV đã tải lên:</h3>
                                <p className="font-medium w-[50%] line-clamp-1">
                                  {cvchoose?.name}
                                </p>
                                <a
                                  href={cvchoose?.file?.path}
                                  target="_blank"
                                  className="text-primary font-medium"
                                >
                                  Xem
                                </a>
                                <div
                                  onClick={() => setSelectCV(!selectCV)}
                                  className="ml-auto flex gap-2 px-4 py-2 bg-slate-200 rounded-md font-medium cursor-pointer"
                                >
                                  <EditOutlined />
                                  <span>Thay đổi</span>
                                </div>
                              </div>
                              <Divider orientation="right" className="">
                                Thông tin
                              </Divider>
                              <div className="">
                                <label htmlFor="name" className="text-base ">
                                  Họ và tên
                                  <span className="text-red-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  type="text"
                                  value={user?.name ? user?.name : ""}
                                  onChange={() => {}}
                                  placeholder="Họ và tên"
                                  className="w-full mt-2 px-4 py-2 rounded-md outline-none border border-gray-200 border-solid"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="">
                                  <label htmlFor="email" className="text-base ">
                                    Email
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    id="email"
                                    type="email"
                                    value={user?.email}
                                    onChange={() => {}}
                                    placeholder="Email"
                                    className="w-full mt-2 px-4 py-2 rounded-md outline-none border border-gray-200 border-solid"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="phone" className="text-base ">
                                    Số điện thoại
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    id="phone"
                                    type="number"
                                    value={user?.phone}
                                    onChange={() => {}}
                                    placeholder=" Số điện thoại"
                                    className="w-full mt-2 px-4 py-2 rounded-md outline-none border border-gray-200 border-solid"
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <h3 className="font-medium">CV đã tải lên</h3>
                              <div className="flex flex-col gap-3 mt-2">
                                {loadingFile ? (
                                  <Skeleton />
                                ) : files?.content?.length <= 0 ? (
                                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                ) : (
                                  files?.content?.length > 0 &&
                                  files?.content?.map((item: any) => (
                                    <div
                                      key={item?.id}
                                      className="group/item flex items-center px-4 py-2 w-full hover:border-primary transition-all border border-solid border-gray-200 rounded-md cursor-pointer"
                                    >
                                      <span className="w-[70%] line-clamp-1">
                                        {item?.name}
                                      </span>
                                      <a
                                        target="_blank"
                                        className="font-medium invisible group-hover/item:visible text-primary"
                                        href={item?.file?.path}
                                      >
                                        Xem
                                      </a>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setSelectCV(!selectCV);
                                          setCVChoose(item);
                                        }}
                                        className="invisible group-hover/item:visible ml-auto px-2 py-1 hover:opacity-80 rounded-sm bg-primary text-sm font-semibold text-white"
                                      >
                                        Chọn CV
                                      </button>
                                    </div>
                                  ))
                                )}
                              </div>
                            </>
                          )}
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
                          <Dragger
                            {...props}
                            className="h-[200px]"
                            maxCount={1}
                          >
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
                onClick={() => onClick(false)}
              >
                Hủy
              </button>
              <button
                className="grow px-4 py-2 rounded-md bg-primary text-white font-medium hover:opacity-80 transition-all"
                type="button"
                onClick={handleApply}
                disabled={loadingApply}
              >
                {loadingApply ? <Loading></Loading> : <span>Ứng tuyển</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyJobPage;
