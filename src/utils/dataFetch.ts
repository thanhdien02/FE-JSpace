import { LogoutOutlined } from "@ant-design/icons";
import React from "react";
import IconIdentification from "../components/icons/IconIdentification";
import IconText from "../components/icons/IconText";

export const dataCandidateMenu: any = [
  {
    key: "1",
    title: "Quản lí thông tin",
    path: "/manage",
    icon: React.createElement(IconIdentification),
  },
  {
    key: "2",
    title: "Quản lí CV",
    path: "/list-resume",
    icon: React.createElement(IconText),
  },
  {
    key: "3",
    title: "Đăng xuất",
    path: "/",
    icon: React.createElement(LogoutOutlined),
  },
];
