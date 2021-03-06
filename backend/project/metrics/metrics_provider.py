import datetime
import random

METRIC_INTERVAL_MILISECONDS = 250


def get_metrics():
    current_time = datetime.datetime.utcnow()
    metric_results = []
    metric_ammount = 1000 // METRIC_INTERVAL_MILISECONDS
    for i in range(metric_ammount):
        metric_time = current_time - datetime.timedelta(
            milliseconds=(metric_ammount - i) * METRIC_INTERVAL_MILISECONDS
        )
        metric = {"value": random.randint(10, 100), "time": metric_time}
        metric_results.append(metric)
    return metric_results
