import React, { useEffect } from "react";
import IconChervonDown from "../../components/icons/IconChervonDown";

const CompanyReviewPage: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="">
        <h2 className="text-xl text-primary font-medium">
          Hãy chia sẻ ý kiến của bạn về công ty này.
        </h2>
        <div className="w-full h-[1px] bg-gray-100 my-5"></div>
        <div className="mt-5">
          <div className="flex justify-between">
            <h3 className="text-base font-medium">Bình luận</h3>
            <div className="flex gap-2 items-center px-3 py-1 rounded-sm bg-primary text-white cursor-pointer">
              <span className="">Viết bình luận</span>
              <IconChervonDown></IconChervonDown>
            </div>
          </div>
          <div className="mt-5">
            <form action="" className="flex flex-col">
              <input
                type="text"
                placeholder="Tiêu đề"
                className="w-full p-2 border border-solid outline-none border-gray-200 rounded-md"
              />
              <textarea
                name=""
                placeholder="Nội dung"
                id=""
                className="w-full mt-2 min-h-[150px] p-2 outline-none border border-solid border-gray-200 rounded-md"
              ></textarea>
              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className=" min-w-[100px] text-base px-2 py-1 bg-primary rounded-sm text-white"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyReviewPage;
