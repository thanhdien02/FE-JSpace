import React, { useEffect, useState } from "react";
import CardManageJobSavePage from "../../components/card/CardManageJobSavePage";
import { Pagination, Radio, RadioChangeEvent } from "antd";
import { useTranslation } from "react-i18next";

const ManageJobSavePage: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <CardManageJobSavePage></CardManageJobSavePage>
          <CardManageJobSavePage></CardManageJobSavePage>
          <CardManageJobSavePage></CardManageJobSavePage>
          <CardManageJobSavePage></CardManageJobSavePage>
        </div>
        <div className="flex justify-end mt-5">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </>
  );
};

export default ManageJobSavePage;
