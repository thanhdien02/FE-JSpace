import { Spin } from "antd";
import React, { useEffect } from "react";
import CardJobAtInputSearchPage from "../card/CardJobAtInputSearchPage";
import { useDispatch } from "react-redux";
import { jobGetInputSearchJob } from "../../store/job/job-slice";
import { useSelector } from "react-redux";

interface PropCompent {
  className?: string;
  loading?: boolean;
  clearInputSearch?: any;
  title?: string;
}
const InputSearchBannerResult: React.FC<PropCompent> = ({
  className,
  title,
  loading,
  clearInputSearch,
}) => {
  const { inputSearchJobs } = useSelector((state: any) => state.job);
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

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

  return (
    <>
      <div className={`${className}`}>
        {loading ? (
          <div className="w-full min-h-[80px] rounded-lg bg-gray-200/40 flex justify-center items-center">
            <Spin size="small" />
          </div>
        ) : (
          <div className="search-title overflow-auto max-h-[300px]">
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
                    inputSearchJobs?.map((item: any) => (
                      <CardJobAtInputSearchPage
                        item={item}
                        clearInputSearch={clearInputSearch}
                        key={item?.post?.id}
                      ></CardJobAtInputSearchPage>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white h-[30px] rounded-b-md flex cursor-pointer hover:bg-gray-200 transition-all">
                  <span className="m-auto text-sm  rounded-full">Xem thêm</span>
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
