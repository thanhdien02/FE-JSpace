import React from "react";
import { message, Popover } from "antd";
import IconMapPin from "../icons/IconMapPin";
import IconBuilding from "../icons/IconBuilding";
import IconTrash from "../icons/IconTrash";
import IconHeart from "../icons/IconHeart";
import IconHeartFill from "../icons/IconHeartFill";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
const CardJobFitPage: React.FC<PropComponent> = ({ className }) => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSaveJob = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để lưu tin.");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    }
  };
  return (
    <>
      <div
        className={`relative flex gap-3 border boder-solid border-gray-200 bg-white hover:border-primary transition-all rounded-md min-h-[100px] w-full lg:p-4 p-2 ${className}`}
      >
        <div className="lg:min-w-[23%] w-[100px] max-w-full h-[110px] lg:max-h-[110px]">
          <img
            src="https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0"
            alt=""
            className="w-h-full h-full lg:object-cover object-contain"
          />
        </div>
        <div className="relative grow w-full flex flex-col lg:gap-1">
          <div className="flex justify-between">
            <Popover
              content={
                <p className="w-[300px]">
                  Font end developer for 2 years (Senior) 10 - 20tr many benifit
                  and team building. Apply now that bench
                </p>
              }
            >
              <h3
                className="line-clamp-2 min-w-[70%] font-medium cursor-pointer hover:text-primary transition-all"
                onClick={() => {
                  navigate("/jobs/1");
                }}
              >
                Font end developer for 2 years (Senior) 10 - 20tr many benifit
                and team building. Apply now that bench
              </h3>
            </Popover>
            <div className="lg:block hidden w-[33%]">
              <span className="font-medium text-primary text-nowrap line-clamp-1 ">
                500 - 1,500 USD{" "}
              </span>
            </div>
          </div>
          <div className="flex gap-1 items-center mt-2">
            <IconBuilding
              className="text-gray-500"
              classIcon="lg:!w-5 lg:!h-5 !w-4 !h-4"
            ></IconBuilding>
            <h4 className="line-clamp-1 text-gray-500 lg:text-sm text-xs">
              Công ty phần mềm FPT Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Quibusdam nulla temporibus dolorem consectetur
              alias dicta expedita sapiente repellat voluptate explicabo dolor
              rerum distinctio maiores, harum impedit nisi. Perferendis, tenetur
              odit!
            </h4>
          </div>
          <div className="flex gap-1 overflow-hidden mt-2 items-center">
            <IconMapPin
              className="text-gray-500"
              classIcon="lg:!w-5 lg:!h-5 !w-4 !h-4"
            ></IconMapPin>
            <span className="line-clamp-1 lg:text-sm text-xs text-gray-500">
              Hồ Chí Minh
            </span>
          </div>
        </div>
        <div className="absolute flex gap-2 items-center bottom-2 right-2">
          <IconTrash
            className="p-1 rounded-sm bg-red-100 cursor-pointer text-red-600 hover:opacity-80 transition-all"
            classIcon="w-5 h-5"
          ></IconTrash>
          {true ? (
            <span
              onClick={handleSaveJob}
              className="p-1 rounded-sm bg-blue-100 cursor-pointer text-primary hover:opacity-80 transition-all"
            >
              <IconHeartFill></IconHeartFill>
            </span>
          ) : (
            <span
              onClick={handleSaveJob}
              className="p-1 rounded-sm bg-blue-100 cursor-pointer text-primary hover:opacity-80 transition-all"
            >
              <IconHeart></IconHeart>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CardJobFitPage;
