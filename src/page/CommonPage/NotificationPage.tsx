import React from "react";

import logo from "../../assets/logo3.png";
import IconClose from "../../components/icons/IconClose";
interface PropComponent {
  className?: string;
  onClick?: any;
}
const NotificationPage: React.FC<PropComponent> = ({ className, onClick }) => {
  return (
    <>
      <div className={`fixed inset-0 z-20 bg-white ${className}`}>
        <div className="flex gap-5 items-center mt-3 ml-3">
          <img src={logo} className="w-[45px] h-[45px] object-cover" alt="" />
          <h3 className="font-semibold text-lg">Thông báo</h3>
          <span
            className="ml-auto mr-5"
            onClick={onClick ? () => onClick(false) : () => {}}
          >
            <IconClose></IconClose>
          </span>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
        <div className="">
          <p className="text-gray-500 pl-5 pt-2 font-medium">
            Không có thông báo !
          </p>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
