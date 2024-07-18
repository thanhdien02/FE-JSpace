import React, { useEffect, useState } from "react";
import bg_wall from "../../assets/bg-login.jpg";
import Button from "../../components/input";
import { useSelector } from "react-redux";
import { Avatar } from "antd";
import IconCamera from "../../components/icons/IconCamera";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { commonUpdateSuggestJobRedux } from "../../store/common/common-slice";
import FormUpdateStudyInformaionPage from "../../module/candidates/FormUpdateStudyInformaionPage";
import { CSSTransition } from "react-transition-group";
import FormUpdateInformationExperiencePage from "../../module/candidates/FormUpdateInformationExperiencePage";
import { CameraOutlined, UserOutlined } from "@ant-design/icons";
const ManageWallCandidate: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [
    checkPopoverUpdateStudyInformation,
    setCheckPopoverUpdateStudyInformation,
  ] = useState(false);
  const [
    checkPopoverUpdateInformationExperience,
    setCheckPopoverUpdateInformationExperience,
  ] = useState(false);
  const handleMouseOverBackground = () => {
    const elementMouseOver: any = document.querySelector(
      ".background-identification"
    );
    if (elementMouseOver) {
      elementMouseOver.style.visibility = "visible";
    }
  };
  const handleMouseLeaveBackground = () => {
    const elementMouseOver: any = document.querySelector(
      ".background-identification"
    );
    if (elementMouseOver) {
      elementMouseOver.style.visibility = "hidden";
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex flex-col bg-white">
          <div
            onMouseOver={handleMouseOverBackground}
            onMouseLeave={handleMouseLeaveBackground}
            className="relative"
          >
            <div className="invisible absolute background-identification transition-all top-2 left-2 ">
              <div>
                <div
                  onClick={() => {
                    navigate("/manage/information-account");
                  }}
                  className="flex items-center gap-2 bg-primary text-white rounded-md cursor-pointer px-2 py-1 font-medium"
                >
                  <IconCamera></IconCamera>
                  <span>Cập nhật ảnh bìa</span>
                </div>
              </div>
            </div>
            <img
              src={user?.background ? user?.background : bg_wall}
              alt=""
              className="w-full lg:h-[270px] h-[180px] object-cover "
            />
          </div>
          <div className="relative flex w-[80%] justify-between ml-auto p-4 lg:py-8 py-5">
            <div
              onClick={() => {
                navigate("/manage/information-account");
              }}
              className=" bg-white rounded-full absolute lg:-left-[150px] -left-[70px] -top-16 cursor-pointer"
            >
              {user?.picture ? (
                <>
                  <img
                    src={user?.picture}
                    alt=""
                    className=" lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] object-cover rounded-full border-solid border-4 border-transparent hover:border-gray-200 transition-all duration-300"
                  />
                  <span className="absolute bottom-2 right-2 p-1 bg-gray-200 rounded-full">
                    <IconCamera></IconCamera>
                  </span>
                </>
              ) : (
                <div className="lg:w-[130px] lg:h-[130px] bg-white rounded-full">
                  <Avatar
                    className="mx-auto "
                    size={130}
                    icon={<UserOutlined />}
                  />
                  <CameraOutlined
                    className="absolute bottom-2 right-0 bg-blue-50 p-2 rounded-full cursor-pointer"
                    style={{ fontSize: "26px" }}
                  />
                </div>
              )}
            </div>
            <h3 className="font-bold text-2xl w-[250px] line-clamp-1">
              {user?.name}
            </h3>
            {/* <IconEdit className="cursor-pointer text-primary hover:opacity-80 transition-all"></IconEdit> */}
          </div>
          <div
            className="flex gap-3 lg:pb-10 pb-5 px-5"
            onClick={() => {
              navigate("/list-resume");
            }}
          >
            <Button
              loading={false}
              title="Xem CV"
              classButton="!min-h-0 "
            ></Button>
          </div>
        </div>
        <div className="mt-5 bg-white min-h-[180px] p-5 ">
          <h3 className="font-bold text-lg">Khảo sát</h3>
          <div className="mt-5">
            <p className="text-gray-500">
              Khảo sát về các thông tin của bạn để chúng tôi có thể thông báo
              với bạn khi có công việc phù hợp.
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch(
                  commonUpdateSuggestJobRedux({
                    suggestJobCheck: true,
                  })
                );
              }}
              className="mt-3 px-5 py-2 bg-white text-primary border border-solid border-primary rounded-md font-medium"
            >
              Khảo sát
            </button>
          </div>
        </div>
        <div className="mt-5 bg-white min-h-[150px] p-5 ">
          <h3 className="font-bold text-lg">Học vấn</h3>
          <div className="flex justify-between items-start">
            <div className="mt-5">
              <p className="text-gray-500">Nơi bạn đã từng học</p>
              <button
                type="button"
                onClick={() => {
                  setCheckPopoverUpdateStudyInformation(true);
                }}
                className="mt-3 px-5 py-2 bg-white text-primary border border-solid border-primary rounded-md font-medium"
              >
                Thêm thông tin
              </button>
            </div>
            <img
              className="mr-20 inline-block"
              src="https://www.topcv.vn/v3/profile/profile-png/profile-course.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-5 bg-white min-h-[150px] p-5 ">
          <h3 className="font-bold text-lg">Kinh nghiệm</h3>
          <div className="flex justify-between items-start">
            <div className="mt-5">
              <p className="text-gray-500">
                Về những kinh nghiệm làm việc trước đó của bạn
              </p>
              <button
                type="button"
                onClick={() => {
                  setCheckPopoverUpdateInformationExperience(true);
                }}
                className="mt-3 px-5 py-2 bg-white text-primary border border-solid border-primary rounded-md font-medium"
              >
                Thêm thông tin
              </button>
            </div>
            <img
              className="mr-20 inline-block"
              src="https://www.topcv.vn/v3/profile/profile-png/profile-experience.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Update information popover */}
      <CSSTransition
        in={checkPopoverUpdateStudyInformation}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <FormUpdateStudyInformaionPage
          setClosePopover={setCheckPopoverUpdateStudyInformation}
        ></FormUpdateStudyInformaionPage>
      </CSSTransition>
      {/*  */}
      <CSSTransition
        in={checkPopoverUpdateInformationExperience}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <FormUpdateInformationExperiencePage
          setClosePopover={setCheckPopoverUpdateInformationExperience}
        ></FormUpdateInformationExperiencePage>
      </CSSTransition>
    </>
  );
};

export default ManageWallCandidate;
