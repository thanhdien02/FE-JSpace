import React, { useEffect } from "react";
import CompanyDetailInformationCommonPage from "../../module/companys/CompanyDetailInformationCommonPage";
import CompanyDetailMoreInformationPage from "../../module/companys/CompanyDetailMoreInformationPage";
import CompanyDetailContentPage from "../../module/companys/CompanyDetailContentPage";

const CompanyDetailPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gray-100 py-5">
        <CompanyDetailInformationCommonPage></CompanyDetailInformationCommonPage>
        <div className="flex flex-col lg:flex-row w-primary max-w-full mx-auto gap-5 mt-5">
          <div className="grow h-fit">
            <CompanyDetailContentPage className="bg-white p-5"></CompanyDetailContentPage>
          </div>
          <div className="lg:w-[30%] lg:min-w-[30%] h-fit">
            <CompanyDetailMoreInformationPage className="bg-white"></CompanyDetailMoreInformationPage>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailPage;
