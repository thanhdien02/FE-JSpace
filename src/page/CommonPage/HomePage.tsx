import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authFetchMe } from "../../store/auth/auth-slice";

const HomePage: React.FC = () => {
  const { accessToken } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken == "") {
      const token = getToken();
      if (token?.accessToken == "null") {
        navigate("/login");
      }
      dispatch(authFetchMe());
    }
  }, [accessToken]);

  return (
    <>
      <div className="sm:text-red-500 lg:text-green-500 h-[1500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        omnis similique optio veritatis impedit. Libero eos voluptas sit
        officiis repellat repudiandae expedita repellendus debitis est?
        Voluptate quos cum nemo corporis.
      </div>
    </>
  );
};

export default HomePage;
