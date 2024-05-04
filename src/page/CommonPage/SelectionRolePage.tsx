import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import logo from "../../assets/logo3.png";
import { Radio, Spin } from "antd";
import IconArrowRight from "../../components/icons/IconArrowRight";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "../../store/auth/auth-slice";
import { LoadingOutlined } from "@ant-design/icons";
interface FormData {
  radioOption: string;
}

const SelectionRolePage: React.FC = () => {
  const { roles, loading } = useSelector((state: any) => state.auth);
  const { infoUserOauth } = useSelector((state: any) => state.common);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    dispatch(
      authRegister({ role: data?.radioOption, userInfo: infoUserOauth })
    );
  };
  useEffect(() => {
    if (!infoUserOauth?.email) {
      navigate("/");
    }
  }, [infoUserOauth]);
  return (
    <>
      <div className="flex w-full h-screen">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto min-w-[400px] min-h-[300px] rounded-lg border border-gray-300 border-solid p-7"
        >
          <div className="flex gap-3 justify-center items-center p-4">
            {" "}
            <NavLink to="/">
              {" "}
              <img src={logo} alt="" className="w-[40px]" />
            </NavLink>
            <h1 className="text-xl font-bold text-primary">
              Đăng ký tài khoản với tư cách
            </h1>
          </div>
          <Controller
            name="radioOption"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <>
                <h3 className="text-gray-500">Danh sách Role</h3>
                <Radio.Group className="flex flex-col gap-5 p-5 mt-3">
                  {roles.length > 0 &&
                    roles.map((value: any, index: number) => (
                      <Radio
                        key={index}
                        className=""
                        {...field}
                        value={value.code}
                      >
                        {value.code}
                      </Radio>
                    ))}
                </Radio.Group>
              </>
            )}
          />
          {errors.radioOption?.type == "required" ? (
            <p className="text-red-500">*Bạn chưa chọn quyền</p>
          ) : (
            ""
          )}
          <div className="mt-5 flex">
            <button
              disabled={loading}
              type="submit"
              className={`mx-auto px-5 py-3 h-[50px] w-full font-semibold rounded-lg bg-primary text-white flex gap-5 transition-all justify-center items-center ${
                loading ? "" : "hover:opacity-80"
              }`}
            >
              {loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined style={{ color: "white" }} spin />
                  }
                />
              ) : (
                <>
                  <span>Tiếp tục</span>
                  <IconArrowRight className=""></IconArrowRight>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SelectionRolePage;
