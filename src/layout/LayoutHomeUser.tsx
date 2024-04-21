import React, { useEffect, useState } from "react";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { Outlet } from "react-router-dom";
import LoginPage from "../page/CommonPage/LoginPage";
import { useSelector } from "react-redux";

const LayoutHomeUser: React.FC = () => {
  const { accessToken } = useSelector((state: any) => state.auth);
  const [checkLogin, setCheckLogin] = useState(false);

  useEffect(() => {
    if (accessToken !== "") {
      setCheckLogin(false);
    }
  }, [accessToken]);
  return (
    <div className="">
      <LoginPage
        checkLogin={checkLogin}
        actionLogin={setCheckLogin}
        claseNameOverlay="opacity-40"
      ></LoginPage>
      <LayoutHomeUserHeader actionLogin={setCheckLogin}></LayoutHomeUserHeader>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutHomeUser;
