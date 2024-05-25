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

export const dataJobs: any = [
  {
    id: "1",
    title: "Lập Trình Viên (.NET) Đi Làm Ngay",
    salary: "8 - 25 triệu",
    location: "Hà Nội",
    experience: "1 năm",
    closeDate: "06/06/2024",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Essential Responsibilities for the Development project:
    • Read & understand assigned product requirements, technical designs, functional specifications, and defect descriptions.
    • Implement new features, integrations, enhancements, and fix issues through coding, debugging, unit testing, and reporting with high productivity and quality.
    • Create, support, and maintain project document.
    • Co-operate with other team members to complete assigned tasks on time with high quality.
    • Be proactive in communication with team lead or direct manager for change requests, defects, risks and opportunities, etc.`,
  },
  {
    id: "2",
    title:
      "Lập Trình Viên - Middle Odoo Developer - Lương Upto 30M - Đi Làm Ngay",
    salary: "10 - 25 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Essential Responsibilities for the Production Support project:
    • Read & understand simple assigned production issues.
    • Reproduce the issues and investigate the root cause of the issues.
    • Discuss with team leader or direct manager about the solution to fix the issues.
    • Fix the issues and update status on bug tracking system.
    • Create, support, and maintain project document.
    • Co-operate with other team members to complete assigned tasks on time with high quality.
    • Be proactive in communication with team lead or direct manager for solutions, risks and opportunities, etc.`,
  },
  {
    id: "3",
    title: "Lập Trình Viên FULLSTACK (.NET & ANGULAR )",
    salary: "10 - 25 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Essential Responsibilities for the Production Support project:
    • Read & understand simple assigned production issues.
    • Reproduce the issues and investigate the root cause of the issues.
    • Discuss with team leader or direct manager about the solution to fix the issues.
    • Fix the issues and update status on bug tracking system.
    • Create, support, and maintain project document.
    • Co-operate with other team members to complete assigned tasks on time with high quality.
    • Be proactive in communication with team lead or direct manager for solutions, risks and opportunities, etc.`,
  },
  {
    id: "4",
    title: "Senior Java Developer",
    salary: "10 - 25 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Essential Responsibilities for the Production Support project:
    • Read & understand simple assigned production issues.
    • Reproduce the issues and investigate the root cause of the issues.
    • Discuss with team leader or direct manager about the solution to fix the issues.
    • Fix the issues and update status on bug tracking system.
    • Create, support, and maintain project document.
    • Co-operate with other team members to complete assigned tasks on time with high quality.
    • Be proactive in communication with team lead or direct manager for solutions, risks and opportunities, etc.`,
  },
  {
    id: "5",
    title: "Java Software Engineer (Tiếng Nhật)",
    salary: "10 - 25 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Essential Responsibilities for the Production Support project:
    • Read & understand simple assigned production issues.
    • Reproduce the issues and investigate the root cause of the issues.
    • Discuss with team leader or direct manager about the solution to fix the issues.
    • Fix the issues and update status on bug tracking system.
    • Create, support, and maintain project document.
    • Co-operate with other team members to complete assigned tasks on time with high quality.
    • Be proactive in communication with team lead or direct manager for solutions, risks and opportunities, etc.`,
  },
  {
    id: "6",
    title: "Lập Trình Viên Java (Từ 2 Năm Kinh Nghiệm)",
    salary: "10 - 12 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Mô tả công việc
    • Provide on-going support to business users for the area you will be assigned to.
    
    • Help gather & analyze business user requirements.
    
    • Responsible for developing & implementing solutions for the area you will be assigned to.
    
    • Support solution design by providing insights on capabilities and best practices of your area.
    
    • Work closely with internal teams to implement end-to-end solutions.
    
    • Handle end-to-end project coordination and work with the project management & QA team to ensure successful delivery of the solution.`,
  },
  {
    id: "7",
    title: "Java Developer",
    salary: "10 - 13 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Essential Responsibilities for the Production Support project:
    • Read & understand simple assigned production issues.
    • Reproduce the issues and investigate the root cause of the issues.
    • Discuss with team leader or direct manager about the solution to fix the issues.
    • Fix the issues and update status on bug tracking system.
    • Create, support, and maintain project document.
    • Co-operate with other team members to complete assigned tasks on time with high quality.
    • Be proactive in communication with team lead or direct manager for solutions, risks and opportunities, etc.`,
  },
  {
    id: "8",
    title: "Java Developer (Junior) ",
    salary: "10 - 13 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Education, Experience and Other Skills:
    • 4-year college degree in computer science or related fields is preferred.
    • Relevant certificates in Software, Hardware or Networking Engineering are plus.
    • Solid knowledge in Object Oriented Programming.
    • Experience in at least one of programming languages such as JAVA, C/C++, Visual Basic, PHP, etc.
    • Experience in at least one of relational database systems such as Oracle, MySQL or MS SQL Server, etc.
    • Experience in Web development and User Interface Design is a plus.
    • Experience in report tools (such as BI Publisher Report, MS SQL Report, Crystal Report, Jasper Report, etc.) is a plus.
    • Experience in working with Cloud Service (Oracle, MS Azure, Amazon, IBM, etc.) is a plus.
    • Experience in working with on-shore and remote teams is preferred.
    • Have good English skills (equivalent TOEIC 400), including reading, writing, listening and speaking.`,
  },
  {
    id: "9",
    title: "Embedded Software (Java Core, OOP, Python)",
    salary: "8 - 13 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
  },
  {
    id: "10",
    title: "Junior/Middle Java Developer - HCM",
    salary: "10 - 14 triệu",
    location: "Hồ Chí Minh",
    experience: "2 năm",
    closeDate: "06/06/2025",
    nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
    quantity: 3,
    typeJob: "Toàn thời gian",
    rank: "Nhân viên",
    skills: ["Javascript", "HTML", "CSS", "HTTP"],
    gender: "Không yêu cầu",
    description: `Education, Experience and Other Skills:
    • 4-year college degree in computer science or related fields is preferred.
    • Relevant certificates in Software, Hardware or Networking Engineering are plus.
    • Solid knowledge in Object Oriented Programming.
    • Experience in at least one of programming languages such as JAVA, C/C++, Visual Basic, PHP, etc.
    • Experience in at least one of relational database systems such as Oracle, MySQL or MS SQL Server, etc.
    • Experience in Web development and User Interface Design is a plus.
    • Experience in report tools (such as BI Publisher Report, MS SQL Report, Crystal Report, Jasper Report, etc.) is a plus.
    • Experience in working with Cloud Service (Oracle, MS Azure, Amazon, IBM, etc.) is a plus.
    • Experience in working with on-shore and remote teams is preferred.
    • Have good English skills (equivalent TOEIC 400), including reading, writing, listening and speaking.`,
  },
];
export const dataDefaultJob = {
  id: "10",
  title: "Junior/Middle Java Developer - HCM",
  salary: "10 - 14 triệu",
  location: "Hồ Chí Minh",
  experience: "2 năm",
  closeDate: "06/06/2025",
  nameCompany: "Công ty cổ phần công nghệ và giải pháp trực tuyến Toàn Cầu",
  quantity: 3,
  typeJob: "Toàn thời gian",
  rank: "Nhân viên",
  skills: ["Javascript", "HTML", "CSS", "HTTP"],
  gender: "Không yêu cầu",
  description: `Education, Experience and Other Skills:
  • 4-year college degree in computer science or related fields is preferred.
  • Relevant certificates in Software, Hardware or Networking Engineering are plus.
  • Solid knowledge in Object Oriented Programming.
  • Experience in at least one of programming languages such as JAVA, C/C++, Visual Basic, PHP, etc.
  • Experience in at least one of relational database systems such as Oracle, MySQL or MS SQL Server, etc.
  • Experience in Web development and User Interface Design is a plus.
  • Experience in report tools (such as BI Publisher Report, MS SQL Report, Crystal Report, Jasper Report, etc.) is a plus.
  • Experience in working with Cloud Service (Oracle, MS Azure, Amazon, IBM, etc.) is a plus.
  • Experience in working with on-shore and remote teams is preferred.
  • Have good English skills (equivalent TOEIC 400), including reading, writing, listening and speaking.`,
};
