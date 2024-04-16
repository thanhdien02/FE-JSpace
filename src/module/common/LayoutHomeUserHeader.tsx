import React from "react";
import logo from "../../assets/logo3.png";
import { useSelector } from "react-redux";
import IconChervonDown from "../../components/icons/IconChervonDown";
import IconBell from "../../components/icons/IconBell";
import ButtonMenu from "../../components/common/ButtonMenu";
import HeaderItem from "../../components/common/HeaderItem";

interface PropComponent {
  actionLogin?: any;
}
const LayoutHomeUserHeader: React.FC<PropComponent> = ({ actionLogin }) => {
  const { user, accessToken } = useSelector((state: any) => state.auth);
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
  return (
    <>
      <header className="flex lg:px-10 px-5 pb-3 pt-4 justify-between items-center">
        <div className="flex items-center gap-5">
          <img src={logo} alt="" className="w-[45px] object-cover" />
          <ul className="lg:flex hidden gap-2">
            <HeaderItem title="Tìm việc" path="/"></HeaderItem>
            <HeaderItem title="Công ty" path="/companys"></HeaderItem>
            <HeaderItem title="Bài biết" path="/blogs"></HeaderItem>
          </ul>
        </div>
        <div className="">
          {accessToken === "" ? (
            <div className="flex justify-center items-center gap-1">
              <button
                className="px-2 py-2 hover:text-primary"
                onClick={() => actionLogin(true)}
              >
                Đăng nhập
              </button>
              <span className="w-[2px] h-[25px] bg-slate-700/30"></span>
              <button className="px-2 py-2 hover:text-primary">
                Đăng bài tuyển dụng
              </button>
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
                <section className="candidate-menu-manage hidden z-10 absolute w-[380px] min-h-[300px] top-10 right-0 text-black cursor-default">
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
                          Mã ứng viên: #83283283
                        </p>
                        <p className="font-semibold text-gray-400">
                          {" "}
                          {user?.email}
                        </p>
                      </div>
                    </div>

                    <span className="w-full h-[1px] bg-slate-300"></span>
                    <ButtonMenu
                      title="Thông tin cá nhân"
                      path="/manage"
                    ></ButtonMenu>
                    <ButtonMenu title="Công việc đã lưu"></ButtonMenu>
                    <ButtonMenu
                      title="Quản lí hồ sơ xin việc"
                      path="/upload-resume"
                    ></ButtonMenu>
                    <ButtonMenu title="Đăng xuất"></ButtonMenu>
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
