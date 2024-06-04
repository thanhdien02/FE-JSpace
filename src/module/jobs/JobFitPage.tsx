import React, { useEffect, useState } from "react";
import CardJobFitPage from "../../components/card/CardJobFitPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import { Radio, RadioChangeEvent, Skeleton } from "antd";
import { Pagination } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { chunkArray } from "../../utils/common-function";

const JobFitPage: React.FC = () => {
  const { filterJobs, loadingJob } = useSelector((state: any) => state.job);
  const { t } = useTranslation();
  const [dataJob, setDataJob] = useState<any>(null);
  const [filterShow, setFilterShow] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setFilterShow(e.target.value);
  };
  useEffect(() => {
    if (filterJobs?.length > 0) {
      setDataJob(chunkArray(filterJobs, 2));
    } else {
      setDataJob(null);
    }
  }, [filterJobs]);
  return (
    <>
      <div className="bg-gray-100 py-5">
        <section className="w-primary max-w-full mx-auto bg-white shadow-sm rounded-lg p-5">
          <h2 className="text-xl font-bold text-primary">
            {t("findjob.suggestsuitablejob")}
          </h2>
          {loadingJob ? (
            <div className="p-5">
              <Skeleton />
            </div>
          ) : dataJob?.length <= 0 || !dataJob?.length ? (
            <div className="py-5 text-gray-400">Không có công việc phù hợp</div>
          ) : (
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="lg:block hidden swiper-job-fit "
            >
              {dataJob?.length > 0 &&
                dataJob?.map((item: any) => (
                  <SwiperSlide className="ease-linear" key={uuidv4()}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
                      {item?.length > 0 &&
                        item?.map((item: any) => (
                          <CardJobFitPage
                            key={uuidv4()}
                            item={item}
                          ></CardJobFitPage>
                        ))}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}

          {/* phone */}
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="lg:hidden block swiper-job-fit-phone"
          >
            <SwiperSlide className="ease-linear mt-5">
              <CardJobFitPage></CardJobFitPage>
            </SwiperSlide>
            <SwiperSlide className="ease-linear mt-5">
              <CardJobFitPage></CardJobFitPage>
            </SwiperSlide>
            <SwiperSlide className="ease-linear mt-5">
              <CardJobFitPage></CardJobFitPage>
            </SwiperSlide>
            <SwiperSlide className="ease-linear mt-5">
              <CardJobFitPage></CardJobFitPage>
            </SwiperSlide>
          </Swiper>

          <div className="lg:hidden bg-gray-200 h-[1px] w-full my-3"></div>
          <div className="lg:hidden">
            <div className="my-3">
              <h3 className="font-medium text-primary text-lg ">
                Ưu tiên hiển thị theo:
              </h3>
              <Radio.Group
                className="mt-1"
                onChange={onChange}
                value={filterShow}
              >
                <Radio className="font-medium text-base" value={2}>
                  Ngày đăng
                </Radio>
                <Radio className="font-medium text-base" value={3}>
                  Lương cao đến thấp
                </Radio>
              </Radio.Group>
            </div>
            <div className="flex flex-col gap-5">
              <CardJobFitPage></CardJobFitPage>
              <CardJobFitPage></CardJobFitPage>
              <CardJobFitPage></CardJobFitPage>
              <CardJobFitPage></CardJobFitPage>
              <CardJobFitPage></CardJobFitPage>
            </div>
            <div className="w-primary max-w-full lg:px-0 flex mx-auto mt-5">
              <Pagination
                className="ml-auto font-medium"
                defaultCurrent={1}
                total={50}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobFitPage;
