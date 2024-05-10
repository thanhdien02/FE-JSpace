import IconMapPin from "../../components/icons/IconMapPin";
import React from "react";
import IconMap from "../../components/icons/IconMap";
interface PropComponent {
  className?: string;
}
const CompanyDetailMoreInformationPage: React.FC<PropComponent> = ({
  className,
}) => {
  return (
    <>
      <div className={`px-6 py-4 ${className}`}>
        <h2 className="text-lg font-semibold text-primary">Thông tin công ty</h2>
        <div className="mt-2">
          <div className="flex gap-3 items-center">
            <IconMapPin
              className="text-primary"
              classIcon="!w-6 !h-6"
            ></IconMapPin>
            <span className="">Địa chỉ công ty</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            impedit sit? Commodi corrupti ex excepturi aut explicabo optio
            aperiam cupiditate rem repellendus! Voluptate tempora asperiores
            obcaecati a repellat excepturi voluptatem.
          </p>
          <span className="w-full h-[1px] bg-gray-300 block my-4"></span>
          <div className="flex gap-3 items-center mt-3">
            <IconMap
              className="text-primary"
              classIcon="!w-6 !h-6"
            ></IconMap>
            <span className="">Bản đồ</span>
          </div>
          <div className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailMoreInformationPage;
