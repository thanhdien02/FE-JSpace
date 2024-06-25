import { CameraOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../components/input";
import IconPhone from "../../components/icons/IconPhone";
import {
  candidateUpdateCandidate,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
import { Avatar, message, Spin } from "antd";
import { useTranslation } from "react-i18next";
import InputNumber from "../../components/input/InputNumber";
import CandidateChangeAccountAvatarPage from "./CandidateChangeAccountAvatarPage";
import CandidateChangeAccountBackgroundPage from "./CandidateChangeAccountBackgroundPage";
interface Inputs {
  name: string;
  phone: string;
  email: string;
  id: string;
}
const ManageUpdateInformationCandidatePage: React.FC = () => {
  const { accessToken, user } = useSelector((state: any) => state.auth);
  const { loadingCandidate, messageCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [checkChangeAvatar, setCheckChangeAvatar] = useState(false);
  const [checkChangeBackground, setCheckChangeBackground] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    control,
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
          {t("manage.information.title")}
        </h2>
        <div className="flex relative pt-5 h-[200px] justify-center">
          <div className="absolute inset-0 bottom-8 bg-blue-100">
            <>
              <div
                onClick={() => setCheckChangeBackground(!checkChangeBackground)}
                className="absolute top-2 cursor-pointer left-2 px-2 py-1 rounded-md bg-slate-100 hover:opacity-90 hover:text-primary transition-all"
              >
                <span className="">
                  {t("manage.information.changebackground")}
                </span>
              </div>

              {loadingCandidate ? (
                <div className="flex bg-gray-200 h-full w-full">
                  <Spin className="m-auto" />
                </div>
              ) : (
                <img
                  src={
                    user?.background
                      ? user?.background
                      : "https://biz.prlog.org/jspace/logo.png"
                  }
                  alt=""
                  className={`w-full h-full ${
                    user?.background ? "object-cover" : "object-contain"
                  }`}
                />
              )}
            </>
          </div>
          <div className="flex justify-center self-end ">
            <div
              className="relative inline-block"
              onClick={() => {
                setCheckChangeAvatar(!checkChangeAvatar);
              }}
            >
              {!loadingCandidate ? (
                <div>
                  {user?.picture ? (
                    <>
                      <img
                        src={user?.picture}
                        alt=""
                        className="w-[80px] h-[80px] rounded-full cursor-pointer object-cover bg-white"
                      />
                      <CameraOutlined
                        className="absolute bottom-2 right-0 bg-blue-50 p-2 rounded-full cursor-pointer"
                        style={{ fontSize: "18px" }}
                      />
                    </>
                  ) : (
                    <div className="bg-white rounded-full">
                      <Avatar
                        className="mx-auto "
                        size={80}
                        icon={<UserOutlined />}
                      />
                      <CameraOutlined
                        className="absolute bottom-2 right-0 bg-blue-50 p-2 rounded-full cursor-pointer"
                        style={{ fontSize: "18px" }}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-[80px] h-[80px] rounded-full flex bg-white">
                  <Spin className="m-auto" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 mt-10">
          <div className="">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {t("manage.information.username")}
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
              {t("manage.information.email")}
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
            {t("manage.information.phone")}
          </label>
          <div className="mt-2 relative">
            <IconPhone className="absolute top-0 left-0 translate-x-[50%] translate-y-[50%] text-gray-400"></IconPhone>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputNumber
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Số điện thoại"
                />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end items-center my-2">
          <Button
            className="mt-5 "
            title={t("buttonsave")}
            loading={loadingCandidate}
          ></Button>
        </div>
      </form>

      {/* change image */}
      {checkChangeAvatar && (
        <CandidateChangeAccountAvatarPage
          onClick={setCheckChangeAvatar}
        ></CandidateChangeAccountAvatarPage>
      )}
      {checkChangeBackground && (
        <CandidateChangeAccountBackgroundPage
          onClick={setCheckChangeBackground}
        ></CandidateChangeAccountBackgroundPage>
      )}
    </>
  );
};

export default ManageUpdateInformationCandidatePage;
