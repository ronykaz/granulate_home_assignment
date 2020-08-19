import React from "react";

import { TimeSeries, TimeEvent, TimeRange } from "pondjs";
import {
  ChartContainer,
  ChartRow,
  YAxis,
  Charts,
  LineChart,
} from "react-timeseries-charts";

function createTimeEventsMetrics(metrics) {
  return metrics.map(({ value, time }) => {
    return new TimeEvent(time, { value });
  });
}

function MetricChart({ metrics, historyMiliseconds, minValue, maxValue }) {
  const timeEventMetrics = createTimeEventsMetrics(metrics);
  const series = new TimeSeries({
    name: "value",
    events: timeEventMetrics,
  });
  const now = Date.now();
  const timeRange = new TimeRange(now - historyMiliseconds, now);
  return (
    <ChartContainer timeRange={timeRange}>
      <ChartRow height="150">
        <YAxis
          id="y"
          label="Value"
          min={minValue ?? 0}
          max={maxValue ?? 100}
          type="linear"
        />
        <Charts>
          <LineChart axis="y" series={series} columns={["value"]} />
        </Charts>
      </ChartRow>
    </ChartContainer>
  );
}

export default MetricChart;
