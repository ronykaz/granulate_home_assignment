import graphene

from .metrics_provider import get_metrics


class MetricData(graphene.ObjectType):
    value = graphene.Int()
    time = graphene.Time()
