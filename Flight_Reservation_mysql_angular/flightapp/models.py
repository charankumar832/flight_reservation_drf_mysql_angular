from django.db import models

from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def createToken(sender, instance, created, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Flight(models.Model):
    flightNumber=models.CharField(max_length=20)
    airlines=models.CharField(max_length=200)
    departureCity=models.CharField(max_length=200)
    arrivalCity=models.CharField(max_length=200)
    dateOfDeparture=models.DateField()
    timeofDeparture=models.TimeField()

    def __str__(self):
        return self.airlines+" "+self.flightNumber
    
class Passenger(models.Model):
    firstName=models.CharField(max_length=20)
    lastName=models.CharField(max_length=20)
    middleName=models.CharField(max_length=20)
    email=models.EmailField(max_length=200)
    phone=models.CharField(max_length=10)

    def __str__(self):
        return self.firstName+" "+self.lastName
    
class Reservation(models.Model):
    flight=models.ForeignKey(Flight, on_delete=models.CASCADE,related_name='reservation_flight')
    passenger=models.ForeignKey(Passenger,on_delete=models.CASCADE, related_name='reservation_passenger')

    def __str__(self):
        return self.passenger.firstName+" has booked ticket in "+self.flight.flightNumber
    
    