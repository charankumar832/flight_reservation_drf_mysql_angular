import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  flightUrl:string='http://127.0.0.1:8000/flight/find/';
  singleFlightUrl:string='http://127.0.0.1:8000/flight/list/';
  saveReservationUrl:string='http://127.0.0.1:8000/flight/bookreservation/';
  flightdata:any;

  constructor(private http:HttpClient, private loginService:LoginService) { }

  public getFlights(criteria:any):any{
    return this.http.post(this.flightUrl, criteria, this.loginService.httpOptions);
  }

  public getFlight(id:number):any{
    return this.http.get(this.singleFlightUrl+id, this.loginService.httpOptions);
  }

  public bookReservation(reservation:any):any{
    return this.http.post(this.saveReservationUrl, reservation, this.loginService.httpOptions);
  }
}
