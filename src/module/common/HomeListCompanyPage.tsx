import React, { useEffect } from "react";
import companylogo from "../../assets/bg-login.jpg";
import logo from "../../assets/logo3.png";
import logo1 from "../../assets/404.png";
import "../../components/companylogo/Logo.css";
import "./style.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

const newArray = [
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
  logo,
  logo1,
  "https://th.bing.com/th/id/R.1c5193f51ad9e7c7ccdd7766a5f29113?rik=CJUIs6xelFnv1g&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2018%2f09%2f11%2fhinh-anh-dep-11_044127919.jpg&ehk=HYnGHiCmwCg9jjQVYivEaTcby%2blBBfnJdu6%2bEEzi5Yc%3d&risl=&pid=ImgRaw&r=0",
  ,
];
interface IParallax {
  listImages?: any;
}
const Parallax: React.FC<IParallax> = ({ listImages }) => {
  useEffect(() => {
    // const copy: any = document.querySelector(".logos-slide")?.cloneNode(true);
    // document.querySelector(".logos")?.appendChild(copy);
  }, []);
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
  return (
    <>
      <div>
        <div className=" w-[1100px] mx-auto py-3 ">
          <h3 className="font-bold text-2xl text-primary my-3">
            Các công ty phổ biến
          </h3>
          <div className="grid grid-cols-5 gap-4 mt-6">
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src={companylogo}
                alt=""
                className="m-auto w-[80%] h-[50%] object-contain"
              />
            </div>
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src={logo}
                alt=""
                className="m-auto w-[80%] h-[50%] object-contain"
              />
            </div>
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src={companylogo}
                alt=""
                className="m-auto w-[80%] h-[50%] object-contain"
              />
            </div>
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src={logo}
                alt=""
                className="m-auto w-[80%] h-[50%] object-contain"
              />
            </div>
            <div className="flex border border-solid border-gray-200 cursor-pointer rounded-md h-[200px] transition-all hover:shadow-md hover:shadow-blue-200">
              <img
                src={companylogo}
                alt=""
                className="m-auto w-[80%] h-[50%] object-contain "
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
