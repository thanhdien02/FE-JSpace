import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { commonUpdateInputBannerSearchCheckRedux } from "../../store/common/common-slice";

const OverlaySearchBanner: React.FC = () => {
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
          commonUpdateInputBannerSearchCheckRedux({
            inputBannerSearchCheck: false,
          })
        )
      }
      className="absolute inset-0 bg-black/50 z-10"
    ></div>
  );
};

export default OverlaySearchBanner;
