import React, { useEffect } from "react";
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

const SuggestJobThroughEmailPage: React.FC = () => {
  const { suggestJobCheck, skills } = useSelector((state: any) => state.common);
  const { user } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  useEffect(() => {
    dispatch(commonGetSkills());
  }, []);
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex z-40">
        <form
          action=""
          className="relative m-auto w-[600px] bg-white rounded-sm p-7"
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
          <h2 className="font-bold text-xl">
            Khảo sát gợi ý công việc qua Email.
          </h2>
          <p className="mt-2 text-gray-500">
            Chúng tôi sẽ gửi email đến bạn những công việc phù hợp với bạn trong
            tương lại
          </p>
          <div className="mt-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium text-base">
                Địa chỉ email
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
                Kỹ năng
              </label>
              <Select
                mode="tags"
                style={{ width: "100%" }}
                // onChange={handleChangeSkills}
                allowClear
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
              title="Lưu gợi ý"
              loading={false}
            ></ButtonLoading>
          </div>
        </form>
      </div>
    </>
  );
};

export default SuggestJobThroughEmailPage;
