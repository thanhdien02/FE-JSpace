import React from "react";
import CompanyBannerPage from "../../module/companys/CompanyBannerPage";
import CompanyResultFilterPage from "../../module/companys/CompanyResultFilterPage";
import { Pagination } from "antd";

const CompanyPage: React.FC = () => {
  return (
    <>
      <CompanyBannerPage></CompanyBannerPage>
      <div className="bg-gray-100 py-5">
        <CompanyResultFilterPage className=""></CompanyResultFilterPage>
        <div className="w-primary max-w-full lg:px-0 px-5 flex mx-auto mt-5">
          <Pagination className="ml-auto font-medium" defaultCurrent={1} total={50} />
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
