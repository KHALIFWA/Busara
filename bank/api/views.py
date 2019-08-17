# from rest_framework import viewsets

# class ArticleViewSet(viewsets.ModelViewSet):
#     serializer_class = ArticleSerializer
#     queryset = Article.objects.all()

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


class TransactionCreateView(CreateAPIView):
    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionSerializer



class TransactionUpdateView(UpdateAPIView):
    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionSerializer
 


class TransactionDeleteView(DestroyAPIView):
    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionSerializer
