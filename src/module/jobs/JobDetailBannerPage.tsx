import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import banner2 from "../../assets/banner3.jpg";
import { Input, Select } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { dataAddress, dataExperience, dataSalary } from "../../utils/dataFetch";
interface Inputs {
  name?: string;
  salary?: string;
  experience?: string;
  location?: string;
}
const JobDetailBannerPage: React.FC = () => {
  const { handleSubmit, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataSearchJob: Inputs) => {
    console.log("🚀 ~ dataSearchJob:", dataSearchJob);
    // dispatch(candidateUpdateCandidate(dataUpdadeCandidate));
  };
  return (
    <>
      <div className={`relative w-full h-[90px]`}>
        <img
          src={banner2}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
        <div className="absolute bg-gradient-to-b from-blue-50/10 to-white/20 inset-0 h-full pt-5">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="w-primary mx-auto rounded-lg bg-transparent"
          >
            <div className="flex gap-4 ">
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
                  className="w-[40%] py-2 rounded-lg"
                  size="middle"
                  onChange={(e) => {
                    setValue("name", e.target.value);
                  }}
                />
                <Select
                  showSearch
                  allowClear
                  placeholder="Địa chỉ"
                  className="address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
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
                  className="address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
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
                  className="address ml-4 w-[20%] py-2 text-base rounded-lg h-full bg-white"
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
                className="min-w-[100px] font-medium h-auto px-3 py-2 rounded-lg bg-primary text-white "
              >
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobDetailBannerPage;
