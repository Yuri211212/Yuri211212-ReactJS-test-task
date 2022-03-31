import React from "react";
import { useAuth } from "./hooks/auth.hook";
import Typography from "@mui/material/Typography";

//created HomePage component
const HomePage = () => {
  //used custom useAuth hook
  const { user } = useAuth();

  return <Typography>Welcome back, {user.name}</Typography>;
};

export default HomePage;
