import React, { useEffect } from "react";
import JobDetailBannerPage from "../../module/jobs/JobDetailBannerPage";
import JobDetailInformationCompanyPage from "../../module/jobs/JobDetailInformationCompanyPage";
import JobDetailInformationJobPage from "../../module/jobs/JobDetailInformationJobPage";
import JobDetailDescriptionJobPage from "../../module/jobs/JobDetailDescriptionJobPage";
import JobResultFilterPage from "../../module/jobs/JobResultFilterPage";
import JobDetailInformationCommonPage from "../../module/jobs/JobDetailInformationCommonPage";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jobGetJobByIdWithCandidate } from "../../store/job/job-slice";
import { useSelector } from "react-redux";
import { applyUpdateMessageRedux } from "../../store/apply/apply-slice";

const JobDetailPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { messageApply } = useSelector((state: any) => state.apply);
  const dispatch = useDispatch();
  const { jobId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);
  useEffect(() => {
    if (user?.id) {
      dispatch(
        jobGetJobByIdWithCandidate({ job_id: jobId, candidate_id: user?.id })
      );
    }
  }, [user, jobId, messageApply]);
  useEffect(() => {
    if (messageApply == "success") {
      dispatch(
        jobGetJobByIdWithCandidate({ job_id: jobId, candidate_id: user?.id })
      );
      dispatch(applyUpdateMessageRedux({ messageApply: "" }));
    }
  }, [messageApply]);

  return (
    <>
      <JobDetailBannerPage></JobDetailBannerPage>
      <section className="bg-gray-100 py-5">
        <div className="flex lg:flex-row flex-col w-primary max-w-full mx-auto gap-5">
          <div className="grow h-fit">
            <JobDetailInformationJobPage className="bg-white"></JobDetailInformationJobPage>
            <JobDetailDescriptionJobPage className="bg-white mt-5 p-5"></JobDetailDescriptionJobPage>
          </div>
          <div className="lg:w-[30%] lg:min-w-[30%] h-fit">
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
