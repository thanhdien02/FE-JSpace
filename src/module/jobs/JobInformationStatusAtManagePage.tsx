import React, { useEffect } from "react";
import IconClose from "../../components/icons/IconClose";
import { formatToMillion } from "../../utils/common-function";
interface PropComponent {
  item?: any;
  setClosePopover?: any;
}
const JobInformationStatusAtManagePage: React.FC<PropComponent> = ({
  item,
  setClosePopover,
}) => {
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  return (
    <>
      <div className="fixed inset-0 z-40 flex">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => {
            setClosePopover(false);
          }}
        ></div>
        <div className="m-auto absolute inset-0 px-6 py-8 bg-white w-[650px] min-h-[300px] max-h-[500px] h-fit">
          <span
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => {
              setClosePopover(false);
            }}
          >
            <IconClose></IconClose>
          </span>
          <div>
            <h3 className="font-bold text-xl text-center">
              Thông tin trạng thái công việc đã ứng tuyển
            </h3>
            <div className="mt-5 ">
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-[18px] line-clamp-2 w-[65%] cursor-pointer">
                  {item?.custom?.post?.title}
                </h4>
                <p className="text-[18px] font-medium text-gray-900 w-[30%]">
                  {" "}
                  {item?.custom?.post?.minPay != "0" &&
                  item?.custom?.post?.maxPay != "0" &&
                  item?.custom?.post?.maxPay != "2147483647"
                    ? `${formatToMillion(
                        parseInt(item?.custom?.post?.minPay, 10),
                        "not"
                      )} - ${formatToMillion(
                        parseInt(item?.custom?.post?.maxPay, 10)
                      )}`
                    : ""}
                  {/* Lên tới */}
                  {item?.custom?.post?.minPay == "0" &&
                  item?.custom?.post?.maxPay != "0"
                    ? `Lên tới ${formatToMillion(
                        parseInt(item?.custom?.post?.maxPay, 10)
                      )}`
                    : ""}
                  {/* Trên */}
                  {item?.custom?.post?.minPay != "0" &&
                  (item?.custom?.post?.maxPay == "2147483647" ||
                    item?.custom?.post?.maxPay == "0")
                    ? `Trên ${formatToMillion(
                        parseInt(item?.custom?.post?.minPay, 10)
                      )}`
                    : ""}
                </p>
              </div>
              <h4 className="mt-3 font-medium text-base cursor-pointer line-clamp-2 text-gray-500">
                {item?.custom?.post?.company?.name}
              </h4>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-gray-200">
                  {item?.custom?.post?.rank?.code}
                </span>
                <span className="px-2 py-1 bg-gray-200">
                  {item?.custom?.post?.experience?.code}
                </span>
                <span className="px-2 py-1 bg-gray-200">
                  {item?.custom?.post?.jobType?.language?.vi}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex gap-5 items-center">
                <h4 className="font-medium">Trạng thái công việc ứng tuyển</h4>
                <span
                  className={`md:text-base text-xs select-none  text-white py-[6px] px-4 rounded-sm cursor-pointer font-medium ${
                    item?.custom?.appliedStatus?.value == "PROGRESS"
                      ? "bg-primary"
                      : item?.custom?.appliedStatus?.value == "REJECT"
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {item?.custom?.appliedStatus?.value}
                </span>
              </div>
              <p className="mt-4 max-h-[100px] overflow-auto">
                {item?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInformationStatusAtManagePage;
