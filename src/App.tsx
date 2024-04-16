import { Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./page/CommonPage/LoginPage";
import HomePage from "./page/CommonPage/HomePage";
import LayoutHomeUser from "./layout/LayoutHomeUser";
import CompanyPage from "./page/CommonPage/CompanyPage";
import BlogsPage from "./page/CommonPage/BlogsPage";
import SelectionRolePage from "./page/CommonPage/SelectionRolePage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getToken } from "./utils/auth";
import { authFetchMe } from "./store/auth/auth-slice";
import LayoutManageCandidate from "./layout/LayoutManageCandidate";
import ManageUpdateInformationCandidatePage from "./page/CandidatePage/ManageUpdateInformationCandidatePage";
import ManageUploadResumeCandidate from "./page/CandidatePage/ManageUploadResumeCandidate";

function App() {
  const { accessToken } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken == "") {
      const token = getToken();
      if (token?.accessToken == "null") {
        navigate("/");
      }
      dispatch(authFetchMe());
    }
  }, [accessToken]);
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
            <Route path="/blogs" element={<BlogsPage></BlogsPage>}></Route>
          </Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/register"
            element={<SelectionRolePage></SelectionRolePage>}
          ></Route>
          <Route element={<LayoutManageCandidate></LayoutManageCandidate>}>
            <Route
              path="/manage"
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
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
