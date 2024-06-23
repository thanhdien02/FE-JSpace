import React, { useEffect, useRef, useState } from "react";
import banner2 from "../../assets/banner3.jpg";
import { Input, Select, SelectProps } from "antd";
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
  commonUpdateInputBannerSearchCheckRedux,
} from "../../store/common/common-slice";
import { jobGetFilterJob } from "../../store/job/job-slice";
import InputSearchBannerResult from "../../components/input/InputSearchBannerResult";
interface PropComponent {
  page?: Number;
  size?: Number;
  setPage?: any;
}
const JobBannerPage: React.FC<PropComponent> = ({ page, size, setPage }) => {
  const {
    locations,
    ranks,
    jobTypes,
    experiences,
    skills,
    inputBannerSearchCheck,
  } = useSelector((state: any) => state.common);
  const { user } = useSelector((state: any) => state.auth);
  const { paginationFilterJob } = useSelector((state: any) => state.job);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const isFirstRender = useRef(true);
  const [searchAdvance, setSearchAdvance] = useState(false);
  const [title, setTitle] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const [experience, setExperience] = useState<any>(null);
  const [salary, setSalary] = useState<any>(null);
  const [rank, setRank] = useState<any>(null);
  const [jobType, setJobType] = useState<any>(null);
  // const [skill, setSkill] = useState<any>(null);
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
          page: page,
          size: size,
          title: dataSearch?.title,
          location: dataSearch?.location,
          experience: dataSearch?.experience,
          minPay: startSalary,
          maxPay: endSalary,
        })
      );
    } else {
      dispatch(
        jobGetFilterJob({
          candidate_id: user?.id,
          page: page,
          size: size,
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
  const handleOnchangeJobType = (value: any) => {
    setJobType(value);
  };
  const handleOnchangeRank = (value: any) => {
    setRank(value);
  };
  const handleChangeSkills = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleSearchJob = (e: any) => {
    e.preventDefault();
    // lưu lịch sử tìm kiếm
    const storedHistory: any = localStorage.getItem("searchHistory");
    if (storedHistory) {
      if (!JSON.parse(storedHistory).includes(title))
        localStorage.setItem(
          "searchHistory",
          JSON.stringify([title, ...JSON.parse(storedHistory)])
        );
    } else {
      if (!JSON.parse(storedHistory).includes(title))
        localStorage.setItem("searchHistory", JSON.stringify([title]));
    }
    dispatch(
      commonUpdateInputBannerSearchCheckRedux({
        inputBannerSearchCheck: false,
      })
    );
    //
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
        page: page,
        size: size,
        title,
        location,
        experience,
        minPay: startSalary,
        maxPay: endSalary,
        rank: rank,
        jobType: jobType,
      })
    );
    setPage(1);
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      let startSalary = "",
        endSalary = "";
      if (salary != "" && salary != undefined && salary != null) {
        [startSalary, endSalary] = salary?.split("-");
      }
      dispatch(
        jobGetFilterJob({
          candidate_id: user?.id,
          page: page,
          size: size,
          title,
          location,
          experience,
          minPay: startSalary,
          maxPay: endSalary,
          rank: rank,
          jobType: jobType,
        })
      );
    }
  }, [page]);
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleOnFocus = () => {
    dispatch(
      commonUpdateInputBannerSearchCheckRedux({ inputBannerSearchCheck: true })
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
            className=" lg:px-0 px-5 w-primary max-w-full mx-auto rounded-lg bg-transparent"
          >
            <div className="relative z-20 flex gap-4">
              {inputBannerSearchCheck && (
                <InputSearchBannerResult
                  setTitle={setTitle}
                  className="absolute top-[110%] bg-white p-2 pr-0 rounded-md shadow lg:w-[50%] w-full z-20"
                ></InputSearchBannerResult>
              )}
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
                  onFocus={handleOnFocus}
                  className="lg:w-[40%] py-2 rounded-lg"
                  size="middle"
                  onChange={handleChangeJobTitle}
                />
                <Select
                  showSearch
                  allowClear
                  placeholder={t("placeholderaddress")}
                  className="hidden lg:block address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  value={location}
                  filterOption={(input: string, option: any) =>
                    ((option?.label ?? "") as string)
                      .toLowerCase()
                      .includes((input ?? "").toLowerCase())
                  }
                  options={
                    locations?.length > 0 &&
                    locations.map((item: any) => ({
                      label: item?.province,
                      value: item?.value,
                    }))
                  }
                  onChange={handleChangeLocation}
                />

                <Select
                  showSearch
                  allowClear
                  className="hidden lg:block address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  value={experience}
                  onChange={handleChangeExperience}
                  placeholder={t("placeholderexperience")}
                  filterOption={(input: string, option: any) =>
                    ((option?.label ?? "") as string)
                      .toLowerCase()
                      .includes((input ?? "").toLowerCase())
                  }
                  options={
                    experiences?.length > 0 &&
                    experiences.map((item: any) => ({
                      label: item?.code,
                      value: item?.value,
                    }))
                  }
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
                  <strong className="text-blue-200">
                    {paginationFilterJob?.totalElements}
                  </strong>{" "}
                  {t("result")}
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
                    onChange={handleChangeSkills}
                    allowClear
                    placeholder={t("skills")}
                    filterOption={(input: string, option: any) =>
                      ((option?.label ?? "") as string)
                        .toLowerCase()
                        .includes((input ?? "").toLowerCase())
                    }
                    options={
                      skills?.length > 0 &&
                      skills.map((item: any) => ({
                        value: item?.id,
                        label: item?.name,
                      }))
                    }
                    className={`skill address w-full text-base rounded-lg bg-white`}
                  />
                </div>
                <div className={`lg:w-[20%] w-auto`}>
                  <Select
                    showSearch
                    allowClear
                    placeholder={t("jobtype")}
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input: string, option: any) =>
                      ((option?.label ?? "") as string)
                        .toLowerCase()
                        .includes((input ?? "").toLowerCase())
                    }
                    options={
                      jobTypes?.length > 0 &&
                      jobTypes.map((item: any) => ({
                        label: item?.code,
                        value: item?.value,
                      }))
                    }
                    onChange={handleOnchangeJobType}
                  />
                </div>
                <div className={`lg:w-[20%] w-auto`}>
                  <Select
                    allowClear
                    showSearch
                    placeholder={t("rank")}
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input: string, option: any) =>
                      ((option?.label ?? "") as string)
                        .toLowerCase()
                        .includes((input ?? "").toLowerCase())
                    }
                    options={
                      ranks?.length > 0 &&
                      ranks.map((item: any) => ({
                        label: item?.code,
                        value: item?.value,
                      }))
                    }
                    onChange={handleOnchangeRank}
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
