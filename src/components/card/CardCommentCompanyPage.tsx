import React, { useState } from "react";
import logo from "../../assets/banner3.jpg";
import { LikeOutlined } from "@ant-design/icons";
interface PropComponent {
  className?: string;
}
const CardCommentCompanyPage: React.FC<PropComponent> = ({ className }) => {
  const [reply, setReply] = useState(false);
  return (
    <>
      <div className={`flex gap-4 items-start ${className}`}>
        <img src={logo} alt="" className="w-[45px] h-[45px] rounded-full" />
        <div className="flex flex-col">
          <div>
            <h4 className="font-medium text-base cursor-pointer ">
              Nguyen Thanh Dien
            </h4>
            <span className="text-gray-500"> 13:41 20/04/2024</span>
          </div>
          <div className="relative mt-2 border border-gray-200 border-solid p-3 rounded-md">
            <h5 className="text-base font-medium">Nội quy công ty</h5>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fuga voluptas voluptate voluptatum. Ipsam, quae ipsum voluptas
              ullam harum quod velit, veritatis minima illum, nulla ea sed
              consequatur porro a?
            </p>
            <div className="absolute flex gap-2 items-center text-lg -bottom-[27px] left-3">
              <LikeOutlined
                className={`cursor-pointer text-[14px] hover:opacity-80 transition-all ${
                  true ? "text-primary " : ""
                }`}
              />
              <span className="text-[14px] font-semibold cursor-pointer select-none hover:opacity-80 transition-all">
                Trả lời
              </span>
            </div>
          </div>
          <div className="mt-7 flex gap-5 items-start">
            <img src={logo} alt="" className="w-[30px] h-[30px] rounded-full" />
            <div>
              <h4 className="font-medium text-base cursor-pointer ">
                Nguyen Thanh Dien
              </h4>
              <span className="text-gray-500 text-xs"> 13:41 20/04/2024</span>
              <div className="relative mt-2 border border-gray-200 border-solid p-3 rounded-md">
                <h5 className="text-sm font-medium">Nội quy công ty</h5>
                <p className="mt-2 text-sm w-fit">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum ad itaque magnam aliquid quas, harum quidem doloremque
                  ratione officia sit illum corporis, rerum architecto amet quos
                  delectus? Asperiores, ut eligendi?Lorem ipsum dolor sit amet
                </p>
                <div className="absolute flex gap-2 items-center text-lg -bottom-[27px] left-3">
                  <LikeOutlined
                    className={`cursor-pointer font-semibold text-[14px] hover:opacity-80 transition-all ${
                      true ? "text-primary " : ""
                    }`}
                  />
                  <span
                    onClick={() => setReply(!reply)}
                    className="text-[14px] font-semibold cursor-pointer select-none hover:opacity-80 transition-all"
                  >
                    Trả lời
                  </span>
                </div>
              </div>
              {reply ? (
                <div className="flex gap-5 mt-10">
                  <img
                    src={logo}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <textarea
                    className="w-full min-h-20 border border-solid border-gray-200 p-2 rounded-md outline-none"
                    placeholder="Trả lời"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCommentCompanyPage;
