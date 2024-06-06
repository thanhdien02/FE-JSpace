import React from "react";
import ContentSeeMore from "../../components/content/ContentSeeMore";
import CompanyDetailListJobPage from "./CompanyDetailListJobPage";
import CompanyDetailListCompanyRelativePage from "./CompanyDetailListCompanyRelativePage";
import { useSelector } from "react-redux";

const CompanyDetailDescriptionPage: React.FC = () => {
  const { companyById } = useSelector((state: any) => state.company);
  return (
    <>
      <ContentSeeMore
        content={`${companyById?.company?.description}`}
      ></ContentSeeMore>
      <span className="w-full block my-4 h-[1px] bg-gray-200/80"></span>
      <CompanyDetailListJobPage></CompanyDetailListJobPage>
      <CompanyDetailListCompanyRelativePage className="mt-5"></CompanyDetailListCompanyRelativePage>
    </>
  );
};

export default CompanyDetailDescriptionPage;
