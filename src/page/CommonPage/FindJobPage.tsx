import React from "react";
import JobBannerPage from "../../module/jobs/JobBannerPage";
import JobFitPage from "../../module/jobs/JobFitPage";
import JobResultFilterPage from "../../module/jobs/JobResultFilterPage";

const FindJobPage: React.FC = () => {
  return (
    <>
      <JobBannerPage></JobBannerPage>
      <JobFitPage></JobFitPage>
      <JobResultFilterPage></JobResultFilterPage>
    </>
  );
};

export default FindJobPage;
