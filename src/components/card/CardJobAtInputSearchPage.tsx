import React from "react";
import { useNavigate } from "react-router-dom";

interface PropComponent {
  setTitle?: any;
  item?: any;
}
const CardJobAtInputSearchPage: React.FC<PropComponent> = ({
  item,
  setTitle,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          setTitle("");
          navigate(`/jobs/${item?.post?.id}`);
        }}
        className="p-3 flex gap-[10px] max-h-[250px] border border-solid border-gray-200 rounded-sm"
      >
        <div className="w-[25%] h-[80px]">
          <img
            src={item?.post?.company?.logo}
            alt=""
            className="h-full object-cover"
          />
        </div>
        <div className="w-full">
          <h2 className="uppercase font-medium text-sm line-clamp-1 cursor-pointer hover:text-primary transition-all">
            {item?.post?.title}
          </h2>
          <h3 className="text-sm line-clamp-1 mt-1">
            {item?.post?.company?.name}
          </h3>
          <div className="mt-2 flex gap-2">
            <span className="inline-block font-medium text-[13px] px-2 py-[1px] rounded-sm border border-solid border-gray-200">
              {item?.post?.location?.province}
            </span>
            <span className="inline-block font-medium text-[13px] px-2 py-[1px] rounded-sm border border-solid border-gray-200">
              5- 10 triệu
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardJobAtInputSearchPage;
