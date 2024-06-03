import React from "react";
import IconGroupUser from "../../components/icons/IconGroupUser";
import IconClock from "../../components/icons/IconClock";
import IconBriefCase from "../../components/icons/IconBriefCase";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import IconAcademic from "../../components/icons/IconAcademic";
import IconCog from "../../components/icons/IconCog";
import IconClipboardDocument from "../../components/icons/IconClipboardDocument";

interface PropComponent {
  className?: string;
}
const JobDetailInformationCommonPage: React.FC<PropComponent> = ({
  className,
}) => {
  const { loadingJob, jobByIdWithCandidate } = useSelector(
    (state: any) => state.job
  );
  const { t } = useTranslation();
  return (
    <>
      <div className={`p-5 ${className}`}>
        <h2 className="text-xl font-bold">
          {t("jobdetail.informationcommon")}
        </h2>
        {loadingJob ? (
          <div className="mt-5">
            <Skeleton />
          </div>
        ) : (
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex gap-4 items-center">
              <IconBriefCase className="p-3 bg-primary rounded-full text-white"></IconBriefCase>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 line-clamp-1">
                  {t("experience")}
                </span>
                <span className="font-medium line-clamp-1">
                  {jobByIdWithCandidate?.post?.experience?.code}
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <IconGroupUser className="p-3 bg-primary rounded-full text-white"></IconGroupUser>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 line-clamp-1">
                  {t("quantity")}
                </span>
                <span className="font-medium line-clamp-1">
                  {jobByIdWithCandidate?.post?.quantity} người
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <IconClock className="p-3 bg-primary rounded-full text-white"></IconClock>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 line-clamp-1">
                  {t("jobtype")}
                </span>
                <span className="font-medium line-clamp-1">
                  {jobByIdWithCandidate?.post?.jobType?.code}
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <IconAcademic className="p-3 bg-primary rounded-full text-white"></IconAcademic>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 line-clamp-1">
                  {t("rank")}
                </span>
                <span className="font-medium line-clamp-1">
                  {jobByIdWithCandidate?.post?.rank?.code}
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <IconCog className="p-3 bg-primary rounded-full text-white"></IconCog>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 line-clamp-1">
                  {t("gender")}
                </span>
                <span className="font-medium line-clamp-1">
                  {jobByIdWithCandidate?.post?.gender?.code}
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <IconClipboardDocument className="p-3 bg-primary rounded-full text-white"></IconClipboardDocument>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 line-clamp-1">
                  {t("skills")}
                </span>
                <div className="font-medium line-clamp-1 mt-1 flex flex-wrap gap-2">
                  {jobByIdWithCandidate?.post?.skills?.length > 0 &&
                    jobByIdWithCandidate?.post?.skills?.map((item: any) => (
                      <span className="p-1 bg-gray-200" key={item?.id}>
                        {item?.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobDetailInformationCommonPage;
