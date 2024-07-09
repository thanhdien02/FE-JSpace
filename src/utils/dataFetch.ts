import React from "react";
import IconIdentification from "../components/icons/IconIdentification";
import IconText from "../components/icons/IconText";
import IconBriefCaseOutline from "../components/icons/IconBriefCaseOutline";
import IconHeart from "../components/icons/IconHeart";
import IconBuilding from "../components/icons/IconBuilding";
import IconLogout from "../components/icons/IconLogout";

export const dataCandidateMenu: any = [
  {
    key: "1",
    title: "menu.information",
    path: "/manage/information-account",
    icon: React.createElement(IconIdentification),
  },
  {
    key: "2",
    title: "menu.cv",
    path: "/list-resume",
    icon: React.createElement(IconText),
  },
  {
    key: "3",
    title: "menu.save",
    path: "/manage/job-save",
    icon: React.createElement(IconHeart),
  },
  {
    key: "4",
    title: "menu.apply",
    path: "/manage/job-apply",
    icon: React.createElement(IconBriefCaseOutline),
  },
  {
    key: "5",
    title: "menu.follow",
    path: "/manage/company-followed",
    icon: React.createElement(IconBuilding),
  },
  {
    key: "6",
    title: "logout",
    path: "/",
    icon: React.createElement(IconLogout),
  },
];
export const dataCandidateMenuResponsive: any = [
  {
    key: "1",
    title: "Quản lí thông tin",
    path: "/manage/information-account",
  },
  {
    key: "2",
    title: "Quản lí CV",
    path: "/list-resume",
  },
  {
    key: "3",
    title: "Quản lí công việc đã lưu",
    path: "/manage/job-save",
  },
  {
    key: "4",
    title: "Quản lí công việc đã ứng tuyển",
    path: "/manage/job-apply",
  },
  {
    key: "5",
    title: "Quản lí công ty đã theo dõi",
    path: "/manage/company-followed",
  },
];
export const dataSalary: any = [
  {
    value: "0-2000000",
    label: "Dưới 2 triệu",
  },
  {
    value: "2000000-5000000",
    label: "Từ 2 - 5 triệu",
  },
  {
    value: "6000000-10000000",
    label: "Từ 6 - 10 triệu",
  },
  {
    value: "11000000-20000000",
    label: "Từ 11 - 20 triệu",
  },
  {
    value: "21000000-30000000",
    label: "Từ 21 - 30 triệu",
  },
  {
    value: "31000000-40000000",
    label: "Từ 31 - 40 triệu",
  },
  {
    value: "41000000-50000000",
    label: "Từ 41 - 50 triệu",
  },
  {
    value: "50000000-999000000",
    label: "Trên 50 triệu",
  },
];
