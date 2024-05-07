import React from "react";
import bg from "../../assets/banner3.jpg";
import bg1 from "../../assets/banner-job4.jpg";
import IconStar from "../icons/IconStar";
import IconChervonRight from "../icons/IconChervonRight";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";

interface PropComponent {
  name?: string;
  description?: string;
  companySizes?: string;
  companyLink?: string;
}

const CardCompanyPage: React.FC<PropComponent> = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[300px] bg-white shadow-md rounded-md overflow-hidden">
        <div className="relative h-[40%]">
          <img
            src={bg}
            className="rounded-t-lg w-full h-full object-cover"
            alt=""
          />
          <img
            src={bg1}
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
                content={
                  <p className="w-[300px] font-medium">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem pariatur architecto, voluptatibus quam
                    dignissimos, hic magnam iste repellat illum accusamus, ullam
                    cupiditate corporis. Ipsum nisi et excepturi dicta nam ad.
                    CÔNG TY TNHH MTV VIỄN THÔNG QUỐC TẾ FPT
                  </p>
                }
              >
                <h2
                  onClick={() => {
                    navigate("/companys/1");
                  }}
                  className="w-[90%] font-medium text-base line-clamp-2 cursor-pointer hover:text-primary transition-all"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem pariatur architecto, voluptatibus quam dignissimos,
                  hic magnam iste repellat illum accusamus, ullam cupiditate
                  corporis. Ipsum nisi et excepturi dicta nam ad. CÔNG TY TNHH
                  MTV VIỄN THÔNG QUỐC TẾ FPT
                </h2>
              </Popover>

              <div className="flex ml-auto self-start items-center gap-2 text-sm">
                <IconStar className="" classIcon="!w-5 !h-5"></IconStar>
                <span className="">4.6</span>
              </div>
            </div>
            <p className="line-clamp-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              illum dolore excepturi alias adipisci blanditiis sapiente natus
              exercitationem dolores temporibus explicabo error mollitia nam
              aliquam, unde iusto laborum, eius quae.
            </p>
            <div className="flex gap-5 items-center mt-1">
              <p className="text-sm font-medium text-gray-500">Hồ Chí Minh</p>
              <p className="text-sm font-medium text-gray-500">12 việc làm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCompanyPage;
