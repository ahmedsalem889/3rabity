import { Navigate } from "react-router-dom";
import CarGarage from "../../assets/car-garage.png";
import { getAccessToken } from "../../utils/localstorage";
import { LoginContainer } from "./LoginContainer";

export function Login() {
  const accessToken = getAccessToken();

  if (accessToken) {
    return <Navigate to="/" replace />
  }
  return <LoginContainer imageUrl={CarGarage} />
}
