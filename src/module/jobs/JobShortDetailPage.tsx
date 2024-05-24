import React from "react";
// import IconClose from "../../components/icons/IconClose";
import IconHeart from "../../components/icons/IconHeart";
import IconHeartFill from "../../components/icons/IconHeartFill";
import IconChervonRight from "../../components/icons/IconChervonRight";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { useTranslation } from "react-i18next";
interface PropComponent {
  id?: string;
  title?: string;
  salary?: number;
  location?: string;
  closeDate?: string | string[];
  description?: string;
  quantity?: string;
  experience?: string;
  skills?: string | string[];
  rank?: string;
  jobType?: string;
  gender?: string;
  onClick?: any;
  className?: string;
  checkActive?: string;
  dataJob?: any;
}
const JobShortDetailPage: React.FC<PropComponent> = ({ dataJob }) => {
  const { user } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleSaveJob = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để lưu tin");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    }
  };
  const handleApplyJob = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để ứng tuyển");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    } else {
      // setCheckApply(!checkApply);
    }
  };
  return (
    <>
      <div className="w-full sticky top-0 h-screen">
        <div className="p-5 ">
          {/* <IconClose className="absolute cursor-pointer p-1 rounded-sm right-2 top-2"></IconClose> */}
          <div className="cursor-pointer hover:underline text-primary flex items-center absolute top-12 right-2">
            <NavLink to="/jobs/2">
              <p className="font-medium text-primary">{t("detail")}</p>
            </NavLink>
            <IconChervonRight className="self-end text-primary"></IconChervonRight>
          </div>
          <h2 className="font-bold text-xl ">{dataJob?.title}</h2>
          <div className="flex gap-3 mt-3">
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm ">
              20 - 30 triệu
            </span>
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm ">
              {dataJob?.location}
            </span>
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm ">
              Không yêu cầu kinh nghiệm
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center px-5 pb-5">
          <button
            className="w-[90%] mx-auto p-2 bg-primary text-white rounded-md"
            type="button"
            onClick={handleApplyJob}
          >
            {t("apply")}
          </button>
          {true ? (
            <span
              onClick={handleSaveJob}
              className="cursor-pointer px-4 border text-primary border-primary border-solid py-2 rounded-md font-bold"
            >
              <IconHeartFill classIcon="w-6 h-6"></IconHeartFill>
            </span>
          ) : (
            <span
              onClick={handleSaveJob}
              className="cursor-pointer px-4 border text-primary border-primary border-solid py-2 rounded-md font-bold"
            >
              <IconHeart classIcon="w-6 h-6"></IconHeart>
            </span>
          )}
        </div>
        <div className="overflow-auto h-[600px] py-5 pl-5">
          <p
            id="message_container"
            className=" relative transition-all mt-3 overflow-hidden leading-6"
            // Prevent XSS Attack recommen from React Docs
            dangerouslySetInnerHTML={{
              __html: `${dataJob?.description}`,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default JobShortDetailPage;
