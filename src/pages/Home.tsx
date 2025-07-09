import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useGetMeQuery } from "../features/auth/authApi";
import { useEffect } from "react";
import { setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);

  const {
    data: user,
    refetch,
    isLoading,
    isError,
  } = useGetMeQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      refetch();
    }
  }, [token, navigate, refetch]);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-medium text-gray-700">
          Loading user data...
        </p>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-red-600 text-lg font-semibold">
          Failed to load user. Please login again.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 to-indigo-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-8 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">🎉 Welcome!</h1>
        <p className="text-xl text-gray-600">
          Hello,{" "}
          <span className="font-semibold text-indigo-600">{user.name}</span> 👋
        </p>

        <div className="pt-4">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
