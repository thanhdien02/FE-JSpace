import React, { useEffect, useState } from "react";
import CompanyBannerPage from "../../module/companys/CompanyBannerPage";
import CompanyResultFilterPage from "../../module/companys/CompanyResultFilterPage";
import { useDispatch } from "react-redux";
import { companyGetCompany } from "../../store/company/company-slice";
import { Pagination } from "antd";
import { useSelector } from "react-redux";

const CompanyPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { paginationCompany } = useSelector((state: any) => state.company);
  const [page, setPage] = useState(1);
  const [size] = useState(9);
  const [companyname, setCompanyname] = useState<any>(null);
  const dispatch = useDispatch();

  const handleOnchangePage = (e: any) => {
    dispatch(
      companyGetCompany({
        candidate_id: user?.id,
        companyName: companyname,
        page: e,
        size: size,
      })
    );
    setPage(e);
  };
  useEffect(() => {
    if (companyname != null) {
      dispatch(
        companyGetCompany({
          candidate_id: user?.id,
          companyName: companyname,
          page: 1,
          size: size,
        })
      );
      setPage(1);
    }
  }, [companyname]);
  useEffect(() => {
    dispatch(
      companyGetCompany({
        candidate_id: user?.id,
        companyName: companyname,
        page: page,
        size: size,
      })
    );
  }, [user]);
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
            onChange={handleOnchangePage}
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
