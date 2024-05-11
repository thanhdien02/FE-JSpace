import { CameraOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../components/input";
import IconPhone from "../../components/icons/IconPhone";
import {
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
  const { loading, messageCandidate } = useSelector(
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
  const props: UploadProps = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 py-5 shadow-lg "
      >
        <h2 className="font-bold text-lg mt-3 text-gray-800">
          Cài đặt thông tin cá nhân
        </h2>
        <div className="relative flex justify-center pt-5">
          <div className="w-full relative">
            <Upload {...props} className="absolute left-2 top-2">
              <button
                type="button"
                className="bg-white py-1 px-2 rounded-sm  text-sm"
              >
                Chọn ảnh bìa
              </button>
            </Upload>
            <img src={bg} className="w-full h-[150px] object-cover" alt="" />
          </div>
          <Upload {...props} className="absolute -bottom-8 inline-block">
            {user?.picture ? (
              <>
                <img
                  src={user?.picture}
                  alt=""
                  className="w-[75px] h-[75px] rounded-full cursor-pointer"
                />
                <CameraOutlined
                  className="absolute bottom-2 right-0 bg-blue-50 p-2 rounded-full cursor-pointer"
                  style={{ fontSize: "18px" }}
                />
              </>
            ) : (
              <div className="w-[75px] h-[75px] rounded-full flex">
                <Spin className="m-auto" />
              </div>
            )}
          </Upload>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
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
            loading={loading}
          ></Button>
        </div>
      </form>
    </>
  );
};

export default ManageUpdateInformationCandidatePage;
