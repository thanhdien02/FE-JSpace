import React, { useEffect } from "react";
import IconClose from "../../components/icons/IconClose";
import { DatePicker } from "antd";
import ButtonLoading from "../../components/button/ButtonLoading";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
const { RangePicker } = DatePicker;
interface PropComponent {
  setClosePopover?: any;
}
interface Inputs {
  name: any;
  position: string;
  startYear?: string;
  endYear?: string;
}
const FormUpdateInformationExperiencePage: React.FC<PropComponent> = ({
  setClosePopover,
}) => {
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const { t } = useTranslation();
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  const onSubmit: SubmitHandler<Inputs> = (
    dataUpdateInformationStudy: Inputs
  ) => {
    console.log("🚀 ~ dataUpdateInformationStudy:", dataUpdateInformationStudy);
  };
  return (
    <>
      <div className="fixed inset-0 z-40 flex">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => {
            setClosePopover(false);
          }}
        ></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto absolute inset-0 px-6 py-8 bg-white w-[650px] min-h-[400px] max-h-[500px] h-fit"
        >
          <span
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => {
              setClosePopover(false);
            }}
          >
            <IconClose></IconClose>
          </span>

          <div>
            <h3 className="font-bold text-xl text-center">Kinh nghiệm</h3>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium">
                Công ty <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                type="text"
                id="name"
                className="px-4 py-2 outline-none border border-solid border-gray-300 rounded placeholder:text-sm"
                placeholder="Tên trường"
              />
              {errors?.name?.type == "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  *Bạn chưa nhập tên công ty
                </p>
              )}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="position" className="font-medium">
                Chức vụ <span className="text-red-500">*</span>
              </label>
              <input
                {...register("position", {
                  required: true,
                })}
                type="text"
                id="position"
                className="px-4 py-2 outline-none border border-solid border-gray-300 rounded placeholder:text-sm"
                placeholder="Chuyên ngành"
              />
              {errors?.position?.type == "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  *Bạn chưa nhập chức vụ
                </p>
              )}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="startInput" className="font-medium">
                Thời gian làm việc
              </label>
              <RangePicker
                // value={[dayjs("2024"), dayjs("2025")]}
                onChange={(e, value) => {
                  setValue("startYear", value[0]);
                  setValue("endYear", value[1]);
                  console.log(e);
                }}
                picker="month"
                id={{
                  start: "startInput",
                  end: "endInput",
                }}
              />
            </div>

            <ButtonLoading
              classButton="mt-8"
              title={t("buttonsave")}
              loading={false}
            ></ButtonLoading>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUpdateInformationExperiencePage;
