import React from "react";
import IconClose from "../../components/icons/IconClose";
import IconHeart from "../../components/icons/IconHeart";
import IconHeartFill from "../../components/icons/IconHeartFill";
import IconChervonRight from "../../components/icons/IconChervonRight";

const JobShortDetailPage: React.FC = () => {
  return (
    <>
      <div className="w-full sticky top-0 h-screen">
        <div className="p-5 ">
          <IconClose className="absolute cursor-pointer p-1 rounded-sm right-2 top-2"></IconClose>
          <div className="cursor-pointer hover:underline text-primary flex items-center absolute top-12 right-2">
            <p className="font-medium text-primary">Xem chi tiết</p>
            <IconChervonRight className="self-end text-primary"></IconChervonRight>
          </div>
          <h2 className="font-bold text-xl ">
            Fullstack Java (Biết Tiếng Anh)
          </h2>
          <div className="flex gap-3 mt-3">
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm ">
              20 - 30 triệu
            </span>
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm ">
              Hồ Chí Minh
            </span>
            <span className="px-2 py-1 rounded-sm bg-gray-200 text-sm ">
              Không yêu cầu kinh nghiệm
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center px-5 pb-5">
          <button className="w-[90%] mx-auto p-2 bg-primary text-white rounded-md">
            Ứng tuyển ngay
          </button>
          {true ? (
            <IconHeartFill
              classIcon="w-6 h-6"
              className="cursor-pointer px-4 border text-primary border-primary border-solid py-2 rounded-md font-bold"
            ></IconHeartFill>
          ) : (
            <IconHeart
              classIcon="w-6 h-6"
              className="cursor-pointer px-4 border text-primary border-primary border-solid py-2 rounded-md font-bold"
            ></IconHeart>
          )}
        </div>
        <div className="overflow-auto h-[600px] py-5 pl-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi animi
          qui cum nisi molestias? Libero quidem sed, doloribus atque quaerat
          explicabo expedita quo fuga consectetur repudiandae, illo sint
          consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero quidem sed, doloribus atque quaerat explicabo expedita quo fuga
          consectetur repudiandae, illo sint consequatur? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. A, modi animi qui cum nisi
          molestias? Libero quidem sed, doloribus atque quaerat explicabo
          expedita quo fuga consectetur repudiandae, illo sint consequatur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi animi
          qui cum nisi molestias? Libero quidem sed, doloribus atque quaerat
          explicabo expedita quo fuga consectetur repudiandae, illo sint
          consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A, modi animi qui cum nisi molestias? Libero quidem sed, doloribus
          atque quaerat explicabo expedita quo fuga consectetur repudiandae,
          illo sint consequatur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A, modi animi qui cum nisi molestias? Libero quidem
          sed, doloribus atque quaerat explicabo expedita quo fuga consectetur
          repudiandae, illo sint consequatur? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. A, modi animi qui cum nisi molestias?
          Libero quidem sed, doloribus atque quaerat explicabo expedita quo fuga
          consectetur repudiandae, illo sint consequatur? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. A, modi animi qui cum nisi
          molestias? Libero quidem sed, doloribus atque quaerat explicabo
          expedita quo fuga consectetur repudiandae, illo sint consequatur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi animi
          qui cum nisi molestias? Libero quidem sed, doloribus atque quaerat
          explicabo expedita quo fuga consectetur repudiandae, illo sint
          consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A, modi animi qui cum nisi molestias? Libero quidem sed, doloribus
          atque quaerat explicabo expedita quo fuga consectetur repudiandae,
          illo sint consequatur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A, modi animi qui cum nisi molestias? Libero quidem
          sed, doloribus atque quaerat explicabo expedita quo fuga consectetur
          repudiandae, illo sint consequatur? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. A, modi animi qui cum nisi molestias?
          Libero quidem sed, doloribus atque quaerat explicabo expedita quo fuga
          consectetur repudiandae, illo sint consequatur? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. A, modi animi qui cum nisi
          molestias? Libero quidem sed, doloribus atque quaerat explicabo
          expedita quo fuga consectetur repudiandae, illo sint consequatur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi animi
          qui cum nisi molestias? Libero quidem sed, doloribus atque quaerat
          explicabo expedita quo fuga consectetur repudiandae, illo sint
          consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A, modi animi qui cum nisi molestias? Libero quidem sed, doloribus
          atque quaerat explicabo expedita quo fuga consectetur repudiandae,
          illo sint consequatur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A, modi animi qui cum nisi molestias? Libero quidem
          sed, doloribus atque quaerat explicabo expedita quo fuga consectetur
          repudiandae, illo sint consequatur? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. A, modi animi qui cum nisi molestias?
          Libero quidem sed, doloribus atque quaerat explicabo expedita quo fuga
          consectetur repudiandae, illo sint consequatur? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. A, modi animi qui cum nisi
          molestias? Libero quidem sed, doloribus atque quaerat explicabo
          expedita quo fuga consectetur repudiandae, illo sint consequatur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi animi
          qui cum nisi molestias? Libero quidem sed, doloribus atque quaerat
          explicabo expedita quo fuga consectetur repudiandae, illo sint
          consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A, modi animi qui cum nisi molestias? Libero quidem sed, doloribus
          atque quaerat explicabo expedita quo fuga consectetur repudiandae,
          illo sint consequatur?
        </div>
      </div>
    </>
  );
};

export default JobShortDetailPage;
