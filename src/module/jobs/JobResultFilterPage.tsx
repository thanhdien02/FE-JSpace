import { Radio, RadioChangeEvent, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import CardJobClickShortPage from "../../components/card/CardJobClickShortPage";
import JobShortDetailPage from "./JobShortDetailPage";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const JobResultFilterPage: React.FC = () => {
  const { filterJobs, loadingJob } = useSelector((state: any) => state.job);
  const { t } = useTranslation();
  const [filterShow, setFilterShow] = useState(1);
  const [dataJobShort, setDataJobShort] = useState<any>(null);
  const onChange = (e: RadioChangeEvent) => {
    setFilterShow(e.target.value);
  };
  useEffect(() => {
    if (filterJobs?.length > 0) {
      setDataJobShort(filterJobs[0]);
    }
  }, [filterJobs]);

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
                filterJobs?.length > 0 &&
                filterJobs?.map((item: any) => (
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
              ) : filterJobs?.length <= 0 ? (
                <></>
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

export default JobResultFilterPage;
