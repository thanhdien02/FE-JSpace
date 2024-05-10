import React from "react";
import ContentSeeMore from "../../components/content/ContentSeeMore";
import { Tabs, TabsProps } from "antd";
import CompanyReviewPage from "../../module/companys/CompanyReviewPage";
interface PropComponent {
  className?: string;
}

const CompanyDetailDescriptionPage: React.FC<PropComponent> = ({
  className,
}) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Thông tin công ty",
      children: (
        <div>
          <ContentSeeMore
            content={`<strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        possimus omnis eius architecto ex enim corporis dicta, nulla
        debitis quis ab consequatur esse provident iusto maiores
        laboriosam a? Labore, numquam?{" "}
      </strong>
      <u>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio beatae cupiditate non amet odit iusto at. Quaerat,
        quasi magnam molestias ex iure alias inventore, vel ad
        consequuntur assumenda repudiandae facilis?
      </u>
      <strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        possimus omnis eius architecto ex enim corporis dicta, nulla
        debitis quis ab consequatur esse provident iusto maiores
        laboriosam a? Labore, numquam?{" "}
      </strong>
      <u>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio beatae cupiditate non amet odit iusto at. Quaerat,
        quasi magnam molestias ex iure alias inventore, vel ad
        consequuntur assumenda repudiandae facilis?
      </u>
      <strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        possimus omnis eius architecto ex enim corporis dicta, nulla
        debitis quis ab consequatur esse provident iusto maiores
        laboriosam a? Labore, numquam?{" "}
      </strong>
      <u>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio beatae cupiditate non amet odit iusto at. Quaerat,
        quasi magnam molestias ex iure alias inventore, vel ad
        consequuntur assumenda repudiandae facilis?
      </u>
      <strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        possimus omnis eius architecto ex enim corporis dicta, nulla
        debitis quis ab consequatur esse provident iusto maiores
        laboriosam a? Labore, numquam?{" "}
      </strong>
      <u>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio beatae cupiditate non amet odit iusto at. Quaerat,
        quasi magnam molestias ex iure alias inventore, vel ad
        consequuntur assumenda repudiandae facilis?
      </u>
      <strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        possimus omnis eius architecto ex enim corporis dicta, nulla
        debitis quis ab consequatur esse provident iusto maiores
        laboriosam a? Labore, numquam?{" "}
      </strong>
      <u>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio beatae cupiditate non amet odit iusto at. Quaerat,
        quasi magnam molestias ex iure alias inventore, vel ad
        consequuntur assumenda repudiandae facilis?
      </u>`}
          ></ContentSeeMore>
        </div>
      ),
    },
    {
      key: "2",
      label: "Đánh giá công ty",
      children: <CompanyReviewPage></CompanyReviewPage>,
    },
  ];
  return (
    <>
      <div className={`${className}`}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </>
  );
};

export default CompanyDetailDescriptionPage;
