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

const HomeListJobPage: React.FC = () => {
  return (
    <>
      <div className="mt-10 w-[1100px] mx-auto">
        <h3 className="font-medium text-xl text-primary my-3">
          Danh sách việc làm
        </h3>
        <div className="pb-5">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
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
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
              {
                value: "5",
                label: "Resolved",
              },
              {
                value: "6",
                label: "Cancelled",
              },
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
          className="mySwiper"
        >
          <SwiperSlide className="border border-blue-200 border-solid overflow-hidden">
            <div className="grid gap-4 grid-cols-3">
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-blue-200 border-solid overflow-hidden">
            <div className="grid gap-4 grid-cols-3">
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-blue-200 border-solid overflow-hidden">
            <div className="grid gap-4 grid-cols-3">
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-blue-200 border-solid overflow-hidden">
            <div className="grid gap-4 grid-cols-3">
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
              <div className=" h-24 bg-red-200">Item</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeListJobPage;
