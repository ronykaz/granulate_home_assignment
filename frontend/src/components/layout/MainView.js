import React from "react";
import { useQuery } from "@apollo/client";

import { IS_LOGGED_IN } from "../../apolo/queries";
import { MetricChartPage } from "../pages/MetricChartPage";
import { Login } from "../pages/Login";

export function MainView() {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <div className="flex justify-center bg-gray-200 h-screen">
      <div className="justify-center pt-8">
        {data.isLoggedIn ? <MetricChartPage /> : <Login />}
      </div>
    </div>
  );
}
