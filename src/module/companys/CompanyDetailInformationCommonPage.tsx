import React, { useEffect, useState } from "react";
import bg from "../../assets/banner3.jpg";
import IconLink from "../../components/icons/IconLink";
import IconBuilding from "../../components/icons/IconBuilding";
import IconGroupUser from "../../components/icons/IconGroupUser";
import IconPlus from "../../components/icons/IconPlus";
import { message, Popover } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import { useTranslation } from "react-i18next";
import IconCheck from "../../components/icons/IconCheck";
import {
  candidateFollowJob,
  candidateUnFollowJob,
  candidateUpdateMessageRedux,
} from "../../store/candidate/candidate-slice";
import Loading from "../../components/loading/Loading";
const CompanyDetailInformationCommonPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { companyById } = useSelector((state: any) => state.company);
  const { loadingCandidate, messageCandidate } = useSelector(
    (state: any) => state.candidate
  );
  const [checkFollow, setCheckFollow] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleFollowCompany = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để theo dõi công ty");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    } else {
      dispatch(
        candidateFollowJob({
          candidate_id: user?.id,
          company_id: companyById?.company?.id,
        })
      );
    }
  };
  const handleUnFollowCompany = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để theo dõi công ty");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    } else {
      dispatch(
        candidateUnFollowJob({
          candidate_id: user?.id,
          company_id: companyById?.company?.id,
        })
      );
    }
  };
  useEffect(() => {
    if (messageCandidate === `followsuccess${companyById?.company?.id}`) {
      setCheckFollow(true);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    } else if (
      messageCandidate === `unfollowsuccess${companyById?.company?.id}`
    ) {
      setCheckFollow(false);
      dispatch(candidateUpdateMessageRedux({ messageCandidate: "" }));
    }
  }, [messageCandidate]);
  useEffect(() => {
    setCheckFollow(companyById?.followed);
  }, [companyById]);
  return (
    <>
      <div className="relative bg-white w-primary max-w-full mx-auto min-h-[320px] shadow-sm">
        <div className="relative">
          <img
            src={
              companyById?.company?.background
                ? companyById?.company?.background
                : bg
            }
            className="w-full lg:h-[200px] h-[150px] object-cover rounded-t-lg"
            alt=""
          />
          <img
            src={companyById?.company?.logo ? companyById?.company?.logo : bg}
            className="absolute -bottom-12 left-20 w-[100px] h-[100px] rounded-md object-cover"
            alt=""
          />
        </div>
        <div className="lg:pl-52 lg:mt-0 mt-10 pt-5 lg:pr-5 pb-5 lg:pb-0">
          <div className="lg:px-0 px-5 flex justify-between flex-wrap lg:flex-nowrap items-center gap-5">
            <div className="">
              <Popover
                content={
                  <p className="w-[300px] max-w-[300px] font-medium">
                    {companyById?.company?.name}
                  </p>
                }
              >
                <h2 className="text-xl font-bold line-clamp-1 w-full">
                  {companyById?.company?.name}
                </h2>
              </Popover>

              <div className="flex flex-wrap lg:gap-10 gap-5 mt-3">
                <div className="flex items-center gap-2 lg:max-w-[40%]">
                  <IconLink classIcon="!w-5 !h-5"></IconLink>
                  <span className="text-sm line-clamp-1">
                    {companyById?.company?.companyLink}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconBuilding classIcon="!w-5 !h-5"></IconBuilding>
                  <span className="text-sm line-clamp-1">
                    {companyById?.company?.companySize}
                    {t("companydetail.employee")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconGroupUser classIcon="!w-5 !h-5"></IconGroupUser>
                  <span className="text-sm line-clamp-1">
                    467 {t("companydetail.follower")}
                  </span>
                </div>
              </div>
            </div>

            {checkFollow ? (
              <div
                onClick={handleUnFollowCompany}
                className={`min-w-[180px] h-11 bg-green-500 cursor-pointer hover:opacity-80 transition-all flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium`}
              >
                {loadingCandidate ? (
                  <div className="w-full">
                    <Loading></Loading>
                  </div>
                ) : (
                  <>
                    <IconCheck classIcon=""></IconCheck>
                    <span className="text-nowrap">
                      {t("companydetail.unfollow")}
                    </span>
                  </>
                )}
              </div>
            ) : (
              <div
                onClick={handleFollowCompany}
                className={`min-w-[210px] h-11 bg-primary cursor-pointer hover:opacity-80 transition-all flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium`}
              >
                {loadingCandidate ? (
                  <div className="w-full">
                    <Loading></Loading>
                  </div>
                ) : (
                  <>
                    <IconPlus></IconPlus>
                    <span className="text-nowrap">
                      {t("companydetail.follow")}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailInformationCommonPage;
