import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authLogin, authUpdateLoadingRedux } from "../../store/auth/auth-slice";
import { Checkbox, CheckboxProps } from "antd";
import { GoogleOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/logo3.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import IconClose from "../../components/icons/IconClose";
import { SubmitHandler, useForm } from "react-hook-form";
import IconKey from "../../components/icons/IconKey";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { useTranslation } from "react-i18next";

interface PropComponent {
  className?: string;
  claseNameOverlay?: string;
  actionLogin?: any;
  onClick?: any;
}
interface Inputs {
  email?: string;
  password?: string;
}
const LoginPage: React.FC<PropComponent> = ({
  className = "",
  claseNameOverlay,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataLogin: Inputs) => {
    console.log("🚀 ~ dataUpdadeCandidate:", dataLogin);
  };
  const { loading } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const login: any = useGoogleLogin({
    onSuccess: async (response: any) => {
      try {
        dispatch(authUpdateLoadingRedux({ loading: true }));
        const dataEmail = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        dispatch(authLogin(dataEmail.data));
      } catch (error) {}
    },
  });

  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className={`flex fixed inset-0 z-50 ${className}`}>
      <div
        className={`m-auto absolute inset-0 bg-black/50 cursor-pointer ${claseNameOverlay}`}
        onClick={() => {
          if (!loading) {
            dispatch(commonUpdateLoginRedux({ loginCheck: false }));
          }
        }}
      ></div>
      <form
        action=""
        className="relative m-auto lg:p-10 p-5 rounded-lg bg-white min-h-[250px] lg:w-[500px] w-[350px] shadow-lg border-solid border border-slate-500/30"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span
          onClick={() => {
            if (!loading)
              dispatch(commonUpdateLoginRedux({ loginCheck: false }));
          }}
          className="absolute top-2 right-2 hover:bg-gray-200 transition-all rounded-md cursor-pointer"
        >
          <IconClose
          // actionCloseLogin={!loading ? actionLogin : () => {}}
          ></IconClose>
        </span>

        <div className="flex justify-center flex-col items-center gap-2 mb-5">
          <NavLink to="/" className="block">
            <img src={logo} alt="" className="max-w-[50px]" />
          </NavLink>
          <h1 className="text-center text-primary font-bold text-2xl tracking-wider">
            JSPACE
          </h1>
        </div>
        <div className="">
          <div className="w-full">
            <h4 className="mb-2 text-base font-semibold">{t("welcomlogin")}</h4>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                {t("account")}
              </label>
              <div className="mt-2 relative">
                <UserOutlined
                  style={{
                    // fontSize: "20px",
                    color: "rgb(156 163 175)",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    transform: "translate(60%, 75%)",
                  }}
                />
                <input
                  {...register("email", {
                    required: true,
                    maxLength: 40,
                    minLength: 5,
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Trường yêu cầu email",
                    },
                  })}
                  type="email"
                  placeholder="join@gmail.com"
                  autoComplete="off"
                  className=" focus:border-solid h-full focus:border-stone-400/70 transition-all outline-none pr-4 pl-10 py-2 border border-stone-200 border-solid w-full rounded-md"
                />
                <p className="text-red-600 text-sm py-2">
                  {" "}
                  {errors?.email?.type === "required"
                    ? "*Bạn chưa điền tài khoản."
                    : errors?.email?.type === "maxLength"
                    ? "*Tài khoản không được quá 40 ký tự"
                    : errors?.email?.type === "minLength"
                    ? "*Tài khoản không được ít hơn 5 ký tự"
                    : errors?.email?.type === "pattern"
                    ? "*Tài khoản phải là email"
                    : ""}
                </p>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                {t("password")}
              </label>
              <div className="mt-2 relative">
                <IconKey className="absolute top-0 left-0 translate-x-[50%] text-gray-400 translate-y-[50%] !w-5 !h-5"></IconKey>
                <input
                  {...register("password", {
                    required: true,
                    maxLength: 40,
                    minLength: 8,
                  })}
                  placeholder="*************"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="h-full focus:border-solid  focus:border-stone-400/70 transition-all outline-none pr-4 pl-10 py-2 border border-stone-200 border-solid w-full rounded-md"
                />
                <p className="text-red-600 text-sm py-2">
                  {" "}
                  {errors?.password?.type === "required"
                    ? "*Bạn chưa điền mật khẩu."
                    : errors?.password?.type === "maxLength"
                    ? "*Mật khẩu không được quá 40 ký tự"
                    : errors?.password?.type === "minLength"
                    ? "*Mật khẩu không được ít hơn 8 ký tự"
                    : ""}
                </p>
              </div>
            </div>
            <div className="w-full">
              <Checkbox
                onChange={onChange}
                className="font-normal text-xs text-slate-500 gap-2"
              >
                {t("term")}
              </Checkbox>
            </div>
          </div>

          <div className="flex w-full mt-5">
            <button
              disabled={loading}
              type="submit"
              className="bg-primary text-white px-4 py-2 w-full !hover:bg-primary rounded-lg flex gap-3 justify-center items-center hover:opacity-80 !transition-all"
            >
              {t("login")}
            </button>
          </div>
          <div className="flex py-1">
            <span className=" text-gray-500 text-xs mx-auto">Or</span>
          </div>
          <div className="flex w-full">
            <button
              disabled={loading}
              type="button"
              className={`bg-red-500 h-10 text-white px-4 py-2 w-full !hover:bg-red-500 rounded-lg flex gap-3 justify-center items-center hover:opacity-80 !transition-all`}
              onClick={() => login()}
            >
              {loading ? (
                <>
                  <div className="w-full flex">
                    <span className="border-[3px] rounded-full m-auto border-l-transparent border-solid border-gray-100 w-[25px] h-[25px] animate-spin"></span>
                  </div>
                </>
              ) : (
                <>
                  <GoogleOutlined />
                  {t("loginwithgoogle")}
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
