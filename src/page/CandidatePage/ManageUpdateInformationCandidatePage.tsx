import { MailOutlined, UserOutlined } from "@ant-design/icons";
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
import { message } from "antd";
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
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 py-5 shadow-lg "
      >
        <h2 className="font-bold text-lg my-3 text-gray-800">
          Cài đặt thông tin cá nhân
        </h2>
        <div className="flex gap-10">
          <div className="grow-[1]">
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
          <div className="grow-[1]">
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
                className="disable-select h-full cursor-not-allowed select-none  focus:border-solid focus:border-stone-400/70 transition-all outline-none pl-12 pr-4 py-3 border border-stone-200 border-solid w-full rounded-md"
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
