import React, { useEffect } from "react";
import IconUpload from "../../components/icons/IconUpload";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fileGetAllFile } from "../../store/file/file-slice";
import { Empty, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import CardListResumePage from "../../components/card/CardListResumePage";

const ManageListResumeCandidate: React.FC = () => {
  const { files, loadingFile } = useSelector((state: any) => state.file);
  const { user } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fileGetAllFile({ candidate_id: user?.id }));
  }, [user]);
  return (
    <>
      <div className="lg:p-10 p-5">
        <div className="flex flex-wrap gap-2 justify-between">
          <h3 className="font-semibold text-xl">{t("manage.cv.title")}</h3>
          <NavLink
            to="/upload-resume"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:opacity-80 transition-all"
          >
            <IconUpload className="font-medium"></IconUpload>
            <span className="text-nowrap"> {t("manage.cv.uploadcv")}</span>
          </NavLink>
        </div>

        {loadingFile ? (
          <Skeleton className="mt-5" />
        ) : files?.content?.length <= 0 ? (
          <>
            <div className="w-full mx-auto mt-5">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
          </>
        ) : (
          <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 lg:gap-10 gap-5 max-h-[750px] overflow-auto">
            {files?.content?.length > 0 &&
              files?.content?.map((item: any) => (
                <CardListResumePage
                  key={item?.file?.id}
                  item={item?.file}
                ></CardListResumePage>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ManageListResumeCandidate;
