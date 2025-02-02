import React, { useEffect, useState } from "react";
import { Popover, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import IconHeart from "../icons/IconHeart";
import { useSelector } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { useDispatch } from "react-redux";
import IconHeartFill from "../icons/IconHeartFill";
import {
  candidateSaveJob,
  candidateUnSaveJob,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
import { formatToMillion } from "../../utils/common-function";
interface PropComponent {
  className?: string;
  onClick?: any;
  item?: any;
}
const CardHomeJobPage: React.FC<PropComponent> = ({ className, item }) => {
  const { user } = useSelector((state: any) => state.auth);
  const { messageCandidate, loadingCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const [checkSave, setCheckSave] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSaveAndUnSaveJob = () => {
    if (!user?.id) {
      // message.info("Bạn cần đăng nhập để lưu tin");
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
      <div
        className={`relative flex gap-3 shadow-md bg-white rounded-md min-h-[100px] p-4 hover:shadow-lg transition-all ${className}`}
      >
        <div className="min-w-[80px] w-[80px] h-[80px]">
          <img
            src={item?.post?.company?.logo}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="grow flex flex-col gap-1 overflow-hidden">
          <Popover content={<p className="w-[300px]">{item?.post?.title}</p>}>
            <h3
              className="line-clamp-1 font-medium cursor-pointer hover:text-primary transition-all"
              onClick={() => {
                navigate(`/jobs/${item?.post?.id}`);
              }}
            >
              {item?.post?.title}
            </h3>
          </Popover>

          <h4 className="line-clamp-1 text-gray-500 text-sm">
            {item?.post?.company?.name}
          </h4>
          <div className="flex gap-1 overflow-hidden mt-1">
            <Tag className="min-w-[40px] line-clamp-1 max-w-[600px] font-medium">
              {item?.post?.location?.province}
            </Tag>
            <Tag className="min-w-[40px] line-clamp-1 max-w-[115px] font-medium">
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
            </Tag>
          </div>
        </div>

        <div
          className="absolute bottom-2 right-2 cursor-pointer "
          onClick={handleSaveAndUnSaveJob}
        >
          {checkSave ? (
            <IconHeartFill
              className=""
              classIcon="!w-5 !h-5 text-red-500"
            ></IconHeartFill>
          ) : (
            <IconHeart
              className=""
              classIcon="!w-5 !h-5 text-primary"
            ></IconHeart>
          )}
        </div>
      </div>
    </>
  );
};

export default CardHomeJobPage;
