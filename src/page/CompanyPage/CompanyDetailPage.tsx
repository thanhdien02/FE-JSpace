import React from "react";
import CompanyDetailInformationCommonPage from "../../module/companys/CompanyDetailInformationCommonPage";
import CompanyDetailDescriptionPage from "./CompanyDetailDescriptionPage";
import CompanyDetailMoreInformationPage from "./CompanyDetailMoreInformationPage";

const CompanyDetailPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 py-5">
        <CompanyDetailInformationCommonPage></CompanyDetailInformationCommonPage>
        <div className="flex w-primary mx-auto gap-5 mt-5">
          <div className="grow h-fit">
            <CompanyDetailDescriptionPage className="bg-white p-5"></CompanyDetailDescriptionPage>
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
