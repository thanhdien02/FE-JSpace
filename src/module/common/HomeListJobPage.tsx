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
import { Select, Skeleton } from "antd";
import CardHomeJobPage from "../../components/card/CardHomeJobPage";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { jobGetHomeJob } from "../../store/job/job-slice";
import { chunkArray } from "../../utils/common-function";

const HomeListJobPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { homeJobs, loadingJob } = useSelector((state: any) => state.job);
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="lg:px-0 px-3 w-primary max-w-full mx-auto py-3">
          <h3 className="font-bold text-2xl text-primary lg:my-3 my-2">
            {t("home.jobpupolar")}
          </h3>
          <div className="pb-5">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Tìm kiếm theo"
              className="h-10"
              optionFilterProp="children"
              options={[
                {
                  key: "1",
                  label: "Mức lương cao nhất",
                },
                {
                  key: "2",
                  label: "Công việc nổi bật",
                },
                {
                  key: "3",
                  label: "Theo thời gian",
                },
              ]}
            />
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            // loop
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper-job hidden lg:block"
          >
            {loadingJob || !homeJobs.length ? (
              <Skeleton />
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
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            // loop
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
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
