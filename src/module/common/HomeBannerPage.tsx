import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import React from "react";
import bannerbg from "../../assets/banner1.jpg";
import { dataAddress, dataSalary } from "../../utils/dataFetch";
import NumberCounter from "../../components/numbercount/NumberCounter";
const HomeBannerPage: React.FC = () => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };
  return (
    <>
      <div className="relative">
        <img
          src={bannerbg}
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-10"
        />
        <div className="py-5 bg-gradient-to-b from-blue-50 to-white flex flex-col w-full min-h-[150px] justify-center items-center gap-y-5">
          <h1 className="z-10 font-bold text-3xl text-primary line-clamp-1 py-2 mt-6">
            Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.
          </h1>
          <form
            className="flex w-[1100px] h-auto rounded-lg shadow-lg  bg-white"
            action="
        "
          >
            <div className="flex grow border border-solid border-gray-300 border-r-0 rounded-s-lg ">
              <Input
                prefix={
                  <SearchOutlined className="text-xl ml-1 pr-3 text-black" />
                }
                placeholder="Tên công việc"
                allowClear={{
                  clearIcon: (
                    <CloseOutlined className="text-base px-1 hover:bg-slate-100 py-1 rounded-sm transition-all" />
                  ),
                }}
                className="w-[40%] py-4 text-base rounded-none rounded-s-lg"
                size="large"
                onChange={onChange}
              />
              <span className="z-10 bg-white w-[1px] flex items-center">
                <span className="bg-gray-300 h-[60%] w-full "></span>
              </span>
              <Select
                showSearch
                placeholder="Địa chỉ"
                className="address w-[30%] py-4 text-base !rounded-none h-full bg-white"
                optionFilterProp="children"
                filterOption={(input, option: any) =>
                  (option?.label ?? "").includes(input)
                }
                // filterSort={(optionA, optionB) =>
                //   (optionA?.label ?? "")
                //     .toLowerCase()
                //     .localeCompare((optionB?.label ?? "").toLowerCase())
                // }
                options={dataAddress}
              />
              <span className="z-10 bg-white w-[1px] flex items-center">
                <span className="bg-gray-300 h-[60%] w-full "></span>
              </span>
              <Select
                showSearch
                placeholder="Mức lương"
                className="address w-[29%] py-4 text-base !rounded-none h-full bg-white"
                optionFilterProp="children"
                filterOption={(input, option: any) =>
                  (option?.label ?? "").includes(input)
                }
                // filterSort={(optionA, optionB) =>
                //   (optionA?.label ?? "")
                //     .toLowerCase()
                //     .localeCompare((optionB?.label ?? "").toLowerCase())
                // }
                options={dataSalary}
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log("object");
              }}
              className="min-w-[100px] h-auto px-3 py-2 rounded-e-lg bg-primary text-white hover:opacity-80 transition-all"
            >
              Tìm kiếm
            </button>
          </form>

          <div className="z-10 flex gap-5 items-center mt-2">
            <p className="text-sm text-gray-500">
              Tổng số công việc{" "}
              <span className="font-semibold text-base text-primary">
                <NumberCounter targetNumber={30291} />
              </span>
            </p>
            <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span>
            <p className="text-sm text-gray-500">
              Việc làm mới nhất{" "}
              <span className="font-semibold text-base text-primary">
                <NumberCounter targetNumber={2034} />
              </span>
            </p>
            <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span>
            <p className="text-sm text-gray-500">
              Thời gian cập nhật{" "}
              <span className="font-semibold text-base text-primary">
                13:41 20/04/2024
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBannerPage;
