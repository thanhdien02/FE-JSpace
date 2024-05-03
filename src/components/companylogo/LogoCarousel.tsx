import React, { useEffect, useState } from "react";
import "./Logo.css";
import logo from "../../assets/logo3.png";
interface PropComponent {
  logoSrc?: any;
}
const LogoCarousel: React.FC<PropComponent> = () => {
  const [isActive, setIsActive] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check == false) {
      setIsActive(true);
      setCheck(true);
    }
    const interval = setInterval(
      () => {
        setIsActive(!isActive);
      },
      isActive ? 15000 : 100
    );
    return () => clearInterval(interval);
  }, [isActive]);
  return (
    <>
      <div className="flex h-32 overflow-hidden relative">
        <a
          href="https://tailwindcss.com/docs/animation"
          className={`w-[70px] h-[70px] element hover:cursor-pointer rounded-full ${
            isActive
              ? "active-logo ease-linear duration-[15000ms] transition-all"
              : ""
          }`}
          target="_blank"
        >
          <img src={logo} className="w-full h-full rounded-full" alt="" />
        </a>
      </div>
    </>
  );
};

export default LogoCarousel;
