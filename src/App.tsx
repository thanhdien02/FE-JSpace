import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/CommonPage/LoginPage";
import HomePage from "./page/CommonPage/HomePage";
import LayoutHomeUser from "./layout/LayoutHomeUser";
import CompanyPage from "./page/CommonPage/CompanyPage";
import BlogsPage from "./page/CommonPage/BlogsPage";
import SelectionRolePage from "./page/CommonPage/SelectionRolePage";

function App() {
  // const { user } = useSelector((state: any) => state.auth);
  // const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

  // const handleClose = () => {
  //   dispatch(authChange(true));
  // };

  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<LayoutHomeUser></LayoutHomeUser>}>
            <Route path="/home" element={<HomePage></HomePage>}></Route>
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
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
