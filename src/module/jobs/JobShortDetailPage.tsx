import React from "react";
import IconClose from "../../components/icons/IconClose";
import IconHeart from "../../components/icons/IconHeart";
import IconHeartFill from "../../components/icons/IconHeartFill";
import IconChervonRight from "../../components/icons/IconChervonRight";
import { NavLink } from "react-router-dom";
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
  return (
    <>
      <div className="w-full sticky top-0 h-screen">
        <div className="p-5 ">
          <IconClose className="absolute cursor-pointer p-1 rounded-sm right-2 top-2"></IconClose>
          <div className="cursor-pointer hover:underline text-primary flex items-center absolute top-12 right-2">
            <NavLink to="/jobs/2">
              <p className="font-medium text-primary">Xem chi tiết</p>
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
          <button className="w-[90%] mx-auto p-2 bg-primary text-white rounded-md">
            Ứng tuyển ngay
          </button>
          {true ? (
            <IconHeartFill
              classIcon="w-6 h-6"
              className="cursor-pointer px-4 border text-primary border-primary border-solid py-2 rounded-md font-bold"
            ></IconHeartFill>
          ) : (
            <IconHeart
              classIcon="w-6 h-6"
              className="cursor-pointer px-4 border text-primary border-primary border-solid py-2 rounded-md font-bold"
            ></IconHeart>
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
