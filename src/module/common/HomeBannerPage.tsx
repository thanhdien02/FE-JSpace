import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import bannerbg from "../../assets/banner3.jpg";
import { dataSalary } from "../../utils/dataFetch";
import NumberCounter from "../../components/numbercount/NumberCounter";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  commonGetExperience,
  commonGetLocation,
} from "../../store/common/common-slice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeBannerPage: React.FC = () => {
  const { locations, experiences } = useSelector((state: any) => state.common);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const [experience, setExperience] = useState<any>(null);
  const [salary, setSalary] = useState<any>(null);
  const handleChangeJobTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };
  const handleChangeLocation = (value: any) => {
    setLocation(value);
  };
  const handleChangeExperience = (value: any) => {
    setExperience(value);
  };
  const handleChangeSalary = (value: any) => {
    setSalary(value);
  };
  useEffect(() => {
    dispatch(commonGetLocation());
    dispatch(commonGetExperience());
    const storedData = localStorage.getItem("jspace-search");
    if (storedData) {
      let dataSearch = JSON.parse(storedData);
      if (dataSearch?.title != "") setTitle(dataSearch?.title);
      if (dataSearch?.location != "") setLocation(dataSearch?.location);
      if (dataSearch?.experience != "") setExperience(dataSearch?.experience);
      if (dataSearch?.salary != "") {
        setSalary(dataSearch?.salary);
      }
    }
  }, []);
  const handleSearchJob = (e: any) => {
    e.preventDefault();
    let search = {
      title: title,
      location: location,
      experience: experience,
      salary: salary,
    };
    localStorage.setItem("jspace-search", JSON.stringify(search));
    navigate("/jobs");
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
                value={title}
                className="w-full search-banner lg:w-[40%] py-4 text-base rounded-lg lg:rounded-none lg:rounded-s-lg"
                size="large"
                onChange={handleChangeJobTitle}
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
                value={location}
                onChange={handleChangeLocation}
                fieldNames={{ label: "province", value: "value" }}
                options={locations}
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
                value={experience}
                onChange={handleChangeExperience}
                options={experiences}
                fieldNames={{ label: "code", value: "value" }}
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
                value={salary}
                onChange={handleChangeSalary}
                options={dataSalary}
              />
            </div>
            <button
              type="submit"
              onClick={handleSearchJob}
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
