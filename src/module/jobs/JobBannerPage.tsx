import React, { useState } from "react";
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
import {
  dataAddress,
  dataExperience,
  dataHighPosition,
  dataSalary,
  dataSkills,
  dataTimeWork,
} from "../../utils/dataFetch";
import { useTranslation } from "react-i18next";
interface Inputs {
  name?: string;
  salary?: string;
  experience?: string;
  location?: string;
}
const JobBannerPage: React.FC = () => {
  const {
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<Inputs>();
  const { t } = useTranslation();
  const [searchAdvance, setSearchAdvance] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (dataSearchJob: Inputs) => {
    console.log("🚀 ~ dataSearchJob:", dataSearchJob);
    // dispatch(candidateUpdateCandidate(dataUpdadeCandidate));
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
                  placeholder="Tên công việc"
                  allowClear={{
                    clearIcon: (
                      <CloseOutlined className="text-base px-1 hover:bg-slate-100 py-1 rounded-sm transition-all" />
                    ),
                  }}
                  className="lg:w-[40%] py-2 rounded-lg"
                  size="middle"
                  onChange={(e) => {
                    setValue("name", e.target.value);
                  }}
                />
                <Select
                  showSearch
                  allowClear
                  placeholder="Địa chỉ"
                  className="hidden lg:block address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  options={dataAddress}
                  onChange={(e) => {
                    setValue("location", e);
                  }}
                />

                <Select
                  showSearch
                  allowClear
                  placeholder="Kinh nghiệm"
                  className="hidden lg:block address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  onChange={(e) => {
                    setValue("experience", e);
                  }}
                  options={dataExperience}
                />
                <Select
                  showSearch
                  allowClear
                  placeholder="Mức lương"
                  className="hidden lg:block address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  onChange={(e) => {
                    setValue("salary", e);
                  }}
                  options={dataSalary}
                />
              </div>
              <button
                type="submit"
                // onClick={(e) => {
                //   e.preventDefault();
                // }}
                className="min-w-[100px] font-medium h-auto px-3 py-2 rounded-lg bg-primary text-white "
              >
                {t("search")}
              </button>
            </div>

            <div className={`flex justify-between mt-5 `}>
              <div className="flex lg:bg-blue-100/20 bg-gray-400/30 rounded-lg text-white">
                <span className="m-auto px-4">
                  Tổng <strong className="text-blue-200">0</strong> kết quả
                </span>{" "}
              </div>
              <div
                onClick={() => setSearchAdvance(!searchAdvance)}
                className="flex select-none gap-2 py-2 px-4 cursor-pointer items-center font-medium bg-primary rounded-lg text-white"
              >
                <FilterOutlined />
                <span>Lọc nâng cao</span>
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
                    placeholder="Kỹ năng"
                    options={dataSkills}
                    className={`skill address w-full text-base rounded-lg bg-white`}
                  />
                </div>
                <div className={`lg:w-[20%] w-auto`}>
                  <Select
                    showSearch
                    placeholder="Thời gian làm việc"
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataTimeWork}
                  />
                </div>
                <div className={`lg:w-[20%] w-auto`}>
                  <Select
                    showSearch
                    placeholder="Cấp bậc"
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataHighPosition}
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
