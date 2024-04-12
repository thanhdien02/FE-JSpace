import React from "react";
import logo from "../../assets/logo3.png";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

interface PropComponent {
  actionLogin?: any;
}
const LayoutHomeUserHeader: React.FC<PropComponent> = ({ actionLogin }) => {
  return (
    <>
      <header className="flex lg:px-10 px-5 pb-3 pt-4 justify-between items-center ">
        <div className="flex items-center gap-5">
          <img src={logo} alt="" className="w-[45px] object-cover" />
          <ul className="lg:flex hidden gap-2">
            <li className="">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex gap-4 pl-4 rounded-lg hover:text-primary"
                    : " flex gap-4 text-gray-600 pl-4 rounded-lg hover:text-primary"
                }
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/companys"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex gap-4 pl-4 rounded-lg hover:text-primary"
                    : " flex gap-4 text-gray-600 pl-4 rounded-lg hover:text-primary"
                }
              >
                Công ty
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex gap-4 pl-4 rounded-lg hover:text-primary"
                    : " flex gap-4 text-gray-600 pl-4 rounded-lg hover:text-primary"
                }
              >
                Bài viết
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <UserOutlined
            onClick={() => actionLogin(true)}
            style={{ fontSize: "20px", color: "#08c" }}
            className="hover:text-black transition-all hover:bg-blue-100 p-2 rounded-full cursor-pointer"
          />
        </div>
      </header>
    </>
  );
};

export default LayoutHomeUserHeader;
