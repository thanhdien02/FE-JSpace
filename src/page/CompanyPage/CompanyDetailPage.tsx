import React from "react";
import CompanyDetailInformationCommonPage from "../../module/companys/CompanyDetailInformationCommonPage";
import CompanyDetailMoreInformationPage from "../../module/companys/CompanyDetailMoreInformationPage";
import CompanyDetailContentPage from "../../module/companys/CompanyDetailContentPage";

const CompanyDetailPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 py-5">
        <CompanyDetailInformationCommonPage></CompanyDetailInformationCommonPage>
        <div className="flex w-primary mx-auto gap-5 mt-5">
          <div className="grow h-fit">
            <CompanyDetailContentPage className="bg-white p-5"></CompanyDetailContentPage>
          </div>
          <div className="w-[30%] min-w-[30%] h-fit">
            <CompanyDetailMoreInformationPage className="bg-white"></CompanyDetailMoreInformationPage>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailPage;
