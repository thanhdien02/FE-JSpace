import React from "react";
import ContentSeeMore from "../../components/content/ContentSeeMore";
import CompanyDetailListJobPage from "./CompanyDetailListJobPage";
import CompanyDetailListCompanyRelativePage from "./CompanyDetailListCompanyRelativePage";

const CompanyDetailDescriptionPage: React.FC = () => {
  return (
    <>
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
      <span className="w-full block my-4 h-[1px] bg-gray-200/80"></span>
      <CompanyDetailListJobPage></CompanyDetailListJobPage>
      <CompanyDetailListCompanyRelativePage></CompanyDetailListCompanyRelativePage>
    </>
  );
};

export default CompanyDetailDescriptionPage;
