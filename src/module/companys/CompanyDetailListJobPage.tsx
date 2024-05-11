import React from "react";
import CardJobAtCompanyDetailPage from "../../components/card/CardJobAtCompanyDetailPage";
import { Pagination } from "antd";

const CompanyDetailListJobPage:React.FC = () => {
  return (
    <>
      <div className="">
        <h2 className="font-medium text-lg">Các công việc của công ty</h2>
        <div className="flex flex-col gap-5 mt-5">
          <CardJobAtCompanyDetailPage></CardJobAtCompanyDetailPage>
          <CardJobAtCompanyDetailPage></CardJobAtCompanyDetailPage>
        </div>
        <div className="flex justify-end mt-3">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </>
  );
};

export default CompanyDetailListJobPage;
