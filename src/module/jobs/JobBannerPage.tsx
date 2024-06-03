import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import banner2 from "../../assets/banner3.jpg";
import { Input, Select } from "antd";
import {
  CloseOutlined,
  DownOutlined,
  FilterOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { dataSalary } from "../../utils/dataFetch";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  commonGetExperience,
  commonGetJobType,
  commonGetLocation,
  commonGetRank,
  commonGetSkills,
} from "../../store/common/common-slice";
import { jobGetFilterJob } from "../../store/job/job-slice";
interface Inputs {
  name?: string;
  salary?: string;
  experience?: string;
  location?: string;
}
const JobBannerPage: React.FC = () => {
  const { locations, ranks, jobTypes, experiences, skills } = useSelector(
    (state: any) => state.common
  );
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    // setValue,
    // formState: { errors },
  } = useForm<Inputs>();
  const { t } = useTranslation();
  const [searchAdvance, setSearchAdvance] = useState(false);
  const [title, setTitle] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const [experience, setExperience] = useState<any>(null);
  const [salary, setSalary] = useState<any>(null);
  const onSubmit: SubmitHandler<Inputs> = (dataSearchJob: Inputs) => {
    console.log("🚀 ~ dataSearchJob:", dataSearchJob);
    // dispatch(candidateUpdateCandidate(dataUpdadeCandidate));
  };
  useEffect(() => {
    dispatch(commonGetLocation());
    dispatch(commonGetJobType());
    dispatch(commonGetRank());
    dispatch(commonGetExperience());
    dispatch(commonGetSkills());
  }, []);
  useEffect(() => {
    const storedData = localStorage.getItem("jspace-search");
    let startSalary = "",
      endSalary = "";
    if (storedData) {
      let dataSearch = JSON.parse(storedData);
      if (dataSearch?.title != "") setTitle(dataSearch?.title);
      if (dataSearch?.location != "") setLocation(dataSearch?.location);
      if (dataSearch?.experience != "") setExperience(dataSearch?.experience);
      if (
        dataSearch?.salary != "" &&
        dataSearch?.salary != undefined &&
        dataSearch?.salary != null
      ) {
        setSalary(dataSearch?.salary);
        [startSalary, endSalary] = dataSearch?.salary?.split("-");
      }
      dispatch(
        jobGetFilterJob({
          candidate_id: user?.id,
          page: 1,
          size: 12,
          title: dataSearch?.title,
          location: dataSearch?.location,
          experience: dataSearch?.experience,
          minPay: startSalary,
          maxPay: endSalary,
        })
      );
    }
  }, [user?.id]);
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

    let startSalary = "",
      endSalary = "";
    if (salary != "" && salary != undefined && salary != null) {
      [startSalary, endSalary] = salary?.split("-");
    }
    dispatch(
      jobGetFilterJob({
        candidate_id: user?.id,
        page: 1,
        size: 20,
        title,
        location,
        experience,
        minPay: startSalary,
        maxPay: endSalary,
      })
    );
  };
  return (
    <>
      <div
        className={`relative w-full ease-linear duration-100 ${
          searchAdvance ? "h-[300px] lg:h-[250px]" : "h-[145px]"
        }`}
      >
        <img
          src={banner2}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
        <div className="absolute bg-gradient-to-b from-blue-50/10 to-white/20 inset-0 h-full pt-5">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="lg:px-0 px-5 w-primary max-w-full mx-auto rounded-lg bg-transparent"
          >
            <div className="flex gap-4">
              <div className="flex grow rounded-s-lg bg-transparent ">
                <Input
                  prefix={
                    <SearchOutlined className="text-xl ml-1 pr-3 text-gray-600" />
                  }
                  value={title}
                  placeholder={t("placeholdernamejob")}
                  allowClear={{
                    clearIcon: (
                      <CloseOutlined className="text-base px-1 hover:bg-slate-100 py-1 rounded-sm transition-all" />
                    ),
                  }}
                  className="lg:w-[40%] py-2 rounded-lg"
                  size="middle"
                  onChange={handleChangeJobTitle}
                />
                <Select
                  showSearch
                  allowClear
                  placeholder={t("placeholderaddress")}
                  fieldNames={{ label: "province", value: "value" }}
                  className="hidden lg:block address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  value={location}
                  options={locations}
                  onChange={handleChangeLocation}
                />

                <Select
                  showSearch
                  allowClear
                  placeholder={t("placeholderexperience")}
                  className="hidden lg:block address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
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
                  className="hidden lg:block address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  onChange={handleChangeSalary}
                  value={salary}
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

            <div className={`flex justify-between mt-5 `}>
              <div className="flex lg:bg-blue-100/20 bg-gray-400/30 rounded-lg text-white">
                <span className="m-auto px-4">
                  <strong className="text-blue-200">0</strong> {t("result")}
                </span>{" "}
              </div>
              <div
                onClick={() => setSearchAdvance(!searchAdvance)}
                className="flex select-none gap-2 py-2 px-4 cursor-pointer items-center font-medium bg-primary rounded-lg text-white"
              >
                <FilterOutlined />
                <span>{t("findjob.filteradvance")}</span>
                {searchAdvance ? (
                  <UpOutlined className="transition-all" />
                ) : (
                  <DownOutlined className="transition-all" />
                )}
              </div>
            </div>
            {/*  */}
            <div className={`sticky top-0 overflow-hidden`}>
              <div
                className={`flex flex-wrap gap-5 items-center mt-5 p-5 rounded-lg bg-blue-950/90 ease-linear duration-100 ${
                  searchAdvance ? "" : "-translate-y-[130%]"
                }`}
              >
                <div className={`lg:w-[50%] w-full`}>
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    onChange={(value) => console.log(`selected ${value}`)}
                    tokenSeparators={[","]}
                    allowClear
                    placeholder={t("skills")}
                    options={skills.length > 0 ? skills : []}
                    fieldNames={{ label: "name", value: "id" }}
                    className={`skill address w-full text-base rounded-lg bg-white`}
                  />
                </div>
                <div className={`lg:w-[20%] w-auto`}>
                  <Select
                    showSearch
                    placeholder={t("jobtype")}
                    fieldNames={{ label: "code", value: "value" }}
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={jobTypes}
                  />
                </div>
                <div className={`lg:w-[20%] w-auto`}>
                  <Select
                    showSearch
                    placeholder={t("rank")}
                    fieldNames={{ label: "code", value: "value" }}
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={ranks}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobBannerPage;
