import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Loader from "./globals/loader";
import DashboardLayout from "./layout/DashboardLayout";
import NotFoundPage from "./pages/404/404";
import LoginPage from "./pages/auth/LoginPage";
import UserDetails from "./pages/users/userdetails/userDetails";
import Users from "./pages/users/users";

interface User {
  // Define the properties of the User object here
  // For example: id: number, name: string, etc.
}

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const currentUser: User | null = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return currentUser ? <>{children}</> : <Navigate to="/" />;
};

const App: FC = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route
            path="users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />
          <Route
            path="users/:id"
            element={
              <RequireAuth>
                <UserDetails />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
