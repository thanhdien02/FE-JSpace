import React, { useEffect } from "react";
import bg_wall from "../../assets/bg-login.jpg";
import IconEdit from "../../components/icons/IconEdit";
import Button from "../../components/input";
import { useSelector } from "react-redux";
import {
  message,
  Popover,
  Progress,
  Spin,
  Steps,
  StepsProps,
  Tooltip,
  Upload,
  UploadProps,
} from "antd";
import IconCamera from "../../components/icons/IconCamera";
const ManageWallCandidate: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const handleMouseOverBackground = () => {
    const elementMouseOver: any = document.querySelector(
      ".background-identification"
    );
    if (elementMouseOver) {
      elementMouseOver.style.visibility = "visible";
    }
  };
  const handleMouseLeaveBackground = () => {
    const elementMouseOver: any = document.querySelector(
      ".background-identification"
    );
    if (elementMouseOver) {
      elementMouseOver.style.visibility = "hidden";
    }
  };

  const props: UploadProps = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };
  const customDot: StepsProps["progressDot"] = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          Bước {index} Trạng thái: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex flex-col bg-white">
          <div
            onMouseOver={handleMouseOverBackground}
            onMouseLeave={handleMouseLeaveBackground}
            className="relative"
          >
            <div className="invisible absolute background-identification transition-all top-2 left-2 ">
              <Upload {...props}>
                <div className="flex items-center gap-2 bg-primary text-white rounded-md cursor-pointer px-2 py-1 font-medium">
                  <IconCamera></IconCamera>
                  <span>Cập nhật ảnh bìa</span>
                </div>
              </Upload>
            </div>

            <img
              src={user?.background ? user?.background : bg_wall}
              alt=""
              className="w-full lg:h-[270px] h-[180px] object-cover "
            />
          </div>
          <div className="relative flex w-[80%] justify-between ml-auto p-4 lg:py-8 py-5">
            <Upload
              {...props}
              className="bg-white rounded-full absolute lg:-left-[150px] -left-[70px] -top-16 cursor-pointer"
            >
              {user?.picture ? (
                <>
                  <img
                    src={user?.picture}
                    alt=""
                    className=" lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] object-cover rounded-full border-solid border-4 border-transparent hover:border-gray-200 transition-all duration-300"
                  />
                  <span className="absolute bottom-2 right-2 p-1 bg-gray-200 rounded-full">
                    <IconCamera></IconCamera>
                  </span>
                </>
              ) : (
                <div className="flex w-[130px] h-[130px] bg-gray-200 rounded-full">
                  <Spin className="m-auto"></Spin>
                </div>
              )}
            </Upload>
            <h3 className="font-bold text-2xl w-[250px] line-clamp-1">
              Nguyen Thanh Dien
            </h3>
            <IconEdit className="cursor-pointer text-primary hover:opacity-80 transition-all"></IconEdit>
          </div>
          <div className="flex gap-3 lg:pb-10 pb-5 px-5">
            <Button loading={false} title="Thông tin"></Button>
            <Button loading={false} title="Tải CV"></Button>
          </div>
        </div>
        <div className="mt-10 bg-white min-h-[200px] p-5 ">
          <h3 className="font-bold text-lg">Mức độ hoàn thiện hồ sơ</h3>
          <div className="mt-5">
            <Tooltip title="Các mục đã hoàn thành">
              <Progress steps={3} percent={50} size={[100, 30]} />
            </Tooltip>

            <Steps
              current={2}
              progressDot={customDot}
              className="mt-20"
              items={[
                {
                  title: "Bắt đầu",
                  // description,
                },
                {
                  title: "Cập nhật thông tin các nhân",
                  // description,
                },
                {
                  title: "Cập nhật CV",
                  // description,
                },
                {
                  title: "Hoàn thành",
                  // description,
                },
              ]}
            />
          </div>
        </div>
        <div className="mt-10 bg-white min-h-[200px] p-5 ">
          <h3 className="font-bold text-lg">
            Thống kê số lượt xem từ nhà tuyển dụng
          </h3>
          <p className="text-red-500 italic py-1">
            Phần này chỉ hiển thị với riêng bạn
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-2">
            <div className="flex mt-5 w-full">
              <div className="flex flex-col justify-center px-3 py-2 w-full h-[100px] border border-solid border-gray-300 rounded-md">
                <span className="font-semibold text-3xl text-gray-700">0</span>
                <p className="font-medium text-gray-500">
                  Số lượt xem trong tuần
                </p>
              </div>
            </div>
            <div className="flex mt-5 w-full">
              <div className="flex flex-col justify-center px-3 py-2 w-full h-[100px] border border-solid border-gray-300 rounded-md">
                <span className="font-semibold text-3xl text-gray-700">0</span>
                <p className="font-medium text-gray-500">
                  Số lượt xem trong tháng
                </p>
              </div>
            </div>
            <div className="flex mt-5 w-full">
              <div className="flex flex-col justify-center px-3 py-2 w-full h-[100px] border border-solid border-gray-300 rounded-md">
                <span className="font-semibold text-3xl text-gray-700">0</span>
                <p className="font-medium text-gray-500">
                  Số lượt xem trong năm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWallCandidate;
