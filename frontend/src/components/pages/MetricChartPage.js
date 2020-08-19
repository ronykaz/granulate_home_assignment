import React from "react";
import { useRef } from "react";

import { useQuery, gql } from "@apollo/client";
import ErrorMessege from "../ui/ErrorMessage";
import MetricChart from "../ui/MetricChart";

const POLL_INTERVAL = 1000;

const QUERY_METRICS = gql`
  query {
    metrics {
      value
      time
    }
  }
`;

const LOCAL_TIME_OFFSET = new Date().getTimezoneOffset();

const METRIC_HISTORY_IN_MILISECONDS = 180 * 1000;

function modifyMetricsToLocalTime(metrics) {
  return metrics.map(({ value, time }) => {
    const localTimeFromStr = Date.parse(time) - LOCAL_TIME_OFFSET * 60 * 1000;
    return {
      value,
      time: localTimeFromStr,
    };
  });
}

function getRelevantMetrics(metrics) {
  const now = Date.now();
  return metrics.filter((i) => now - i.time < METRIC_HISTORY_IN_MILISECONDS);
}

export function MetricChartPage() {
  const { data, loading, error } = useQuery(QUERY_METRICS, {
    pollInterval: POLL_INTERVAL,
  });
  const metricHistory = useRef([]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <ErrorMessege message={error.message} />;
  }

  const metricsInLocalTime = modifyMetricsToLocalTime(data.metrics);
  metricHistory.current = metricHistory.current.concat(metricsInLocalTime);
  metricHistory.current = getRelevantMetrics(metricHistory.current);

  return (
    <MetricChart
      metrics={metricHistory.current}
      historyMiliseconds={METRIC_HISTORY_IN_MILISECONDS}
    />
  );
}
