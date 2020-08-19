import React from "react";

import Button from "./Button";

export default function LogoutButton({ handleLogOut }) {
  return (
    <div className="float-right m-1">
      <Button
        bgColor="blue-500"
        hoverColor="blue-700"
        textColor="white"
        handleClick={handleLogOut}
      >
        Logout
      </Button>
    </div>
  );
}
