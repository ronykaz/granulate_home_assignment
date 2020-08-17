import React from "react";
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

const QUERY_METRICS = gql`
  query {
    metrics {
      value
      time
    }
  }
`;

export function MetricChart() {
  const { data, loading } = useQuery(QUERY_METRICS, {
    pollInterval: 1000,
  });
  if (loading) return <p>Loading...</p>;

  let dataChart = data.metrics.map(({ value, time }) => {
    let dict = {
      value,
      time: time.slice(0, time.lastIndexOf(".")),
    };
    return dict;
  });

  return (
    <LineChart
      width={500}
      height={300}
      data={dataChart}
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
