import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import CardJobClickShortPage from "../../components/card/CardJobClickShortPage";
import JobShortDetailPage from "./JobShortDetailPage";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jobGetRelativeJob } from "../../store/job/job-slice";

const JobDetailRelativeJobPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { relativeJobs, loadingJob } = useSelector((state: any) => state.job);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dataJobShort, setDataJobShort] = useState<any>(null);
  useEffect(() => {
    dispatch(jobGetRelativeJob({ candidate_id: user?.id }));
  }, [user]);
  useEffect(() => {
    if (relativeJobs?.length > 0) {
      setDataJobShort(relativeJobs[0]);
    }
  }, [relativeJobs]);

  return (
    <>
      <section className="hidden lg:block bg-gray-100">
        <div className="w-primary mx-auto py-5">
          <div className="flex items-center gap-4">
            <h3 className="font-medium text-xl">
              {t("jobdetail.jobrelative")}
            </h3>
          </div>
          <div className="flex mt-5 gap-5 w-full">
            <div className={`min-w-[38%] w-full flex flex-col gap-3`}>
              {loadingJob ? (
                <div className="p-5">
                  <Skeleton />
                </div>
              ) : (
                relativeJobs?.length > 0 &&
                relativeJobs?.map((item: any) => (
                  <CardJobClickShortPage
                    key={item?.post?.id}
                    onClick={setDataJobShort}
                    checkActive={dataJobShort?.id}
                    item={item}
                  ></CardJobClickShortPage>
                ))
              )}
            </div>
            <div className="grow rounded-md bg-white w-full min-w-[60%]">
              {loadingJob ? (
                <div className="p-5">
                  <Skeleton />
                </div>
              ) : (
                <JobShortDetailPage dataJob={dataJobShort}></JobShortDetailPage>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetailRelativeJobPage;
