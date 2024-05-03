import React from "react";
import "./Blog.css";
import logo from "../../assets/logo3.png";
import LogoCarousel from "../../components/companylogo/LogoCarousel";
const BlogsPage: React.FC = () => {
  // const [count, setCount] = useState(0);
  // const text = "Hello, World!";

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => (prevCount + 1) % text.length);
  //   }, 200);
  //   return () => clearInterval(interval);
  // }, []);

  // const [isUp, setIsUp] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsUp((prevIsUp) => !prevIsUp);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const [position, setPosition] = useState(window.innerWidth);

  // useEffect(() => {
  //   const moveLogo = () => {
  //     setPosition(-400); // Di chuyển logo từ phải sang trái
  //     setTimeout(() => {
  //       setPosition(window.innerWidth); // Đặt lại vị trí để di chuyển lại từ phải
  //     }, 5000); // Thời gian trước khi quay lại vị trí bắt đầu
  //   };

  //   const interval = setInterval(moveLogo, 7000); // Thời gian di chuyển (4000ms = 4 giây)
  //   return () => clearInterval(interval); // Xóa interval khi component bị unmount
  // }, []);
  // const logos = [logo, bg, logo];
  return (
    <>
      {/* <div className="running-text text-xl font-medium mx-10">
        {text.split("").map((char, index) => (
          <span key={index} className={index <= count ? "fade-in" : ""}>
            {char}
          </span>
        ))}
      </div>

      <div className={`mt-20 bouncing-image ${isUp ? "up" : "down"}`}>
        <img src={logo} alt="Bouncing Image" />
      </div> */}
      {/* <div className="logo-container overflow-hidden" style={{ right: `${position}px` }}>
        <img src={logo} alt="Logo" />
      </div> */}

      <div>
        <LogoCarousel logoSrc={logo} />
      </div>
    </>
  );
};

export default BlogsPage;
