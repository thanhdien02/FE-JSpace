import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import IconKey from "../../components/icons/IconKey";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/logo1.svg";
import { Checkbox, CheckboxProps, message, Spin } from "antd";
import { authRegister } from "../../store/auth/auth-slice";
import { LoadingOutlined } from "@ant-design/icons";
import IconUser from "../../components/icons/IconUser";
import { useTranslation } from "react-i18next";
interface PropComponent {
  className?: string;
  claseNameOverlay?: string;
  checkLogin?: boolean;
  actionLogin?: any;
}
interface Inputs {
  name?: string;
  password?: string;
  confirmpassword?: string;
}
const RegisterPage: React.FC<PropComponent> = ({ className = "" }) => {
  const { loading, accessToken, user } = useSelector(
    (state: any) => state.auth
  );
  const { registerMail } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataRegister: Inputs) => {
    if (dataRegister?.confirmpassword === dataRegister?.password) {
      dispatch(
        authRegister({
          name: dataRegister?.name,
          email: registerMail,
          password: dataRegister?.password,
          roleCode: "CANDIDATE",
        })
      );
    } else {
      message.error("Mật khẩu không trùng nhau");
    }
  };
  useEffect(() => {
    if (accessToken != "" && user?.role?.code == "CANDIDATE") {
      navigate("/");
    }
  }, [accessToken]);
  const onChangeShowPassword: CheckboxProps["onChange"] = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div
        className={`flex fixed inset-0 transition-all z-20 bg-gray-100/20 ${className}`}
      >
        <div className="m-auto">
          <form
            action=""
            className="lg:p-10 p-4 rounded-lg my-5 min-h-[250px] max-w-[650px] border-solid"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="absolute top-10 left-10 ">
              <NavLink to="/" className="block ">
                <img src={logo} alt="" className="w-[130px]" />
              </NavLink>
            </div>
            <div className="absolute right-10 top-14 font-medium px-2 py-1 border border-solid border-primary rounded-sm">
              <a
                href="https://jspace-employer.vercel.app/"
                target="_blank"
                className="text-sm text-primary"
              >
                {t("areyouemployer")}
              </a>
            </div>
            <div className=" bg-white border border-solid border-gray-200 lg:p-10 p-5 rounded-lg shadow-sm">
              <div className="w-full">
                <h4 className="mb-2 text-base font-semibold">
                  {t("enterinformationforegister")}{" "}
                  <span className="text-primary">JSPACE</span> ?
                </h4>
                <div className="mt-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-600"
                  >
                    {t("fullname")}
                  </label>
                  <div className="mt-2 relative">
                    <IconUser className="absolute top-0 left-0 translate-x-[50%] text-gray-400 translate-y-[40%] !w-5 !h-5"></IconUser>
                    <input
                      {...register("name", {
                        required: true,
                        maxLength: 50,
                        minLength: 1,
                      })}
                      type="text"
                      placeholder="Họ và tên"
                      autoComplete="off"
                      className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pr-4 pl-10 py-2 border border-stone-200 border-solid w-full rounded-md placeholder:text-sm"
                    />
                    <p className="text-red-600 text-sm py-2">
                      {" "}
                      {errors?.name?.type === "required"
                        ? "*Bạn chưa điền họ và tên."
                        : errors?.name?.type === "maxLength"
                        ? "*Họ và tên không được quá 50 ký tự"
                        : errors?.name?.type === "minLength"
                        ? "*Họ và tên không được ít hơn 1 ký tự"
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-600"
                  >
                    {t("password")}
                  </label>
                  <div className="mt-2 relative">
                    <IconKey className="absolute top-0 left-0 translate-x-[50%] text-gray-400 translate-y-[50%] !w-5 !h-5"></IconKey>
                    <input
                      {...register("password", {
                        required: true,
                        maxLength: 50,
                        minLength: 8,
                      })}
                      type={showPassword ? "password" : "text"}
                      placeholder="*************"
                      autoComplete="off"
                      className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pr-4 pl-10 py-2 border border-stone-200 border-solid placeholder:text-sm w-full rounded-md"
                    />
                    <p className="text-red-600 text-sm py-2">
                      {" "}
                      {errors?.password?.type === "required"
                        ? "*Bạn chưa điền mật khẩu."
                        : errors?.password?.type === "maxLength"
                        ? "*Mật khẩu không được quá 50 ký tự"
                        : errors?.password?.type === "minLength"
                        ? "*Mật khẩu không được ít hơn 8 ký tự"
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="confirmpassword"
                    className="block text-sm font-medium leading-6 text-gray-600"
                  >
                    {t("confirm")}
                  </label>
                  <div className="mt-2 relative">
                    <IconKey className="absolute placeholder:text-sm top-0 left-0 translate-x-[50%] text-gray-400 translate-y-[50%] !w-5 !h-5"></IconKey>
                    <input
                      {...register("confirmpassword", {
                        required: true,
                        maxLength: 40,
                        minLength: 8,
                      })}
                      placeholder="*************"
                      id="confirmpassword"
                      name="confirmpassword"
                      type={showPassword ? "password" : "text"}
                      autoComplete="confirmpassword"
                      className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pr-4 pl-10 py-2 border border-stone-200 border-solid placeholder:text-sm w-full rounded-md"
                    />
                    <p className="text-red-600 text-sm py-2">
                      {" "}
                      {errors?.confirmpassword?.type === "required"
                        ? "*Bạn chưa điền mật khẩu xác nhận."
                        : errors?.confirmpassword?.type === "maxLength"
                        ? "*Mật khẩu không được quá 40 ký tự"
                        : errors?.confirmpassword?.type === "minLength"
                        ? "*Mật khẩu không được ít hơn 8 ký tự"
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <Checkbox onChange={onChangeShowPassword}>
                {t("showpassword")}
              </Checkbox>
              <div className="flex w-full mt-5">
                <button
                  disabled={loading}
                  type="submit"
                  className="bg-primary font-medium text-white px-4 py-2 w-full !hover:bg-primary rounded-lg flex gap-3 justify-center items-center hover:opacity-80 !transition-all"
                >
                  {loading ? (
                    <Spin
                      indicator={
                        <LoadingOutlined style={{ color: "white" }} spin />
                      }
                    />
                  ) : (
                    t("register")
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-5">
                {t("informationterm")}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
