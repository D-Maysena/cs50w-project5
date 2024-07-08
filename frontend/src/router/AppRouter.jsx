import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { ResetPasswordPage } from "../auth/pages/ResetPasswordPage";
import { ResetPasswordConfirmPage } from "../auth/pages/ResetPasswordConfirmPage";
import { HomeRoutes } from "../home/routes/HomeRoutes";
import { LandingPage } from "../auth/pages/LandingPage";
import moment from 'moment';

export const AppRouter = () => {


  
  const PrivateRoute = ({ children }) => {
    const access_token = sessionStorage.getItem("access_token")
    return access_token ? children : <Navigate to="/login" replace />
  }

  return (
    <Routes>
     
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/resetPassword" element={<ResetPasswordPage />} />

      <Route path="/api/v1/auth/password-reset-confirm/:uidb64/:token" element={<ResetPasswordConfirmPage />} />
      <Route path="/*" element={<PrivateRoute> <HomeRoutes /> </PrivateRoute>} />
    </Routes>
  );
};