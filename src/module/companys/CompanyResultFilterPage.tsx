import { Select } from "antd";
import React from "react";
import CardCompanyPage from "../../components/card/CardCompanyPage";
interface PropComponent {
  className?: string;
}
const CompanyResultFilterPage: React.FC<PropComponent> = ({ className }) => {
  return (
    <>
      <section className={`w-primary max-w-full mx-auto `}>
        <div className="lg:px-0 px-5">
          <Select
            showSearch
            allowClear
            style={{ width: 200 }}
            placeholder="Tìm kiếm theo"
            className="h-10"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Số lượt theo dõi",
              },
              {
                value: "2",
                label: "Số lượng công việc",
              },
            ]}
          />
        </div>
        <div
          className={`lg:px-0 px-5 grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-5 mt-5 rounded-sm ${className}`}
        >
          <CardCompanyPage></CardCompanyPage>
          <CardCompanyPage></CardCompanyPage>
          <CardCompanyPage></CardCompanyPage>
          <CardCompanyPage></CardCompanyPage>
          <CardCompanyPage></CardCompanyPage>
          <CardCompanyPage></CardCompanyPage>
          <CardCompanyPage></CardCompanyPage>
          <CardCompanyPage></CardCompanyPage>
          <CardCompanyPage></CardCompanyPage>
        </div>
      </section>
    </>
  );
};

export default CompanyResultFilterPage;
