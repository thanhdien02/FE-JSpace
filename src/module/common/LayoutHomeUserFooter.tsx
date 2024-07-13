import React from "react";
import logo from "../../assets/logo1.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const LayoutHomeUserFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="w-primary max-w-full mx-auto pt-10 py-3">
        <div className="flex lg:gap-10 gap-3 justify-between flex-wrap md:px-20 lg:px-0 px-5">
          <div className="flex flex-col lg:w-[30%] gap-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="w-[100px]" />
            </div>
            <div className="text-sm text-black flex flex-col gap-1 mt-1">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "280 An Dương Vương, Phường 4, Quận 5, Thành Phố Hồ Chí Minh"
                )}`}
                className="hover:underline transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                280 An Dương Vương, Phường 4, Quận 5, Thành Phố Hồ Chí Minh
              </a>
              <p className="text-black">
                Điện thoại: (+84) - (28) - 38352020 Fax: (+84) - (28) - 38398946
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <h3 className="font-medium"> {t("footer.category")}</h3>
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm text-[#6A6E78]"
              >
                {t("home.name")}
              </NavLink>
              <NavLink
                to="/jobs"
                className="hover:underline transition-all text-sm text-[#6A6E78]"
              >
                {t("findjob.name")}
              </NavLink>
              <NavLink
                to="/companys"
                className="hover:underline transition-all text-sm text-[#6A6E78]"
              >
                {t("company.name")}
              </NavLink>
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm text-[#6A6E78]"
              >
                {t("support.name")}
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-medium"> {t("footer.product")}</h3>
            <ul className="flex flex-col gap-1">
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm text-[#6A6E78]"
              >
                {t("footer.recruitmentpackage")}
              </NavLink>
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm text-[#6A6E78]"
              >
                {t("footer.fincandidate")}
              </NavLink>
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm text-[#6A6E78]"
              >
                {t("footer.postjob")}
              </NavLink>
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm text-[#6A6E78]"
              >
                {t("footer.service")}
              </NavLink>
            </ul>
          </div>
          <div className="lg:w-[27%]">
            <h2 className="font-semibold uppercase">{t("footer.contact")}</h2>
            <p className="mt-5 text-sm text-[#6A6E78]">
              {t("footer.descriptcontact")}
            </p>
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                onChange={() => {}}
                className="px-4 py-2 rounded placeholder:text-sm outline-none border border-solid border-slate-200"
                placeholder="join@gmail.com"
              />
              <button
                className="px-6 py-2 rounded bg-primary text-white font-medium hover:opacity-80 transition-all"
                type="button"
              >
                {t("footer.send")}
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-primary max-w-full mx-auto flex justify-between items-center py-5">
        <div className="grid grid-cols-2 gap-4">
          <span>©2024</span>
          <span>JSPACE</span>
        </div>
        <div className="">
          <a href="#" className="hover:underline transition-all">
            {t("footer.policy")}
          </a>
        </div>
      </div>
    </>
  );
};
export default LayoutHomeUserFooter;
