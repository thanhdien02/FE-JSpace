import React, { useEffect } from "react";
import CompanyDetailInformationCommonPage from "../../module/companys/CompanyDetailInformationCommonPage";
import CompanyDetailMoreInformationPage from "../../module/companys/CompanyDetailMoreInformationPage";
import CompanyDetailContentPage from "../../module/companys/CompanyDetailContentPage";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { companyGetCompanyById } from "../../store/company/company-slice";
import { useSelector } from "react-redux";
import { jobGetCompanyJob } from "../../store/job/job-slice";

const CompanyDetailPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { companyById } = useSelector((state: any) => state.company);
  const dispatch = useDispatch();
  const { companyId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(
      companyGetCompanyById({ company_id: companyId, candidate_id: user?.id })
    );
  }, [user?.id]);
  useEffect(() => {
    if (companyById?.company?.name && user?.id) {
      dispatch(
        jobGetCompanyJob({
          companyName: companyById?.company?.name,
          candidate_id: user?.id,
        })
      );
    }
  }, [companyById?.company?.name, user?.id]);
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
