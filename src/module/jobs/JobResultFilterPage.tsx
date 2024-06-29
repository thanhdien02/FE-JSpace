import { Pagination, Radio, RadioChangeEvent, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import CardJobClickShortPage from "../../components/card/CardJobClickShortPage";
import JobShortDetailPage from "./JobShortDetailPage";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

interface PropComponent {
  setCloseDate?: any;
  setPage?: any;
  page?: any;
}
const JobResultFilterPage: React.FC<PropComponent> = ({
  setPage,
  page,
  setCloseDate,
}) => {
  const { filterJobs, loadingJob, paginationFilterJob } = useSelector(
    (state: any) => state.job
  );
  const { t } = useTranslation();
  const [filterShow, setFilterShow] = useState(1);
  const [dataJobShort, setDataJobShort] = useState<any>(null);
  const onChangeFilter = (e: RadioChangeEvent) => {
    setFilterShow(e.target.value);
    if (e.target.value == "3") {
      setCloseDate("desc");
    } else {
      setCloseDate("asc");
    }
    setPage(1);
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
            <h3 className="font-medium text-lg">
              {t("findjob.suggestsuitablejob")}:
            </h3>
            <Radio.Group onChange={onChangeFilter} value={filterShow}>
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
            <div className="min-w-[38%] w-full">
              <div className={` flex flex-col gap-3`}>
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
              <div className="flex justify-end my-5">
                {filterJobs?.length > 0 && (
                  <Pagination
                    total={paginationFilterJob?.totalElements}
                    onChange={(e) => setPage(e)}
                    className="ml-auto font-medium"
                    current={page}
                    pageSize={paginationFilterJob?.pageSize}
                  />
                )}
              </div>
            </div>
            <div className="grow rounded-md bg-white w-full min-w-[60%]">
              {loadingJob ? (
                <div className="p-5">
                  <Skeleton />
                </div>
              ) : filterJobs?.length <= 0 ? (
                <div className="text-gray-500 p-5">{t("nodata")}</div>
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
