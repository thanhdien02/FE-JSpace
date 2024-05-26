import React, { useEffect } from "react";
import logo from "../../assets/bg-login.jpg";
import IconTrash from "../icons/IconTrash";
import IconMoney from "../icons/IconMoney";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { candidateUnSaveJob } from "../../store/candidate/candidate-slice";
import { jobGetSavedJob } from "../../store/job/job-slice";

interface PropComponent {
  className?: string;
  item?: any;
}
const CardManageJobSavePage: React.FC<PropComponent> = ({
  className,
  item,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const { loadingCandidate, messageCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUnSavedJob = () => {
    if (user?.id && !loadingCandidate) {
      dispatch(
        candidateUnSaveJob({
          candidate_id: user?.id,
          post_id: item?.id,
        })
      );
    }
  };
  useEffect(() => {
    if (messageCandidate === `unsavesuccess${item?.id}`) {
      dispatch(jobGetSavedJob({ candidate_id: user?.id, page: 1, size: 8 }));
    }
  }, [messageCandidate]);
  return (
    <>
      <div
        className={`relative flex md:gap-5 gap-3 w-full items-center md:p-3 p-2 shadow-sm lg:h-[150px] border border-solid border-gray-200 rounded-md ${className}`}
      >
        <div className="absolute top-2 right-2 hidden lg:flex items-center gap-2 font-medium text-primary px-2 py-1 rounded-sm cursor-pointer">
          <IconMoney classIcon="!w-5 !h-5"></IconMoney>
          <span className="text-sm">
            {item?.minPay != "0"
              ? `${item?.minPay.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })} -`
              : ""}{" "}
            {item?.maxPay.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
        <div className="lg:w-[20%] md:w-[20%] w-[30%] self-start mt-2">
          <img
            src={item?.company?.logo ? item?.company?.logo : logo}
            alt=""
            className="w-full max-w-full object-cover md:h-[110px] h-[70px]"
          />
        </div>
        <div className="flex flex-col w-full self-start">
          <Popover content={<p className="w-[300px]">{item?.title}</p>}>
            <h4
              className="lg:w-[80%] cursor-pointer text-base font-medium line-clamp-1"
              onClick={() => {
                navigate("/jobs/1");
              }}
            >
              {item?.title}
            </h4>
          </Popover>

          <h5 className="text-gray-500 line-clamp-1 lg:text-base md:text-sm text-xs mt-1">
            {item?.company?.name}
          </h5>
          <p className="md:text-sm text-xs text-gray-500">
            Ngày kết thúc: {item?.closeDate}
          </p>
          <div className="flex gap-3 items-center md:mt-3 mt-2">
            <span className="p-1 text-xs bg-gray-200 rounded-sm">
              {item?.location?.province}
            </span>
          </div>
        </div>
        <div className="absolute lg:bottom-3 bottom-2 lg:right-3 right-2 flex items-center gap-2">
          <span
            onClick={() => {
              navigate("/jobs/1");
            }}
            className="md:text-sm text-xs select-none bg-primary text-white py-1 px-2 rounded-sm cursor-pointer"
          >
            Ứng tuyển
          </span>
          <div
            onClick={handleUnSavedJob}
            className="flex items-center select-none gap-1 bg-slate-200 py-1 px-2 cursor-pointer"
          >
            <IconTrash></IconTrash>
            <span className="md:text-sm text-xs rounded-sm">Bỏ lưu</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardManageJobSavePage;
