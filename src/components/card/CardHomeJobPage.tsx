import React from "react";
import { message, Popover, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import IconHeart from "../icons/IconHeart";
import { useSelector } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { useDispatch } from "react-redux";
interface PropComponent {
  className?: string;
  titleJob?: string;
  nameCompany?: string;
  logo?: string;
  salary?: string;
  location?: string;
  onClick?: any;
}
const CardHomeJobPage: React.FC<PropComponent> = ({ className }) => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSaveJob = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để lưu tin");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    }
  };
  return (
    <>
      <div
        className={`relative flex gap-3 shadow-md bg-white rounded-md min-h-[100px] p-4 ${className}`}
      >
        <div className="min-w-[25%] w-full">
          <img
            src="https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0"
            alt=""
            className="w-full h-[80px] object-cover"
          />
        </div>
        <div className="grow flex flex-col gap-1 overflow-hidden">
          <Popover
            content={
              <p className="w-[300px]">
                Font end developer for 2 years (Senior) 10 - 20tr many benifit
                and team building. Apply now that bench
              </p>
            }
          >
            <h3
              className="line-clamp-1 font-medium cursor-pointer hover:text-primary transition-all"
              onClick={() => {
                navigate("/jobs/1");
              }}
            >
              Font end developer for 2 years (Senior) 10 - 20tr many benifit and
              team building. Apply now that bench
            </h3>
          </Popover>

          <h4 className="line-clamp-1 text-gray-500 text-sm">
            Công ty phần mềm FPT Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quibusdam nulla temporibus dolorem consectetur
            alias dicta expedita sapiente repellat voluptate explicabo dolor
            rerum distinctio maiores, harum impedit nisi. Perferendis, tenetur
            odit!
          </h4>
          <div className="flex gap-1 overflow-hidden mt-1">
            <Tag className="min-w-[40px] line-clamp-1 max-w-[100px]">Tag 1</Tag>
            <Tag className="min-w-[40px] line-clamp-1 max-w-[100px]">Tag 1</Tag>
          </div>
        </div>

        <div
          className="absolute bottom-2 right-2 cursor-pointer text-primary"
          onClick={handleSaveJob}
        >
          <IconHeart className="" classIcon="!w-5 !h-5"></IconHeart>
        </div>
      </div>
    </>
  );
};

export default CardHomeJobPage;
