import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getToken } from "./utils/auth";
import { authFetchMe, authRefreshToken } from "./store/auth/auth-slice";
import HomePage from "./page/CommonPage/HomePage";
import CompanyPage from "./page/CompanyPage/CompanyPage";
import BlogsPage from "./page/CommonPage/BlogsPage";
import FindJobPage from "./page/CommonPage/FindJobPage";
import ManageChangePasswordPage from "./page/CandidatePage/ManageChangePasswordPage";
import ManageMenuUsingPhonePage from "./page/CandidatePage/ManageMenuUsingPhonePage";
// const HomePage = lazy(() => import("./page/CommonPage/HomePage"));
const LayoutHomeUser = lazy(() => import("./layout/LayoutHomeUser"));
// const CompanyPage = lazy(() => import("./page/CompanyPage/CompanyPage"));
// const BlogsPage = lazy(() => import("./page/CommonPage/BlogsPage"));
const LayoutManageCandidate = lazy(
  () => import("./layout/LayoutManageCandidate")
);
const ManageUpdateInformationCandidatePage = lazy(
  () => import("./page/CandidatePage/ManageUpdateInformationCandidatePage")
);
const ManageUploadResumeCandidate = lazy(
  () => import("./page/CandidatePage/ManageUploadResumeCandidate")
);
const ManageListResumeCandidate = lazy(
  () => import("./page/CandidatePage/ManageListResumeCandidate")
);
const ManageWallCandidate = lazy(
  () => import("./page/CandidatePage/ManageWallCandidate")
);
// const FindJobPage = lazy(() => import("./page/CommonPage/FindJobPage"));
const JobDetailPage = lazy(() => import("./page/CommonPage/JobDetailPage"));
const CompanyDetailPage = lazy(
  () => import("./page/CompanyPage/CompanyDetailPage")
);
const ManageJobSavePage = lazy(
  () => import("./page/CandidatePage/ManageJobSavePage")
);
const ManageJobHadApplyPage = lazy(
  () => import("./page/CandidatePage/ManageJobHadApplyPage")
);
const ManageCompanyFollowedPage = lazy(
  () => import("./page/CandidatePage/ManageCompanyFollowedPage")
);
const RegisterPage = lazy(() => import("./page/CommonPage/RegisterPage"));
function App() {
  const { accessToken, messageAuth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken == "") {
      const token = getToken();
      if (token?.accessToken != "null") {
        dispatch(authFetchMe());
      }
    }
  }, [accessToken]);
  useEffect(() => {
    if (messageAuth == "unauthenticated") {
      dispatch(authRefreshToken());
    }
  }, [messageAuth]);
  return (
    <>
      <Suspense>
        <Routes>
          <Route element={<LayoutHomeUser></LayoutHomeUser>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/companys"
              element={<CompanyPage></CompanyPage>}
            ></Route>
            <Route
              path="/companys/:ompanyId"
              element={<CompanyDetailPage></CompanyDetailPage>}
            ></Route>
            <Route path="/jobs" element={<FindJobPage></FindJobPage>}></Route>
            <Route path="/blogs" element={<BlogsPage></BlogsPage>}></Route>

            <Route
              path="/jobs/:jobId"
              element={<JobDetailPage></JobDetailPage>}
            ></Route>
            <Route
              path="/common"
              element={<ManageMenuUsingPhonePage></ManageMenuUsingPhonePage>}
            ></Route>
          </Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route element={<LayoutManageCandidate></LayoutManageCandidate>}>
            <Route
              path="/manage/information-account"
              element={
                <ManageUpdateInformationCandidatePage></ManageUpdateInformationCandidatePage>
              }
            ></Route>
            <Route
              path="/upload-resume"
              element={
                <ManageUploadResumeCandidate></ManageUploadResumeCandidate>
              }
            ></Route>
            <Route
              path="/list-resume"
              element={<ManageListResumeCandidate></ManageListResumeCandidate>}
            ></Route>
            <Route
              path="/wall"
              element={<ManageWallCandidate></ManageWallCandidate>}
            ></Route>
            <Route
              path="/manage/job-save"
              element={<ManageJobSavePage></ManageJobSavePage>}
            ></Route>
            <Route
              path="/manage/change-password"
              element={<ManageChangePasswordPage></ManageChangePasswordPage>}
            ></Route>
            <Route
              path="/manage/job-apply"
              element={<ManageJobHadApplyPage></ManageJobHadApplyPage>}
            ></Route>
            <Route
              path="/manage/company-followed"
              element={<ManageCompanyFollowedPage></ManageCompanyFollowedPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
