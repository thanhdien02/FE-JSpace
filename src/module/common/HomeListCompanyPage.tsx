import React from "react";
import "./style.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import { useTranslation } from "react-i18next";

const newArray = [
  "https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/OIP.CLfoEF9Qlytjg7tuhCAk_QHaHa?rs=1&pid=<ImgDetMain></ImgDetMain>",
  "https://nhanlucnganhluat.vn/uploads/images/1A7A1934/logo/2018-10/logo.png",
  "https://th.bing.com/th/id/R.d968aaa271651e20446d370a31a1d022?rik=4BaJJh7fEvSAGQ&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/R.2bad70f2d08429a28dfbebd4c237924b?rik=vgEdhJ%2f%2biiEnQQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19748.png&ehk=0ZiZ04ZZ6mSJ5oyPxBh1gy4FSYhegWTWyDpCiI73sbw%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.oOSxQuhXwSaBp7N9OF_eOQHaHk?rs=1&pid=ImgDetMain",
  "https://rubicmarketing.com/wp-content/uploads/2021/06/logo-Vinamilk.png",
  "https://th.bing.com/th/id/R.d912167e43626749ea7e80324a5107a6?rik=P9G%2fFNjuqaVMpQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/OIP.CLfoEF9Qlytjg7tuhCAk_QHaHa?rs=1&pid=<ImgDetMain></ImgDetMain>",
  "https://nhanlucnganhluat.vn/uploads/images/1A7A1934/logo/2018-10/logo.png",
  "https://th.bing.com/th/id/R.d968aaa271651e20446d370a31a1d022?rik=4BaJJh7fEvSAGQ&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/R.2bad70f2d08429a28dfbebd4c237924b?rik=vgEdhJ%2f%2biiEnQQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19748.png&ehk=0ZiZ04ZZ6mSJ5oyPxBh1gy4FSYhegWTWyDpCiI73sbw%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.oOSxQuhXwSaBp7N9OF_eOQHaHk?rs=1&pid=ImgDetMain",
  "https://rubicmarketing.com/wp-content/uploads/2021/06/logo-Vinamilk.png",
  "https://th.bing.com/th/id/R.d912167e43626749ea7e80324a5107a6?rik=P9G%2fFNjuqaVMpQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/OIP.CLfoEF9Qlytjg7tuhCAk_QHaHa?rs=1&pid=<ImgDetMain></ImgDetMain>",
  "https://nhanlucnganhluat.vn/uploads/images/1A7A1934/logo/2018-10/logo.png",
  "https://th.bing.com/th/id/R.d968aaa271651e20446d370a31a1d022?rik=4BaJJh7fEvSAGQ&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/R.2bad70f2d08429a28dfbebd4c237924b?rik=vgEdhJ%2f%2biiEnQQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19748.png&ehk=0ZiZ04ZZ6mSJ5oyPxBh1gy4FSYhegWTWyDpCiI73sbw%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.oOSxQuhXwSaBp7N9OF_eOQHaHk?rs=1&pid=ImgDetMain",
  "https://rubicmarketing.com/wp-content/uploads/2021/06/logo-Vinamilk.png",
  "https://th.bing.com/th/id/R.d912167e43626749ea7e80324a5107a6?rik=P9G%2fFNjuqaVMpQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/OIP.CLfoEF9Qlytjg7tuhCAk_QHaHa?rs=1&pid=<ImgDetMain></ImgDetMain>",
  "https://nhanlucnganhluat.vn/uploads/images/1A7A1934/logo/2018-10/logo.png",
  "https://th.bing.com/th/id/R.d968aaa271651e20446d370a31a1d022?rik=4BaJJh7fEvSAGQ&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/R.2bad70f2d08429a28dfbebd4c237924b?rik=vgEdhJ%2f%2biiEnQQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19748.png&ehk=0ZiZ04ZZ6mSJ5oyPxBh1gy4FSYhegWTWyDpCiI73sbw%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.oOSxQuhXwSaBp7N9OF_eOQHaHk?rs=1&pid=ImgDetMain",
  "https://rubicmarketing.com/wp-content/uploads/2021/06/logo-Vinamilk.png",
  "https://th.bing.com/th/id/R.d912167e43626749ea7e80324a5107a6?rik=P9G%2fFNjuqaVMpQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/OIP.CLfoEF9Qlytjg7tuhCAk_QHaHa?rs=1&pid=<ImgDetMain></ImgDetMain>",
  "https://nhanlucnganhluat.vn/uploads/images/1A7A1934/logo/2018-10/logo.png",
  "https://th.bing.com/th/id/R.d968aaa271651e20446d370a31a1d022?rik=4BaJJh7fEvSAGQ&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/R.2bad70f2d08429a28dfbebd4c237924b?rik=vgEdhJ%2f%2biiEnQQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19748.png&ehk=0ZiZ04ZZ6mSJ5oyPxBh1gy4FSYhegWTWyDpCiI73sbw%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.oOSxQuhXwSaBp7N9OF_eOQHaHk?rs=1&pid=ImgDetMain",
  "https://rubicmarketing.com/wp-content/uploads/2021/06/logo-Vinamilk.png",
  "https://th.bing.com/th/id/R.d912167e43626749ea7e80324a5107a6?rik=P9G%2fFNjuqaVMpQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/OIP.CLfoEF9Qlytjg7tuhCAk_QHaHa?rs=1&pid=<ImgDetMain></ImgDetMain>",
  "https://nhanlucnganhluat.vn/uploads/images/1A7A1934/logo/2018-10/logo.png",
  "https://th.bing.com/th/id/R.d968aaa271651e20446d370a31a1d022?rik=4BaJJh7fEvSAGQ&pid=ImgRaw&r=0",
  ,
  "https://th.bing.com/th/id/R.2bad70f2d08429a28dfbebd4c237924b?rik=vgEdhJ%2f%2biiEnQQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19748.png&ehk=0ZiZ04ZZ6mSJ5oyPxBh1gy4FSYhegWTWyDpCiI73sbw%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.oOSxQuhXwSaBp7N9OF_eOQHaHk?rs=1&pid=ImgDetMain",
  "https://rubicmarketing.com/wp-content/uploads/2021/06/logo-Vinamilk.png",
  "https://th.bing.com/th/id/R.d912167e43626749ea7e80324a5107a6?rik=P9G%2fFNjuqaVMpQ&pid=ImgRaw&r=0",
];
interface IParallax {
  listImages?: any;
}
const Parallax: React.FC<IParallax> = ({ listImages }) => {
  return (
    <div className="logos flex">
      <div className="logos-slide flex">
        {listImages?.map((item: any, index: number) => (
          <img src={item} alt="" key={index} />
        ))}
      </div>
    </div>
  );
};
const HomeListCompanyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="w-primary max-w-full mx-auto py-3 ">
          <h3 className="lg:px-0 px-5 font-bold text-2xl text-primary my-3">
            {t("home.companypupolar")}
          </h3>
          <div className="lg:px-0 px-5 lg:grid lg:grid-cols-5 grid-cols-1 gap-5 mt-6">
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src="https://th.bing.com/th/id/R.d968aaa271651e20446d370a31a1d022?rik=4BaJJh7fEvSAGQ&pid=ImgRaw&r=0"
                alt=""
                className="m-auto lg:w-[80%] w-full lg:h-[50%] h-[70%] object-contain"
              />
            </div>
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src="https://nhanlucnganhluat.vn/uploads/images/1A7A1934/logo/2018-10/logo.png"
                alt=""
                className="m-auto lg:w-[80%] w-full lg:h-[50%] h-[70%] object-contain"
              />
            </div>
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src="https://rubicmarketing.com/wp-content/uploads/2021/06/logo-Vinamilk.png"
                alt=""
                className="m-auto lg:w-[80%] w-full lg:h-[50%] h-[70%] object-contain"
              />
            </div>
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src="https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0"
                alt=""
                className="m-auto lg:w-[80%] w-full lg:h-[50%] h-[70%] object-contain"
              />
            </div>
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src="https://th.bing.com/th/id/OIP.CLfoEF9Qlytjg7tuhCAk_QHaHa?rs=1&pid="
                alt=""
                className="m-auto lg:w-[80%] w-full lg:h-[50%] h-[70%] object-contain "
              />
            </div>
          </div>
        </div>
        <Parallax listImages={newArray}></Parallax>
      </div>
    </>
  );
};

export default HomeListCompanyPage;
