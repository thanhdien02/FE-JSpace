import { Select, Skeleton } from "antd";
import React from "react";
import CardCompanyPage from "../../components/card/CardCompanyPage";
import { useSelector } from "react-redux";
interface PropComponent {
  className?: string;
}
const CompanyResultFilterPage: React.FC<PropComponent> = ({ className }) => {
  const { companys, loadingCompany } = useSelector(
    (state: any) => state.company
  );

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
        {loadingCompany ? (
          <div className="py-5">
            <Skeleton />
          </div>
        ) : companys.length <= 0 ? (
          <div className="py-5 text-gray-400">Không có công ty phù hợp</div>
        ) : (
          <div
            className={`lg:px-0 px-5 grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-5 mt-5 rounded-sm ${className}`}
          >
            {companys.length > 0 &&
              companys?.map((item: any) => (
                <CardCompanyPage
                  key={item?.company?.id}
                  item={item}
                ></CardCompanyPage>
              ))}
          </div>
        )}
      </section>
    </>
  );
};

export default CompanyResultFilterPage;
