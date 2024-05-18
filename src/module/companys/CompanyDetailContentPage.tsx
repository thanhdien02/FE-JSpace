import React, { useEffect } from "react";
import { Tabs, TabsProps } from "antd";
import CompanyReviewPage from "./CompanyReviewPage";
import CompanyDetailDescriptionPage from "./CompanyDetailDescriptionPage";
interface PropComponent {
  className?: string;
}

const CompanyDetailContentPage: React.FC<PropComponent> = ({ className }) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Thông tin công ty",
      children: <CompanyDetailDescriptionPage></CompanyDetailDescriptionPage>,
    },
    {
      key: "2",
      label: "Đánh giá công ty",
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
