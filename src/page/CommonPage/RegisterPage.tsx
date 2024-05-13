import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import IconKey from "../../components/icons/IconKey";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo3.png";
import bg from "../../assets/banner-job6.jpg";
interface PropComponent {
  className?: string;
  claseNameOverlay?: string;
  checkLogin?: boolean;
  actionLogin?: any;
}
interface Inputs {
  password?: string;
  confirmpassword?: string;
}
const RegisterPage: React.FC<PropComponent> = ({ className = "" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataLogin: Inputs) => {
    console.log("🚀 ~ dataUpdadeCandidate:", dataLogin);
  };
  const { loading } = useSelector((state: any) => state.auth);

  return (
    <div className={`flex fixed inset-0 transition-all z-20 ${className}`}>
      <img src={bg} alt="" className="m-auto absolute inset-0 " />
      {/* <div className={`m-auto absolute inset-0 bg-primary/30`}></div> */}
      <div className="m-auto">
        <form
          action=""
          className="relative p-10 rounded-lg my-5 bg-white min-h-[250px] w-[500px] shadow-lg border-solid border border-slate-500/30"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              <h4 className="mb-2 text-base font-semibold">
                Hãy nhập mật khẩu để đăng ký ?
              </h4>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Mật khẩu
                </label>
                <div className="mt-2 relative">
                  <IconKey className="absolute top-0 left-0 translate-x-[50%] text-gray-400 translate-y-[50%] !w-5 !h-5"></IconKey>
                  <input
                    {...register("password", {
                      required: true,
                      maxLength: 50,
                      minLength: 5,
                    })}
                    type="password"
                    placeholder="*************"
                    autoComplete="off"
                    className="focus:border-solid placeholder:text-sm h-full focus:border-stone-400/70 transition-all outline-none pr-4 pl-10 py-2 border border-stone-200 border-solid w-full rounded-md"
                  />
                  <p className="text-red-600 text-sm py-2">
                    {" "}
                    {errors?.password?.type === "required"
                      ? "*Bạn chưa điền mật khẩu."
                      : errors?.password?.type === "maxLength"
                      ? "*Mật khẩu không được quá 50 ký tự"
                      : errors?.password?.type === "minLength"
                      ? "*Mật khẩu không được ít hơn 5 ký tự"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Xác nhận
                </label>
                <div className="mt-2 relative">
                  <IconKey className="absolute placeholder:text-sm top-0 left-0 translate-x-[50%] text-gray-400 translate-y-[50%] !w-5 !h-5"></IconKey>
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
            </div>

            <div className="flex w-full mt-5">
              <button
                disabled={loading}
                type="submit"
                className="bg-primary text-white px-4 py-2 w-full !hover:bg-primary rounded-lg flex gap-3 justify-center items-center hover:opacity-80 !transition-all"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
