import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_METRICS = gql`
  query {
    metrics {
      value
      time
    }
  }
`;

export function MetricChart() {
  const { data, loading } = useQuery(QUERY_METRICS, { pollInterval: 1000 });
  if (loading) return <p>Loading...</p>;
  let dataChart = data.metrics.map(({ value, time }) => {
    let dict = {
      value,
      time: time.slice(0, time.lastIndexOf(".")),
    };
    return dict;
  });
  console.log(dataChart);
  return <p>success</p>;
}
