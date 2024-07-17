import { Empty, Pagination, Radio, RadioChangeEvent, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import CardManageJobHadApplyPage from "../../components/card/CardManageJobHadApplyPage";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jobGetAppliedJob } from "../../store/job/job-slice";
const ManageJobHadApplyPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { appliedJobs, loadingJob, paginationAppliedJob } = useSelector(
    (state: any) => state.job
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const [page, setPage] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (user?.id) {
      dispatch(
        jobGetAppliedJob({ candidate_id: user?.id, page: page, size: 4 })
      );
    }
  }, [user, page]);
  return (
    <>
      <div className="p-5">
        <h3 className="text-lg font-bold">{t("manage.appliedjob.title")}</h3>
        <div className="lg:mt-5 mt-3 flex flex-wrap lg:gap-5 gap-3 items-center">
          <div className="flex items-center gap-2">
            <input
              placeholder={t("placeholdernamejob")}
              onChange={(e) => {
                console.log("🚀 ~ e:", e.target.value);
              }}
              className="bg-gray-200 text-gray-700 hover:bg-gray-200 outline-none px-4 py-2 rounded-lg"
            />
            <button
              type="button"
              className="text-nowrap bg-primary text-white py-2 px-4 rounded-lg hover:opacity-80 transition-all"
            >
              {t("search")}
            </button>
          </div>
          <h3 className="text-base text-gray-500 ">
            {t("manage.appliedjob.showby")}:
          </h3>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>{t("manage.appliedjob.mostrecent")}</Radio>
            <Radio value={3}>{t("manage.appliedjob.highestsalary")}</Radio>
          </Radio.Group>
        </div>
        <div className="flex flex-col gap-5 mt-7">
          {loadingJob ? (
            <Skeleton />
          ) : appliedJobs?.length <= 0 ? (
            <>
              <Empty />
            </>
          ) : (
            appliedJobs?.length > 0 &&
            appliedJobs.map((item: any) => (
              <CardManageJobHadApplyPage
                key={item?.post?.id}
                item={item}
              ></CardManageJobHadApplyPage>
            ))
          )}
        </div>

        <div className="flex justify-end mt-5 mb-10">
          {appliedJobs.length <= 0 ? (
            <></>
          ) : (
            <Pagination
              total={paginationAppliedJob?.totalElements}
              onChange={(e) => setPage(e)}
              className="inline-block"
              current={page}
              pageSize={paginationAppliedJob?.pageSize}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ManageJobHadApplyPage;
