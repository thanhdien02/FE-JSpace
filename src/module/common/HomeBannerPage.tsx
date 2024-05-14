import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import React from "react";
import bannerbg from "../../assets/banner3.jpg";
import { dataAddress, dataExperience, dataSalary } from "../../utils/dataFetch";
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
          className="absolute inset-0 h-full w-full object-cover "
        />
        <div className="py-5  flex flex-col w-full min-h-[150px] justify-center items-center gap-y-5">
          <h1 className="z-10 font-bold text-3xl text-white line-clamp-1 py-2 mt-6">
            Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.
          </h1>
          <form
            className="flex gap-3 w-primary h-auto rounded-lg shadow-lg bg-white"
            action="
        "
          >
            <div className="flex grow rounded-lg ">
              <Input
                prefix={
                  <SearchOutlined className="text-xl ml-1 pr-3 text-gray-700" />
                }
                placeholder="Công việc bạn đang tìm ?"
                allowClear={{
                  clearIcon: (
                    <CloseOutlined className="text-base px-1 hover:bg-slate-100 py-1 rounded-sm transition-all" />
                  ),
                }}
                className="search-banner w-[40%] py-4 text-base rounded-none rounded-s-lg"
                size="large"
                onChange={onChange}
              />
              <span className="z-10 bg-white w-[1px] flex items-center">
                <span className="bg-gray-300 h-[60%] w-full "></span>
              </span>
              <Select
                allowClear
                showSearch
                placeholder="Địa chỉ"
                className="search-banner address w-[25%] py-4 text-base !rounded-none h-full bg-white"
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
                allowClear
                placeholder="Kinh nghiệm"
                className="search-banner address w-[25%] py-4 text-base h-full bg-white"
                optionFilterProp="children"
                filterOption={(input, option: any) =>
                  (option?.label ?? "").includes(input)
                }
                // filterSort={(optionA, optionB) =>
                //   (optionA?.label ?? "")
                //     .toLowerCase()
                //     .localeCompare((optionB?.label ?? "").toLowerCase())
                // }
                options={dataExperience}
              />
              <span className="z-10 bg-white w-[1px] flex items-center">
                <span className="bg-gray-300 h-[60%] w-full "></span>
              </span>
              <Select
                showSearch
                allowClear
                placeholder="Mức lương"
                className="search-banner address w-[25%] py-4 text-base rounded-e-lg h-full bg-white"
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
              className="min-w-[120px] font-bold cursor-pointer h-auto px-3 py-2 rounded-lg z-10 bg-primary border border-solid border-white/30 text-white hover:opacity-80 transition-all"
            >
              Tìm kiếm
            </button>
          </form>

          <div className="z-10 flex gap-5 items-center mt-2">
            <p className="text-sm text-gray-300">
              Tổng số công việc{" "}
              <span className="font-semibold text-base text-white">
                <NumberCounter targetNumber={30291} />
              </span>
            </p>
            <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span>
            <p className="text-sm text-gray-300">
              Việc làm mới nhất{" "}
              <span className="font-semibold text-base text-white">
                <NumberCounter targetNumber={2034} />
              </span>
            </p>
            <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span>
            <p className="text-sm text-gray-300">
              Thời gian cập nhật{" "}
              <span className="font-semibold text-base text-white">
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
