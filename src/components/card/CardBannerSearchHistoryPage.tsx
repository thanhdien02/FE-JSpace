import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import IconClose from "../icons/IconClose";
interface PropComponent {
  className?: string;
  title?: string;
  setTitle?: any;
  onDelete?: any;
}
const CardBannerSearchHistoryPage: React.FC<PropComponent> = ({
  className,
  title,
  setTitle,
  onDelete,
}) => {
  return (
    <>
      <div
        className={`flex justify-between text-gray-700 items-center hover:bg-gray-200 transition-all px-2 cursor-pointer rounded ${className}`}
      >
        <div
          className="flex gap-3 py-1 grow w-full"
          onClick={() => {
            console.log("object");
            setTitle(`${title}`);
          }}
        >
          <SearchOutlined />
          <p className="line-clamp-1">{title}</p>
        </div>
        <span onClick={() => onDelete(title)} className="block py-1">
          <IconClose classIcon="!w-5 !h-5"></IconClose>
        </span>
      </div>
    </>
  );
};

export default CardBannerSearchHistoryPage;
