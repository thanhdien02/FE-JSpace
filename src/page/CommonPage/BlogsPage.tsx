import React, { useEffect, useState } from "react";
import "./Blog.css";
import logo from "../../assets/logo3.png";
const BlogsPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const text = "Hello, World!";

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % text.length);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUp((prevIsUp) => !prevIsUp);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="running-text text-xl font-medium mx-10">
        {text.split("").map((char, index) => (
          <span key={index} className={index <= count ? "fade-in" : ""}>
            {char}
          </span>
        ))}
      </div>

      <div className={`mt-20 bouncing-image ${isUp ? "up" : "down"}`}>
        <img src={logo} alt="Bouncing Image" />
      </div>
    </>
  );
};

export default BlogsPage;
