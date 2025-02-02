import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Select } from "antd";
import CardHomeJobPage from "../../components/card/CardHomeJobPage";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { jobGetHomeJob } from "../../store/job/job-slice";
import { chunkArray } from "../../utils/common-function";
import IconChervonRight from "../../components/icons/IconChervonRight";
import { NavLink } from "react-router-dom";
import CardHomeJobPageSkeleton from "../../components/skeleton/CardHomeJobPageSkeleton";

const HomeListJobPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { homeJobs, loadingJob } = useSelector((state: any) => state.job);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectfilter, setSelectfilter] = useState<any>(null);
  const [dataJob, setDataJob] = useState<any>(null);
  const [dataJobPhone, setDataJobPhone] = useState<any>(null);
  useEffect(() => {
    dispatch(jobGetHomeJob({ candidate_id: user?.id, size: 27 }));
  }, [user?.id]);
  useEffect(() => {
    if (homeJobs?.length > 0) {
      setDataJob(chunkArray(homeJobs, 9));
      setDataJobPhone(chunkArray(homeJobs, 3));
    }
  }, [homeJobs]);
  const handleChangeFilter = (value: any) => {
    setSelectfilter(value);
    let selectBy = "";
    if (value == "2") {
      selectBy = "asc";
    } else if (value == "3") {
      selectBy = "desc";
    }
    dispatch(
      jobGetHomeJob({ candidate_id: user?.id, size: 27, closeDate: selectBy })
    );
  };
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="lg:px-0 px-3 w-primary max-w-full mx-auto py-3">
          <h3 className="font-bold text-2xl  lg:my-3 my-2">
            {t("home.jobpupolar")}
          </h3>
          <div className="pb-5 flex justify-between items-baseline">
            <Select
              showSearch
              filterOption={(input: string, option: any) =>
                ((option?.label ?? "") as string)
                  .toLowerCase()
                  .includes((input ?? "").toLowerCase())
              }
              value={selectfilter}
              allowClear
              style={{ width: 200 }}
              placeholder="Tìm kiếm theo"
              className="h-10"
              optionFilterProp="children"
              options={[
                {
                  value: "2",
                  label: "Tin tuyển dụng cũ nhất",
                },
                {
                  value: "3",
                  label: "Tin tuyển dụng mới nhất",
                },
              ]}
              onChange={handleChangeFilter}
            />
            <NavLink
              to="/jobs"
              className="flex gap-1 cursor-pointer hover:underline items-center"
            >
              <span className="font-medium">{t("seeall")}</span>
              <IconChervonRight classIcon="!w-5 !h-5"></IconChervonRight>
            </NavLink>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper-job hidden lg:block"
          >
            {loadingJob || !homeJobs.length ? (
              <div className="grid gap-4 grid-cols-3 bg-gray-100">
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
                <CardHomeJobPageSkeleton></CardHomeJobPageSkeleton>
              </div>
            ) : (
              <>
                {dataJob?.length > 0 &&
                  dataJob?.map((item: any) => (
                    <SwiperSlide className="ease-linear" key={uuidv4()}>
                      <div className="grid gap-4 grid-cols-3 bg-gray-100">
                        {item?.length > 0 &&
                          item?.map((item: any) => (
                            <CardHomeJobPage
                              key={uuidv4()}
                              item={item}
                            ></CardHomeJobPage>
                          ))}
                      </div>
                    </SwiperSlide>
                  ))}
              </>
            )}
          </Swiper>

          {/* Phone */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper-job lg:hidden block"
          >
            {dataJobPhone?.length > 0 &&
              dataJobPhone?.map((item: any) => (
                <SwiperSlide className="ease-linear" key={uuidv4()}>
                  <div className="grid gap-4 grid-rows-3 bg-gray-100">
                    {item?.length > 0 &&
                      item?.map((item: any) => (
                        <CardHomeJobPage
                          key={uuidv4()}
                          item={item}
                        ></CardHomeJobPage>
                      ))}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeListJobPage;
