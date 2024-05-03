import React, { useEffect, useState } from "react";
interface PropComponent {
  targetNumber?: number;
}
const NumberCounter: React.FC<PropComponent> = ({ targetNumber = 1 }) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const steps = targetNumber / 300; // 2 giây = 2000ms
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        setCurrentNumber((prevNumber) => prevNumber + steps);
      } else {
        setCurrentNumber(targetNumber); // Đảm bảo hiển thị số cuối cùng là số quy định
        clearInterval(interval);
      }
    }, 1); // Thời gian cập nhật số mỗi lần (milliseconds)
    return () => clearInterval(interval);
  }, [currentNumber, targetNumber, steps]);

  return (
    <>
      <span>{Math.ceil(currentNumber)}</span>{" "}
    </>
  );
};

export default NumberCounter;
