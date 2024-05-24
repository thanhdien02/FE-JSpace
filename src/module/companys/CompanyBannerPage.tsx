import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import banner2 from "../../assets/banner3.jpg";
import { Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
interface Inputs {
  name?: string;
  salary?: string;
  experience?: string;
  location?: string;
}
const CompanyBannerPage: React.FC = () => {
  const { t } = useTranslation();
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
        <div className="lg:px-0 px-5 absolute flex bg-gradient-to-b from-blue-50/10 to-white/20 inset-0 h-full">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="w-primary m-auto rounded-lg bg-transparent"
          >
            <div className="flex gap-4 ">
              <Input
                prefix={
                  <SearchOutlined className="text-xl ml-1 pr-3 text-gray-600" />
                }
                placeholder={t("company.placeholdercompany")}
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
              <button
                type="submit"
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

export default CompanyBannerPage;
