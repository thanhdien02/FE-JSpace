import React, { useEffect, useState } from "react";
import IconClose from "../../components/icons/IconClose";
import { DatePicker } from "antd";
import ButtonLoading from "../../components/button/ButtonLoading";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  candidateGetSurvey,
  candidateUpdateMessageRedux,
  candidateUpdateStudy,
} from "../../store/candidate/candidate-slice";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

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
  const { user } = useSelector((state: any) => state.auth);
  const { informationSurvey, messageCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const [year, setYear] = useState<any>({
    startYear: null,
    endYear: null,
  });
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  useEffect(() => {
    if (user?.id) {
      dispatch(candidateGetSurvey({ candidate_id: user.id }));
    }
  }, []);
  useEffect(() => {
    if (informationSurvey?.educationInfo) {
      setValue("schoolName", informationSurvey.educationInfo?.schoolName);
      setValue("major", informationSurvey.educationInfo?.major);
      setValue("description", informationSurvey.educationInfo?.description);
      let start =
        informationSurvey.educationInfo?.startYear +
        "-" +
        `${
          informationSurvey.educationInfo?.startMonth?.toString().length == 1
            ? `0${informationSurvey.educationInfo?.startMonth}`
            : informationSurvey.educationInfo?.startMonth
        }`;
      setValue("startYear", start);
      let end =
        informationSurvey.educationInfo?.endYear +
        "-" +
        `${
          informationSurvey.educationInfo?.endMonth?.toString().length == 1
            ? `0${informationSurvey.educationInfo?.endMonth}`
            : informationSurvey.educationInfo?.endMonth
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
  const onSubmit: SubmitHandler<Inputs> = (
    dataUpdateInformationStudy: Inputs
  ) => {
    const start: any = dataUpdateInformationStudy?.startYear?.split("-");
    const end: any = dataUpdateInformationStudy?.endYear?.split("-");
    dispatch(
      candidateUpdateStudy({
        candidateId: user?.id,
        dataUpdateStudy: {
          schoolName: dataUpdateInformationStudy?.schoolName,
          major: dataUpdateInformationStudy?.major,
          startMonth: start[1],
          startYear: start[0],
          endMonth: end[1],
          endYear: end[0],
          description: dataUpdateInformationStudy?.description,
          graduated: true,
        },
      })
    );
  };
  useEffect(() => {
    if (messageCandidate == "studysuccess") {
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
          className="m-auto absolute inset-0 px-6 py-8 bg-white w-[650px] min-h-[400px] max-h-[700px] h-fit"
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
                  start: "startYear",
                  end: "endYear",
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
                className="mt-3 outline-none px-4 py-2 placeholder:text-sm border border-solid border-gray-300 rounded-lg w-full min-h-[100px] max-h-[200px]"
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
