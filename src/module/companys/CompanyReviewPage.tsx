import React, { useEffect, useState } from "react";
import IconChervonDown from "../../components/icons/IconChervonDown";
import CardCommentCompanyPage from "../../components/card/CardCommentCompanyPage";
import IconChervonUp from "../../components/icons/IconChervonUp";
import { useSelector } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const CompanyReviewPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [comment, setComment] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {}, []);
  const WriteReview = () => {
    if (user?.id) {
      setComment(!comment);
    } else {
      // message.info("Bạn cần đăng nhập để bình luận");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    }
  };
  return (
    <>
      <div className="">
        <h2 className="text-xl text-primary font-medium">
          {t("companydetail.shareoptionaboutcompany")}
        </h2>
        <div className="w-full h-[1px] bg-gray-100 my-5"></div>
        <div className="mt-5">
          <div className="flex justify-between">
            <h3 className="text-base font-medium">
              {t("companydetail.comment")} (10)
            </h3>
            <div
              onClick={WriteReview}
              className="flex transition-all gap-2 items-center px-3 py-1 rounded-sm bg-primary text-white cursor-pointer"
            >
              <span className="select-none">
                {t("companydetail.writecomment")}
              </span>
              {comment ? (
                <IconChervonUp></IconChervonUp>
              ) : (
                <IconChervonDown></IconChervonDown>
              )}
            </div>
          </div>
          <div className="transition-all duration-1000">
            {comment ? (
              <div className="mt-5">
                <form action="" className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Tiêu đề"
                    className="w-full px-4 py-2 font-medium text-base border border-solid outline-none border-gray-200 rounded-md"
                  />
                  <textarea
                    name=""
                    placeholder="Nội dung"
                    id=""
                    className="w-full mt-2 min-h-[150px] p-2 outline-none border border-solid border-gray-200 rounded-md"
                  ></textarea>
                  <div className="mt-5 flex justify-end">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className=" min-w-[100px] text-base px-2 py-1 bg-primary rounded-sm text-white"
                    >
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <></>
            )}

            <div className=" w-full h-[1px] bg-gray-200 my-5"></div>
            {/*  */}
            <div className="pb-5">
              <CardCommentCompanyPage className="mt-6"></CardCommentCompanyPage>
              <CardCommentCompanyPage className="mt-6"></CardCommentCompanyPage>
              <CardCommentCompanyPage className="mt-6"></CardCommentCompanyPage>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyReviewPage;
