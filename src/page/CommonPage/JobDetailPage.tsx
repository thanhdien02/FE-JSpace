import React, { useEffect } from "react";
import JobDetailBannerPage from "../../module/jobs/JobDetailBannerPage";
import JobDetailInformationCompanyPage from "../../module/jobs/JobDetailInformationCompanyPage";
import JobDetailInformationJobPage from "../../module/jobs/JobDetailInformationJobPage";
import JobDetailDescriptionJobPage from "../../module/jobs/JobDetailDescriptionJobPage";
import JobResultFilterPage from "../../module/jobs/JobResultFilterPage";
import JobDetailInformationCommonPage from "../../module/jobs/JobDetailInformationCommonPage";

const JobDetailPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <JobDetailBannerPage></JobDetailBannerPage>
      <section className="bg-gray-100 py-5">
        <div className="flex w-primary mx-auto gap-5">
          <div className="grow h-fit">
            <JobDetailInformationJobPage className="bg-white"></JobDetailInformationJobPage>
            <JobDetailDescriptionJobPage className="bg-white mt-5 p-5"></JobDetailDescriptionJobPage>
          </div>
          <div className="w-[30%] min-w-[30%] h-fit">
            <JobDetailInformationCompanyPage className="bg-white"></JobDetailInformationCompanyPage>
            <JobDetailInformationCommonPage className="bg-white mt-5"></JobDetailInformationCommonPage>
          </div>
        </div>
        <JobResultFilterPage></JobResultFilterPage>
      </section>
    </>
  );
};

export default JobDetailPage;
