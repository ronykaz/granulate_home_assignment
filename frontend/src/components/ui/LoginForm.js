import React from "react";
import { useState } from "react";

import InputForm from "./InputForm";
import Button from "./Button";
import ErrorMessege from "./ErrorMessage";

export function LoginForm({ handleSignIn, loading, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
      <InputForm
        labelText="Username"
        inputId="username"
        inputType="text"
        inputPlaceholder="Username"
        value={username.value}
        handleChange={(e) => setUsername(e.target.value)}
      />
      <InputForm
        labelText="Passowrd"
        inputId="password"
        inputType="password"
        inputPlaceholder="Password"
        value={password.value}
        handleChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center">
        <Button
          bgColor="blue-500"
          hoverColor="blue-700"
          textColor="white"
          handleClick={() => handleSignIn(username, password)}
        >
          {loading ? "Loading..." : "Sign In"}
        </Button>
      </div>
      {error && <ErrorMessege message={error.message} />}
    </div>
  );
}

export default LoginForm;
