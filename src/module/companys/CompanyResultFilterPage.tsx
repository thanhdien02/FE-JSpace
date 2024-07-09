import React from "react";
import CardCompanyPage from "../../components/card/CardCompanyPage";
import { useSelector } from "react-redux";
import CardCompanyPageSkeleton from "../../components/skeleton/CardCompanyPageSkeleton";
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
        {loadingCompany ? (
          <div
            className={`lg:px-0 px-5 grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-5 mt-5 rounded-sm ${className}`}
          >
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
            <CardCompanyPageSkeleton></CardCompanyPageSkeleton>
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
