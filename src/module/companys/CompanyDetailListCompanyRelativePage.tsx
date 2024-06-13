import React, { useEffect, useState } from "react";
import CardCompanyRelativeAtCompanyDetailPage from "../../components/card/CardCompanyRelativeAtCompanyDetailPage";
import { Pagination } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { companyGetRelativeCompany } from "../../store/company/company-slice";

interface PropComponent {
  className?: string;
}
const CompanyDetailListCompanyRelativePage: React.FC<PropComponent> = ({
  className,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const { relativeCompanys, paginationRelativeCompany } = useSelector(
    (state: any) => state.company
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [size] = useState(2);
  const [companyName] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(
      companyGetRelativeCompany({
        candidate_id: user?.id,
        page: page,
        size: size,
        companyName: companyName,
      })
    );
  }, [user?.id]);
  const handleOnchangePage = (e: any) => {
    dispatch(
      companyGetRelativeCompany({
        candidate_id: user?.id,
        page: e,
        size: size,
        companyName: companyName,
      })
    );
    setPage(e);
  };
  return (
    <>
      <div className={`${className}`}>
        <h2 className="font-medium text-lg">
          {t("companydetail.relatedcompany")}
        </h2>
        <div className="flex flex-col gap-5 mt-5">
          {relativeCompanys?.length > 0 &&
            relativeCompanys.map((item: any) => (
              <CardCompanyRelativeAtCompanyDetailPage
                key={item?.company?.id}
                item={item}
              ></CardCompanyRelativeAtCompanyDetailPage>
            ))}
        </div>
        {relativeCompanys?.length > 0 && (
          <div className="flex justify-end mt-3">
            <Pagination
              total={paginationRelativeCompany?.totalElements}
              onChange={handleOnchangePage}
              className="ml-auto font-medium"
              current={page}
              pageSize={paginationRelativeCompany?.pageSize}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyDetailListCompanyRelativePage;
