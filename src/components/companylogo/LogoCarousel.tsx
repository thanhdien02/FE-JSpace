import React, { useEffect, useState } from "react";
import "./Logo.css";
import logo from "../../assets/logo3.png";
interface PropComponent {
  logoSrc?: any;
  position?: string;
}
// eslint-disable-next-line react-refresh/only-export-components
const LogoCarousel: React.FC<PropComponent> = ({ position }) => {
  const [isActive] = useState(false);
  // const [check, setCheck] = useState(false);

  useEffect(() => {
    // if (check == false) {
    //   setIsActive(true);
    //   setCheck(true);
    // }
    // const timeout = setTimeout(() => {
    //   alert("xin chao");
    // }, 2000);
    // const interval = setInterval(() => {
    //   console.log("intervel");
    // }, 2000);
    // const interval = setInterval(
    //   () => {
    //     setIsActive(!isActive);
    //   },
    //   isActive ? 14000 : 100
    // );
    // return () => {
    //   clearInterval(interval);
    // };
    // return () => clearTimeout(timeout);
  }, [isActive]);
  useEffect(() => {}, []);
  return (
    <>
      <a
        href="https://tailwindcss.com/docs/animation"
        className={`w-[70px] h-[70px] hover:cursor-pointer absolute rounded-full ${position}  ${
          isActive
            ? "active-logo ease-linear duration-[15000ms] transition-all"
            : ""
        }`}
        target="_blank"
      >
        <img
          src={logo}
          className="object-cover hover:shadow-md rounded-full hover:border-2 hover:border-solid hover:border-gray-600"
          alt=""
        />
      </a>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(LogoCarousel);
