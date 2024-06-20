import { Spin } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import CardJobAtInputSearchPage from "../card/CardJobAtInputSearchPage";
import { useDispatch } from "react-redux";
import { jobGetInputSearchJob } from "../../store/job/job-slice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { commonUpdateInputHeaderSearchCheckRedux } from "../../store/common/common-slice";

interface PropCompent {
  className?: string;
  loading?: boolean;
  clearInputSearch?: any;
  title?: string;
}
const InputSearchResult: React.FC<PropCompent> = ({
  className,
  title,
  loading,
  clearInputSearch,
}) => {
  const { inputSearchJobs, paginationInputSearchJob } = useSelector(
    (state: any) => state.job
  );
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (title)
      dispatch(
        jobGetInputSearchJob({
          candidate_id: user?.id,
          page: 1,
          size: 6,
          title: title,
        })
      );
  }, [title]);
  const [selectedIndex, setSelectedIndex] = useState<any>(null);
  const [naviateDetailSearch, setNaviateDetailSearch] = useState(false);
  const handleKeyDown = useCallback(
    (event: any) => {
      if (event.key === "ArrowDown") {
        setSelectedIndex((selectedIndex: any) => {
          if (selectedIndex == null) {
            return 0;
          } else if (selectedIndex < inputSearchJobs?.length - 1) {
            return selectedIndex + 1;
          } else return 0;
        });
      } else if (event.key === "ArrowUp") {
        setSelectedIndex((selectedIndex: any) => {
          if (selectedIndex == null) {
            return 0;
          } else if (selectedIndex == 0) {
            return inputSearchJobs?.length - 1;
          } else return selectedIndex - 1;
        });
      } else if (event.key === "Enter") {
        setNaviateDetailSearch(true);
      }
    },
    [navigate, inputSearchJobs, selectedIndex, dispatch, clearInputSearch]
  );

  // khi enter chuyển trang sang job details. Bởi vì selectedIndex bên trong không nhận giá trị nên phải tạo thêm một state
  useEffect(() => {
    // Nếu có yêu cầu mới navigate
    if (naviateDetailSearch) {
      // trường hợp tìm kiếm vằng title chuyển sang trang tìm việc
      if (selectedIndex == null) {
        let search = {
          title: title,
          location: "",
          experience: "",
          salary: "",
        };
        localStorage.setItem("jspace-search", JSON.stringify(search));

        // kiểm tra nếu đang ở trang tìm việc thì reload lại page còn nếu ở trang khác thì chuyển sang trang tìm việc
        const currentPath = window.location.pathname;
        if (currentPath === `/jobs`) {
          window.location.reload();
        } else {
          navigate("/jobs");
        }
      }
      // trường hợp đi thẳng đến một công việc cụ thể
      else {
        navigate(`/jobs/${inputSearchJobs[selectedIndex]?.post?.id}`);
      }

      // thoát focus khỏi input
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      clearInputSearch();
      // cập nhât lại overlay tắt đi
      dispatch(
        commonUpdateInputHeaderSearchCheckRedux({
          inputHeaderSearchCheck: false,
        })
      );
      // chuyển state check khi enter quay về ban đầu
      setNaviateDetailSearch(false);
    }
  }, [naviateDetailSearch]);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputSearchJobs]);
  return (
    <>
      <div className={`${className}`}>
        {loading ? (
          <div className="w-full min-h-[80px] rounded-lg bg-gray-200/40 flex justify-center items-center">
            <Spin size="small" />
          </div>
        ) : (
          <div className="search-title overflow-auto max-h-[650px]">
            {inputSearchJobs?.length <= 0 ? (
              <div className="">
                <p className="m-auto text-gray-500 p-5">
                  Không có công việc phù hợp
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  {inputSearchJobs?.length > 0 &&
                    inputSearchJobs?.map((item: any, index: number) => (
                      <CardJobAtInputSearchPage
                        item={item}
                        clearInputSearch={clearInputSearch}
                        key={item?.post?.id}
                        className={index == selectedIndex ? "bg-gray-200" : ""}
                      ></CardJobAtInputSearchPage>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white h-[30px] rounded-b-md flex cursor-pointer hover:bg-gray-200 transition-all">
                  <span
                    className="m-auto text-sm  rounded-full"
                    onClick={() => {
                      setNaviateDetailSearch(true);
                    }}
                  >
                    Xem thêm{" "}
                    {paginationInputSearchJob?.totalElements ? (
                      <span className="font-medium">
                        ({paginationInputSearchJob?.totalElements})
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default InputSearchResult;
