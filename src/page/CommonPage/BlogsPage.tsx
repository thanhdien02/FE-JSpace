import React from "react";
import logo from "../../assets/logo3.png";
import LogoCarousel from "../../components/companylogo/LogoCarousel";
const BlogsPage: React.FC = () => {
  return (
    <>
      <div>
        <LogoCarousel logoSrc={logo} />
      </div>
    </>
  );
};

export default BlogsPage;
