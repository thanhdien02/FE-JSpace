import React, { useEffect } from "react";

import HomeBannerPage from "../../module/common/HomeBannerPage";
import HomeListJobPage from "../../module/common/HomeListJobPage";
import HomeListCompanyPage from "../../module/common/HomeListCompanyPage";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="min-h-[100px] ">
        <HomeBannerPage></HomeBannerPage>
        <HomeListJobPage></HomeListJobPage>
        {/* <HomeListProduct></HomeListProduct> */}
        <HomeListCompanyPage></HomeListCompanyPage>
      </div>
    </>
  );
};

export default HomePage;
