// Install Material-UI and dependencies if you haven't already
// npm install @mui/material @emotion/react @emotion/styled

import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div>
        <h1>Login</h1>
    </div>
  );
};

export default Login;
