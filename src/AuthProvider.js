import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authenticationError, setAuthenticationError] = useState("");
  //added useNavigate hook to make buttons work
  const navigate = useNavigate();

  const users = [
    {
      name: "testuser",
      password: "test"
    },
    {
      name: "myuser",
      password: "my"
    }
  ];

  //simplified 'if' statements, changed filter method to find,
  //added navigation
  const handleSignIn = (username, password) => {
    const user = users.find((i) => i.name === username);

    if (!user) {
      setAuthenticationError("This user does not exist");
      return;
    }
    if (user.password !== password) {
      setAuthenticationError("Wrong password");
      return;
    }

    setUser(user);
    setAuthenticationError("");
    navigate("/user");
  };

  const handleSignOut = () => {
    setUser(null);
  };

  //simplified authenticated field
  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: Boolean(user),
        setUser,
        handleSignIn,
        handleSignOut,
        authenticationError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
