import { Radio, RadioChangeEvent, Skeleton } from "antd";
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
  const [filterShow, setFilterShow] = useState(1);
  const [dataJobShort, setDataJobShort] = useState<any>(null);
  const onChange = (e: RadioChangeEvent) => {
    // console.log("radio checked", e.target.value);
    setFilterShow(e.target.value);
  };
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
            <h3 className="font-medium text-primary text-lg">
              {t("findjob.suggestsuitablejob")}:
            </h3>
            <Radio.Group onChange={onChange} value={filterShow}>
              <Radio className="font-medium text-base" value={1}>
                {t("findjob.relateto")}
              </Radio>
              <Radio className="font-medium text-base" value={2}>
                {t("findjob.salary")}
              </Radio>
              <Radio className="font-medium text-base" value={3}>
                {t("findjob.bythetime")}
              </Radio>
            </Radio.Group>
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
