import React, { useEffect, useState } from "react";
import IconMoney from "../../components/icons/IconMoney";
import IconPaperAirplan from "../../components/icons/IconPaperAirplan";
import IconHeart from "../../components/icons/IconHeart";
import IconHeartFill from "../../components/icons/IconHeartFill";
import { message, Popover, Skeleton } from "antd";
import IconMapPin from "../../components/icons/IconMapPin";
import IconClock from "../../components/icons/IconClock";
import { useSelector } from "react-redux";
import ApplyJobPage from "../../page/CommonPage/ApplyJobPage";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { useTranslation } from "react-i18next";
import {
  candidateSaveJob,
  candidateUnSaveJob,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
import {
  compareDates,
  formatToMillion,
  getCurrentDate,
} from "../../utils/common-function";
import IconBriefCaseOutline from "../../components/icons/IconBriefCaseOutline";
interface PropComponent {
  className?: string;
  titleJob?: string;
  nameCompany?: string;
  logo?: string;
  salary?: string;
  location?: string;
  onClick?: any;
}
const JobDetailInformationJobPage: React.FC<PropComponent> = ({
  className,
}) => {
  const { messageCandidate, loadingCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const { messageApply } = useSelector((state: any) => state.apply);
  const { loadingJob, jobByIdWithCandidate } = useSelector(
    (state: any) => state.job
  );
  const { user } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
  const [checkSave, setCheckSave] = useState(false);
  const [checkExpired, setCheckExpired] = useState(false);
  const [checkApply, setCheckApply] = useState(false);
  const dispatch = useDispatch();
  const handleApplyJob = () => {
    if (!user?.id) {
      // message.info("Bạn cần đăng nhập để ứng tuyển");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    } else if (checkExpired) {
      message.info("Thời gian ứng tuyển đã kết thúc");
    } else {
      if (!jobByIdWithCandidate?.applied) {
        setCheckApply(!checkApply);
      }
    }
  };
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
              post_id: jobByIdWithCandidate?.post?.id,
            })
          );
        } else {
          dispatch(
            candidateSaveJob({
              candidate_id: user?.id,
              post_id: jobByIdWithCandidate?.post?.id,
            })
          );
        }
      }
    }
  };
  useEffect(() => {
    if (messageCandidate === `savesuccess${jobByIdWithCandidate?.post?.id}`) {
      setCheckSave(true);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    } else if (
      messageCandidate === `unsavesuccess${jobByIdWithCandidate?.post?.id}`
    ) {
      setCheckSave(false);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    }
  }, [messageCandidate]);
  useEffect(() => {
    if (messageApply === `success${jobByIdWithCandidate?.post?.id}`) {
      setCheckApply(false);
    }
  }, [messageApply]);
  useEffect(() => {
    setCheckSave(jobByIdWithCandidate?.liked);

    if (jobByIdWithCandidate?.post?.closeDate) {
      if (
        compareDates(jobByIdWithCandidate?.post?.closeDate, getCurrentDate()) ==
        -1
      ) {
        setCheckExpired(true);
      } else setCheckExpired(false);
    }
  }, [jobByIdWithCandidate]);

  return (
    <>
      <div className={`p-6 rounded-sm ${className}`}>
        <h2 className="text-xl font-bold line-clamp-1">
          {jobByIdWithCandidate?.post?.title}
        </h2>
        {loadingJob ? (
          <div className="mt-5">
            <Skeleton />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-6 lg:gap-14 mt-5 ">
              <div className="flex gap-4 items-center">
                <IconMoney className="p-3 bg-white rounded-full text-primary border border-solid border-primary"></IconMoney>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 line-clamp-1">
                    {t("placeholdersalary")}
                  </span>
                  <span className="font-medium line-clamp-1">
                    {jobByIdWithCandidate?.post?.minPay != "0" &&
                    jobByIdWithCandidate?.post?.maxPay != "0" &&
                    jobByIdWithCandidate?.post?.maxPay != "2147483647"
                      ? `${formatToMillion(
                          parseInt(jobByIdWithCandidate?.post?.minPay, 10),
                          "not"
                        )} - ${formatToMillion(
                          parseInt(jobByIdWithCandidate?.post?.maxPay, 10)
                        )}`
                      : ""}
                    {/* Lên tới */}
                    {jobByIdWithCandidate?.post?.minPay == "0" &&
                    jobByIdWithCandidate?.post?.maxPay != "0"
                      ? `Lên tới ${formatToMillion(
                          parseInt(jobByIdWithCandidate?.post?.maxPay, 10)
                        )}`
                      : ""}
                    {/* Trên */}
                    {jobByIdWithCandidate?.post?.minPay != "0" &&
                    (jobByIdWithCandidate?.post?.maxPay == "2147483647" ||
                      jobByIdWithCandidate?.post?.maxPay == "0")
                      ? `Trên ${formatToMillion(
                          parseInt(jobByIdWithCandidate?.post?.minPay, 10)
                        )}`
                      : ""}
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <IconMapPin
                  classIcon="w-6 h-6"
                  className="p-3 bg-white rounded-full text-primary border border-solid border-primary"
                ></IconMapPin>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 line-clamp-1">
                    {t("placeholderaddress")}
                  </span>
                  <span className="font-medium line-clamp-1">
                    {jobByIdWithCandidate?.post?.location?.province}
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <IconBriefCaseOutline className="p-3 bg-white rounded-full text-primary border border-solid border-primary"></IconBriefCaseOutline>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 line-clamp-1">
                    {t("placeholderexperience")}
                  </span>
                  <span className="font-medium line-clamp-1">
                    {jobByIdWithCandidate?.post?.experience?.language?.vi}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-5 bg-blue-100 w-fit px-4 py-2 rounded-md">
              <IconClock></IconClock>
              <span>
                {t("jobdetail.endsudmit")}:{" "}
                <span className="font-bold">
                  {" "}
                  {jobByIdWithCandidate?.post?.closeDate}
                </span>
              </span>
            </div>
            <div
              className={`flex mt-5 ${
                checkExpired ? "gap-2 md:gap-5 text-sm md:text-base" : "gap-5"
              }`}
            >
              <div
                onClick={handleApplyJob}
                className={`grow flex items-center justify-center py-2 gap-3 hover:opacity-80 transition-all cursor-pointer text-white font-medium rounded-md ${
                  checkExpired
                    ? "bg-red-500"
                    : jobByIdWithCandidate?.applied
                    ? "bg-green-500"
                    : "bg-primary"
                } `}
              >
                <button
                  className=""
                  type="button"
                  disabled={jobByIdWithCandidate?.applied}
                >
                  {checkExpired
                    ? `${t("endapply")}`
                    : jobByIdWithCandidate?.applied
                    ? `${t("applied")}`
                    : `${t("apply")}`}
                </button>
                <IconPaperAirplan></IconPaperAirplan>
              </div>
              <Popover
                content={
                  <p className="text-center font-medium">
                    {true ? `${t("unsave")}` : `${t("save")}`}
                  </p>
                }
              >
                <div
                  onClick={handleSaveAndUnsaved}
                  className="min-w-[15%] cursor-pointer lg:px-0 px-2 max-w-full hover:opacity-80 transition-all flex items-center border border-solid border-primary text-primary font-medium justify-center py-2 gap-2 rounded-md"
                >
                  <button className="">
                    {checkSave ? `${t("unsave")}` : `${t("save")}`}
                  </button>
                  {checkSave ? (
                    <IconHeartFill></IconHeartFill>
                  ) : (
                    <IconHeart></IconHeart>
                  )}
                </div>
              </Popover>
            </div>
          </>
        )}
      </div>

      <CSSTransition
        in={checkApply}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <ApplyJobPage
          onClick={setCheckApply}
          className=""
          jobId={jobByIdWithCandidate?.post?.id}
        ></ApplyJobPage>
      </CSSTransition>
    </>
  );
};

export default JobDetailInformationJobPage;
