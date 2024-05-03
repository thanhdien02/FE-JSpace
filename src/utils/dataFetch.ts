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
export const dataSalary: any = [
  {
    value: "1",
    label: "Dưới 2 triệu",
  },
  {
    value: "2",
    label: "Từ 2 - 5 triệu",
  },
  {
    value: "3",
    label: "Từ 5 - 10 triệu",
  },
  {
    value: "4",
    label: "Từ 10 - 20 triệu",
  },
];
export const dataAddress: any = [
  {
    value: "1",
    label: "TP HCM",
  },
  {
    value: "2",
    label: "Đồng Tháp",
  },
  {
    value: "3",
    label: "Hà Nội",
  },
  {
    value: "4",
    label: "Cần Thơ",
  },
];
