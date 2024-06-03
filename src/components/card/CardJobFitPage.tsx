import React from "react";
import { message, Popover } from "antd";
import IconMapPin from "../icons/IconMapPin";
import IconBuilding from "../icons/IconBuilding";
import IconTrash from "../icons/IconTrash";
import IconHeart from "../icons/IconHeart";
import IconHeartFill from "../icons/IconHeartFill";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { formatToMillion } from "../../utils/common-function";
interface PropComponent {
  className?: string;
  onClick?: any;
  item?: any;
}
const CardJobFitPage: React.FC<PropComponent> = ({ className, item }) => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSaveJob = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để lưu tin.");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    }
  };
  return (
    <>
      <div
        className={`relative flex gap-3 border boder-solid border-gray-200 bg-white hover:border-primary transition-all rounded-md min-h-[100px] w-full lg:p-4 p-2 ${className}`}
      >
        <div className="lg:min-w-[23%] w-[100px] max-w-full h-[110px] lg:max-h-[110px]">
          <img
            src={item?.post?.company?.logo}
            alt=""
            className="w-h-full h-full lg:object-cover object-contain"
          />
        </div>
        <div className="relative grow w-full flex flex-col lg:gap-1">
          <div className="flex justify-between">
            <Popover content={<p className="w-[300px]">{item?.post?.title}</p>}>
              <h3
                className="line-clamp-2 min-w-[70%] font-medium cursor-pointer hover:text-primary transition-all"
                onClick={() => {
                  navigate("/jobs/1");
                }}
              >
                {item?.post?.title}
              </h3>
            </Popover>
            <div className="lg:flex hidden w-[33%]">
              <span className="font-medium text-primary text-base ml-auto">
                {item?.post?.minPay != "0" &&
                item?.post?.maxPay != "0" &&
                item?.post?.maxPay != "2147483647"
                  ? `${formatToMillion(
                      parseInt(item?.post?.minPay, 10),
                      "not"
                    )} - ${formatToMillion(parseInt(item?.post?.maxPay, 10))}`
                  : ""}
                {/* Lên tới */}
                {item?.post?.minPay == "0" && item?.post?.maxPay != "0"
                  ? `Lên tới ${formatToMillion(
                      parseInt(item?.post?.maxPay, 10)
                    )}`
                  : ""}
                {/* Trên */}
                {item?.post?.minPay != "0" &&
                (item?.post?.maxPay == "2147483647" ||
                  item?.post?.maxPay == "0")
                  ? `Trên ${formatToMillion(parseInt(item?.post?.minPay, 10))}`
                  : ""}
              </span>
            </div>
          </div>
          <div className="flex gap-1 items-center mt-2">
            <IconBuilding
              className="text-gray-500"
              classIcon="lg:!w-5 lg:!h-5 !w-4 !h-4"
            ></IconBuilding>
            <h4 className="line-clamp-1 text-gray-500 lg:text-sm text-xs">
              {item?.post?.company?.name}
            </h4>
          </div>
          <div className="flex gap-1 overflow-hidden mt-2 items-center">
            <IconMapPin
              className="text-gray-500"
              classIcon="lg:!w-5 lg:!h-5 !w-4 !h-4"
            ></IconMapPin>
            <span className="line-clamp-1 lg:text-sm text-xs text-gray-500">
              {item?.post?.location.toString()}
            </span>
          </div>
        </div>
        <div className="absolute flex gap-2 items-center bottom-2 right-2">
          <IconTrash
            className="p-1 rounded-sm bg-red-100 cursor-pointer text-red-600 hover:opacity-80 transition-all"
            classIcon="w-5 h-5"
          ></IconTrash>
          {true ? (
            <span
              onClick={handleSaveJob}
              className="p-1 rounded-sm bg-blue-100 cursor-pointer text-primary hover:opacity-80 transition-all"
            >
              <IconHeartFill></IconHeartFill>
            </span>
          ) : (
            <span
              onClick={handleSaveJob}
              className="p-1 rounded-sm bg-blue-100 cursor-pointer text-primary hover:opacity-80 transition-all"
            >
              <IconHeart></IconHeart>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CardJobFitPage;
