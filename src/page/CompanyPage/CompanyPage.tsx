import React, { useEffect, useState } from "react";
import CompanyBannerPage from "../../module/companys/CompanyBannerPage";
import CompanyResultFilterPage from "../../module/companys/CompanyResultFilterPage";
import { useDispatch } from "react-redux";
import { companyGetCompany } from "../../store/company/company-slice";
import { Pagination } from "antd";
import { useSelector } from "react-redux";

const CompanyPage: React.FC = () => {
  const { paginationCompany } = useSelector((state: any) => state.company);
  const [page, setPage] = useState(1);
  const [companyname, setCompanyname] = useState<any>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (companyname != null) {
      dispatch(
        companyGetCompany({ companyName: companyname, page: 1, size: 9 })
      );
      setPage(1);
    }
  }, [companyname]);
  useEffect(() => {
    dispatch(
      companyGetCompany({ companyName: companyname, page: page, size: 9 })
    );
  }, [page]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CompanyBannerPage setCompanyname={setCompanyname}></CompanyBannerPage>
      <div className="bg-gray-100 py-5">
        <CompanyResultFilterPage className=""></CompanyResultFilterPage>
        <div className="w-primary max-w-full lg:px-0 px-5 flex mx-auto mt-5">
          <Pagination
            total={paginationCompany?.totalElements}
            onChange={(e) => setPage(e)}
            className="ml-auto font-medium"
            current={page}
            pageSize={paginationCompany?.pageSize}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
