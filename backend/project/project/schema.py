import graphene

from metrics.graph_types import MetricData
from metrics.metrics_provider import get_metrics


class Query(graphene.ObjectType):
    metrics = graphene.List(MetricData)

    def resolve_metrics(self, info):
        return get_metrics()


schema = graphene.Schema(query=Query)
