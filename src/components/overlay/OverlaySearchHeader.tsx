import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { commonUpdateInputHeaderSearchCheckRedux } from "../../store/common/common-slice";

const OverlaySearchHeader: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
    return () => {
      elementBody.style.overflow = "visible";
    };
  }, []);
  return (
    <div
      onClick={() =>
        dispatch(
          commonUpdateInputHeaderSearchCheckRedux({
            inputHeaderSearchCheck: false,
          })
        )
      }
      className="absolute inset-0 bg-black/50 z-20"
    ></div>
  );
};

export default OverlaySearchHeader;
