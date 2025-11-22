import { Routes } from '@angular/router';
import { FindFlightComponent } from './components/find-flight/find-flight.component';
import { DisplayFlightComponent } from './components/display-flight/display-flight.component';
import { PassengerFlightComponent } from './components/passenger-flight/passenger-flight.component';
import { ConfirmReservationComponent } from './components/confirm-reservation/confirm-reservation.component';

export const routes: Routes = [
    {
        path:'', component:FindFlightComponent
    },

    {
        path:'findFlights',
        component:FindFlightComponent
    },

    {
        path:'displayFlights',
        component:DisplayFlightComponent
    },

    {
        path:'passengerDetails/:id',
        component:PassengerFlightComponent
    },

    {
        path:'confirm/:id',
        component:ConfirmReservationComponent
    }
];
