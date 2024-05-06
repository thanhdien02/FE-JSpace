import React from "react";
import CardJobFitPage from "../../components/card/CardJobFitPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const JobFitPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 py-5">
        <section className="w-primary mx-auto bg-white shadow-sm rounded-lg p-5">
          <h2 className="text-xl font-bold text-primary">
            Gợi ý việc làm phù hợp
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper-job-fit"
          >
            <SwiperSlide className="ease-linear">
              <div className="grid grid-cols-2 gap-5 mt-5">
                <CardJobFitPage></CardJobFitPage>
                <CardJobFitPage></CardJobFitPage>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ease-linear">
              <div className="grid grid-cols-2 gap-5 mt-5">
                <CardJobFitPage></CardJobFitPage>
                <CardJobFitPage></CardJobFitPage>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ease-linear">
              <div className="grid grid-cols-2 gap-5 mt-5">
                <CardJobFitPage></CardJobFitPage>
                <CardJobFitPage></CardJobFitPage>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default JobFitPage;
