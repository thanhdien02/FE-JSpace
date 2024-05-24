import { CameraOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../components/input";
import IconPhone from "../../components/icons/IconPhone";
import {
  candidateUpdateAvatar,
  candidateUpdateBackground,
  candidateUpdateCandidate,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
import bg from "../../assets/banner3.jpg";
import { message, Spin, Upload, UploadProps } from "antd";
interface Inputs {
  name: string;
  phone: number;
  email: string;
  id: string;
}
const ManageUpdateInformationCandidatePage: React.FC = () => {
  const { accessToken, user } = useSelector((state: any) => state.auth);
  const { loadingCandidate, messageCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataUpdadeCandidate: Inputs) => {
    dispatch(candidateUpdateCandidate(dataUpdadeCandidate));
  };

  useEffect(() => {
    setValue("name", user?.name, { shouldValidate: true });
    setValue("phone", user?.phone, { shouldValidate: true });
    setValue("email", user?.email, { shouldValidate: true });
    setValue("id", user?.id, { shouldValidate: true });
  }, [accessToken]);

  useEffect(() => {
    if (messageCandidate == "success") {
      message.success("Cập nhật thông tin thành công !");
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    }
  }, [messageCandidate]);
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
  const propsAvatar: UploadProps = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png" || "image/jpg";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info: any) => {
      dispatch(
        candidateUpdateAvatar({
          file: info.file,
          candidate_id: user?.id,
        })
      );
    },
    customRequest: () => {},
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="lg:px-10 px-5 py-5 shadow-lg "
      >
        <h2 className="font-bold text-lg mt-3 text-gray-800">
          Cài đặt thông tin cá nhân
        </h2>
        <div className="relative flex justify-center pt-5">
          {loadingCandidate ? (
            <div className="w-full flex justify-center items-center h-[150px] bg-gray-200">
              <Spin />
            </div>
          ) : (
            <div className="w-full relative">
              <Upload {...propsBackground} className="absolute left-2 top-2">
                <button
                  type="button"
                  className="bg-white py-1 px-2 rounded-sm  text-sm"
                >
                  Chọn ảnh bìa
                </button>
              </Upload>
              <img
                src={user?.background ? user?.background : bg}
                className="w-full h-[150px] object-cover"
                alt=""
              />
            </div>
          )}

          <div className="absolute -bottom-8 inline-block">
            {!loadingCandidate ? (
              <Upload {...propsAvatar}>
                <img
                  src={user?.picture ? user?.picture : bg}
                  alt=""
                  className="w-[75px] h-[75px] rounded-full cursor-pointer object-cover"
                />
                <CameraOutlined
                  className="absolute bottom-2 right-0 bg-blue-50 p-2 rounded-full cursor-pointer"
                  style={{ fontSize: "18px" }}
                />
              </Upload>
            ) : (
              <div className="w-[75px] h-[75px] rounded-full flex bg-gray-100">
                <Spin className="m-auto" />
              </div>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 mt-10">
          <div className="">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Họ và Tên
            </label>
            <div className="mt-2 relative">
              <UserOutlined
                style={{
                  fontSize: "20px",
                  color: "rgb(156 163 175)",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  transform: "translate(65%, 65%)",
                }}
              />
              <input
                {...register("name", {
                  required: true,
                  maxLength: 40,
                  minLength: 5,
                })}
                placeholder="Tài khoản"
                type="text"
                autoComplete="off"
                id="name"
                className="h-full pl-12 pr-4 focus:border-solid focus:border-stone-400/70 transition-all outline-none py-3 border border-stone-200 border-solid w-full rounded-md"
              />
              <p className="text-red-500 py-2">
                {" "}
                {errors?.name?.type === "required"
                  ? "*Bạn chưa điền thông tin tài khoản."
                  : errors?.name?.type === "maxLength"
                  ? "*Tài khoản không được quá 40 ký tự"
                  : errors?.name?.type === "minLength"
                  ? "*Tài khoản không được ít hơn 5 ký tự"
                  : ""}
              </p>
            </div>
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Địa chỉ Email
            </label>
            <div className="mt-2 relative">
              <MailOutlined
                style={{
                  fontSize: "20px",
                  color: "rgb(156 163 175)",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  transform: "translate(65%, 70%)",
                }}
              />
              <input
                disabled={true}
                {...register("email", {})}
                placeholder="Email"
                type="email"
                autoComplete="off"
                id="email"
                className="h-full cursor-not-allowed select-none  focus:border-solid focus:border-stone-400/70 transition-all outline-none pl-12 pr-4 py-3 border border-stone-200 border-solid w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Số điện thoại
          </label>
          <div className="mt-2 relative">
            <IconPhone className="absolute top-0 left-0 translate-x-[50%] translate-y-[50%] text-gray-400"></IconPhone>
            <input
              {...register("phone", {})}
              placeholder="Số điện thoại"
              type="number"
              id="phone"
              autoComplete="off"
              className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pr-4 pl-12 py-3 border border-stone-200 border-solid w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end items-center my-2">
          <Button
            className="mt-5 "
            title="Lưu thông tin"
            loading={loadingCandidate}
          ></Button>
        </div>
      </form>
    </>
  );
};

export default ManageUpdateInformationCandidatePage;
