import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/material";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import RoutesApp from "./Routes";
import { AuthProvider } from "./AuthProvider";

//added AuthProvider to the application
ReactDOM.render(
    <Router>
      <AuthProvider>
        <PrimarySearchAppBar />
        <Container>
          <RoutesApp />
        </Container>
      </AuthProvider>
    </Router>,
  document.querySelector("#root")
);
