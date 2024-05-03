import React, { useEffect } from "react";
import IconUpload from "../../components/icons/IconUpload";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fileGetAllFile } from "../../store/file/file-slice";
import IconTrash from "../../components/icons/IconTrash";
import IconDownload from "../../components/icons/IconDownload";
import IconShare from "../../components/icons/IconShare";
import { Skeleton } from "antd";

const ManageListResumeCandidate: React.FC = () => {
  const { files, loadingFile } = useSelector((state: any) => state.file);
  const { user } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fileGetAllFile({ candidate_id: user?.id }));
  }, [user]);
  return (
    <>
      <div className="p-10">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl">
            Hồ sơ xin việc đã được tải lên.
          </h3>
          <NavLink
            to="/upload-resume"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:opacity-80 transition-all"
          >
            <IconUpload className="font-medium"></IconUpload>
            Tải CV lên
          </NavLink>
        </div>

        {loadingFile ? (
          <Skeleton className="mt-5" />
        ) : (
          <div className="grid grid-cols-2 mt-5 gap-10 h-[750px] overflow-auto">
            {files?.content?.length > 0 &&
              files?.content?.map((item: any) => (
                <div
                  key={item?.file?.id}
                  className={`relative h-[350px] overflow-hidden`}
                >
                  <img
                    src={item?.file?.imageFilePath}
                    alt=""
                    className="object-cover "
                  />
                  <div className="text-white absolute flex bg-gradient-to-t from-black/50 to-white/10  inset-0 w-full">
                    <div className="self-end p-4 w-full">
                      <a
                        href={item?.file?.path}
                        className="text-lg break-words text-wrap line-clamp-1 top-1 left-1 font-bold"
                        target="_blank"
                      >
                        {item?.file?.name}
                      </a>
                      <p className="text-base">
                        Cập nhật lần cuối 17-04-2024 00:39 AM
                      </p>
                      <div className="flex gap-2 mt-5">
                        <div className="flex gap-1 justify-center hover:opacity-90 transition-all text-xs items-center bg-primary text-white px-3 py-[6px] rounded-2xl cursor-pointer">
                          <IconShare></IconShare>
                          <span className="font-medium">Chia sẻ</span>
                        </div>
                        <div className="flex gap-1 justify-center hover:opacity-90 transition-all text-xs items-center bg-primary text-white px-3 py-[6px] rounded-2xl cursor-pointer">
                          <IconDownload></IconDownload>
                          <span className="font-medium">Tải xuống</span>
                        </div>
                        <div className="ml-auto self-center">
                          <IconTrash
                            classIcon="!w-5 !h-5"
                            className="cursor-pointer p-2 flex rounded-full hover:bg-primary transition-all hover:text-white"
                          ></IconTrash>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ManageListResumeCandidate;
