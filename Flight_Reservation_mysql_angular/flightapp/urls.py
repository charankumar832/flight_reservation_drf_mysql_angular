from django.urls import path, include
from rest_framework.routers import DefaultRouter
from flightapp.views import FlightView, ReservationView, PassengerView, findFlight, bookReservation

router=DefaultRouter()
router.register('list', FlightView, basename='flight-list')
router.register('passenger', PassengerView, basename='passenger')
router.register('reservation', ReservationView, basename='reservation')

urlpatterns = [
    path('', include(router.urls)),
    path('find/', findFlight, name='find-flight'),
    path('bookreservation/', bookReservation, name='book-reservation'),
]
