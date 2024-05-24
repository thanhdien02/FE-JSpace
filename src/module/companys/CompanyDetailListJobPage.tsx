import React from "react";
import CardJobAtCompanyDetailPage from "../../components/card/CardJobAtCompanyDetailPage";
import { Pagination } from "antd";
import { useTranslation } from "react-i18next";

const CompanyDetailListJobPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="">
        <h2 className="font-medium text-lg">{t("companydetail.companywork")}</h2>
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
