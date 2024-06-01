import React from "react";
import ContentSeeMore from "../../components/content/ContentSeeMore";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
interface PropComponent {
  className?: string;
}
// eslint-disable-next-line react-refresh/only-export-components
const JobDetailDescriptionJobPage: React.FC<PropComponent> = ({
  className,
}) => {
  const { loadingJob, jobByIdWithCandidate } = useSelector(
    (state: any) => state.job
  );
  const { t } = useTranslation();
  return (
    <>
      <div className={`${className}`}>
        <div>
          <h2 className="text-primary font-bold text-xl">
            {t("jobdetail.description")}
          </h2>
          {loadingJob ? (
            <div className="mt-5">
              {" "}
              <Skeleton />
            </div>
          ) : (
            <ContentSeeMore
              content={`${jobByIdWithCandidate?.post?.description}`}
              // line="10"
            ></ContentSeeMore>
          )}
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(JobDetailDescriptionJobPage);
