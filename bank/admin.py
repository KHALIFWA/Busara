from django.contrib import admin
from .models import BankType, UserBankAccount ,TransactionMethod , TransactionHistory

admin.site.register(BankType)
admin.site.register(UserBankAccount)
admin.site.register(TransactionMethod)
admin.site.register(TransactionHistory)