import React from "react";
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
const CompanyDetailInformationCommonPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleFollowCompany = () => {
    if (!user?.id) {
      message.info("Bạn cần đăng nhập để theo dõi công ty");
      dispatch(commonUpdateLoginRedux({ loginCheck: true }));
    }
  };
  return (
    <>
      <div className="relative bg-white w-primary max-w-full mx-auto min-h-[320px] shadow-sm">
        <div className="relative">
          <img
            src={bg}
            className="w-full lg:h-[200px] h-[150px] object-cover rounded-t-lg"
            alt=""
          />
          <img
            src={bg}
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
                    Công Ty TNHH MTV Viễn Thông Quốc Tế FPT Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Ex inventore, dolorum
                    maxime commodi debitis neque doloribus nemo rerum atque
                    dolores impedit adipisci! Voluptatum saepe expedita officia
                    facilis dignissimos nesciunt perspiciatis.
                  </p>
                }
              >
                <h2 className="text-xl font-bold line-clamp-1 w-full">
                  Công Ty TNHH MTV Viễn Thông Quốc Tế FPT Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Ex inventore, dolorum
                  maxime commodi debitis neque doloribus nemo rerum atque
                  dolores impedit adipisci! Voluptatum saepe expedita officia
                  facilis dignissimos nesciunt perspiciatis.
                </h2>
              </Popover>

              <div className="flex flex-wrap lg:gap-10 gap-5 mt-3">
                <div className="flex items-center gap-2 lg:max-w-[40%]">
                  <IconLink classIcon="!w-5 !h-5"></IconLink>
                  <span className="text-sm line-clamp-1">
                    https://www.concentrix.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconBuilding classIcon="!w-5 !h-5"></IconBuilding>
                  <span className="text-sm line-clamp-1">
                    1000+ {t("companydetail.employee")}
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
            <div
              onClick={handleFollowCompany}
              className="cursor-pointer min-w-[210px] hover:opacity-80 transition-all flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-medium"
            >
              <IconPlus></IconPlus>
              <span>{t("companydetail.follow")}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailInformationCommonPage;
