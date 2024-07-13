import React, { useEffect, useState } from "react";
import IconClose from "../../components/icons/IconClose";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  commonGetSkills,
  commonUpdateSuggestJobRedux,
} from "../../store/common/common-slice";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import ButtonLoading from "../../components/button/ButtonLoading";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  candidateGetSkillSuggestJob,
  candidatePickSkillSuggestJob,
} from "../../store/candidate/candidate-slice";
interface Inputs {
  skills: any;
}
const SuggestJobThroughEmailPage: React.FC = () => {
  const { suggestJobCheck, skills } = useSelector((state: any) => state.common);
  const { user } = useSelector((state: any) => state.auth);
  const { skillCandidatePickSuggest } = useSelector(
    (state: any) => state.candidate
  );
  const {
    handleSubmit,
    setValue,
    formState: {},
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const [skill, setSkill] = useState<any>(null);

  const onSubmit: SubmitHandler<Inputs> = (dataPickSkillSuggestion: Inputs) => {
    console.log("🚀 ~ dataPickSkillSuggestion:", dataPickSkillSuggestion);
    dispatch(
      candidatePickSkillSuggestJob({
        candidate_id: user?.id,
        skills: skill,
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
    dispatch(commonGetSkills());
    if (user?.id) {
      dispatch(candidateGetSkillSuggestJob({ candidate_id: user.id }));
    }
  }, []);
  useEffect(() => {
    if (skillCandidatePickSuggest?.length > 0) {
      setSkill(skillCandidatePickSuggest?.map((item: any) => item?.id));
    }
  }, [skillCandidatePickSuggest]);

  const handleChangeSkills = (value: any) => {
    setSkill(value);
    setValue("skills", value);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex z-40">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="relative m-auto md:w-[600px] w-[90%] bg-white rounded-sm p-7"
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
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium text-base">
                {t("jobsuggestion.email")}
              </label>
              <input
                type="text"
                className="px-4 py-2 border border-solid border-stone-200 rounded-md outline-none"
                readOnly
                value={user?.email}
              />
            </div>
            <div className={`w-full mt-4`}>
              <label htmlFor="" className="font-medium text-base">
                {t("skills")}
              </label>
              <Select
                mode="tags"
                style={{ width: "100%" }}
                onChange={handleChangeSkills}
                allowClear
                value={skill}
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
                className={`skill address w-full text-base rounded-lg bg-white border border-solid border-stone-200 mt-2`}
              />
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
