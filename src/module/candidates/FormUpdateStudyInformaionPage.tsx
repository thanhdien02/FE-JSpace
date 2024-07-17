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
  schoolName: any;
  major: string;
  startYear?: string;
  endYear?: string;
  description?: string;
}
const FormUpdateStudyInformaionPage: React.FC<PropComponent> = ({
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
          className="m-auto absolute inset-0 px-6 py-8 bg-white w-[650px] min-h-[400px] max-h-[600px] h-fit"
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
            <h3 className="font-bold text-xl text-center">Thông tin học vấn</h3>

            <div className="flex flex-col gap-2">
              <label htmlFor="schoolName" className="font-medium">
                Trường <span className="text-red-500">*</span>
              </label>
              <input
                {...register("schoolName", {
                  required: true,
                })}
                type="text"
                id="schoolName"
                className="px-4 py-2 outline-none border border-solid border-gray-300 rounded placeholder:text-sm"
                placeholder="Tên trường"
              />
              {errors?.schoolName?.type == "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  *Bạn chưa nhập tên trường
                </p>
              )}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="major" className="font-medium">
                Chuyên ngành <span className="text-red-500">*</span>
              </label>
              <input
                {...register("major", {
                  required: true,
                })}
                id="major"
                className="px-4 py-2 outline-none border border-solid border-gray-300 rounded placeholder:text-sm"
                placeholder="Chuyên ngành"
              />
              {errors?.major?.type == "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  *Bạn chưa nhập chuyên ngành
                </p>
              )}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="major" className="font-medium">
                Thời gian
              </label>
              <RangePicker
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
                onFocus={(_, info) => {
                  console.log("Focus:", info.range);
                }}
                onBlur={(_, info) => {
                  console.log("Blur:", info.range);
                }}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="description" className="font-medium">
                Mô tả
              </label>
              <textarea
                {...register("description", {})}
                name="description"
                className="mt-3 outline-none p-4 placeholder:text-sm border border-solid border-gray-300 rounded-lg w-full min-h-[100px]"
                placeholder="Mô tả"
                id="description"
              ></textarea>
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

export default FormUpdateStudyInformaionPage;
