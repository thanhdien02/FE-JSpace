import React from "react";
import logo from "../../assets/logo3.png";
import { useSelector } from "react-redux";
import IconChervonDown from "../../components/icons/IconChervonDown";
import IconBell from "../../components/icons/IconBell";
import HeaderItem from "../../components/common/HeaderItem";
import { NavLink } from "react-router-dom";
import CandidateMenu from "../candidates/CandidateMenu";
import { dataCandidateMenu } from "../../utils/dataFetch";
import { useDispatch } from "react-redux";
import { authLogout } from "../../store/auth/auth-slice";

interface PropComponent {
  actionLogin?: any;
}
const LayoutHomeUserHeader: React.FC<PropComponent> = ({ actionLogin }) => {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleMouseOverCandidateMenu = () => {
    const elementMouseOver: any = document.querySelector(
      ".candidate-menu-manage"
    );
    if (elementMouseOver) {
      elementMouseOver.style.display = "block";
    }
  };
  const handleMouseLeaveCandidateMenu = () => {
    const elementMouseOver: any = document.querySelector(
      ".candidate-menu-manage"
    );
    if (elementMouseOver) {
      elementMouseOver.style.display = "none";
    }
  };
  const handleCandidateMenu: any = (e: any) => {
    if (e.title === "Đăng xuất") {
      dispatch(authLogout());
    }
  };
  return (
    <>
      <header className="flex lg:px-10 px-5 pb-3 pt-4 justify-between items-center shadow-md">
        <div className="flex items-center gap-5">
          <NavLink to="/">
            <img src={logo} alt="" className="w-[45px] object-cover" />
          </NavLink>
          <ul className="lg:flex hidden gap-2">
            <HeaderItem title="Tìm việc" path="/"></HeaderItem>
            <HeaderItem title="Công ty" path="/companys"></HeaderItem>
            <HeaderItem title="Bài biết" path="/blogs"></HeaderItem>
          </ul>
        </div>
        <div className="">
          {accessToken === "" ? (
            <div className="xl:flex hidden justify-center items-center gap-1">
              <button
                className="px-2 py-2 hover:text-primary"
                onClick={() => actionLogin(true)}
              >
                Đăng nhập
              </button>
              <span className="w-[2px] h-[25px] bg-slate-700/30"></span>
              <a
                className="px-2 py-2 hover:text-primary"
                href="https://jspace-employer.vercel.app/"
                target="_blank"
              >
                Đăng bài tuyển dụng
              </a>
            </div>
          ) : (
            <div className="flex gap-5 justify-between items-center">
              <IconBell className="p-2 bg-blue-200 rounded-full text-primary cursor-pointer hover:opacity-80 transition-all"></IconBell>
              <div
                onMouseOver={handleMouseOverCandidateMenu}
                onMouseLeave={handleMouseLeaveCandidateMenu}
                className="relative flex justify-center items-center gap-3 border border-solid rounded-lg py-2 px-4 border-blue-200 hover:border-primary hover:bg-blue-100 hover:text-primary cursor-pointer transition-all"
              >
                <img
                  src={user?.picture}
                  alt=""
                  className="w-[35px] h-[35px] rounded-full"
                />
                <h3 className="text-line-clamp font-semibold max-w-[150px]">
                  {user?.name}
                </h3>
                <IconChervonDown></IconChervonDown>
                {/*  */}
                <section className="candidate-menu-manage hidden z-20 absolute w-[380px] min-h-[300px] top-10 right-0 text-black cursor-default">
                  <div className="flex flex-col bg-white gap-3 w-full h-full mt-[14px] p-5 shadow-md rounded-lg">
                    <div className="flex gap-8">
                      <img
                        src={user?.picture}
                        alt=""
                        className="w-[40px] h-[40px] rounded-lg"
                      />
                      <div className="text-sm">
                        <h3 className="font-semibold text-line-clamp max-w-[250px]">
                          {user?.name}
                        </h3>
                        <p className="font-semibold text-gray-400">
                          Mã ứng viên: #{user?.id}
                        </p>
                        <p className="font-semibold text-gray-400">
                          {" "}
                          {user?.email}
                        </p>
                      </div>
                    </div>
                    <span className="w-full h-[1px] bg-slate-300"></span>
                    <CandidateMenu
                      data={dataCandidateMenu}
                      onClick={handleCandidateMenu}
                    ></CandidateMenu>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default LayoutHomeUserHeader;
