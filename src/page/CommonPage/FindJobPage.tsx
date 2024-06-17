import React, { useEffect, useState } from "react";
import JobBannerPage from "../../module/jobs/JobBannerPage";
import JobFitPage from "../../module/jobs/JobFitPage";
import JobResultFilterPage from "../../module/jobs/JobResultFilterPage";

const FindJobPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [size] = useState(12);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return (
    <>
      <JobBannerPage size={size} page={page} setPage={setPage}></JobBannerPage>
      <JobFitPage></JobFitPage>
      <JobResultFilterPage page={page} setPage={setPage}></JobResultFilterPage>
    </>
  );
};

export default FindJobPage;
