import React, { useState } from "react";
import { useAuth } from "./hooks/auth.hook";
import {
  TextField as MUITextField,
  Button,
  Container as MUIContainer,
  Box,
  Alert as MUIAlert
} from "@mui/material";
import { spacing } from "@material-ui/system";
import styled from "styled-components";

const Container = styled(MUIContainer)(spacing);
const TextField = styled(MUITextField)(spacing);
const Alert = styled(MUIAlert)(spacing);

const Login = () => {
  //used custom useAuth hook
  const { handleSignIn, authenticationError } = useAuth();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(user, password);
  };
  //added password type to TextField,
  //changed ternary to && statement at line with authentication error
  return (
    <Container maxWidth="sm" m={3}>
      <Box>
        <form onSubmit={handleSubmit}>
          <TextField
            m={2}
            value={user}
            onChange={(value) => setUser(value.target.value)}
            label="Username"
            id="user"
            required
          />
          <TextField
            m={2}
            value={password}
            onChange={(value) => setPassword(value.target.value)}
            required
            id="pwd"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            color="primary"
            value="Login"
            fullWidth
            variant="contained"
          >
            Sign In
          </Button>
          {authenticationError && (
            <Alert m={3} severity="error">
              {authenticationError}
            </Alert>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default Login;
