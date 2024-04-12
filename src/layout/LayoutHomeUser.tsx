import React, { useState } from "react";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { Outlet } from "react-router-dom";
import LoginPage from "../page/CommonPage/LoginPage";

const LayoutHomeUser: React.FC = () => {
  const [checkLogin, setCheckLogin] = useState(false);

  return (
    <div className="">
      <LoginPage
        checkLogin={checkLogin}
        actionLogin={setCheckLogin}
        claseNameOverlay="opacity-40"
      ></LoginPage>
      <LayoutHomeUserHeader actionLogin={setCheckLogin}></LayoutHomeUserHeader>
      <div className="bg-blue-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutHomeUser;
