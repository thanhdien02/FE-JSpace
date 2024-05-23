import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import React from "react";
import bannerbg from "../../assets/banner3.jpg";
import { dataAddress, dataExperience, dataSalary } from "../../utils/dataFetch";
import NumberCounter from "../../components/numbercount/NumberCounter";
import { useTranslation } from "react-i18next";

const HomeBannerPage: React.FC = () => {
  const { t } = useTranslation();
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
        <div className="py-5 flex flex-col w-full min-h-[150px] justify-center items-center gap-y-5">
          <h1 className="z-10 font-bold text-3xl text-white lg:line-clamp-1 py-2 mt-6 text-center lg:text-start px-4 lg:px-0">
            {t("home.titlebannerhome")}
          </h1>
          <form
            className="lg:px-0 px-4 lg:m-auto flex flex-wrap gap-3 max-w-full w-primary h-auto rounded-lg shadow-lg bg-white"
            action="
        "
          >
            <div className="grow flex rounded-lg ">
              <Input
                prefix={
                  <SearchOutlined className="text-xl ml-1 pr-3 text-gray-700" />
                }
                placeholder={t("home.placeholdernamejob")}
                allowClear={{
                  clearIcon: (
                    <CloseOutlined className="text-base px-1 hover:bg-slate-100 py-1 rounded-sm transition-all" />
                  ),
                }}
                className="w-full search-banner lg:w-[40%] py-4 text-base rounded-lg lg:rounded-none lg:rounded-s-lg"
                size="large"
                onChange={onChange}
              />
              <span className="hidden lg:flex z-10 bg-white w-[1px] items-center">
                <span className="hidden lg:flex bg-gray-300 h-[60%] w-full "></span>
              </span>
              <Select
                allowClear
                showSearch
                placeholder={t("placeholderaddress")}
                className="hidden lg:block search-banner address w-[25%] py-4 text-base !rounded-none h-full bg-white"
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
              <span className="hidden lg:flex z-10 bg-white w-[1px] items-center">
                <span className="bg-gray-300 h-[60%] w-full "></span>
              </span>
              <Select
                showSearch
                allowClear
                placeholder={t("placeholderexperience")}
                className="hidden lg:block search-banner address w-[25%] py-4 text-base h-full bg-white"
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
              <span className="hidden lg:flex z-10 bg-white w-[1px]  items-center">
                <span className="hidden lg:flex bg-gray-300 h-[60%] w-full "></span>
              </span>
              <Select
                showSearch
                allowClear
                placeholder={t("placeholdersalary")}
                className="hidden lg:block search-banner address w-[25%] py-4 text-base rounded-e-lg h-full bg-white"
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
              className="w-full lg:w-auto lg:min-w-[120px] font-bold cursor-pointer h-auto px-3 lg:py-2 py-3 rounded-lg z-10 bg-primary border border-solid border-white/30 text-white hover:opacity-80 transition-all"
            >
              {t("search")}
            </button>
          </form>

          <div className="px-5 z-10 flex lg:gap-5 gap-2 items-center mt-2">
            <p className="text-center lg:text-start text-xs lg:text-sm text-gray-300">
              <span className=""> {t("home.totalwork")} </span>
              <span className=" font-semibold text-base text-white">
                <NumberCounter targetNumber={30291} />
              </span>
            </p>
            <span className="hidden lg:block w-[5px] h-[5px] rounded-full bg-gray-500"></span>
            <p className="text-center lg:text-start text-xs lg:text-sm text-gray-300">
              <span className=""> {t("home.latestjob")} </span>
              <span className=" font-semibold text-base text-white">
                <NumberCounter targetNumber={2034} />
              </span>
            </p>
            <span className="hidden lg:block w-[5px] h-[5px] rounded-full bg-gray-500"></span>
            <p className="text-center lg:text-start text-xs lg:text-sm text-gray-300">
              <span className=""> {t("home.updatetime")} </span>
              <span className=" font-semibold text-base text-white">
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
