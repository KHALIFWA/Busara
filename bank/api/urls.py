
from django.urls import path

from .views import (
    TransactionListView,
    TransactionDetailView
)

urlpatterns = [
    path('', TransactionListView.as_view()),
    path('<pk>', TransactionDetailView.as_view()),
]