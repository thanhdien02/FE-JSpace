import React, { useEffect, useState } from "react";
import CardManageJobSavePage from "../../components/card/CardManageJobSavePage";
import { Pagination, Radio, RadioChangeEvent, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { jobGetSavedJob } from "../../store/job/job-slice";
import { useSelector } from "react-redux";

const ManageJobSavePage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { savedJobs, loadingJob, paginationSavedJob } = useSelector(
    (state: any) => state.job
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const [page, setPage] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (user?.id) {
      dispatch(jobGetSavedJob({ candidate_id: user?.id, page: page, size: 8 }));
    }
  }, [user, page]);


  return (
    <>
      <div className="p-5">
        <h2 className="text-xl font-bold">{t("manage.savedjob.title")}</h2>
        <div className="lg:mt-5 mt-3 flex flex-wrap lg:gap-5 gap-2 items-center">
          <h3 className="text-base text-gray-500">
            {t("manage.savedjob.showby")}:
          </h3>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>{t("manage.savedjob.mostrecent")}</Radio>
            <Radio value={2}>{t("manage.savedjob.highestsalary")}</Radio>
          </Radio.Group>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          {loadingJob ? (
            <Skeleton />
          ) : (
            savedJobs?.length > 0 &&
            savedJobs.map((item: any) => (
              <CardManageJobSavePage
                key={item?.id}
                item={item}
              ></CardManageJobSavePage>
            ))
          )}
        </div>

        <div className="flex justify-end mt-5">
          {savedJobs.length <= 0 ? (
            <></>
          ) : (
            <Pagination
              total={paginationSavedJob?.totalElements}
              onChange={(e) => setPage(e)}
              className="inline-block"
              current={page}
              pageSize={paginationSavedJob?.pageSize}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ManageJobSavePage;
