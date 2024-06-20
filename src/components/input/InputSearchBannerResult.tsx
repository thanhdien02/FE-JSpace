import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { jobGetInputSearchJob } from "../../store/job/job-slice";
import { useSelector } from "react-redux";
import CardBannerSearchHistoryPage from "../card/CardBannerSearchHistoryPage";

interface PropCompent {
  className?: string;
  loading?: boolean;
  title?: string;
  setTitle?: any;
}
const InputSearchBannerResult: React.FC<PropCompent> = ({
  className,
  title,
  loading,
  setTitle,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const [history, setHistory] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState<any>(null);
  useEffect(() => {
    if (title)
      dispatch(
        jobGetInputSearchJob({
          candidate_id: user?.id,
          page: 1,
          size: 10,
          title: title,
        })
      );
  }, [title]);
  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);
  const handleKeyDown = (event: any) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex((selectedIndex: any) => {
        if (selectedIndex == null) {
          setTitle(history[0]);
          return 0;
        } else if (selectedIndex < history?.length - 1) {
          setTitle(history[selectedIndex + 1]);
          return selectedIndex + 1;
        } else {
          setTitle(history[0]);
          return 0;
        }
      });
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((selectedIndex: any) => {
        if (selectedIndex == null) {
          setTitle(history[0]);
          return 0;
        } else if (selectedIndex == 0) {
          setTitle(history[history?.length - 1]);
          return history?.length - 1;
        } else {
          setTitle(history[selectedIndex - 1]);
          return selectedIndex - 1;
        }
      });
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [history]);
  const handleDelete = (query: string) => {
    const newHistory = history.filter((item: any) => item !== query);
    setHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
  };

  return (
    <>
      <div className={`${className}`}>
        {loading ? (
          <div className="w-full min-h-[80px] rounded-lg bg-gray-200/40 flex justify-center items-center">
            <Spin size="small" />
          </div>
        ) : (
          <div className="search-title overflow-auto max-h-[300px]">
            {history?.length <= 0 ? (
              <div className="">
                <p className="m-auto text-gray-500 p-5">Không có tìm kiếm</p>
              </div>
            ) : (
              <>
                <p className=" mb-2 px-2 font-medium text-gray-800">
                  Lịch sử tìm kiếm
                </p>
                <div className="flex flex-col gap-1">
                  {history?.length > 0 &&
                    history?.map((item: any, index: number) => (
                      <CardBannerSearchHistoryPage
                        key={index}
                        title={item}
                        setTitle={setTitle}
                        onDelete={handleDelete}
                        className={index == selectedIndex ? "bg-gray-200" : ""}
                      ></CardBannerSearchHistoryPage>
                    ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default InputSearchBannerResult;
