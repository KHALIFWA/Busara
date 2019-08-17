
from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from bank.models import TransactionHistory
from .serializers import TransactionSerializer


class TransactionListView(ListAPIView):
    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionSerializer



class TransactionDetailView(RetrieveAPIView):
    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionSerializer



