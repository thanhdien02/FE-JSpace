import React from "react";
import { Popover } from "antd";
import IconMoney from "../icons/IconMoney";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/banner3.jpg";
import { formatToMillion } from "../../utils/common-function";
interface PropComponent {
  item?: any;
}
const CardManageJobHadApplyPage: React.FC<PropComponent> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex gap-5 w-full items-center lg:p-5 p-2 shadow-sm lg:h-[150px] border border-solid border-gray-200 rounded-md hover:shadow-md transition-all">
        <div className="absolute top-2 right-2 lg:flex hidden items-center gap-2 font-medium text-primary px-2 py-1 rounded-sm cursor-pointer">
          <IconMoney classIcon="!w-5 !h-5"></IconMoney>
          <span className="text-sm">
            {" "}
            {item?.minPay != "0" &&
            item?.maxPay != "0" &&
            item?.maxPay != "2147483647"
              ? `${formatToMillion(
                  parseInt(item?.minPay, 10),
                  "not"
                )} - ${formatToMillion(parseInt(item?.maxPay, 10))}`
              : ""}
            {/* Lên tới */}
            {item?.minPay == "0" && item?.maxPay != "0"
              ? `Lên tới ${formatToMillion(parseInt(item?.maxPay, 10))}`
              : ""}
            {/* Trên */}
            {item?.minPay != "0" &&
            (item?.maxPay == "2147483647" || item?.maxPay == "0")
              ? `Trên ${formatToMillion(parseInt(item?.minPay, 10))}`
              : ""}
          </span>
        </div>
        <div className="lg:w-[20%] w-[30%]">
          <img
            src={item?.company?.logo ? item?.company?.logo : logo}
            alt=""
            className="lg:w-full min-w-[80px] object-cover lg:min-h-[100px] lg:h-full max-h-full h-[80px]"
          />
        </div>
        <div className="flex flex-col w-full self-start">
          <Popover content={<p className="w-[300px]">{item?.title}</p>}>
            <h4
              className="w-[80%] cursor-pointer text-base font-medium line-clamp-1 hover:text-primary transition-all"
              onClick={() => {
                navigate(`/jobs/${item?.id}`);
              }}
            >
              {item?.title}
            </h4>
          </Popover>

          <h5 className="text-gray-500 line-clamp-1 lg:text-base text-sm mt-1">
            {item?.company?.name}
          </h5>
          <p className="text-sm text-gray-500">
            Ngày ứng tuyển: 20/04/2024 - 14:43
          </p>
          <div className="flex gap-3 items-center mt-3">
            <span className="p-1 text-xs bg-gray-200 rounded-sm">
              {item?.location?.province}
            </span>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <span className="md:text-sm text-xs select-none bg-green-500 text-white py-1 px-3 rounded-sm cursor-pointer">
            APPROVE
          </span>
        </div>
      </div>
    </>
  );
};

export default CardManageJobHadApplyPage;
