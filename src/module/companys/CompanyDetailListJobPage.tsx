import React, { useEffect, useState } from "react";
import CardJobAtCompanyDetailPage from "../../components/card/CardJobAtCompanyDetailPage";
import { Pagination } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jobGetCompanyJob } from "../../store/job/job-slice";

const CompanyDetailListJobPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { companyJobs, paginationCompanyJob } = useSelector(
    (state: any) => state.job
  );
  const { companyById } = useSelector((state: any) => state.company);
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const handleOnchangePage = (e: any) => {
    if (companyById?.company?.name) {
      dispatch(
        jobGetCompanyJob({
          companyName: companyById?.company?.name,
          candidate_id: user?.id,
          page: e,
          size: 3,
        })
      );
    }
    setPage(e);
  };
  useEffect(() => {
    if (companyById?.company?.name) {
      dispatch(
        jobGetCompanyJob({
          companyName: companyById?.company?.name,
          candidate_id: user?.id,
          page: page,
          size: 3,
        })
      );
    }
  }, [companyById?.company?.name, user?.id]);
  return (
    <>
      <div className="">
        <h2 className="font-medium text-lg">
          {t("companydetail.companywork")}
        </h2>
        <div className="flex flex-col gap-5 mt-5">
          {companyJobs?.length > 0 &&
            companyJobs.map((item: any) => (
              <CardJobAtCompanyDetailPage
                key={item?.post?.id}
                item={item}
              ></CardJobAtCompanyDetailPage>
            ))}
        </div>
        <div className="flex justify-end mt-3">
          <Pagination
            total={paginationCompanyJob?.totalElements}
            onChange={handleOnchangePage}
            className="ml-auto font-medium"
            current={page}
            pageSize={paginationCompanyJob?.pageSize}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyDetailListJobPage;
