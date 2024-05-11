import React from "react";
import CardCompanyRelativeAtCompanyDetailPage from "../../components/card/CardCompanyRelativeAtCompanyDetailPage";
import { Pagination } from "antd";

const CompanyDetailListCompanyRelativePage: React.FC = () => {
  return (
    <>
      <div className="">
        <h2 className="font-medium text-lg">Các công ty liên quan</h2>
        <div className="flex flex-col gap-5 mt-5">
          <CardCompanyRelativeAtCompanyDetailPage></CardCompanyRelativeAtCompanyDetailPage>
          <CardCompanyRelativeAtCompanyDetailPage></CardCompanyRelativeAtCompanyDetailPage>
        </div>
        <div className="flex justify-end mt-3">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </>
  );
};

export default CompanyDetailListCompanyRelativePage;
