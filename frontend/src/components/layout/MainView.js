import React from "react";

import { MetricChart } from "../ui/MetricChart";
import { Login } from "../ui/Login";

export function MainView() {
  return (
    <div className="flex justify-center bg-gray-200 h-screen">
      <div className="justify-center pt-8">
        <Login />
      </div>
    </div>
  );
}
