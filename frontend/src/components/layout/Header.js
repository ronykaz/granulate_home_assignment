import React from "react";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../../apolo/queries";
import LogoutButton from "../ui/LogoutButton";

export function Header() {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <div className="flex">
      <div className="w-full bg-gray-500 h-14">
        <div className="float-left text-white text-3xl tracking-wider pl-2">
          GranDash
        </div>
        {data.isLoggedIn ? <LogoutButton /> : <span />}
      </div>
    </div>
  );
}
