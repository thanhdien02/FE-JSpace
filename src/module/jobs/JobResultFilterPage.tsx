import { Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";
import CardJobClickShortPage from "../../components/card/CardJobClickShortPage";
import JobShortDetailPage from "./JobShortDetailPage";

const JobResultFilterPage: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <section className="bg-gray-100">
        <div className="w-primary mx-auto py-5">
          <div className="flex items-center gap-4">
            <h3 className="font-medium text-primary text-lg">
              Ưu tiên hiển thị theo:
            </h3>
            <Radio.Group onChange={onChange} value={value}>
              <Radio className="font-medium text-base" value={1}>
                Liên quan
              </Radio>
              <Radio className="font-medium text-base" value={2}>
                Ngày đăng
              </Radio>
              <Radio className="font-medium text-base" value={3}>
                Lương cao đến thấp
              </Radio>
              <Radio className="font-medium text-base" value={4}>
                Cần tuyển gấp
              </Radio>
            </Radio.Group>
          </div>
          <div className="flex mt-5 gap-5">
            <div className="max-w-[38%] min-w-[38%] flex flex-col gap-3 ">
              <CardJobClickShortPage></CardJobClickShortPage>
              <CardJobClickShortPage></CardJobClickShortPage>
              <CardJobClickShortPage></CardJobClickShortPage>
              <CardJobClickShortPage></CardJobClickShortPage>
              <CardJobClickShortPage></CardJobClickShortPage>
              <CardJobClickShortPage></CardJobClickShortPage>
              <CardJobClickShortPage></CardJobClickShortPage>
              <CardJobClickShortPage></CardJobClickShortPage>
              <CardJobClickShortPage></CardJobClickShortPage>
            </div>
            <div className="grow rounded-md bg-white">
              <JobShortDetailPage></JobShortDetailPage>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobResultFilterPage;
