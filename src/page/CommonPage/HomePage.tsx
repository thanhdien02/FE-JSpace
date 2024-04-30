import React from "react";

import HomeBannerPage from "../../module/common/HomeBannerPage";
import HomeListJobPage from "../../module/common/HomeListJobPage";
import HomeListCompanyPage from "../../module/common/HomeListCompanyPage";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="min-h-[1500px] ">
        <HomeBannerPage></HomeBannerPage>
        <HomeListJobPage></HomeListJobPage>
        <HomeListCompanyPage></HomeListCompanyPage>
      </div>
    </>
  );
};

export default HomePage;
