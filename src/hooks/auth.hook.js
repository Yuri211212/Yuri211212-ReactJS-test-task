import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

export const useAuth = () => {
  //this custom hook simplifies getting application context
  return useContext(AuthContext);
};
