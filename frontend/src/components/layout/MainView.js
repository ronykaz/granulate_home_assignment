import React from "react";

import { MetricChart } from "../ui/MetricChart";

export function MainView() {
  return (
    <div class="flex justify-center bg-gray-200 h-screen">
      <div class="justify-center pt-8">
        <MetricChart />
      </div>
    </div>
  );
}
