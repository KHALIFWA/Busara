from django.db import models
from accounts.models import User
from django.utils import timezone

# Create your models here.
class BankType (models.Model):
    bank_type_name = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
     	 return self.bank_type_name

class UserBankAccount (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bank_type = models.ForeignKey(BankType, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
     	 return "{} {} ({})".format(self.user.first_name , self.user.last_name, self.bank_type.bank_type_name)

class TransactionMethod (models.Model):
    method_name = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
     	 return self.method_name

class TransactionHistory (models.Model):
	transaction_amount = models.DecimalField(max_digits=10, decimal_places=2)
	transaction_type = models.CharField(max_length=250)
	transaction_description = models.TextField()
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	transaction_method = models.ForeignKey(TransactionMethod, on_delete=models.CASCADE)
	date_time= models.DateTimeField(default=timezone.now)

	def __str__(self):
		return "{} {} ({} : {})".format(self.user.first_name , self.user.last_name, self.transaction_method.method_name, self.transaction_amount)