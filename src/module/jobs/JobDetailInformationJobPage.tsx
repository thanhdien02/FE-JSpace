import React, { useState } from "react";
import IconMoney from "../../components/icons/IconMoney";
import IconPaperAirplan from "../../components/icons/IconPaperAirplan";
import IconHeart from "../../components/icons/IconHeart";
import IconHeartFill from "../../components/icons/IconHeartFill";
import { message, Popover } from "antd";
import IconMapPin from "../../components/icons/IconMapPin";
import IconBriefCase from "../../components/icons/IconBriefCase";
import IconClock from "../../components/icons/IconClock";
import { useSelector } from "react-redux";
import ApplyJobPage from "../../page/CommonPage/ApplyJobPage";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
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
  const { user } = useSelector((state: any) => state.auth);
  const [checkApply, setCheckApply] = useState(false);
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
      setCheckApply(!checkApply);
    }
  };

  return (
    <>
      <div className={`p-6 rounded-sm ${className}`}>
        <h2 className="text-xl font-bold line-clamp-1">Java Developer</h2>
        <div className="flex flex-wrap gap-6 lg:gap-14 mt-5 ">
          <div className="flex gap-4 items-center">
            <IconMoney className="p-3 bg-primary rounded-full text-white"></IconMoney>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Mức lương
              </span>
              <span className="font-medium line-clamp-1">Thỏa thuận</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IconMapPin
              classIcon="w-6 h-6"
              className="p-3 bg-primary rounded-full text-white"
            ></IconMapPin>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Địa điểm
              </span>
              <span className="font-medium line-clamp-1">Đồng Tháp</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IconBriefCase className="p-3 bg-primary rounded-full text-white"></IconBriefCase>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Kinh Nghiệm
              </span>
              <span className="font-medium line-clamp-1">2 năm</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-5 bg-blue-100 w-fit px-4 py-2 rounded-md">
          <IconClock></IconClock>
          <span>Hạn nộp hồ sơ: 13/06/2024</span>
        </div>
        <div className="flex gap-5 mt-5">
          <div
            onClick={handleApplyJob}
            className="grow flex items-center justify-center py-2 gap-3 hover:opacity-80 transition-all cursor-pointer bg-primary text-white font-medium  rounded-md"
          >
            <button className="" type="button">
              Ứng tuyển ngay
            </button>
            <IconPaperAirplan></IconPaperAirplan>
          </div>
          <Popover
            content={
              <p className="text-center font-medium">
                {true ? "Bỏ lưu" : "Lưu tin"}
              </p>
            }
          >
            <div
              onClick={handleSaveJob}
              className="min-w-[15%] lg:px-0 px-2 max-w-full hover:opacity-80 transition-all flex items-center border border-solid border-primary text-primary font-medium justify-center py-2 gap-2 rounded-md"
            >
              <button className="">{!true ? "Đã lưu" : "Lưu tin"}</button>
              {true ? <IconHeartFill></IconHeartFill> : <IconHeart></IconHeart>}
            </div>
          </Popover>
        </div>
      </div>

      <CSSTransition
        in={checkApply}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <ApplyJobPage onClick={setCheckApply} className=""></ApplyJobPage>
      </CSSTransition>
    </>
  );
};

export default JobDetailInformationJobPage;
