import React from "react";
import logo from "../../assets/logo3.png";
import { NavLink } from "react-router-dom";
const LayoutHomeUserFooter: React.FC = () => {
  return (
    <>
      <footer className="w-primary max-w-full mx-auto pt-10">
        <div className="flex gap-10 justify-between">
          <div className="flex flex-col w-[34%] gap-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                className="w-[37px] h-[37px] object-cover rounded-full"
              />
              <strong className="text-xl font-bold">JSPACE</strong>
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
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "222 Lê Văn Sỹ, Phường 14, Quận 3, Thành phố Hồ Chí Minh"
                )}`}
                className="hover:underline transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                222 Lê Văn Sỹ, Phường 14, Quận 3, Thành phố Hồ Chí Minh
              </a>
              <p className="text-black">
                Điện thoại: (+84) - (28) - 38352020 Fax: (+84) - (28) - 38398946
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-medium">DANH MỤC</h3>
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm"
              >
                Trang chủ
              </NavLink>
              <NavLink
                to="/jobs"
                className="hover:underline transition-all text-sm"
              >
                Tìm việc
              </NavLink>
              <NavLink
                to="/companys"
                className="hover:underline transition-all text-sm"
              >
                Công ty
              </NavLink>
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm"
              >
                Hỗ trợ
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-medium">SẢN PHẨM</h3>
            <ul className="flex flex-col gap-1">
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm"
              >
                Gói tuyển dụng
              </NavLink>
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm"
              >
                Tìm ứng viên
              </NavLink>
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm"
              >
                Đăng tin
              </NavLink>
              <NavLink
                to="/"
                className="hover:underline transition-all text-sm"
              >
                Dịch vụ
              </NavLink>
            </ul>
          </div>
          <div className="w-[30%]">
            <h2 className="font-semibold uppercase">Thông tin liên hệ</h2>
            <p className="mt-5 text-sm">
              Nhập email của bạn để chúng tôi có thể thông báo những thông tin
              mới nhất.
            </p>
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                onChange={() => {}}
                className="px-4 py-2 rounded placeholder:text-sm outline-none border border-solid border-slate-200"
                placeholder="join@gmail.com"
              />
              <button
                className="px-6 py-2 rounded bg-gray-300 font-medium hover:opacity-80 transition-all"
                type="button"
              >
                Gửi
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
            Điều khoản & chính sách
          </a>
        </div>
      </div>
    </>
  );
};

export default LayoutHomeUserFooter;
