import React from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import Login from "./Login";
import HomePage from "./HomePage";
import ProtectedRoute from "./ProtectedRoute";
import MyAccount from "./MyAccount";

//created several routes for authorized and non-authorized users
const RoutesApp = () => {
  //this is path logger for Google Analytics e.g.
  let location = useLocation();
  console.log(`Current URL: ${location.pathname}`);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <>
            <Login />
            <Container>
              <h1> React FrontEnd Testing Task</h1>
              <br />
              <span>
                We designed this Code Sandbox to have a testing task for you.
              </span>
              <ul>
                <li>
                  Create a Router, that has different routings for authenticaed
                  and non-authenticated versions
                </li>
                <li>
                  Authenticated users should get directed to a page welcoming
                  them
                </li>
                <li>NON- Authenticated users should always go to Login</li>
                <li>
                  The main menu, should only show the user icon, in case the
                  user is logged in
                </li>
                <li>
                  Make the Logout and My Account Fields working in the user
                  sub-menu
                </li>
                <li>In MyAccount, show the username to the user</li>
                <li>Make the text "Home" work again to lead to Home</li>
                <li>
                  OPTIONAL TASK - create a logger, that logs the route where the
                  user currently is (only if changing) to the console - needs to
                  be used for Google Analytics e.g.
                </li>
              </ul>
            </Container>
          </>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
export default RoutesApp;
