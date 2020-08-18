import React from "react";
import Button from "../ui/Button";

export function Header() {
  return (
    <div class="flex">
      <div class="w-full bg-gray-500 h-14">
        <div class="float-left text-white text-3xl tracking-wider pl-2">
          GranDash
        </div>
        <div class="float-right m-1">
          <Button
            bgColor="blue-500"
            hoverColor="blue-700"
            textColor="white"
            handleClick={() => alert(1)}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
