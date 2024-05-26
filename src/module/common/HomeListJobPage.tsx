import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

const HomeListJobPage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { homeJobs, loadingJob } = useSelector((state: any) => state.job);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.id) {
      dispatch(jobGetHomeJob({ candidate_id: user.id }));
    }
  }, [user]);
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
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Mức lương cao nhất",
                },
                {
                  value: "2",
                  label: "Công việc nổi bật",
                },
                {
                  value: "2",
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
                <SwiperSlide className="ease-linear">
                  <div className="grid gap-4 grid-cols-3 bg-gray-100">
                    {homeJobs.length > 0 &&
                      homeJobs?.map((item: any) => (
                        <CardHomeJobPage
                          key={item?.post?.id}
                          item={item}
                        ></CardHomeJobPage>
                      ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide className="ease-linear">
                  <div className="grid gap-4 grid-cols-3 bg-gray-100">
                    {homeJobs.length > 0 &&
                      homeJobs?.map((item: any) => (
                        <CardHomeJobPage
                          key={item?.post?.id}
                          item={item}
                        ></CardHomeJobPage>
                      ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide className="ease-linear">
                  <div className="grid gap-4 grid-cols-3 bg-gray-100">
                    {homeJobs.length > 0 &&
                      homeJobs?.map((item: any) => (
                        <CardHomeJobPage
                          key={item?.post?.id}
                          item={item}
                        ></CardHomeJobPage>
                      ))}
                  </div>
                </SwiperSlide>
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
            <SwiperSlide className="ease-linear">
              <div className="grid gap-4 grid-rows-3 bg-gray-100">
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
              </div>
            </SwiperSlide>

            <SwiperSlide className="ease-linear">
              <div className="grid gap-4 grid-rows-3 bg-gray-100">
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ease-linear">
              <div className="grid gap-4 grid-rows-3 bg-gray-100">
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeListJobPage;
