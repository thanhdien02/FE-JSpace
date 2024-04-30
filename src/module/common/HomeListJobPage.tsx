import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Select } from "antd";
import CardHomeJobPage from "../../components/card/CardHomeJobPage";

const HomeListJobPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="mt-10 w-[1100px] mx-auto py-3">
          <h3 className="font-bold text-2xl text-primary my-3">
           Các công việc phổ biến
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
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                }
              ]}
            />
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper-job"
          >
            <SwiperSlide className="overflow-hidden">
              <div className="grid gap-4 grid-cols-3 bg-gray-100">
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
              </div>
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden">
              <div className="grid gap-4 grid-cols-3 bg-gray-100">
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
              </div>
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden">
              <div className="grid gap-4 grid-cols-3 bg-gray-100">
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
                <CardHomeJobPage></CardHomeJobPage>
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
