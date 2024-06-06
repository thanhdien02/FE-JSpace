import React, { useEffect } from "react";
import { Tabs, TabsProps } from "antd";
import CompanyReviewPage from "./CompanyReviewPage";
import CompanyDetailDescriptionPage from "./CompanyDetailDescriptionPage";
import { useTranslation } from "react-i18next";
interface PropComponent {
  className?: string;
}

const CompanyDetailContentPage: React.FC<PropComponent> = ({ className }) => {
  

  const onChange = (key: string) => {
    console.log(key);
  };
  const { t } = useTranslation();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `${t("companydetail.informationcompany")}`,
      children: <CompanyDetailDescriptionPage></CompanyDetailDescriptionPage>,
    },
    {
      key: "2",
      label: `${t("companydetail.reviewcompany")}`,
      children: <CompanyReviewPage></CompanyReviewPage>,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`${className}`}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </>
  );
};

export default CompanyDetailContentPage;
