import React, { useEffect } from "react";
import "./style.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import IconChervonRight from "../../components/icons/IconChervonRight";
import { useDispatch } from "react-redux";
import { companyGetListLogo } from "../../store/company/company-slice";
import { useSelector } from "react-redux";

interface IParallax {
  listImages?: any;
}
const Parallax: React.FC<IParallax> = ({ listImages }) => {
  const navigate = useNavigate();
  return (
    <div className="logos flex">
      <div className="logos-slide flex">
        {listImages?.length > 0 &&
          listImages?.map((item: any, index: number) => (
            <img
              src={item?.logo}
              alt=""
              key={index}
              onClick={() => navigate(`/companys/${item?.id}`)}
            />
          ))}
      </div>
    </div>
  );
};
const HomeListCompanyPage: React.FC = () => {
  const { listLogo } = useSelector((state: any) => state.company);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(companyGetListLogo());
  }, []);
  return (
    <>
      <div>
        <div className="w-primary max-w-full mx-auto py-3 ">
          <div className="flex justify-between items-baseline">
            <h3 className="lg:px-0 px-5 font-bold text-2xl my-3">
              {t("home.companypupolar")}
            </h3>
            <NavLink
              to="/companys"
              className="flex gap-1 cursor-pointer hover:underline items-center"
            >
              <span className="font-medium">{t("seeall")}</span>
              <IconChervonRight classIcon="!w-5 !h-5"></IconChervonRight>
            </NavLink>
          </div>
          <div className="lg:px-0 px-5 lg:grid lg:grid-cols-5 grid-cols-1 gap-5 mt-6">
            {listLogo?.length > 0 &&
              listLogo.slice(0, 5).map((item: any) => (
                <div
                  key={item?.id}
                  className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200"
                >
                  <img
                    src={item?.logo}
                    onClick={() => navigate(`/companys/${item?.id}`)}
                    alt=""
                    className="m-auto lg:w-[80%] w-full lg:h-[50%] h-[70%] object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
        <Parallax listImages={listLogo}></Parallax>
      </div>
    </>
  );
};

export default HomeListCompanyPage;
