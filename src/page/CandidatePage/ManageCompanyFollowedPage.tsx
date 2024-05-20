import { Pagination, Radio, RadioChangeEvent } from "antd";
import React, { useEffect, useState } from "react";
import CardCompanyFollowedPage from "../../components/card/CardCompanyFollowedPage";

const ManageCompanyFollowedPage: React.FC = () => {
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
        <h3 className="text-lg font-bold">Quản lí công công ty đã theo dõi</h3>
        <div className="lg:mt-5 mt-3 flex flex-wrap lg:gap-5 gap-3 items-center">
          <div className="flex items-center gap-2">
            <input
              placeholder="Nhập tên công ty"
              onChange={(e) => {
                console.log("🚀 ~ e:", e.target.value);
              }}
              className="bg-gray-200 text-gray-700 hover:bg-gray-200 outline-none px-4 py-2 rounded-lg"
            />
            <button
              type="button"
              className="text-nowrap bg-primary text-white py-2 px-4 rounded-lg hover:opacity-80 transition-all"
            >
              Tìm kiếm
            </button>
          </div>
          <h3 className="text-base text-gray-500 ">Hiển thị theo:</h3>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Gần đây nhất</Radio>
            <Radio value={3}>Lượt theo dõi nhiều nhất</Radio>
          </Radio.Group>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-7">
          <CardCompanyFollowedPage></CardCompanyFollowedPage>
          <CardCompanyFollowedPage></CardCompanyFollowedPage>
          <CardCompanyFollowedPage></CardCompanyFollowedPage>
          <CardCompanyFollowedPage></CardCompanyFollowedPage>
          <CardCompanyFollowedPage></CardCompanyFollowedPage>
        </div>
        <div className="flex justify-end mt-5">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </>
  );
};

export default ManageCompanyFollowedPage;
