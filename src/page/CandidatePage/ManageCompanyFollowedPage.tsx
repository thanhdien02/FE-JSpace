import { Empty, Pagination, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import CardCompanyFollowedPage from "../../components/card/CardCompanyFollowedPage";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { companyGetFollowedCompany } from "../../store/company/company-slice";
import { candidateUpdateMessageRedux } from "../../store/candidate/candidate-slice";

const ManageCompanyFollowedPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { followedCompanys, paginationFollowedCompany, loadingCompany } =
    useSelector((state: any) => state.company);
  const { messageCandidate } = useSelector((state: any) => state.candidate);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  // const [value, setValue] = useState(1);
  // const onChange = (e: RadioChangeEvent) => {
  //   console.log("radio checked", e.target.value);
  //   setValue(e.target.value);
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (user?.id)
      dispatch(
        companyGetFollowedCompany({
          page: page,
          size: 10,
          candidate_id: user?.id,
        })
      );
  }, [user?.id]);
  const handleOnchangePage = (e: any) => {
    dispatch(
      companyGetFollowedCompany({
        page: e,
        size: 10,
        candidate_id: user?.id,
      })
    );
    setPage(e);
  };
  useEffect(() => {
    if (messageCandidate) {
      dispatch(
        companyGetFollowedCompany({
          page: page,
          size: 10,
          candidate_id: user?.id,
        })
      );
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    }
  }, [messageCandidate]);
  return (
    <>
      <div className="p-5">
        <h3 className="text-lg font-bold">
          {t("manage.followedcompany.title")}
        </h3>
        {/* <div className="lg:mt-5 mt-3 flex flex-wrap lg:gap-5 gap-3 items-center">
          <div className="flex items-center gap-2">
            <input
              placeholder={t("placeholdercompany")}
              onChange={(e) => {
                console.log("🚀 ~ e:", e.target.value);
              }}
              className="bg-gray-200 text-gray-700 hover:bg-gray-200 outline-none px-4 py-2 rounded-lg placeholder:text-sm"
            />
            <button
              type="button"
              className="text-nowrap bg-primary text-white py-2 px-4 rounded-lg hover:opacity-80 transition-all"
            >
              {t("search")}
            </button>
          </div>
          <h3 className="text-sm text-gray-500 ">
            {t("manage.followedcompany.showby")}:
          </h3>
          <Radio.Group onChange={onChange} value={value}>
            <Radio className="font-medium" value={1}>{t("manage.followedcompany.mostrecent")}</Radio>
            <Radio className="font-medium" value={3}>{t("manage.followedcompany.mostfollowers")}</Radio>
          </Radio.Group>
        </div> */}

        {loadingCompany ? (
          <Skeleton />
        ) : followedCompanys?.length <= 0 ? (
          <Empty />
        ) : (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-7">
            {followedCompanys?.length > 0 &&
              followedCompanys.map((item: any) => (
                <CardCompanyFollowedPage
                  key={item?.id}
                  item={item}
                ></CardCompanyFollowedPage>
              ))}
          </div>
        )}

        <div className="flex justify-end mt-5 mb-10">
          {followedCompanys?.length > 0 && (
            <Pagination
              total={paginationFollowedCompany?.totalElements}
              onChange={handleOnchangePage}
              className="inline-block"
              current={page}
              pageSize={paginationFollowedCompany?.pageSize}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ManageCompanyFollowedPage;
