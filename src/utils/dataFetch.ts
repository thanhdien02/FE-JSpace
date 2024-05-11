import { LogoutOutlined } from "@ant-design/icons";
import React from "react";
import IconIdentification from "../components/icons/IconIdentification";
import IconText from "../components/icons/IconText";
import IconBriefCaseOutline from "../components/icons/IconBriefCaseOutline";

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
    title: "Quản lí công việc",
    path: "/manage/jobs",
    icon: React.createElement(IconBriefCaseOutline),
  },
  {
    key: "4",
    title: "Đăng xuất",
    path: "/",
    icon: React.createElement(LogoutOutlined),
  },
];
export const dataSalary: any = [
  {
    value: "duoi2",
    label: "Dưới 2 triệu",
  },
  {
    value: "2-5",
    label: "Từ 2 - 5 triệu",
  },
  {
    value: "6-10",
    label: "Từ 5 - 10 triệu",
  },
  {
    value: "11-20",
    label: "Từ 10 - 20 triệu",
  },
  {
    value: "21-50",
    label: "Từ 21 - 50 triệu",
  },
];
export const dataExperience: any = [
  {
    value: "khongyeucau",
    label: "Không yêu cầu",
  },
  {
    value: "1nam",
    label: "1 năm kinh nghiệm",
  },
  {
    value: "2nam",
    label: "2 năm kinh nghiệm",
  },
  {
    value: "3nam",
    label: "3 năm kinh nghiệm",
  },
  {
    value: "4nam",
    label: "4 năm kinh nghiệm",
  },
  {
    value: "5nam",
    label: "5 năm kinh nghiệm",
  },
];
export const dataAddress: any = [
  {
    value: "hcm",
    label: "TP HCM",
  },
  {
    value: "dongthap",
    label: "Đồng Tháp",
  },
  {
    value: "hanoi",
    label: "Hà Nội",
  },
  {
    value: "cantho",
    label: "Cần Thơ",
  },
];
export const dataTimeWork: any = [
  {
    value: "fulltime",
    label: "Full time",
  },
  {
    value: "parttime",
    label: "Part time",
  },
];
export const dataHighPosition: any = [
  {
    value: "giamdoc",
    label: "Giám đốc",
  },
  {
    value: "truongtruong",
    label: "Trường phòng",
  },
  {
    value: "phophong",
    label: "Phó phòng",
  },
  {
    value: "truongnhom",
    label: "Trưởng nhóm",
  },
];
export const dataSkills: any = [
  {
    value: "JAVA",
    label: "JAVA",
  },
  {
    value: "React JS",
    label: "React JS",
  },
  {
    value: "TypeScript",
    label: "TypeScript",
  },
  {
    value: "Spring Boot",
    label: "Spring Boot",
  },
  {
    value: "Javascript",
    label: "Javascript",
  },
  {
    value: "HTML",
    label: "HTML",
  },
  {
    value: "CSS",
    label: "CSS",
  },
  {
    value: "Vue",
    label: "Vue",
  },
];
