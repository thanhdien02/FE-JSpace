import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { commonUpdateInputHeaderSearchCheckRedux } from "../../store/common/common-slice";
import { formatToMillion } from "../../utils/common-function";

interface PropComponent {
  className?: string;
  clearInputSearch?: any;
  item?: any;
}
const CardJobAtInputSearchPage: React.FC<PropComponent> = ({
  item,
  clearInputSearch,
  className,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          dispatch(
            commonUpdateInputHeaderSearchCheckRedux({
              inputHeaderSearchCheck: false,
            })
          );
          clearInputSearch();
          navigate(`/jobs/${item?.post?.id}`);
        }}
        className={`p-3 flex gap-[10px] max-h-[250px] border border-solid border-gray-200 rounded-sm hover:bg-gray-200 transition-all ${className}`}
      >
        <div className="w-[25%] h-[80px]">
          <img
            src={item?.post?.company?.logo}
            alt=""
            className="h-full object-cover"
          />
        </div>
        <div className="w-full">
          <h2 className="font-medium text-sm line-clamp-1 cursor-pointer hover:text-primary transition-all">
            {item?.post?.title}
          </h2>
          <h3 className="text-sm line-clamp-1 mt-1">
            {item?.post?.company?.name}
          </h3>
          <div className="mt-2 flex gap-2">
            <span className="inline-block font-medium text-[13px] px-2 py-[1px] rounded-sm border border-solid border-gray-200">
              {item?.post?.location?.province}
            </span>
            <span className="inline-block font-medium text-[13px] px-2 py-[1px] rounded-sm border border-solid border-gray-200">
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
        </div>
      </div>
    </>
  );
};

export default CardJobAtInputSearchPage;
