import { Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "./TokenStorage";

export default function ProtectedRoute() {
  const isAuthenticated = !!getAccessToken();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
