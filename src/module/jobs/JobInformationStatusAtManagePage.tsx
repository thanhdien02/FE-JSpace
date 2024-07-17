import React, { useEffect } from "react";
import IconClose from "../../components/icons/IconClose";
import { formatToMillion } from "../../utils/common-function";
import { Skeleton } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { jobGetDetailStatus } from "../../store/job/job-slice";
interface PropComponent {
  jobId: string;
  setClosePopover?: any;
}
const JobInformationStatusAtManagePage: React.FC<PropComponent> = ({
  jobId,
  setClosePopover,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const { jobDetailStatus } = useSelector((state: any) => state.job);
  const dispatch = useDispatch();
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  useEffect(() => {
    if (user?.id) {
      dispatch(jobGetDetailStatus({ candidate_id: user?.id, job_id: jobId }));
    }
  }, [user]);
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
            {!jobDetailStatus ? (
              <div className="mt-5">
                <Skeleton />
              </div>
            ) : (
              <div>
                <div className="mt-5 ">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium text-[18px] line-clamp-2 w-[65%] cursor-pointer">
                      {jobDetailStatus?.post?.title}
                    </h4>
                    <p className="text-[18px] font-medium text-gray-900 w-[30%]">
                      {" "}
                      {jobDetailStatus?.post?.minPay != "0" &&
                      jobDetailStatus?.post?.maxPay != "0" &&
                      jobDetailStatus?.post?.maxPay != "2147483647"
                        ? `${formatToMillion(
                            parseInt(jobDetailStatus?.post?.minPay, 10),
                            "not"
                          )} - ${formatToMillion(
                            parseInt(jobDetailStatus?.post?.maxPay, 10)
                          )}`
                        : ""}
                      {/* Lên tới */}
                      {jobDetailStatus?.post?.minPay == "0" &&
                      jobDetailStatus?.post?.maxPay != "0"
                        ? `Lên tới ${formatToMillion(
                            parseInt(jobDetailStatus?.post?.maxPay, 10)
                          )}`
                        : ""}
                      {/* Trên */}
                      {jobDetailStatus?.post?.minPay != "0" &&
                      (jobDetailStatus?.post?.maxPay == "2147483647" ||
                        jobDetailStatus?.post?.maxPay == "0")
                        ? `Trên ${formatToMillion(
                            parseInt(jobDetailStatus?.post?.minPay, 10)
                          )}`
                        : ""}
                    </p>
                  </div>
                  <h4 className="mt-3 font-medium text-base cursor-pointer line-clamp-2 text-gray-500">
                    {jobDetailStatus?.post?.company?.name}
                  </h4>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 bg-gray-200">
                      {jobDetailStatus?.post?.rank?.code}
                    </span>
                    <span className="px-2 py-1 bg-gray-200">
                      {jobDetailStatus?.post?.experience?.language?.vi}
                    </span>
                    <span className="px-2 py-1 bg-gray-200">
                      {jobDetailStatus?.post?.jobType?.code}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex gap-5 items-center">
                    <h4 className="font-medium">
                      Trạng thái công việc ứng tuyển
                    </h4>
                    <span
                      className={`md:text-base text-xs select-none  text-white py-[6px] px-4 rounded-sm cursor-pointer font-medium ${
                        jobDetailStatus?.applyStatus?.value == "PROGRESS"
                          ? "bg-primary"
                          : jobDetailStatus?.applyStatus?.value == "REJECT"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    >
                      {jobDetailStatus?.applyStatus?.value}
                    </span>
                  </div>
                  <p className="mt-4 max-h-[100px] overflow-auto">
                    {jobDetailStatus?.note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInformationStatusAtManagePage;
