import React from "react";
import logo from "../../assets/bg-login.jpg";
import IconTrash from "../icons/IconTrash";
import IconMoney from "../icons/IconMoney";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import IconHeart from "../icons/IconHeart";
import { formatToMillion } from "../../utils/common-function";
interface PropComponent {
  item?: any;
}
const CardJobAtCompanyDetailPage: React.FC<PropComponent> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex gap-5 w-full items-center lg:p-5 p-3 shadow-sm min-h-[100px] border border-solid border-gray-200 rounded-md">
        <div className="hidden lg:flex items-center gap-2 absolute top-2 right-2 font-medium text-primary px-2 py-1 rounded-sm cursor-pointer">
          <IconMoney classIcon="!w-5 !h-5"></IconMoney>
          <span className="text-sm">
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
              ? `Lên tới ${formatToMillion(parseInt(item?.post?.maxPay, 10))}`
              : ""}
            {/* Trên */}
            {item?.post?.minPay != "0" &&
            (item?.post?.maxPay == "2147483647" || item?.post?.maxPay == "0")
              ? `Trên ${formatToMillion(parseInt(item?.post?.minPay, 10))}`
              : ""}
          </span>
        </div>
        <div className="lg:w-[20%]">
          <img
            src={item?.post?.company?.logo ? item?.post?.company?.logo : logo}
            alt=""
            className="lg:w-[100px] h-[70px] max-h-full object-cover lg:h-[100px]"
          />
        </div>
        <div className="flex flex-col w-full self-start">
          <Popover content={<p className="w-[300px]">{item?.post?.title}</p>}>
            <h4
              className="lg:w-[80%] cursor-pointer text-base font-medium line-clamp-1"
              onClick={() => {
                navigate(`/jobs/${item?.post?.id}`);
              }}
            >
              {item?.post?.title}
            </h4>
          </Popover>

          <h5 className="text-gray-500 line-clamp-1 lg:text-base mt-1">
            {item?.post?.company?.name}
          </h5>
          <p className="text-sm text-gray-500">Đã lưu: 20/04/2024 - 14:43</p>
          <div className="flex gap-3 items-center mt-3">
            <span className="p-1 text-xs bg-gray-200 rounded-sm">
              <div className="line-clamp-1">
                {item?.post?.location?.province}
              </div>
            </span>
            <span className="p-1 text-xs bg-gray-200 rounded-sm">
              <div className="line-clamp-1"> Cập nhật 42 phút trước</div>
            </span>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 lg:flex hidden items-center gap-2">
          <span
            onClick={() => {
              navigate(`/jobs/${item?.post?.id}`);
            }}
            className="text-sm select-none bg-primary text-white py-1 px-2 rounded-sm cursor-pointer"
          >
            {item?.applied ? "Đã ứng tuyển" : "Ứng tuyển"}
          </span>
          <div className="flex items-center select-none gap-1 bg-slate-200 py-1 px-2 cursor-pointer">
            {item?.liked ? (
              <>
                <IconTrash></IconTrash>
                <span className="text-sm  rounded-sm">Bỏ lưu</span>
              </>
            ) : (
              <>
                <IconHeart classIcon="!w-5 !h-5"></IconHeart>
                <span className="text-sm  rounded-sm">Lưu</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardJobAtCompanyDetailPage;
