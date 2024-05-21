import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { KeyOutlined } from "@ant-design/icons";
import IconKey from "../../components/icons/IconKey";
import ButtonLoading from "../../components/button/ButtonLoading";
interface Inputs {
  name: string;
  passwordold: string;
  passwordnew: string;
  passwordnewconfirm: string;
}
const ManageChangePasswordPage: React.FC = () => {
  // const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataPassword: Inputs) => {
    console.log("🚀 ~ dataPassword:", dataPassword);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="lg:mx-10 mx-5 my-5">
        <h2 className="font-semibold text-xl">Thay đổi mật khẩu</h2>
        <div className="">
          <form action="" onSubmit={handleSubmit(onSubmit)} className="py-3">
            <div className="flex gap-10">
              <div className="w-full">
                <label
                  htmlFor="passwordold"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nhập lại mật khẩu
                </label>
                <div className="mt-2 relative">
                  <IconKey className="absolute top-0 left-0 translate-x-[50%] translate-y-[45%] text-gray-400"></IconKey>
                  <input
                    {...register("passwordold", {})}
                    placeholder="Mật khẩu cũ"
                    type="password"
                    id="passwordold"
                    autoComplete="off"
                    className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pr-4 pl-12 py-3 border border-stone-200 border-solid w-full rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 mt-5">
              <div className="">
                <label
                  htmlFor="passwordnew"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu mới
                </label>
                <div className="mt-2 relative">
                  <KeyOutlined
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
                    {...register("passwordnew", {
                      required: true,
                    })}
                    placeholder="Mật khẩu mới"
                    type="password"
                    autoComplete="off"
                    id="passwordnew"
                    className="h-full pl-12 pr-4 focus:border-solid focus:border-stone-400/70 transition-all outline-none py-3 border border-stone-200 border-solid w-full rounded-md"
                  />
                  <p className="text-red-500 py-2">
                    {" "}
                    {errors?.passwordnew?.type === "required"
                      ? "*Bạn chưa điền thông tin tài khoản."
                      : ""}
                  </p>
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="passwordnewconfirm"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Xác nhận mật khẩu mới
                </label>
                <div className="mt-2 relative">
                  <KeyOutlined
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
                    {...register("passwordnewconfirm", {
                      required: true,
                    })}
                    placeholder="Xác nhận mật khẩu mới"
                    type="password"
                    autoComplete="off"
                    id="passwordnewconfirm"
                    className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pl-12 pr-4 py-3 border border-stone-200 border-solid w-full rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <ButtonLoading
                title="Lưu thông tin"
                loading={false}
              ></ButtonLoading>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManageChangePasswordPage;
