import React from "react";
import { useRef } from "react";

import { useQuery, gql } from "@apollo/client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const POLL_INTERVAL = 3000;

const QUERY_METRICS = gql`
  query {
    metrics {
      value
      time
    }
  }
`;

function formalizeMetrics(metricsData) {
  return metricsData.map(({ value, time }) => {
    let dict = {
      value,
      time: time.slice(0, time.lastIndexOf(".")),
    };
    return dict;
  });
}

export function MetricChart() {
  const { data, loading } = useQuery(QUERY_METRICS, {
    pollInterval: POLL_INTERVAL,
  });
  const metricHistory = useRef([]);
  if (loading) return <p>Loading...</p>;
  let formalizedMetrics = formalizeMetrics(data.metrics);
  metricHistory.current = metricHistory.current.concat(formalizedMetrics);
  return (
    <LineChart
      width={500}
      height={300}
      data={metricHistory.current}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis datakey="value" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </LineChart>
  );
}
