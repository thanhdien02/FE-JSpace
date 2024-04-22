import React from "react";

import logo from "../../assets/logo3.png";
import { Tag } from "antd";
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
  return (
    <>
      <div
        className={`flex gap-3 bg-white rounded-md min-h-[100px] p-4 ${className}`}
      >
        <div className="min-w-[20%]">
          <img src={logo} alt="" className="w-[50px] h-[50px] rounded-full" />
        </div>
        <div className="grow flex flex-col gap-1 overflow-hidden">
          <h3 className="line-clamp-1 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut
            nemo inventore minima aliquam illum error veniam placeat vero maxime
            consequatur velit obcaecati nihil, hic iure voluptate. Fugiat, rem
            culpa?
          </h3>
          <h4 className="line-clamp-1 text-gray-500 text-sm">
            Công ty phần mềm FPT Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quibusdam nulla temporibus dolorem consectetur
            alias dicta expedita sapiente repellat voluptate explicabo dolor
            rerum distinctio maiores, harum impedit nisi. Perferendis, tenetur
            odit!
          </h4>
          <div className="flex gap-1 overflow-hidden">
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">
              Tag 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              voluptas fugiat quasi deserunt dolor. Ad, debitis sequi, saepe
              rerum autem deleniti provident iusto nesciunt accusantium
              assumenda delectus exercitationem aliquid sit!
            </Tag>
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">
              Tag 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              voluptas fugiat quasi deserunt dolor. Ad, debitis sequi, saepe
              rerum autem deleniti provident iusto nesciunt accusantium
              assumenda delectus exercitationem aliquid sit!
            </Tag>
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">
              Tag 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              voluptas fugiat quasi deserunt dolor. Ad, debitis sequi, saepe
              rerum autem deleniti provident iusto nesciunt accusantium
              assumenda delectus exercitationem aliquid sit!
            </Tag>
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">
              Tag 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              voluptas fugiat quasi deserunt dolor. Ad, debitis sequi, saepe
              rerum autem deleniti provident iusto nesciunt accusantium
              assumenda delectus exercitationem aliquid sit!
            </Tag>
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">
              Tag 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              voluptas fugiat quasi deserunt dolor. Ad, debitis sequi, saepe
              rerum autem deleniti provident iusto nesciunt accusantium
              assumenda delectus exercitationem aliquid sit!
            </Tag>
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">
              Tag 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              voluptas fugiat quasi deserunt dolor. Ad, debitis sequi, saepe
              rerum autem deleniti provident iusto nesciunt accusantium
              assumenda delectus exercitationem aliquid sit!
            </Tag>
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">
              Tag 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              voluptas fugiat quasi deserunt dolor. Ad, debitis sequi, saepe
              rerum autem deleniti provident iusto nesciunt accusantium
              assumenda delectus exercitationem aliquid sit!
            </Tag>
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">
              Tag 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              voluptas fugiat quasi deserunt dolor. Ad, debitis sequi, saepe
              rerum autem deleniti provident iusto nesciunt accusantium
              assumenda delectus exercitationem aliquid sit!
            </Tag>
            <Tag>Tag 2</Tag>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHomeJobPage;
