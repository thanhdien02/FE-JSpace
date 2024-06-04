import React, { useState } from "react";
import banner2 from "../../assets/banner3.jpg";
import { Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface PropComponent {
  setCompanyname?: any;
}
const CompanyBannerPage: React.FC<PropComponent> = ({ setCompanyname }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const handleChangeCompanyName = (e: any) => {
    setName(e.target.value);
  };
  const handleSearchCompany = (e: any) => {
    e.preventDefault();
    setCompanyname(name);
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
                onChange={handleChangeCompanyName}
              />
              <button
                type="submit"
                className="min-w-[100px] font-medium h-auto px-3 py-2 rounded-lg bg-primary text-white"
                onClick={handleSearchCompany}
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
