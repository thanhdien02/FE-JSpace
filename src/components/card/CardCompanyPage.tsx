import React from "react";
import avatar from "../../assets/logo3.png";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";

interface PropComponent {
  item?: any;
}

const CardCompanyPage: React.FC<PropComponent> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[300px] bg-white shadow-md rounded-md overflow-hidden">
        <div className="relative h-[43%]">
          <img
            src={
              item?.company?.background
                ? item?.company?.background
                : "https://biz.prlog.org/jspace/logo.png"
            }
            className={`rounded-t-lg w-full h-full  ${
              item?.company?.background ? "object-cover" : "object-contain"
            } `}
            alt=""
          />
          <img
            src={item?.company?.logo ? item?.company?.logo : avatar}
            className="absolute left-6 -bottom-7 rounded-md w-[70px] h-[70px] object-cover bg-white"
            alt=""
          />
          {/* <div className="absolute text-primary hover:underline cursor-pointer transition-all right-2 -bottom-7 flex items-center gap-5">
            <div className="flex items-center gap-2 text-sm">
              <span className=" ">18 đánh giá</span>
              <IconChervonRight
                className="text-primary"
                classIcon="!w-4 !h-4"
              ></IconChervonRight>
            </div>
          </div> */}
        </div>

        <div className="mt-4 h-full ">
          <div className="p-5 flex flex-col gap-1">
            <div className="flex gap-4">
              <Popover
                content={
                  <p className="w-[300px] font-medium">{item?.company?.name}</p>
                }
              >
                <h2
                  onClick={() => {
                    navigate(`/companys/${item?.company?.id}`);
                  }}
                  className="w-[90%] font-medium text-base line-clamp-1 cursor-pointer hover:text-primary transition-all"
                >
                  {item?.company?.name}
                </h2>
              </Popover>

              {/* <div className="flex ml-auto self-start items-center gap-2 text-sm">
                <IconStar className="" classIcon="!w-5 !h-5"></IconStar>
                <span className="">4.6</span>
              </div> */}
            </div>
            <p className="mt-1 line-clamp-1 text-sm text-gray-500">
              {item?.company?.email}
            </p>
            <p className="line-clamp-1 text-sm text-gray-500">
              {item?.company?.companyLink}
            </p>
            <div className="flex gap-5 items-center mt-1">
              <p className="text-sm font-medium text-gray-500">
                {" "}
                {item?.company?.address}
              </p>
              <p className="text-sm font-medium text-gray-500">
                {item?.company?.companySize} nhân viên
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCompanyPage;
