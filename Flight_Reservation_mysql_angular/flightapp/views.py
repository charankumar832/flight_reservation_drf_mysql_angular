from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication

from flightapp.models import Flight, Reservation, Passenger
from flightapp.serializers import FlightSerializer, ReservationSerializer, PassengerSerializer

@api_view(['POST'])
def findFlight(request):
    flight=Flight.objects.filter(departureCity=request.data['departureCity'],
                                 arrivalCity=request.data['arrivalCity'],
                                 dateOfDeparture=request.data['dateOfDeparture'])
    
    serializer=FlightSerializer(flight, many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)

@api_view(['POST'])
def bookReservation(request):
    flight=Flight.objects.get(id=request.data['flightId'])

    passenger=Passenger()
    passenger.firstName=request.data['firstName']
    passenger.lastName=request.data['lastName']
    passenger.middleName=request.data['middleName']
    passenger.email=request.data['email']
    passenger.phone=request.data['phone']
    passenger.save()

    reservation=Reservation()
    reservation.flight=flight
    reservation.passenger=passenger

    reservation.save()
    return Response(ReservationSerializer(reservation).data, status=status.HTTP_201_CREATED)

class FlightView(viewsets.ModelViewSet):
    queryset=Flight.objects.all()
    serializer_class=FlightSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]

class PassengerView(viewsets.ModelViewSet):
    queryset=Passenger.objects.all()
    serializer_class=PassengerSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]

class ReservationView(viewsets.ModelViewSet):
    queryset=Reservation.objects.all()
    serializer_class=ReservationSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]

