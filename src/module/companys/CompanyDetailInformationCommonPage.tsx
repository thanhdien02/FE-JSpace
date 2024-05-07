import React from "react";
import bg from "../../assets/banner3.jpg";
const CompanyDetailInformationCommonPage: React.FC = () => {
  return (
    <>
      <div className="bg-white w-primary mx-auto mt-5 min-h-[350px] shadow-sm">
        <div className="relative">
          <img
            src={bg}
            className="w-full h-[200px] object-cover rounded-t-lg"
            alt=""
          />
          <img src={bg} className="absolute -bottom-12 left-20 w-[100px] h-[100px] rounded-md object-cover" alt="" />
        </div>
        <div className="pl-52 pt-5">
            <h2 className="text-xl font-bold">Công Ty TNHH MTV Viễn Thông Quốc Tế FPT</h2>
            <div className="">

            </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailInformationCommonPage;
