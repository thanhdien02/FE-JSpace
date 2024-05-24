import { Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";
import CardJobClickShortPage from "../../components/card/CardJobClickShortPage";
import JobShortDetailPage from "./JobShortDetailPage";
import { dataDefaultJob, dataJobs } from "../../utils/dataFetch";
import { useTranslation } from "react-i18next";

const JobResultFilterPage: React.FC = () => {
  const { t } = useTranslation();
  const [filterShow, setFilterShow] = useState(1);
  // const [checkShort, setCheckSort] = useState(false);
  const [dataJobShort, setDataJobShort] = useState<any>(dataDefaultJob);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setFilterShow(e.target.value);
  };
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
              {/* <Radio className="font-medium text-base" value={4}>
                Cần tuyển gấp
              </Radio> */}
            </Radio.Group>
          </div>
          <div className="flex mt-5 gap-5 w-full">
            <div className={`min-w-[38%] w-full flex flex-col gap-3`}>
              {dataJobs?.length > 0 &&
                dataJobs?.map((item: any) => (
                  <CardJobClickShortPage
                    key={item?.id}
                    onClick={setDataJobShort}
                    checkActive={dataJobShort?.id}
                    id={item?.id}
                    title={item?.title}
                    location={item?.location}
                    description={item?.description}
                  ></CardJobClickShortPage>
                ))}
            </div>
            <div className="grow rounded-md bg-white w-full min-w-[60%]">
              <JobShortDetailPage dataJob={dataJobShort}></JobShortDetailPage>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobResultFilterPage;
