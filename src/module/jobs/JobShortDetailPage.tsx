import React, { useEffect, useState } from "react";
import IconHeart from "../../components/icons/IconHeart";
import IconHeartFill from "../../components/icons/IconHeartFill";
import IconChervonRight from "../../components/icons/IconChervonRight";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { useTranslation } from "react-i18next";
import IconClock from "../../components/icons/IconClock";
import {
  candidateSaveJob,
  candidateUnSaveJob,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
import { CSSTransition } from "react-transition-group";
import ApplyJobPage from "../../page/CommonPage/ApplyJobPage";
import { formatToMillion } from "../../utils/common-function";
interface PropComponent {
  id?: string;
  onClick?: any;
  className?: string;
  dataJob?: any;
}
const JobShortDetailPage: React.FC<PropComponent> = ({ dataJob }) => {
  const { messageCandidate, loadingCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const { user } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkApply, setCheckApply] = useState(false);
  const [checkSave, setCheckSave] = useState(false);
  const handleSaveAndUnsaved = () => {
    if (!user?.id) {
      // message.info("Bạn cần đăng nhập để lưu tin");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    } else {
      if (!loadingCandidate) {
        if (checkSave) {
          dispatch(
            candidateUnSaveJob({
              candidate_id: user?.id,
              post_id: dataJob?.post?.id,
            })
          );
        } else {
          dispatch(
            candidateSaveJob({
              candidate_id: user?.id,
              post_id: dataJob?.post?.id,
            })
          );
        }
      }
    }
  };
  const handleApplyJob = () => {
    if (!user?.id) {
      // message.info("Bạn cần đăng nhập để ứng tuyển");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    } else {
      if (!dataJob?.applied) {
        // setCheckApply(!checkApply);
        navigate(`/jobs/${dataJob?.post?.id}`);
      }
    }
  };
  useEffect(() => {
    if (messageCandidate === `savesuccess${dataJob?.post?.id}`) {
      setCheckSave(true);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    } else if (messageCandidate === `unsavesuccess${dataJob?.post?.id}`) {
      setCheckSave(false);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    }
  }, [messageCandidate]);
  useEffect(() => {
    setCheckSave(dataJob?.liked);
  }, [dataJob]);
  return (
    <>
      <div className="w-full sticky top-[77px] h-fit">
        <div className="p-5 ">
          <h2 className="font-bold text-xl ">{dataJob?.post?.title}</h2>
          <div className="flex gap-3 mt-3">
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm font-medium ">
              {dataJob?.post?.minPay != "0" &&
              dataJob?.post?.maxPay != "0" &&
              dataJob?.post?.maxPay != "2147483647"
                ? `${formatToMillion(
                    parseInt(dataJob?.post?.minPay, 10),
                    "not"
                  )} - ${formatToMillion(parseInt(dataJob?.post?.maxPay, 10))}`
                : ""}
              {/* Lên tới */}
              {dataJob?.post?.minPay == "0" && dataJob?.post?.maxPay != "0"
                ? `Lên tới ${formatToMillion(
                    parseInt(dataJob?.post?.maxPay, 10)
                  )}`
                : ""}
              {/* Trên */}
              {dataJob?.post?.minPay != "0" &&
              (dataJob?.post?.maxPay == "2147483647" ||
                dataJob?.post?.maxPay == "0")
                ? `Trên ${formatToMillion(parseInt(dataJob?.post?.minPay, 10))}`
                : ""}
            </span>
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm font-medium ">
              {dataJob?.post?.location.province}
            </span>
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm font-medium ">
              {dataJob?.post?.experience?.language?.vi}
            </span>
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm font-medium ">
              {dataJob?.post?.rank?.code}
            </span>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <div className="px-5 mb-5 flex gap-2 items-center bg-gray-200 w-fit py-2 rounded-md">
            <IconClock></IconClock>
            <span>
              {t("jobdetail.endsudmit")}:{" "}
              <strong>{dataJob?.post?.closeDate}</strong>
            </span>
          </div>
          <div className="cursor-pointer hover:underline text-primary flex items-center ">
            <NavLink to={`/jobs/${dataJob?.post?.id}`}>
              <p className="font-medium text-primary">{t("detail")}</p>
            </NavLink>
            <IconChervonRight className="text-primary"></IconChervonRight>
          </div>
        </div>
        <div className="flex gap-2 items-center px-5 pb-5">
          <button
            className={`w-[90%] mx-auto p-2 text-white rounded-md font-semibold ${
              !dataJob?.applied ? "bg-primary" : "bg-green-500"
            }`}
            type="button"
            onClick={handleApplyJob}
          >
            {dataJob?.applied ? `${t("applied")}` : `${t("apply")}`}
          </button>
          {checkSave ? (
            <span
              onClick={handleSaveAndUnsaved}
              className="cursor-pointer px-4 border text-primary border-primary border-solid py-2 rounded-md font-bold"
            >
              <IconHeartFill classIcon="w-6 h-6"></IconHeartFill>
            </span>
          ) : (
            <span
              onClick={handleSaveAndUnsaved}
              className="cursor-pointer px-4 border text-primary border-primary border-solid py-2 rounded-md font-bold"
            >
              <IconHeart classIcon="w-6 h-6"></IconHeart>
            </span>
          )}
        </div>
        <div className="flex gap-2 px-5 pb-5 items-center">
          <span className="font-semibold"> {t("skillsort")}: </span>
          {dataJob?.post?.skills.length > 0 &&
            dataJob?.post?.skills.map((item: any, index: number) => (
              <span key={index} className="py-1 px-2 bg-gray-200">
                {item?.name}
              </span>
            ))}
        </div>
        <div className="overflow-auto h-[500px] py-5 pl-5">
          <p
            id="message_container"
            className="entry-content content-html relative transition-all mt-3 overflow-hidden leading-6"
            dangerouslySetInnerHTML={{
              __html: `${dataJob?.post?.description}`,
            }}
          ></p>
        </div>
      </div>

      {/*  */}
      <CSSTransition
        in={checkApply}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <ApplyJobPage
          onClick={setCheckApply}
          className=""
          jobId={dataJob?.post?.id}
        ></ApplyJobPage>
      </CSSTransition>
    </>
  );
};

export default JobShortDetailPage;
