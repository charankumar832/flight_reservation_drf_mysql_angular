import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Reservation } from '../../model/reservation';

@Component({
  selector: 'app-passenger-flight',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './passenger-flight.component.html',
  styleUrls: ['./passenger-flight.component.css',],
})
export class PassengerFlightComponent {
  public flightData:any;
  reservation:Reservation=new Reservation('','','','','','','','','')

  constructor(private service: ReservationService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.service.getFlight(id).subscribe((res: any) => {
      this.flightData = res;

    });
  }

  public onSubmit() {
    this.reservation.flightId = this.flightData.id;
    this.service.bookReservation(this.reservation).subscribe((res: any) => {
      this.router.navigate(['/confirm', res.id]);
    });
  }
}