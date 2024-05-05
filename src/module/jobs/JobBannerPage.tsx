import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import banner2 from "../../assets/banner-job1.jpg";
import { Input, Select } from "antd";
import {
  CloseOutlined,
  DownOutlined,
  FilterOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { dataAddress, dataSalary } from "../../utils/dataFetch";
interface Inputs {
  name?: string;
  phone?: number;
  email?: string;
  id?: string;
}
const JobBannerPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<Inputs>();
  const [searchAdvance, setSearchAdvance] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (dataSearchJob: Inputs) => {
    console.log("🚀 ~ dataSearchJob:", dataSearchJob);
    // dispatch(candidateUpdateCandidate(dataUpdadeCandidate));
  };
  return (
    <>
      <div
        className={`relative w-full ease-linear duration-100 ${
          searchAdvance ? "h-[280px]" : "h-[180px]"
        }`}
      >
        <img
          src={banner2}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
        {/* <div className=" h-full w-full object-cover bg-gradient-to-b from-gray-500 to-gray-500" ></div> */}
        <div className="absolute inset-0 h-full pt-6">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="w-[1100px] mx-auto rounded-lg bg-transparent"
          >
            <div className="flex gap-4">
              <div className="flex grow rounded-s-lg bg-transparent">
                <Input
                  {...register("email")}
                  prefix={
                    <SearchOutlined className="text-xl ml-1 pr-3 text-gray-600" />
                  }
                  placeholder="Tên công việc"
                  allowClear={{
                    clearIcon: (
                      <CloseOutlined className="text-base px-1 hover:bg-slate-100 py-1 rounded-sm transition-all" />
                    ),
                  }}
                  className="w-[40%] py-3 rounded-lg"
                  size="middle"
                  // onChange={onChange}
                />
                <Select
                  showSearch
                  placeholder="Địa chỉ"
                  className="address ml-4 w-[20%] py-3 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  options={dataAddress}
                />

                <Select
                  showSearch
                  placeholder="Kinh nghiệm"
                  className="address ml-4 w-[20%] py-3 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  onChange={(e) => {
                    setValue("name", e);
                  }}
                  options={dataSalary}
                />
                <Select
                  showSearch
                  placeholder="Mức lương"
                  className="address ml-4 w-[20%] py-3 text-base rounded-lg h-full bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  options={dataSalary}
                />
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("object");
                }}
                className="min-w-[100px] font-medium h-auto px-3 py-2 rounded-lg bg-primary text-white "
              >
                Tìm kiếm
              </button>
            </div>

            <div
              className={`flex justify-between mt-5 `}
              onClick={() => setSearchAdvance(!searchAdvance)}
            >
              <div className="flex bg-blue-100/20 rounded-lg text-white">
                <span className="m-auto px-4">
                  Tổng <strong className="text-blue-200">0</strong> kết quả
                </span>{" "}
              </div>
              <div className="flex  gap-1 py-2 px-4 cursor-pointer items-center font-medium bg-primary rounded-lg text-white">
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
            <div className="overflow-hidden">
              <div
                className={` flex gap-5 items-center mt-5 p-5 rounded-lg bg-blue-950/90 ease-linear duration-100 ${
                  searchAdvance ? "" : "-translate-y-[100px]"
                }`}
              >
                <div className={`w-[20%]`}>
                  <Select
                    showSearch
                    placeholder="Kinh nghiệm"
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataSalary}
                  />
                </div>
                <div className={`w-[20%]`}>
                  <Select
                    showSearch
                    placeholder="Kinh nghiệm"
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataSalary}
                  />
                </div>
                <div className={`w-[20%]`}>
                  <Select
                    showSearch
                    placeholder="Kinh nghiệm"
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataSalary}
                  />
                </div>
                <div className={`w-[20%]`}>
                  <Select
                    showSearch
                    placeholder="Kinh nghiệm"
                    className={`address w-full text-base rounded-lg h-10 bg-white`}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataSalary}
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
