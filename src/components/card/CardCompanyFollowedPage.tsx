import { Popover } from "antd";
import React from "react";
import IconChervonRight from "../icons/IconChervonRight";
import { useNavigate } from "react-router-dom";
import IconStar from "../icons/IconStar";
import IconTrash from "../icons/IconTrash";
import { useDispatch } from "react-redux";
import { candidateUnFollowJob } from "../../store/candidate/candidate-slice";
import { useSelector } from "react-redux";
interface PropComponent {
  className?: string;
  item?: any;
}
const CardCompanyFollowedPage: React.FC<PropComponent> = ({
  className,
  item,
}) => {
  const { user } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUnFollow = () => {
    if (user?.id)
      dispatch(
        candidateUnFollowJob({
          candidate_id: user?.id,
          company_id: item?.id,
        })
      );
  };
  return (
    <>
      <div
        className={`relative w-full h-[300px] bg-white shadow-md rounded-md overflow-hidden ${className}`}
      >
        <div className="relative h-[40%]">
          <img
            src={item?.background}
            className="rounded-t-lg w-full h-full object-cover"
            alt=""
          />
          <img
            src={item?.logo}
            className="absolute left-6 -bottom-7 rounded-md w-[65px] h-[65px] object-cover"
            alt=""
          />
          <div className="absolute text-primary hover:underline cursor-pointer transition-all right-2 -bottom-7 flex items-center gap-5">
            <div className="flex items-center gap-2 text-sm">
              <span className=" ">18 đánh giá</span>
              <IconChervonRight
                className="text-primary"
                classIcon="!w-4 !h-4"
              ></IconChervonRight>
            </div>
          </div>
        </div>

        <div className="mt-4 h-full ">
          <div className="p-5 flex flex-col gap-2">
            <div className="flex gap-4">
              <Popover
                content={<p className="w-[300px] font-medium">{item?.name}</p>}
              >
                <h2
                  onClick={() => {
                    navigate(`/companys/${item?.id}`);
                  }}
                  className="w-[90%] font-medium text-base line-clamp-2 cursor-pointer hover:text-primary transition-all"
                >
                  {item?.name}
                </h2>
              </Popover>

              <div className="flex ml-auto self-start items-center gap-2 text-sm">
                <IconStar className="" classIcon="!w-5 !h-5"></IconStar>
                <span className="">4.6</span>
              </div>
            </div>
            <p className="line-clamp-1 text-sm">{item?.email}</p>
            <p className="line-clamp-1 text-sm">{item?.companyLink}</p>
            <div className="flex gap-5 items-center mt-5">
              <p className="text-sm font-medium text-gray-500">
                {item?.address}
              </p>
              <p className="text-sm font-medium text-gray-500">12 việc làm</p>
            </div>
          </div>
        </div>
        <div
          onClick={handleUnFollow}
          className="absolute bottom-3 right-3 flex gap-2 items-center cursor-pointer bg-red-500 px-2 py-1 text-white hover:opacity-80 transition-all"
        >
          <IconTrash></IconTrash>
          <span className="select-none">Bỏ theo dõi</span>
        </div>
      </div>
    </>
  );
};

export default CardCompanyFollowedPage;
