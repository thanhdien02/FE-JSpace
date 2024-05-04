import React from "react";
import companylogo from "../../assets/bg-login.jpg";
import logo from "../../assets/logo3.png";
import "../../components/companylogo/Logo.css";

const HomeListCompanyPage: React.FC = () => {
  // useEffect(() => {
  //   const initialData: any = [3];
  //   setElements(initialData);
  //   const interval = setInterval(() => {
  //     // Thêm một phần tử mới vào cuối mảng elements
  //     setElements((prevElements: any) => [
  //       ...prevElements,
  //       prevElements.length + 1,
  //     ]);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div>
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
                className="m-auto w-[80%] h-[50%] object-contain "
              />
            </div>
          </div>
        </div>
        {/* <div className="flex h-20 mt-5">
          {elements.map((item: any, index: number) => (
            <div key={index} className="relative">
              <LogoCarousel
                position={`-left-[800px] top-[100px]`}
              ></LogoCarousel>
              <LogoCarousel
                position={`-left-[400px] top-[150px]`}
              ></LogoCarousel>
              <LogoCarousel
                position={`-left-[200px] top-[230px]`}
              ></LogoCarousel>
              <LogoCarousel
                position={`-left-[300px] top-[70px]`}
              ></LogoCarousel>
              <LogoCarousel
                position={`-left-[150px] top-[170px]`}
              ></LogoCarousel>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default HomeListCompanyPage;
