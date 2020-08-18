import graphene
from graphql_jwt.decorators import login_required

from .metrics_provider import get_metrics


class MetricData(graphene.ObjectType):
    value = graphene.Int()
    time = graphene.Time()


class Query(graphene.ObjectType):
    metrics = graphene.List(MetricData)

    @login_required
    def resolve_metrics(self, info):
        return get_metrics()
