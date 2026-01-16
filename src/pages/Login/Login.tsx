import { Navigate } from "react-router-dom";
import CarGarage from "../../assets/car-garage.png";
import { useAuth } from "../../context/AuthContext";
import { LoginContainer } from "./LoginContainer";

export function Login() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }
  return <LoginContainer imageUrl={CarGarage} />
}
