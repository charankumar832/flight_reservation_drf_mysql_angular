import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-flight',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './display-flight.component.html',
  styleUrls: ['./display-flight.component.css',],
})
export class DisplayFlightComponent {
  data:any;
  constructor(private service:ReservationService, private router:Router){}
  ngOnInit():void{
    this.data=this.service.flightdata;
  }

  public onSelect(id:number):any{
    this.router.navigate(['/passengerDetails/'+id]);
  }

}
