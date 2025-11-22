from django.contrib import admin
from flightapp.models import Flight, Reservation, Passenger

admin.site.register(Flight)
admin.site.register(Reservation)
admin.site.register(Passenger)
