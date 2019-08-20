from rest_framework import serializers

from bank.models import TransactionHistory, BankType


class TransactionSerializer(serializers.ModelSerializer):
	class Meta:
		model = TransactionHistory
		fields = ('id', 'transaction_amount', 'transaction_type','transaction_description','user','bank_type','transaction_method','date_time')


class TransactionBankTypeSerializer(serializers.ModelSerializer):
	class Meta:
		model = BankType
		fields = ('id', 'bank_type_name','created')	