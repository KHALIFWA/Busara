
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.generics import (
	ListAPIView,
	RetrieveAPIView,
	CreateAPIView
)
from bank.models import TransactionHistory, BankType
from .serializers import TransactionSerializer,TransactionBankTypeSerializer
from rest_framework.response import Response
from django.db.models import Sum


class TransactionListView(ListAPIView):

	def get(self,  request, user):
		transaction = TransactionHistory.objects.filter(user_id=user)
		serializer = TransactionSerializer(transaction, many=True)
		queryset = TransactionHistory.objects.filter(transaction_type__icontains='credit', user_id=user)
		credits = queryset.aggregate(transaction_credits=Sum('transaction_amount')) 
		queryset1 = TransactionHistory.objects.filter(transaction_type__icontains='debit', user_id=user)
		debits = queryset1.aggregate(transaction_debits=Sum('transaction_amount')) 
		return_data = {"objects": serializer.data}
		if debits.get('transaction_debits') == None:
			  balance = credits.get('transaction_credits') 
		elif credits.get('transaction_credits') == None:
			  balance = - debits.get('transaction_debits')
		else:
			  balance =  credits.get('transaction_credits') - debits.get('transaction_debits')

		return_data = {"credits": credits, "debits":debits, "objects": serializer.data}
		return Response(return_data)

class TransactionSavingsListView(ListAPIView):

	def get(self, request, user):
		transaction = TransactionHistory.objects.filter(bank_type='Savings', user_id=user)
		serializer = TransactionSerializer(transaction, many=True)

		return_data = {"objects": serializer.data}
		return Response(return_data)

class TransactionCurrentAccountListView(ListAPIView):
	def get(self, request, user):
		transaction = TransactionHistory.objects.filter(bank_type='Current Account',user_id=user)
		serializer = TransactionSerializer(transaction, many=True)

		return_data = {"objects": serializer.data}
		return Response(return_data)

class TransactionDetailView(RetrieveAPIView):
	queryset = TransactionHistory.objects.all()
	serializer_class = TransactionSerializer
	#permission_classes = (permissions.IsAuthenticated, )

class TransactionCreateView(CreateAPIView):
	queryset = TransactionHistory.objects.all()
	serializer_class = TransactionSerializer
	#permission_classes = (permissions.IsAuthenticated, )


class TransactionBankTypeListView(ListAPIView):
	queryset = BankType.objects.all()
	serializer_class = TransactionBankTypeSerializer