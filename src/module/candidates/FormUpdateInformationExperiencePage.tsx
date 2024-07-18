import React, { useEffect, useState } from "react";
import IconClose from "../../components/icons/IconClose";
import { DatePicker } from "antd";
import ButtonLoading from "../../components/button/ButtonLoading";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  candidateGetSurvey,
  candidateUpdateExperience,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
const { RangePicker } = DatePicker;
import dayjs from "dayjs";
interface PropComponent {
  setClosePopover?: any;
}
interface Inputs {
  companyName: any;
  position: string;
  startYear?: string;
  endYear?: string;
}
const FormUpdateInformationExperiencePage: React.FC<PropComponent> = ({
  setClosePopover,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const { informationSurvey, messageCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [year, setYear] = useState<any>({
    startYear: null,
    endYear: null,
  });
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  const onSubmit: SubmitHandler<Inputs> = (dataUpdateExperience: Inputs) => {
    const start: any = dataUpdateExperience?.startYear?.split("-");
    const end: any = dataUpdateExperience?.endYear?.split("-");
    dispatch(
      candidateUpdateExperience({
        candidateId: user?.id,
        dataUpdateExperience: {
          companyName: dataUpdateExperience?.companyName,
          position: dataUpdateExperience?.position,
          startMonth: start[1],
          startYear: start[0],
          endMonth: end[1],
          endYear: end[0],
          workingYesNo: true,
        },
      })
    );
  };
  useEffect(() => {
    if (user?.id) {
      dispatch(candidateGetSurvey({ candidate_id: user.id }));
    }
  }, []);
  useEffect(() => {
    if (informationSurvey?.experienceInfo) {
      setValue("companyName", informationSurvey?.experienceInfo?.companyName);
      setValue("position", informationSurvey?.experienceInfo?.position);
      let start =
        informationSurvey.experienceInfo?.startYear +
        "-" +
        `${
          informationSurvey.experienceInfo?.startMonth?.toString().length == 1
            ? `0${informationSurvey.experienceInfo?.startMonth}`
            : informationSurvey.experienceInfo?.startMonth
        }`;
      setValue("startYear", start);
      let end =
        informationSurvey.experienceInfo?.endYear +
        "-" +
        `${
          informationSurvey.experienceInfo?.endMonth?.toString().length == 1
            ? `0${informationSurvey.experienceInfo?.endMonth}`
            : informationSurvey.experienceInfo?.endMonth
        }`;

      setValue("endYear", end);
      if (start.length > 5) {
        setYear({
          startYear: start,
          endYear: end,
        });
      }
    }
  }, [informationSurvey]);
  useEffect(() => {
    if (messageCandidate == "experiencesuccess") {
      setClosePopover(false);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    }
  }, [messageCandidate]);
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
                {...register("companyName", {
                  required: true,
                })}
                type="text"
                id="companyName"
                className="px-4 py-2 outline-none border border-solid border-gray-300 rounded placeholder:text-sm"
                placeholder="Tên công ty"
              />
              {errors?.companyName?.type == "required" && (
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
                placeholder="Vị trí"
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
                value={
                  year?.startYear != null
                    ? [
                        dayjs(year?.startYear, "YYYY-MM"),
                        dayjs(year?.endYear, "YYYY-MM"),
                      ]
                    : [null, null]
                }
                onChange={(e, value) => {
                  setValue("startYear", value[0]);
                  setValue("endYear", value[1]);
                  setYear({
                    startYear: value[0],
                    endYear: value[1],
                  });
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
