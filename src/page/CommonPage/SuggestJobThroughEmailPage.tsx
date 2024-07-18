import React, { useEffect } from "react";
import IconClose from "../../components/icons/IconClose";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  commonGetExperience,
  commonGetGender,
  commonGetLocation,
  commonGetRank,
  commonGetSkills,
  commonUpdateSuggestJobRedux,
} from "../../store/common/common-slice";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import ButtonLoading from "../../components/button/ButtonLoading";
import { SubmitHandler, useForm } from "react-hook-form";
import { dataSalary } from "../../utils/dataFetch";
import {
  candidateGetSurvey,
  candidateSurvey,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
interface Inputs {
  skills: any;
  experience: string;
  salary: string;
  rank: string;
  location: string;
  detailAddress: string;
  gender: string;
}
const SuggestJobThroughEmailPage: React.FC = () => {
  const { suggestJobCheck, locations, ranks, experiences, skills, genders } =
    useSelector((state: any) => state.common);
  const { user } = useSelector((state: any) => state.auth);
  const { informationSurvey, messageCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const {
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<Inputs> = (dataPickSkillSuggestion: Inputs) => {
    let [minSalary, maxSalary] = dataPickSkillSuggestion?.salary?.split("-");
    dispatch(
      candidateSurvey({
        candidateId: user?.id,
        gender: dataPickSkillSuggestion?.gender,
        minSalary: minSalary,
        maxSalary: maxSalary,
        experience: dataPickSkillSuggestion?.experience,
        location: dataPickSkillSuggestion?.location,
        rank: dataPickSkillSuggestion?.rank,
        skills: dataPickSkillSuggestion?.skills,
        detailAddress: dataPickSkillSuggestion?.detailAddress,
      })
    );
  };
  const { t } = useTranslation();
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  useEffect(() => {
    dispatch(commonGetLocation());
    dispatch(commonGetRank());
    dispatch(commonGetExperience());
    dispatch(commonGetSkills());
    dispatch(commonGetGender());
    if (user?.id) {
      dispatch(candidateGetSurvey({ candidate_id: user.id }));
    }
  }, []);
  useEffect(() => {
    if (messageCandidate == "surveysuccess") {
      dispatch(
        commonUpdateSuggestJobRedux({
          suggestJobCheck: false,
        })
      );
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    }
  }, [messageCandidate]);
  useEffect(() => {
    if (informationSurvey?.skills) {
      setValue(
        "skills",
        informationSurvey?.skills?.map((item: any) => item?.id)
      );
      setValue("experience", informationSurvey?.experience?.value);
      setValue("rank", informationSurvey?.rank?.value);
      setValue("gender", informationSurvey?.gender?.value);
      setValue("location", informationSurvey?.location?.value);
      setValue("detailAddress", informationSurvey?.detailAddress);
      setValue(
        "salary",
        `${informationSurvey?.minSalary}-${informationSurvey?.maxSalary}`
      );
    }
  }, [informationSurvey]);
  const handleChangeSkills = (value: any) => {
    setValue("skills", value);
    clearErrors("skills");
  };
  const handleChangeLocation = (value: any) => {
    setValue("location", value);
    clearErrors("location");
  };
  const handleChangeExperience = (value: any) => {
    setValue("experience", value);
    clearErrors("experience");
  };
  const handleChangeSalary = (value: any) => {
    setValue("salary", value);
    clearErrors("salary");
  };
  const handleOnchangeRank = (value: any) => {
    setValue("rank", value);
    clearErrors("rank");
  };
  const handleOnchangeGender = (value: any) => {
    setValue("gender", value);
    clearErrors("gender");
  };
  return (
    <>
      <div className="fixed inset-0 flex z-40">
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => {
            dispatch(
              commonUpdateSuggestJobRedux({
                suggestJobCheck: !suggestJobCheck,
              })
            );
          }}
        ></div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="relative m-auto md:w-[750px] w-[100%] bg-white rounded-sm p-7"
        >
          <span
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => {
              dispatch(
                commonUpdateSuggestJobRedux({
                  suggestJobCheck: !suggestJobCheck,
                })
              );
            }}
          >
            <IconClose></IconClose>
          </span>
          <h2 className="font-bold text-xl">{t("jobsuggestion.title")}</h2>
          <p className="mt-2 text-gray-500 md:text-base text-sm">
            {t("jobsuggestion.content")}
          </p>
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-medium text-base">
                  {t("jobsuggestion.experience")}
                </label>
                <Select
                  {...register("experience", {
                    required: true,
                  })}
                  showSearch
                  allowClear
                  className="address border border-solid border-gray-200 py-2 text-base rounded-lg h-10 bg-white"
                  optionFilterProp="children"
                  value={getValues("experience")}
                  onChange={handleChangeExperience}
                  placeholder={t("placeholderexperience")}
                  filterOption={(input: string, option: any) =>
                    ((option?.label ?? "") as string)
                      .toLowerCase()
                      .includes((input ?? "").toLowerCase())
                  }
                  options={
                    experiences?.length > 0 &&
                    experiences.map((item: any) => ({
                      label: item?.language?.vi,
                      value: item?.value,
                    }))
                  }
                />
                {errors?.experience?.type == "required" && (
                  <p className="text-red-500 mt-1 text-sm">
                    *Bạn chưa điền kinh nghiệm
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-medium text-base">
                  {t("jobsuggestion.salary")}
                </label>
                <Select
                  {...register("salary", {
                    required: true,
                  })}
                  value={getValues("salary")}
                  showSearch
                  allowClear
                  placeholder={t("placeholdersalary")}
                  className="address border border-solid border-gray-200 py-2 text-base rounded-lg h-10 bg-white"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "").includes(input)
                  }
                  onChange={handleChangeSalary}
                  options={dataSalary}
                />
                {errors?.salary?.type == "required" && (
                  <p className="text-red-500 mt-1 text-sm">
                    *Bạn chưa điền mức lương
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-medium text-base">
                  {t("jobsuggestion.rank")}
                </label>
                <Select
                  {...register("rank", {
                    required: true,
                  })}
                  allowClear
                  showSearch
                  value={getValues("rank")}
                  placeholder={t("rank")}
                  className={`address border border-solid border-gray-200 text-base rounded-lg h-10 bg-white`}
                  optionFilterProp="children"
                  filterOption={(input: string, option: any) =>
                    ((option?.label ?? "") as string)
                      .toLowerCase()
                      .includes((input ?? "").toLowerCase())
                  }
                  options={
                    ranks?.length > 0 &&
                    ranks.map((item: any) => ({
                      label: item?.code,
                      value: item?.value,
                    }))
                  }
                  onChange={handleOnchangeRank}
                />
                {errors?.rank?.type == "required" && (
                  <p className="text-red-500 mt-1 text-sm">
                    *Bạn chưa điền cấp bậc
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-medium text-base">
                  {t("jobsuggestion.gender")}
                </label>
                <Select
                  {...register("gender", {
                    required: true,
                  })}
                  showSearch
                  allowClear
                  placeholder={t("jobsuggestion.placeholdergender")}
                  className="address border border-solid border-gray-200 py-2 text-base rounded-lg h-10 bg-white"
                  optionFilterProp="children"
                  value={getValues("gender")}
                  filterOption={(input: string, option: any) =>
                    ((option?.label ?? "") as string)
                      .toLowerCase()
                      .includes((input ?? "").toLowerCase())
                  }
                  options={
                    genders?.length > 0 &&
                    genders.map((item: any) => ({
                      label: item?.language?.vi,
                      value: item?.value,
                    }))
                  }
                  onChange={handleOnchangeGender}
                />
                {errors?.location?.type == "required" && (
                  <p className="text-red-500 mt-1 text-sm">
                    *Bạn chưa điền giới tính
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-medium text-base">
                  {t("jobsuggestion.address")}
                </label>
                <Select
                  {...register("location", {
                    required: true,
                  })}
                  showSearch
                  allowClear
                  placeholder={t("placeholderaddress")}
                  className="address border border-solid border-gray-200 py-2 text-base rounded-lg h-10 bg-white"
                  optionFilterProp="children"
                  value={getValues("location")}
                  filterOption={(input: string, option: any) =>
                    ((option?.label ?? "") as string)
                      .toLowerCase()
                      .includes((input ?? "").toLowerCase())
                  }
                  options={
                    locations?.length > 0 &&
                    locations.map((item: any) => ({
                      label: item?.province,
                      value: item?.value,
                    }))
                  }
                  onChange={handleChangeLocation}
                />
                {errors?.location?.type == "required" && (
                  <p className="text-red-500 mt-1 text-sm">
                    *Bạn chưa điền địa chỉ
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Chi tiết địa chỉ
                </label>
                <input
                  {...register("detailAddress", { required: true })}
                  type="text"
                  id="detailAddress"
                  className="px-4 py-2 outline-none border border-solid border-gray-200 rounded-lg placeholder:text-sm"
                  placeholder="Địa chỉ chi tiết"
                />
                {errors?.detailAddress?.type == "required" && (
                  <p className="text-red-500 mt-1 text-sm">
                    *Bạn chưa nhập chi tiết địa chỉ
                  </p>
                )}
              </div>
            </div>
            <div className={`w-full mt-5 flex flex-col gap-2`}>
              <label htmlFor="" className="font-medium text-base">
                {t("skills")}
              </label>
              <Select
                {...register("skills", {})}
                mode="tags"
                style={{ width: "100%" }}
                onChange={handleChangeSkills}
                allowClear
                value={getValues("skills")}
                placeholder={t("skills")}
                filterOption={(input: string, option: any) =>
                  ((option?.label ?? "") as string)
                    .toLowerCase()
                    .includes((input ?? "").toLowerCase())
                }
                options={
                  skills?.length > 0 &&
                  skills.map((item: any) => ({
                    value: item?.id,
                    label: item?.name,
                  }))
                }
                className={`skill address w-full h-full text-base rounded-lg bg-white border border-solid border-stone-200`}
              />
              {errors?.skills?.type == "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  *Bạn chưa điền kỹ năng
                </p>
              )}
            </div>
            <ButtonLoading
              classButton="mt-5"
              title={t("buttonsave")}
              loading={false}
            ></ButtonLoading>
          </div>
        </form>
      </div>
    </>
  );
};

export default SuggestJobThroughEmailPage;
