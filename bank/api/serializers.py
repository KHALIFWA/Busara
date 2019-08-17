from rest_framework import serializers

from bank.models import TransactionHistory


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransactionHistory
        fields = ('id', 'transaction_amount', 'transaction_type','transaction_description','user','transaction_method','date_time')