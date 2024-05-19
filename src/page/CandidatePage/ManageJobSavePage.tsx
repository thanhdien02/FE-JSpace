import React, { useEffect, useState } from "react";
import CardManageJobSavePage from "../../components/card/CardManageJobSavePage";
import { Pagination, Radio, RadioChangeEvent } from "antd";

const ManageJobSavePage: React.FC = () => {
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
        <h2 className="text-xl font-bold">Danh sách công việc đã lưu</h2>
        <div className="lg:mt-5 mt-3 flex flex-wrap lg:gap-5 gap-2 items-center">
          <h3 className="text-base text-gray-500">Hiển thị theo:</h3>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Cập nhật gần nhất</Radio>
            <Radio value={2}>Cần tuyển gấp</Radio>
            <Radio value={3}>Lương cao</Radio>
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
