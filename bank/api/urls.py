
from django.urls import path

from .views import (
    TransactionListView,
    TransactionDetailView,
    TransactionCreateView,
    TransactionUpdateView,
    TransactionDeleteView
)

urlpatterns = [
    path('', TransactionListView.as_view()),
    path('create/', TransactionCreateView.as_view()),
    path('<pk>', TransactionDetailView.as_view()),
    path('<pk>/update/', TransactionUpdateView.as_view()),
    path('<pk>/delete/', TransactionDeleteView.as_view())
]