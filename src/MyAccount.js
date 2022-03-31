import React from "react";
import { useAuth } from "./hooks/auth.hook";
import Typography from "@mui/material/Typography";

//created MyAccount component
const MyAccount = () => {
  //used custom useAuth hook
  const { user } = useAuth();

  return <Typography>User name: {user.name}</Typography>;
};

export default MyAccount;
