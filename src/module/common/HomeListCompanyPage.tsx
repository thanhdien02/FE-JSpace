import React from "react";
import companylogo from "../../assets/bg-login.jpg";
import logo from "../../assets/logo3.png";
const HomeListCompanyPage: React.FC = () => {
  return (
    <>
      <div className="mt-10 w-[1100px] mx-auto py-3 ">
        <h3 className="font-bold text-2xl text-primary my-3">
          Các công ty phổ biến
        </h3>
        <div className="grid grid-cols-5 gap-4 mt-6">
          <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
            <img
              src={companylogo}
              alt=""
              className="m-auto w-[80%] h-[50%] object-contain"
            />
          </div>
          <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
            <img
              src={logo}
              alt=""
              className="m-auto w-[80%] h-[50%] object-contain"
            />
          </div>
          <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
            <img
              src={companylogo}
              alt=""
              className="m-auto w-[80%] h-[50%] object-contain"
            />
          </div>
          <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
            <img
              src={logo}
              alt=""
              className="m-auto w-[80%] h-[50%] object-contain"
            />
          </div>
          <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
            <img
              src={companylogo}
              alt=""
              className="m-auto w-[80%] h-[50%] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeListCompanyPage;
