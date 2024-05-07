import React from "react";
import CompanyBannerPage from "../../module/companys/CompanyBannerPage";
import CompanyResultFilterPage from "../../module/companys/CompanyResultFilterPage";

const CompanyPage: React.FC = () => {
  return (
    <>
      <CompanyBannerPage></CompanyBannerPage>
      <div className="bg-gray-100 py-5">
        <CompanyResultFilterPage className=""></CompanyResultFilterPage>
      </div>
    </>
  );
};

export default CompanyPage;
