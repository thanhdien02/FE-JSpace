import React, { useEffect, useState } from "react";
import logo from "../../assets/bg-login.jpg";
import IconTrash from "../icons/IconTrash";
import IconMoney from "../icons/IconMoney";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import IconHeart from "../icons/IconHeart";
import { formatToMillion } from "../../utils/common-function";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import {
  candidateSaveJob,
  candidateUnSaveJob,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
interface PropComponent {
  item?: any;
}
const CardJobAtCompanyDetailPage: React.FC<PropComponent> = ({ item }) => {
  const { user } = useSelector((state: any) => state.auth);
  const { messageCandidate, loadingCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkSave, setCheckSave] = useState(false);
  const handleSaveAndUnSaveJob = () => {
    if (!user?.id) {
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    } else {
      if (!loadingCandidate) {
        if (checkSave) {
          dispatch(
            candidateUnSaveJob({
              candidate_id: user?.id,
              post_id: item?.post?.id,
            })
          );
        } else {
          dispatch(
            candidateSaveJob({
              candidate_id: user?.id,
              post_id: item?.post?.id,
            })
          );
        }
      }
    }
  };
  useEffect(() => {
    if (messageCandidate === `savesuccess${item?.post?.id}`) {
      setCheckSave(true);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    } else if (messageCandidate === `unsavesuccess${item?.post?.id}`) {
      setCheckSave(false);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    }
  }, [messageCandidate]);
  useEffect(() => {
    setCheckSave(item?.liked);
  }, []);
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
              className="lg:w-[75%] cursor-pointer text-base font-medium line-clamp-1"
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
            className="text-sm select-none bg-primary text-white py-1 px-3 cursor-pointer rounded border border-solid border-transparent"
          >
            {item?.applied ? "Đã ứng tuyển" : "Ứng tuyển"}
          </span>
          <div
            onClick={handleSaveAndUnSaveJob}
            className={`flex items-center select-none gap-1  py-1 px-3 cursor-pointer rounded border border-solid ${
              checkSave ? "text-primary  border-primary bg-white" : "border-transparent bg-slate-200"
            }`}
          >
            {checkSave ? (
              <>
                <IconTrash></IconTrash>
                <span className="text-sm">Bỏ lưu</span>
              </>
            ) : (
              <>
                <IconHeart classIcon="!w-5 !h-5"></IconHeart>
                <span className="text-sm">Lưu</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardJobAtCompanyDetailPage;
