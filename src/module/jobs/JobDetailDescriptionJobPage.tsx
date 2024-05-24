import React from "react";
import ContentSeeMore from "../../components/content/ContentSeeMore";
import { useTranslation } from "react-i18next";
interface PropComponent {
  className?: string;
}
// eslint-disable-next-line react-refresh/only-export-components
const JobDetailDescriptionJobPage: React.FC<PropComponent> = ({
  className,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={`${className}`}>
        <div>
          <h2 className="text-primary font-bold text-xl">
            {t("jobdetail.description")}
          </h2>
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
            // line="10"
          ></ContentSeeMore>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(JobDetailDescriptionJobPage);
