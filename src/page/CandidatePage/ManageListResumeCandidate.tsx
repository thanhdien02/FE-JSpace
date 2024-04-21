import React, { useEffect } from "react";
import IconUpload from "../../components/icons/IconUpload";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fileGetAllFile } from "../../store/file/file-slice";

const ManageListResumeCandidate: React.FC = () => {
  const { files } = useSelector((state: any) => state.file);
  const { user } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fileGetAllFile({ candidate_id: user?.id }));
  }, [user]);
  return (
    <>
      <div className="p-5">
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

        <div className="flex flex-wrap justify-between gap-10 items-center mt-5">
          {files?.content?.length > 0 &&
            files?.content?.map((item: any) => (
              <div
                key={item?.file?.id}
                className={`w-[47%] h-[350px] overflow-hidden object-cover`}
              >
                <iframe
                  frameBorder="0"
                  src={item?.file?.path}
                  className="w-full h-[300px] border-none p-2 bg-slate-100 rounded-lg"
                ></iframe>
                <a
                  href={item?.file?.path}
                  className="font-semibold text-black px-2"
                  target="_blank"
                >
                  {item?.file?.name}
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ManageListResumeCandidate;
