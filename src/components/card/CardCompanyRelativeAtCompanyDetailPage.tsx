import { message, Popover } from "antd";
import React from "react";
import logo from "../../assets/banner3.jpg";
import IconTrash from "../icons/IconTrash";
import IconPlus from "../icons/IconPlus";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";

interface PropComponent {
  className?: string;
  item?: any;
}
const CardCompanyRelativeAtCompanyDetailPage: React.FC<PropComponent> = ({
  className,
  item,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFollowCompany = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để theo dõi công ty.");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    }
  };
  return (
    <>
      <div
        className={`relative flex gap-5 w-full items-center lg:p-5 p-3 shadow-sm min-h-[100px] border border-solid border-gray-200 rounded-md ${className}`}
      >
        <div className="lg:w-[20%] w-[25%]">
          <img
            src={item?.company?.logo ? item?.company?.logo : logo}
            alt=""
            className="lg:w-[100px] min-w-[70px] object-cover lg:h-[100px] h-[70px]"
          />
        </div>
        <div className="grow flex flex-col w-full self-start">
          <Popover content={<p className="w-[300px]">{item?.company?.name}</p>}>
            <h4
              className="lg:w-[80%] cursor-pointer text-base font-medium line-clamp-1"
              onClick={() => {
                navigate(`/companys/${item?.company?.id}`);
              }}
            >
              {item?.company?.name}
            </h4>
          </Popover>

          <h5 className="text-gray-500 line-clamp-1 lg:text-sm mt-1">
            Quy mô: {item?.company?.companySize} nhân viên
          </h5>
          <p className="text-sm text-gray-500">Có 300 người theo dõi</p>
          <div className="flex gap-3 items-center mt-3">
            <span className="p-1 text-xs bg-gray-200 rounded-sm">
              {item?.company?.address}
            </span>
            <span className="p-1 text-xs bg-gray-200 rounded-sm line-clamp-1 w-[120px]">
              {item?.company?.companyLink}
            </span>
          </div>
        </div>
        <div
          onClick={handleFollowCompany}
          className="absolute bottom-3 right-3 lg:flex hidden items-center gap-2"
        >
          <div className="flex items-center select-none gap-2 bg-primary text-white py-1 px-2 cursor-pointer">
            {item?.followed ? (
              <>
                <IconTrash></IconTrash>
                <span className="text-sm  rounded-sm">Bỏ theo dõi</span>
              </>
            ) : (
              <>
                <IconPlus classIcon="!w-5 !h-5"></IconPlus>
                <span className="text-sm  rounded-sm">Theo dõi</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCompanyRelativeAtCompanyDetailPage;
