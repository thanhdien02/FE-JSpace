import { message, Spin, Upload, UploadProps } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IconClose from "../../components/icons/IconClose";
import {
  candidateDeleteBackgroundCandidate,
  candidateUpdateBackground,
} from "../../store/candidate/candidate-slice";
interface PropComponent {
  className?: string;
  onClick?: any;
}
const CandidateChangeAccountBackgroundPage: React.FC<PropComponent> = ({
  className,
  onClick,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const { loadingCandidate } = useSelector((state: any) => state.candidate);
  const dispatch = useDispatch();
  const propsBackground: UploadProps = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png" || "image/jpg";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info: any) => {
      dispatch(
        candidateUpdateBackground({
          file: info.file,
          candidate_id: user?.id,
        })
      );
    },
    customRequest: () => {},
  };
  const handleDeleteBackground = () => {
    if (user?.backgroundId) {
      dispatch(
        candidateDeleteBackgroundCandidate({
          candidate_id: user?.id,
          background_id: user?.backgroundId,
        })
      );
    }
  };
  return (
    <>
      <div
        className={`flex fixed inset-0 z-40 ${className}
       `}
      >
        <div
          className={`m-auto absolute inset-0 bg-gray-400/50`}
          onClick={() => {
            onClick(false);
          }}
        ></div>

        <div className="relative m-auto px-5 min-h-[350px] bg-white z-10 md:min-w-[450px] shadow-md border-solid border border-slate-500/30">
          <IconClose
            actionCloseLogin={onClick ? onClick : () => {}}
            className="absolute top-2 right-2 hover:bg-slate-200 rounded-sm cursor-pointer"
          ></IconClose>
          <div className="p-5 flex mt-5">
            {loadingCandidate ? (
              <div className="w-full h-[200px] mx-auto flex bg-gray-200">
                <Spin className="m-auto" />
              </div>
            ) : user?.background ? (
              <img
                src={user?.background}
                alt=""
                className="mx-auto w-full h-[200px] cursor-pointer object-cover"
              />
            ) : (
              <img
                src="https://biz.prlog.org/jspace/logo.png"
                alt=""
                className="mx-auto w-full max-w-[350px] h-[200px] cursor-pointer object-contain"
              />
            )}
          </div>
          <div className="mt-5 px-5 grid grid-cols-2 gap-5 font-medium">
            <button
              className="px-6 py-2 rounded-md text-white bg-red-500"
              type="button"
              onClick={handleDeleteBackground}
              disabled={loadingCandidate}
            >
              Xóa ảnh
            </button>
            <Upload
              {...propsBackground}
              className="updateavatar"
              disabled={loadingCandidate}
            >
              <button
                className="px-6 py-2 w-[175px] rounded-md text-white bg-primary text-base"
                type="button"
              >
                Đổi ảnh bìa
              </button>
            </Upload>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateChangeAccountBackgroundPage;
