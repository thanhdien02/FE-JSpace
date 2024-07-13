import React, { useEffect } from "react";
import CompanyDetailInformationCommonPage from "../../module/companys/CompanyDetailInformationCommonPage";
import CompanyDetailMoreInformationPage from "../../module/companys/CompanyDetailMoreInformationPage";
import CompanyDetailContentPage from "../../module/companys/CompanyDetailContentPage";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { companyGetCompanyById } from "../../store/company/company-slice";
import { useSelector } from "react-redux";
const CompanyDetailPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();
  const { companyId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [companyId]);
  useEffect(() => {
    dispatch(
      companyGetCompanyById({ company_id: companyId, candidate_id: user?.id })
    );
  }, [user?.id, companyId]);

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
