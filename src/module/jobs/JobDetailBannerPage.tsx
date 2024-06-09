import React, { useEffect, useState } from "react";
import banner2 from "../../assets/banner3.jpg";
import { Input, Select } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { dataSalary } from "../../utils/dataFetch";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  commonGetExperience,
  commonGetLocation,
} from "../../store/common/common-slice";
import { useNavigate } from "react-router-dom";
const JobDetailBannerPage: React.FC = () => {
  const { locations, experiences } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
  return (
    <>
      <div className={`relative w-full lg:h-[85px] h-[80px]`}>
        <img
          src={banner2}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
        <div className="absolute bg-gradient-to-b from-blue-50/10 to-white/20 inset-0 h-full pt-5">
          <form
            action=""
            className="w-primary max-w-full lg:px-0 px-5 mx-auto rounded-lg bg-transparent"
          >
            <div className="flex gap-4 ">
              <div className="flex grow rounded-s-lg bg-transparent ">
                <Input
                  prefix={
                    <SearchOutlined className="text-xl ml-1 pr-3 text-gray-600" />
                  }
                  placeholder={t("placeholdernamejob")}
                  allowClear={{
                    clearIcon: (
                      <CloseOutlined className="text-base px-1 hover:bg-slate-100 py-1 rounded-sm transition-all" />
                    ),
                  }}
                  className="lg:w-[40%] py-2 rounded-lg"
                  size="middle"
                  value={title}
                  onChange={handleChangeJobTitle}
                />
                <Select
                  showSearch
                  allowClear
                  placeholder={t("placeholderaddress")}
                  className="lg:block hidden address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  options={locations}
                  fieldNames={{ label: "province", value: "value" }}
                  value={location}
                  onChange={handleChangeLocation}
                />

                <Select
                  showSearch
                  allowClear
                  placeholder={t("placeholderexperience")}
                  className="lg:block hidden address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  value={experience}
                  onChange={handleChangeExperience}
                  fieldNames={{ label: "code", value: "value" }}
                  options={experiences}
                />
                <Select
                  showSearch
                  allowClear
                  placeholder={t("placeholdersalary")}
                  className="lg:block hidden address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
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
                className="min-w-[100px] font-medium h-auto px-3 py-2 rounded-lg bg-primary text-white "
              >
                {t("search")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobDetailBannerPage;
