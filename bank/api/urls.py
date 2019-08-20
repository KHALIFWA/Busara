
from django.urls import path

from .views import (
    TransactionListView,
    TransactionDetailView,
    TransactionCreateView,
    TransactionBankTypeListView,
    TransactionSavingsListView,
    TransactionCurrentAccountListView
)

urlpatterns = [
    path('transactions/<user>/', TransactionListView.as_view()),
    path('savings/<user>/', TransactionSavingsListView.as_view()),
    path('currentaccount/<user>/', TransactionCurrentAccountListView.as_view()),
    path('create/', TransactionCreateView.as_view()),
    path('bank-type/', TransactionBankTypeListView.as_view()),
    path('<pk>', TransactionDetailView.as_view()),
]